import "./Places.css"
import Divider from "./Divider"
import { GrChapterNext } from "react-icons/gr";

import React, { useState } from "react";
import places from "./../assets/places.json"

function Places() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextClick = () => {
    const nextImage = (currentImage + 1) % places.length;
    setCurrentImage(nextImage);
  };

  return (
    <div className="Places" id="PTV">
        {places.map((place, index) => (
          <div key={index} className="pInfo" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                <Divider/>
                <img src={place.imgUrl} alt={place.title}/>
                <h2>{place.title}</h2>
            </div>
        ))}

    <button onClick={handleNextClick}>
      NE
      <GrChapterNext className="rBtn" size={50}/>
      XT
    </button>

    </div>
  );
}

export default Places