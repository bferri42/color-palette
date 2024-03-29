import React, { useState } from "react";
import ColorCard from "./ColorCard";
import "./ColorPalette.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import { useHttp } from "../services/http-service";

export default function ColorPalette({ gradientName, hexColors }) {

  const [isSaved, setIsSaved] = useState(false);
  const http = useHttp();

  function handleHeartClicked() {

    setIsSaved(true);

    http.addPalette(gradientName, hexColors)
    .then(results => {
      console.log(results.data)
    })
    .catch(err => {
      console.error(err);
      setIsSaved(false);
    })
  }


  
  const outlinedHeart = (
    <div className="icon-container" onClick={handleHeartClicked}>
    <FontAwesomeIcon icon={faHeartRegular} />
  </div>)

  const solidHeart = (
    <div className="icon-container" onClick={handleHeartClicked}>
    <FontAwesomeIcon icon={faHeartSolid} />
  </div>)

  


 return (
    <div className="color-palette-root">
      <h3>
        {gradientName}
      {isSaved
      ? solidHeart : outlinedHeart}
      </h3>
      <div className="card-container">
        {hexColors.map((hex, i) => (
          <ColorCard key={i} hexColor={hex} />
        ))}
      </div>
    </div>
  );
}
