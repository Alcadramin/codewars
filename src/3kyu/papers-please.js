// Object.fromEntries polyfill
const fromEntries = (entries) => {
  if (!entries || !entries[Symbol.iterator]) {
    throw new Error("fromEntries() requires a single iterable argument");
  }
  let obj = {};
  for (let [key, value] of entries) {
    obj[key] = value;
  }
  return obj;
};

const swap = (arr, a, b) => {
  return arr.map((curr, i) => {
    if (i === a) return arr[b];
    if (i === b) return arr[a];
    return curr;
  });
};

class Inspector {
  constructor() {
    this.debug = false;
    this.Exp = +new Date("1982.11.22");
  }

  receiveBulletin(bulletin) {
    this.bulletin = bulletin.split("\n");
    this.allowedCountries = this.bulletin
      .map((q) => q.split("Allow citizens of ")[1])
      .filter((q) => q !== undefined)[0];
    this.requirePermit = this.bulletin
      .map((q) => q.indexOf("Foreigners require access permit") > -1)
      .filter((q) => q !== false)[0];
    this.criminal = this.bulletin
      .map(
        (q) => q.indexOf("Wanted") > -1 && q.split("Wanted by the State: ")[1]
      )
      .filter((q) => q !== false)[0];
  }

  inspect(entrant) {
    this.documentParser(entrant);

    if (this.debug)
      console.log(
        JSON.stringify({
          bulletin: this.bulletin,
          entrant: entrant,
        })
      );

    // Check passport
    if (!this.parsedEntrant[0] || !this.parsedEntrant[0]["passport"]) {
      return "Entry denied: missing required passport.";
    }

    let DocType = [];
    const IDs = [];
    const Nations = [];
    const ISS = [];
    const Criminals = [];
    const PassportExpiration = [];
    const AccessPermitExpiration = [];
    this.parsedEntrant.map((q) => {
      const keys = Object.keys(q);
      DocType = keys;
      keys.forEach((el) => {
        IDs.push(q[el]["ID#"]);
        Criminals.push(q[el]["NAME"].trim());
        q[el]["NATION"] && Nations.push(q[el]["NATION"].trim());
        q[el]["ISS"] && ISS.push(q[el]["ISS"]);
        q[el]["EXP"] &&
          el === "passport" &&
          PassportExpiration.push(q[el]["EXP"].trim());
        q[el]["EXP"] &&
          el === "access_permit" &&
          AccessPermitExpiration.push(q[el]["EXP"].trim());
      });
    });

    // Check criminal
    if (this.criminal) {
      const checkCriminals = Criminals.map((q) =>
        swap(q.split(", "), 0, 1).join(" ").trim()
      ).map((q) => this.criminal.includes(q));

      if (checkCriminals.some((q) => q === true)) {
        return "Detainment: Entrant is a wanted criminal.";
      }
    }

    // Check ID
    if (!IDs.every((q) => q === IDs[0]))
      return "Detainment: ID number mismatch.";

    // Check nation
    if (this.allowedCountries) {
      const checkBanned = Nations.map(
        (q) => !this.allowedCountries.includes(q) && q !== "Arstotzka"
      );

      if (checkBanned.indexOf(true) > -1) {
        return "Entry denied: citizen of banned nation.";
      }
    }

    // Check access permit expiration
    const checkAPExpiration = AccessPermitExpiration.map(
      (q) => this.Exp - +new Date(q)
    );
    if (checkAPExpiration.find((q) => q > 0))
      return "Entry denied: access permit expired.";

    // Check passport expiration
    const checkPassportExpiration = PassportExpiration.map(
      (q) => this.Exp - +new Date(q)
    );
    if (checkPassportExpiration.find((q) => q > 0))
      return "Entry denied: passport expired.";

    // Check access permit
    if (this.requirePermit && !Nations.includes("Arstotzka")) {
      if (!DocType.includes("access_permit"))
        if (DocType.includes("grant_of_asylum")) {
          console.log("You shall pass, mad person.");
        } else {
          return "Entry denied: missing required access permit.";
        }
    }

    if (Nations.includes("Arstotzka")) return "Glory to Arstotzka.";
    else return "Cause no trouble.";
  }

  getDocFields(docs) {
    return fromEntries(docs.split("\n").map((el) => el.split(":")));
  }

  documentParser(entrant) {
    this.parsedEntrant = Object.keys(entrant).map((e) => ({
      [`${e}`]: this.getDocFields(entrant[e]),
    }));
  }
}

module.exports = Inspector;
