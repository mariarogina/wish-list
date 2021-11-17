import React, { useEffect, useCallback } from "react";
import { batch } from "react-redux";

import GameListItem from "./GameListItem";

const GameList = ({
  handleFetchList,
  gameList,
  handleAddNewGame,
  handleSetTotalPrice,
  handleRemoveGamefromWishList,
  wishList,
}) => {
  useEffect(() => {
    handleFetchList();
  }, [handleFetchList]);

  const handleAdd = useCallback(
    (item) => {
      batch(() => {
        handleAddNewGame(item);
        handleSetTotalPrice();
      });
    },
    [handleAddNewGame, handleSetTotalPrice]
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
        <h2>Wish List App</h2>
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
