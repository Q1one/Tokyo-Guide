import "./Places.css"
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
            <div className="pInfo" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                <img key={index} src={place.imgUrl} alt={place.title}/>
                <h2>{place.title}</h2>
            </div>
        ))}


      <button onClick={handleNextClick}>
        NEXT
        <GrChapterNext className="rBtn" size={40}/>
      </button>

    </div>
  );
}

export default Places