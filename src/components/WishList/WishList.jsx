import React, { useCallback, useEffect } from "react";

const WishList = (props) => {
  useEffect(() => {
    props.handleFetchWishList();
  }, []);

  useEffect(() => {
    props.handleFetchTotal();
  }, []);

  const handleRemove = useCallback((item) => {
    props.handleRemoveGamefromWishList(item);
    props.handleSetTotalPrice();
  }, []);

  const handleClear = useCallback(() => {
    props.handleRemoveAllWish();
  });
  return (
    <div className="mainWishWrap">
      <div className="wishContainer">
        <ul className="wishList">
          {props.wishList &&
            props.wishList.map((item) => (
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
        <h1>{props.totalPrice} RUR</h1>
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
