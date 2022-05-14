if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import { h, render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";

import isEmpty from "lodash/isEmpty";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import Checkbox from "./components/Checkbox";
import { Table, Td, Th, Tr } from "./components/Table";

const ranks = {
  "1kyu": {
    name: "1 kyu",
    checked: true,
  },
  "2kyu": {
    name: "2 kyu",
    checked: true,
  },
  "3kyu": {
    name: "3 kyu",
    checked: true,
  },
  "4kyu": {
    name: "4 kyu",
    checked: true,
  },
  "5kyu": {
    name: "5 kyu",
    checked: true,
  },
  "6kyu": {
    name: "6 kyu",
    checked: true,
  },
  "7kyu": {
    name: "7 kyu",
    checked: true,
  },
  "8kyu": {
    name: "8 kyu",
    checked: true,
  },
};

const App = () => {
  const [listJson, setListJson] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [filterRanks, setFilterRanks] = useState<{}>(ranks);

  const filteredRanks = Object.values(filterRanks)
    .filter((rank: any) => rank.checked === true)
    .map((q: any) => q.name);

  const filteredJson = useMemo(() => {
    return listJson.filter(
      (str: any) =>
        filteredRanks.includes(str.rank) &&
        str.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [filteredRanks, search, listJson]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Alcadramin/codewars/main/LIST.json"
    ).then((res) => res.json().then((json) => setListJson(json)));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="section-search">
          <div className="mr-1 flex" style={{ position: "relative" }}>
            <Button
              className="px-2 button-primary"
              clickHandler={() => setDropdown(!dropdown)}
            >
              Filter Rank
            </Button>
            <Dropdown isOpen={dropdown}>
              <ul>
                {Object.keys(filterRanks).map((q: any) => (
                  <li>
                    <Checkbox
                      value={filterRanks[q].checked}
                      setValue={(e: any) =>
                        setFilterRanks(
                          Object.assign(
                            filterRanks,
                            (filterRanks[q].checked = (
                              e.target as HTMLInputElement
                            ).checked)
                          )
                        )
                      }
                    />
                    {filterRanks[q].name}
                  </li>
                ))}
                <Button
                  className="px-2 mx-0-5 button-success"
                  clickHandler={() => setDropdown(!dropdown)}
                >
                  Filter
                </Button>
              </ul>
            </Dropdown>
          </div>
          <Input setValue={setSearch} placeholder="Search katas by name" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="section-table mt-2 px-1 py-0-5">
          <Table>
            <Tr>
              <Th>Rank</Th>
              <Th>Name</Th>
              <Th>Solution</Th>
              <Th>Language</Th>
            </Tr>
            {filteredJson.map((q: any) => (
              <Tr>
                <Td>{q.rank}</Td>
                <Td>
                  <a href={q.link} target="_blank" rel="noopener noreferrer">
                    {q.name}
                  </a>
                </Td>
                <Td>
                  <a
                    href={q.solution}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solution
                  </a>
                </Td>
                <Td>JavaScript</Td>
              </Tr>
            ))}
            {isEmpty(filteredJson) && (
              <Tr>
                <h3>No results.</h3>
              </Tr>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.querySelector("#root");

render(<App />, rootElement!);
