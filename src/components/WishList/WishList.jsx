import React, { useCallback, useEffect } from "react";

const WishList = ({
  handleFetchWishList,
  handleRemoveGamefromWishList,
  handleSetTotalPrice,
  handleRemoveAllWish,
  handleFetchTotal,
  handleAddNewGame,
  wishList,
  gameList,
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

  const onDragOverDiv = (e) => {
    e.preventDefault();
    console.log("I am dragging");
  };

  const onDropDiv = (e) => {
    let id = e.dataTransfer.getData("id");
    if (wishList.findIndex((item) => item.id === id) == -1) {
      let newList = gameList.filter((item) => item.id === id);
      handleAddNewGame(newList[0]);
      handleSetTotalPrice();
    }
  };

  const onDragStartDiv = (e, id, name) => {
    console.log("Drag start", id);
    console.log("Drag start", name);
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
