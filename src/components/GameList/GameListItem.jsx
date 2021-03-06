import React from "react";
import GameListImage from "./GameListImage";

const GameListItem = ({ item, handleAdd, handleRemove, itemIsInCart }) => {
  const onDragStartDiv = (e, id) => {
    e.dataTransfer.setData("id", id);
  };
  return (
    <li
      key={item.id}
      className="gameItem"
      onDragStart={(e) => onDragStartDiv(e, item.id, item)}
      draggable
    >
      <GameListImage item={item} />

      <p className="itemName">{item?.name}</p>
      {item.price ? (
        <h2 className="price">{item.price} RUR</h2>
      ) : (
        <h2 className="price">FREE</h2>
      )}
      {itemIsInCart(item) ? (
        <button
          role="button"
          className="itemButton itemDeleteButton"
          onClick={() => handleRemove(item)}
        >
          In wishlist
        </button>
      ) : (
        <button
          className="itemButton itemAddButton"
          role="button"
          onClick={() => handleAdd(item)}
        >
          Add
        </button>
      )}
    </li>
  );
};

export default GameListItem;
