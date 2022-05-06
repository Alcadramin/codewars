if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import { h, render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";

import isEmpty from "lodash/isEmpty";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { Table, Td, Th, Tr } from "./components/Table";

const App = () => {
  const [listJson, setListJson] = useState<any[]>([]);
  const [search, setSearch] = useState<string>();

  const filteredJson = useMemo(() => {
    if (!search) return listJson;

    return listJson.filter((str: any) =>
      str.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [listJson, search]);

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
          <SearchInput
            setValue={setSearch}
            placeholder="Search katas by name"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="section-table mt-2 px-1 py-1">
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
