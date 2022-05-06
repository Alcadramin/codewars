import { h, render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [listJson, setListJson] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Alcadramin/codewars/main/LIST.json"
    ).then((res) => res.json().then((json) => setListJson(json)));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className=" search-section">
          <SearchInput
            setValue={setSearch}
            placeholder="Search katas by name"
          />
        </div>
      </div>
    </div>
  );
};

const rootElement = document.querySelector("#root");

render(<App />, rootElement!);
