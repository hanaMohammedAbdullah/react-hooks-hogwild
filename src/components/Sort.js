import React from "react";

function Sort({ sort, handleChange }) {
  return (
    <div>
      <div>
        Hog Fiilter :
        <select name='Sort' id='Sort' value={Sort} onChange={handleChange}>
          <option value='none'>Original</option>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
