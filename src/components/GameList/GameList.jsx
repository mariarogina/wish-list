import React, { useEffect, useCallback } from "react";
import { batch } from "react-redux";

import GameListItem from "./GameListItem";

const GameList = ({
  fetchListRequest,
  gameList,
  addNewGameRequest,
  handleSetTotalPrice,
  handleRemoveGamefromWishList,
  wishList,
}) => {
  useEffect(() => {
    fetchListRequest();
  }, [fetchListRequest]);

  const handleAdd = useCallback(
    (item) => {
      batch(() => {
        addNewGameRequest(item);
        handleSetTotalPrice();
      });
    },
    [addNewGameRequest, handleSetTotalPrice]
  );
  const handleRemove = useCallback(
    (item) => {
      handleRemoveGamefromWishList(item);
      handleSetTotalPrice();
    },
    [handleRemoveGamefromWishList, handleSetTotalPrice]
  );

  const itemIsInCart = (myItem) => {
    return wishList.findIndex((item) => item.id === myItem.id) !== -1;
  };

  const onDragOverDiv = (e) => {
    e.preventDefault();
  };

  const onDropDiv = (e) => {
    let id = e.dataTransfer.getData("id");
    let item = wishList.find((item) => item.id === id);
    handleRemove(item);
    handleSetTotalPrice();
  };
  return (
    <div
      className="mainGameWrap droppable"
      onDragOver={(e) => onDragOverDiv(e)}
      onDrop={(e) => onDropDiv(e)}
    >
      <div className="gameContainer">
        <h2 className="gameHeader">Wish List App</h2>
        <h2 className="gameHeader" style={{ color: "white" }}>
          Drag and Drop
        </h2>

        <ul className="gameList">
          {gameList &&
            gameList.map((item) => (
              <GameListItem
                key={item.id}
                item={item}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                itemIsInCart={itemIsInCart}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default GameList;
