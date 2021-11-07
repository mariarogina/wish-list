import React, { useCallback } from "react";

const WishList = (props) => {
  const handleRemove = useCallback((item) => {
    props.handleRemoveGamefromWishList(item);
  }, []);

  const handleClear = useCallback(() => {
    props.handleRemoveAllWish();
  });
  return (
    <div className="mainWishWrap">
      <div className="wishContainer">
        <ul className="wishList">
          {props.gameList &&
            props.gameList.slice(1, 3).map((item) => (
              <li key={item.id} className="wishItem">
                <button
                  id="closeButtonWish"
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
          <button onClick={() => handleClear()} id="clearButtonWish">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
