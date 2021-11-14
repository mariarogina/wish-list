import React from "react";
import GameListImage from "./GameListImage";

const GameListItem = ({ item, handleAdd, handleRemove, itemIsInCart }) => {
  const onDragStartDiv = (e, id, name) => {
    e.dataTransfer.setData("id", id);
  };
  return (
    <li
      key={item.id}
      className="gameItem"
      onDragStart={(e) => onDragStartDiv(e, item.id, item?.name)}
      draggable
    >
      <GameListImage item={item} />
      <p className="itemName">{item?.name}</p>
      {item.price ? (
        <h2 className="price">{item.price} руб.</h2>
      ) : (
        <h2 className="price">FREE</h2>
      )}
      {itemIsInCart(item) ? (
        <button
          className="itemButton itemDeleteButton"
          onClick={() => handleRemove(item)}
        >
          В списке
        </button>
      ) : (
        <button
          className="itemButton itemAddButton"
          onClick={() => handleAdd(item)}
        >
          Добавить
        </button>
      )}
    </li>
  );
};

export default GameListItem;
