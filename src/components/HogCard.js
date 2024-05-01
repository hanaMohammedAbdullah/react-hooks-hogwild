import React, { useState } from "react";

import "./../index.css";
function HogCard({ hog }) {
  const [extraInfo, setExtraInfo] = useState(false);

  const handleClick = () => {
    setExtraInfo(!extraInfo);
  };
  console.log(hog);
  return (
    <div className='card' key={hog.name}>
      <div className='image'>
        <img src={hog.image} width={"250px"} height={"300px"} alt={hog.name} />
      </div>
      <h3 className='largeHeader' onClick={handleClick}>
        {hog.name}
      </h3>
      {extraInfo ? (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Weight: {hog.weight}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      ) : null}
    </div>
  );
}

export default HogCard;
