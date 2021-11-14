import React from "react";
import GameListImage from "./GameListImage";

const GameListItem = ({ item, handleAdd, handleRemove, itemIsInCart }) => {
  const onDragStartDiv = (e, id, name) => {
    console.log("Drag start", id);
    console.log("Drag start", name);
    e.dataTransfer.setData("id", id);
  };
  return (
    <li
      key={item.id}
      className="gameItem"
      onDragStart={(e) => onDragStartDiv(e, item.id, item?.name)}
      draggable
    >
      <p>{item?.name}</p>
      <GameListImage item={item} />
      {item.price ? <h2>RUR {item.price}</h2> : <h2>FREE</h2>}
      {itemIsInCart(item) ? (
        <button onClick={() => handleRemove(item)}>Удалить</button>
      ) : (
        <button onClick={() => handleAdd(item)}>Добавить</button>
      )}
    </li>
  );
};

export default GameListItem;
