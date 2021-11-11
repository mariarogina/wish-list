import {
  ADD_TO_WISH_LIST,
  REMOVE_ALL_FROM_WISH_LIST,
  REMOVE_GAME_FROM_WISH_LIST,
  SET_TOTAL_PRICE,
} from "./wishList";

const useActionTypes = [
  ADD_TO_WISH_LIST,
  REMOVE_ALL_FROM_WISH_LIST,
  REMOVE_GAME_FROM_WISH_LIST,
];

const useActionTypes2 = [SET_TOTAL_PRICE];

export const persistMiddleware = (storeApi) => (next) => (action) => {
  if (useActionTypes.includes(action.type)) {
    window.localStorage.setItem(
      "wishList",
      JSON.stringify(action.payload || [])
    );
  } else if (useActionTypes2.includes(action.type)) {
    window.localStorage.setItem(
      "priceTotal",
      JSON.stringify(action.payload || 0)
    );
  }

  return next(action);
};
