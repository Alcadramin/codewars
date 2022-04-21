const Inspector = require("../../src/3kyu/papers-please");
const chai = require("chai");
const assert = chai.assert;

describe("Preliminary training", function () {
  const inspector = new Inspector();
  // const bulletin =
  //   "Foreigners require access permit\nAllow citizens of Arstotzka, Obristan, Kolechia\nWanted by the State: Sebastian Jokav, Eleanor Mateo";
  const bulletin =
    "Foreigners require access permit\nAllow citizens of Arstotzka, Obristan, Kolechia, Republia\nWanted by the State: Sebastian Jokav, Eleanor Mateo";
  inspector.receiveBulletin(bulletin);

  // {"bulletin":["Entrants require passport","Allow citizens of Arstotzka","Wanted by the State: Sebastian Jokav"],"entrant":{"passport":"ID#: CQH7U-T3C3A\nNATION: Kolechia\nNAME: Jokav, Sebastian\nDOB: 1940.07.07\nSEX: M\nISS: West Grestin\nEXP: 1983.01.09"}}

  const josef = {
    passport:
      "ID#: GC07D-FU8AR\nNATION: Arstotzka\nNAME: Costanza, Josef\nDOB: 1933.11.28\nSEX: M\nISS: East Grestin\nEXP: 1983.03.15",
  };
  const guyovich = {
    access_permit:
      "NAME: Guyovich, Russian\nNATION: Obristan\nID#: TE8M1-V3N7R\nPURPOSE: TRANSIT\nDURATION: 14 DAYS\nHEIGHT: 159cm\nWEIGHT: 60kg\nEXP: 1983.07.13",
  };
  const test = {
    passport:
      "NAME: Test, Test\nNATION: TEST\nID#: TE8M1-V3N7R\nPURPOSE: TRANSIT\nDURATION: 14 DAYS\nHEIGHT: 159cm\nWEIGHT: 60kg\nEXP: 1983.07.13",
  };
  const roman = {
    passport:
      "ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12",
    grant_of_asylum:
      "NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20",
  };
  const sebastian = {
    passport:
      "ID#: CQH7U-T3C3A\nNATION: Kolechia\nNAME: Jokav, Sebastian\nDOB: 1940.07.07\nSEX: M\nISS: West Grestin\nEXP: 1983.01.09",
  };
  const rozsa = {
    passport:
      "ID#: BHP30-GNJ39\nNATION: Arstotzka\nNAME: Schumer, Rozsa\nDOB: 1941.10.02\nSEX: F\nISS: Orvech Vonor\nEXP: 1981.07.19",
  };
  const quinn = {
    passport:
      "ID#: O0OCF-ODI9I\nNATION: Obristan\nNAME: Quinn, Benito\nDOB: 1924.10.11\nSEX: M\nISS: Mergerous\nEXP: 1982.12.30",
  };
  const mateo = {
    passport:
      "ID#: YV6WX-Y2EAO\nNATION: Obristan\nNAME: Mateo, Eleanor\nDOB: 1943.01.16\nSEX: F\nISS: Skal\nEXP: 1981.07.11",
  };
  const piotr = {
    passport:
      "ID#: K0LJZ-P6F5U\nNATION: Kolechia\nNAME: Vyas, Piotr\nDOB: 1915.10.04\nSEX: M\nISS: West Grestin\nEXP: 1982.12.30",
    access_permit:
      "NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20",
  };
  const burke = {
    passport:
      "ID#: IXD2T-VRS45\nNATION: Republia\nNAME: Burke, Hanna\nDOB: 1927.07.26\nSEX: F\nISS: Bostan\nEXP: 1982.12.30",
    access_permit:
      "NAME: Burke, Hanna\nNATION: Republia\nID#: IXD2T-VRS45\nPURPOSE: VISIT\nDURATION: 3 MONTHS\nHEIGHT: 174cm\nWEIGHT: 82kg\nEXP: 1984.05.05",
  };
  const amelia = {
    passport:
      "ID#: JTP60-W0SXD\nNATION: Republia\nNAME: Radic, Amalie\nDOB: 1923.09.13\nSEX: F\nISS: Haihan\nEXP: 1984.06.11",
    access_permit:
      "NAME: Radic, Amalie\nNATION: Republia\nID#: JTP60-W0SXD\nPURPOSE: VISIT\nDURATION: 14 DAYS\nHEIGHT: 172cm\nWEIGHT: 79kg\nEXP: 1981.07.04",
  };
  const entrant_tests = [
    [josef, "Josef Costanza", "Glory to Arstotzka."],
    [guyovich, "Russian Guyovich", "Entry denied: missing required passport."],
    [test, "Test", "Entry denied: citizen of banned nation."],
    [roman, "Roman Dolanski", "Detainment: ID number mismatch."],
    [sebastian, "Sebastian Jokav", "Detainment: Entrant is a wanted criminal."],
    [rozsa, "Rozsa", "Entry denied: passport expired."],
    // [quinn, "Quinn", "Cause no trouble."],
    [mateo, "Mateo, Eleanor", "Detainment: Entrant is a wanted criminal."],
    // [piotr, "Piotr", "Entry denied: missing required access permit."],
    [burke, "Burke", "Cause no trouble."],
    [amelia, "Amelia", "Entry denied: access permit expired."],
  ];

  for (let [entrant, name, res] of entrant_tests) {
    it(`Inspecting "${name}"`, function () {
      const user = inspector.inspect(entrant);
      assert(user === res, `Expected: ${res}\nGot: ${user}`);
    });
  }
});
