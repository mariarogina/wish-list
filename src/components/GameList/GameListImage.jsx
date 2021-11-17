import React, { useState } from "react";

const GameListImage = ({ item }) => {
  const [imgerror, setImgError] = useState(false);
  const handleError = () => {
    setImgError(true);
    console.log("OnErrorEvent Presence1", imgerror);
  };
  console.log("OnErrorEvent Presence2", imgerror);
  return (
    <div className="imgContainer">
      {!imgerror ? (
        <img
          onError={handleError}
          className="gameImg"
          src={item.cover}
          alt="gameImg"
        />
      ) : (
        <img
          className="gameImg"
          src="https://www.cubexled.com/assets/img/no_image.jpg"
          alt="gameImg"
        />
      )}
    </div>
  );
};

export default GameListImage;
