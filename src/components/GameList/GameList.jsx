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
  return (
    <div className="mainGameWrap">
      <div className="gameContainer">
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
