import React, { useCallback, useEffect } from "react";

const WishList = ({
  handleFetchWishList,
  handleRemoveGamefromWishList,
  handleSetTotalPrice,
  handleRemoveAllWish,
  handleFetchTotal,
  wishList,
  totalPrice,
}) => {
  useEffect(() => {
    handleFetchWishList();
    handleFetchTotal();
  }, [handleFetchWishList, handleFetchTotal]);

  const handleRemove = useCallback(
    (item) => {
      handleRemoveGamefromWishList(item);
      handleSetTotalPrice();
    },
    [handleRemoveGamefromWishList, handleSetTotalPrice]
  );

  const handleClear = useCallback(() => {
    handleRemoveAllWish();
  }, [handleRemoveAllWish]);

  return (
    <div className="mainWishWrap">
      <div className="wishContainer">
        <ul className="wishList">
          {wishList &&
            wishList.map((item) => (
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
              </li>
            ))}
        </ul>
        <h1>Total Price:{totalPrice}</h1>

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
