import React from "react";

function Filter({ filter, handleChange }) {
  return (
    <div>
      Hog Fiilter :
      <select name='filter' id='filter' value={filter} onChange={handleChange}>
        <option value='All'>All</option>
        <option value='greased'>Greased Only</option>
      </select>
    </div>
  );
}

export default Filter;
