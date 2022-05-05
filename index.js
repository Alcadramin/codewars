const glob = require("glob");
const axios = require("axios");
const fs = require("fs");
const fsAsync = require("fs").promises;
require("dotenv").config();

const apiKey = process.env.TOKEN;

if (!apiKey) {
  throw new Error("TOKEN is required.");
}

glob(
  "src/**/*",
  { ignore: ["**/**.test.js", "**/test**/**"], nodir: true },
  (err, files) => {
    const kataPath = files.sort(),
      fileName = "LIST.md",
      jsonName = "LIST.json",
      jsonList = [];

    // Delete old file if exist
    if (
      fs.existsSync(`${process.cwd()}${fileName}`) ||
      fs.existsSync(`${process.cwd()}${jsonName}`)
    ) {
      fs.unlink(fileName, (err) => {
        if (err) throw new Error(err);
      });

      fs.unlink(jsonName, (err) => {
        if (err) throw new Error(err);
      });
    }

    // Create new file
    fs.open(fileName, "w", (err) => {
      if (err) throw new Error(err);
    });

    fs.open(jsonName, "w", (err) => {
      if (err) throw new Error(err);
    });

    const printFile = (f, j) => {
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

      Promise.all(kataRank).then(async (res) => {
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

        // Create JSON
        kataName.map((el, i) =>
          jsonList.push({
            rank: `${res[i] === null ? "Retired" : res[i]}`,
            name: `${el
              .split("-")
              .map(
                (c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()
              )}`,
            link: `https://codewars.com/kata/${el}`,
            solution: `https://github.com/Alcadramin/codewars/blob/main/${kataPath[i]}`,
          })
        );

        // Write JSON
        await fsAsync.appendFile(j, JSON.stringify(jsonList)).catch((err) => {
          if (err) {
            throw new Error(err);
          }
        });

        // Write LIST.md
        await fsAsync
          .appendFile(
            f,
            `# Solutions \n\n| Rank | Name with Link | Solution | Language |\n|--|--|--|--|\n`
          )
          .catch((err) => {
            if (err) throw new Error(err);
          });

        await fsAsync.appendFile(f, mergeKatas.join("\n")).catch((err) => {
          if (err) throw new Error(err);
        });

        console.log("File succesfully created.");
      });
    };

    printFile(fileName, jsonName);

    if (err) {
      throw new Error(err);
    }
  }
);
