import { createSelector } from "reselect";
const { v4: uuidv4 } = require("uuid");

export const moduleName = "wishList";

export const FETCH_GAME_LIST = `${moduleName}/FETCH_GAME_LIST`;
export const FETCH_WISH_LIST = `${moduleName}/FETCH_WISH_LIST`;
export const FETCH_TOTAL = `${moduleName}/FETCH_TOTAL`;
export const FETCH_ERROR = `${moduleName}/FETCH_GAME_ERROR`;
export const ADD_TO_WISH_LIST = `${moduleName}/ADD_TO_WISH_LIST`;
export const REMOVE_GAME_FROM_GAME_LIST = `${moduleName}/REMOVE_GAME_FROM_GAME_LIST`;
export const REMOVE_GAME_FROM_WISH_LIST = `${moduleName}/REMOVE_GAME_FROM_WISH_LIST`;
export const REMOVE_ALL_FROM_GAME_LIST = `${moduleName}/REMOVE_ALL_FROM_GAME_LIST`;
export const REMOVE_ALL_FROM_WISH_LIST = `${moduleName}/REMOVE_ALL_FROM_WISH_LIST`;
export const SET_TOTAL_PRICE = `${moduleName}/SET_TOTAL_PRICE`;

const persistedData = JSON.parse(localStorage.getItem("wishList"));

export const reducerRecord = {
  gameList: [],
  wishList: [],
  totalPrice: 0,
};

//Reducer

export default function reducer(state = reducerRecord, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_GAME_LIST:
      return { ...state, gameList: payload };
    case FETCH_WISH_LIST:
      return { ...state, wishList: payload };
    case REMOVE_GAME_FROM_GAME_LIST:
      return { ...state, gameList: payload };
    case ADD_TO_WISH_LIST:
      return { ...state, wishList: payload };
    case REMOVE_GAME_FROM_WISH_LIST:
      return { ...state, wishList: payload };
    case REMOVE_ALL_FROM_GAME_LIST:
      return { ...state, gameList: [] };
    case REMOVE_ALL_FROM_WISH_LIST:
      return { ...state, wishList: [], totalPrice: 0 };
    case SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };

    default:
      return state;
  }
}

//Action Creators

export const handleFetchList = () => async (dispatch) => {
  try {
    let response, data;
    response = await fetch(
      "https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json"
    );
    data = await response.json();
    const formattedData = Object.entries(data).map((el) => {
      el[1].id = el[0];
      return el[1];
    });
    await dispatch({
      type: FETCH_GAME_LIST,
      payload: formattedData,
    });
  } catch (error) {
    await dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  }
};

export const handleFetchWishList = () => async (dispatch) => {
  try {
    const persistedData = JSON.parse(localStorage.getItem("wishList"));
    let data;
    if (persistedData && persistedData.length) {
      data = JSON.parse(localStorage.getItem("wishList"));
    } else {
      data = [];
    }
    await dispatch({
      type: FETCH_WISH_LIST,
      payload: data,
    });

    const total = data.reduce((sum, item) => sum + (item.price || 0), 0);
    dispatch({
      type: SET_TOTAL_PRICE,
      payload: total,
    });
  } catch (error) {
    await dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  }
};

export const handleFetchTotal = () => async (dispatch) => {
  try {
    const persistedTotal = JSON.parse(localStorage.getItem("priceTotal"));
    let data;
    if (persistedTotal && persistedTotal.length) {
      data = JSON.parse(localStorage.getItem("priceTotal"));
    } else {
      data = 0;
    }
    await dispatch({
      type: FETCH_TOTAL,
      payload: data,
    });
  } catch (error) {
    await dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  }
};

export const handleAddNewGame = (item) => (dispatch, getState) => {
  let oldWishList;
  if (persistedData && persistedData.length) {
    oldWishList = JSON.parse(localStorage.getItem("wishList"));
  } else {
    oldWishList = getState().wishList.wishList;
  }
  const newWishList = [...oldWishList, { ...item }];
  dispatch({ type: ADD_TO_WISH_LIST, payload: newWishList });
};

export const handleRemoveGamefromGameList = (game) => (dispatch, getState) => {
  const oldGameList = getState().wishList.gameList;
  const newGameList = oldGameList.filter((x) => x.id !== game.id);
  dispatch({
    type: REMOVE_GAME_FROM_GAME_LIST,
    payload: newGameList,
  });
};

export const handleRemoveGamefromWishList = (game) => (dispatch, getState) => {
  let oldWishList;
  if (persistedData && persistedData.length) {
    oldWishList = JSON.parse(localStorage.getItem("wishList"));
  } else {
    oldWishList = getState().wishList.wishList;
  }

  const newWishList = oldWishList.filter((x) => x?.id !== game?.id);
  dispatch({
    type: REMOVE_GAME_FROM_WISH_LIST,
    payload: newWishList,
  });
};
export const handleRemoveAllGame = () => ({
  type: REMOVE_ALL_FROM_GAME_LIST,
});
export const handleRemoveAllWish = () => ({
  type: REMOVE_ALL_FROM_WISH_LIST,
});

export const handleSetTotalPrice = () => (dispatch, getState) => {
  const wishList = getState().wishList.wishList;

  const total = wishList.reduce((sum, item) => sum + (item.price || 0), 0);

  dispatch({
    type: SET_TOTAL_PRICE,
    payload: total,
  });
};

//Selectors (gameList, wishList)

export const stateSelector = (state) => state[moduleName];

export const gameListSelector = createSelector(
  stateSelector,
  (state) => state.gameList
);

export const wishListSelector = createSelector(
  stateSelector,
  (state) => state.wishList
);

export const totalPriceSelector = createSelector(
  stateSelector,
  (state) => state.totalPrice
);
