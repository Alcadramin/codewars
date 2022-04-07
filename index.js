const glob = require("glob");
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

const apiKey = process.env.TOKEN;

if (!apiKey) {
  throw new Error("TOKEN is required.")
}

glob(
  "src/**/*",
  { ignore: ["**/**.test.js", "**/test**/**"], nodir: true },
  (err, files) => {
    // Kata locations
    const kataPath = files.sort(),
      fileName = "LIST.md";

    // Delete old file
    fs.unlink(fileName, (err) => {
      if (err) throw new Error(err);
    });

    // Create new file
    fs.open(fileName, "w", (err) => {
      if (err) throw new Error(err);
    });

    const printFile = (f) => {
      // Get kata names
      const kataName = kataPath.map((el) =>
        el.split("/")[2].replace(/\b(.js|.cr)\b/gi, "")
      );

      // Get kata extensions - Might be useful for multiple languages.
      const kataExt = kataPath.map((el) =>
        el.split("/")[2].replace(/^[^.\r\n]+.\h*/gi, "")
      );

      const kataRank = [];

      // Get kata ranks
      kataName.forEach((e) => {
        kataRank.push(
          axios
            .get(
              `https://www.codewars.com/api/v1/code-challenges/${e}?access_key=${apiKey}`
            )
            .then((res) => {
              return res.data.rank.name;
            })
            .catch((err) => {
              console.log(err);
              throw new Error(err);
            })
        );
      });

      Promise.all(kataRank).then((res) => {
        // Format and merge katas
        const mergeKatas = kataName.map(
          (el, i) =>
            `| ${res[i] === null ? "Retired" : res[i]} | [${el
              .split("-")
              .map((c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase())
              .join(
                " "
              )}](https://codewars.com/kata/${el}) | [Solution](https://github.com/Alcadramin/codewars/blob/main/${
              kataPath[i]
            }) | JavaScript |`
        );

        // Print header
        fs.appendFile(
          f,
          `# Solutions \n\n| Rank | Name with Link | Solution | Language |\n|--|--|--|--|\n`,
          (err) => {
            if (err) throw new Error(err);
          }
        );

        // Print table
        fs.appendFile(f, mergeKatas.join("\n"), (err) => {
          if (err) throw new Error(err);
        });

        console.log("File succesfully created.");
      });
    };

    printFile(fileName);

    if (err) {
      throw new Error(err);
    }
  }
);
