import React, { useEffect, useCallback } from "react";

const GameList = (props) => {
  useEffect(() => {
    props.handleFetchList();
  }, []);

  const handleRemove = useCallback((item) => {
    props.handleRemoveGamefromGameList(item);
  }, []);

  const handleClear = useCallback(() => {
    props.handleRemoveAllGame();
  });

  console.log(props);
  return (
    <div className="mainGameWrap">
      <div className="gameContainer">
        <ul className="gameList">
          {props.gameList &&
            props.gameList.map((item) => (
              <li key={item.id} className="gameItem">
                <button
                  id="closeButton"
                  onClick={() => {
                    handleRemove(item);
                  }}
                >
                  X
                </button>
                <p>{item?.name}</p>
                <p>{item?.id}</p>
                <div className="imgContainer">
                  {item.cover ? (
                    <img className="gameImg" src={item.cover} alt="" />
                  ) : (
                    <img
                      className="gameImg"
                      src="https://www.cubexled.com/assets/img/no_image.jpg"
                      alt=""
                    />
                  )}
                </div>
                {item.price ? <h2>RUR {item.price}</h2> : <h2>FREE</h2>}
              </li>
            ))}
        </ul>
        <div className="clearButtonWrap">
          <button onClick={() => handleClear()} id="clearButton">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameList;
