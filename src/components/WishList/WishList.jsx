import React, { useCallback, useEffect } from "react";

const WishList = ({
  handleRemoveGamefromWishList,
  handleSetTotalPrice,
  handleRemoveAllWish,
  fetchTotalRequest,
  addNewGameRequest,
  wishList,
  gameList,
  totalPrice,
}) => {
  useEffect(() => {
    fetchTotalRequest();
  }, [fetchTotalRequest]);

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

  const onDragOverDiv = (e) => {
    e.preventDefault();
  };

  const onDropDiv = (e) => {
    let id = e.dataTransfer.getData("id");
    if (wishList.findIndex((item) => item.id === id) == -1) {
      let newList = gameList.filter((item) => item.id === id);
      addNewGameRequest(newList[0]);
      handleSetTotalPrice();
    } else {
      alert("This game is already in the list");
    }
  };

  const onDragStartDiv = (e, id, name) => {
    e.dataTransfer.setData("id", id);
  };

  return (
    <div
      className="mainWishWrap droppable"
      onDragOver={(e) => onDragOverDiv(e)}
      onDrop={(e) => onDropDiv(e)}
    >
      <div className="wishContainer">
        <ul className="wishList">
          {wishList &&
            wishList.map((item) => (
              <li
                key={item.id}
                className="wishItem"
                onDragStart={(e) => onDragStartDiv(e, item.id, item?.name)}
                draggable
              >
                <button
                  className="closeButtonWish wishClearButton"
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
        <h1>
          Total: <span className="total-price">{totalPrice} RUR</span>
        </h1>
        {wishList.length > 0 && (
          <div className="clearButtonWrap">
            <button
              onClick={() => handleClear()}
              className="itemButton wishClearButton"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
