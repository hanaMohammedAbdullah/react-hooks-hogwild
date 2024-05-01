import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogCard from "./HogCard";
import Filter from "./Filter";
import Sort from "./Sort";

function App() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("none");
  const handleChange = (e) => {
    setFilter(e.target.value);
    setSort(e.target.value);
  };

  const HogDisplay = hogs.filter((data) =>
    filter === "greased" ? data.greased : true
  );
  const HogSort = HogDisplay.sort((a, b) =>
    sort === "none"
      ? 0
      : sort === "name"
      ? a.name.localeCompare(b.name)
      : a.weight - b.weight
  );
  return (
    <div className='App'>
      <Nav />
      <Filter filter={filter} handleChange={handleChange} />
      <Sort sort={sort} handleChange={handleChange} />

      {HogSort.map((hog) => {
        return <HogCard key={hog.name} hog={hog} />;
      })}
    </div>
  );
}

export default App;
