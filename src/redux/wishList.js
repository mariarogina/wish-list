import { createSelector } from "reselect";

import { put, take, select, call } from "redux-saga/effects";
const { v4: uuidv4 } = require("uuid");

export const moduleName = "wishList";

export const FETCH_GAME_LIST = `${moduleName}/FETCH_GAME_LIST`;
export const FETCH_LIST_REQUEST = `${moduleName}/FETCH_LIST_REQUEST`;
export const FETCH_WISH_LIST = `${moduleName}/FETCH_WISH_LIST`;
export const FETCH_TOTAL_REQUEST = `${moduleName}/FETCH_LIST_REQUEST`;
export const FETCH_TOTAL = `${moduleName}/FETCH_TOTAL`;
export const FETCH_ERROR = `${moduleName}/FETCH_GAME_ERROR`;
export const ADD_TO_WISH_LIST = `${moduleName}/ADD_TO_WISH_LIST`;
export const ADD_NEW_REQUEST = `${moduleName}/ADD_NEW_REQUEST`;
export const REMOVE_GAME_FROM_WISH_LIST = `${moduleName}/REMOVE_GAME_FROM_WISH_LIST`;
export const REMOVE_REQUEST = `${moduleName}/REMOVE_REQUEST`;
export const REMOVE_ALL_FROM_WISH_LIST = `${moduleName}/REMOVE_ALL_FROM_WISH_LIST`;
export const SET_TOTAL_REQUEST = `${moduleName}/SET_TOTAL_REQUEST`;
export const SET_TOTAL_PRICE = `${moduleName}/SET_TOTAL_PRICE`;

const persistedData = JSON.parse(localStorage.getItem("wishList"));

export const formatData = (data) => {
  //преобразование
  const formattedData = Object.entries(data).map((el) => {
    el[1].id = el[0];
    return el[1];
  });
  //return
  return formattedData;
};

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
    case ADD_TO_WISH_LIST:
      return { ...state, wishList: payload };
    case REMOVE_GAME_FROM_WISH_LIST:
      return { ...state, wishList: payload };
    case REMOVE_ALL_FROM_WISH_LIST:
      return { ...state, wishList: [], totalPrice: 0 };
    case SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };

    default:
      return state;
  }
}

//Action Creators

export const fetchListRequest = () => ({
  type: FETCH_LIST_REQUEST,
});

export async function fetchGameListHelper() {
  const response = await fetch(
    "https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return result;
}

export const fetchListSaga = function* () {
  while (true) {
    yield take(FETCH_LIST_REQUEST);
    try {
      //wrap normal __async__ func in call
      const data = yield call(fetchGameListHelper);
      const formattedData = yield formatData(data);

      yield put({
        type: FETCH_GAME_LIST,
        payload: formattedData,
      });
    } catch (error) {
      yield put({
        type: FETCH_ERROR,
        payload: error,
      });
    }
  }
};

export const fetchTotalRequest = () => ({
  type: FETCH_TOTAL_REQUEST,
});

export const fetchTotalSaga = function* () {
  while (true) {
    yield take(FETCH_TOTAL_REQUEST);
    try {
      const persistedData = JSON.parse(localStorage.getItem("priceTotal"));
      if (persistedData && persistedData.length) {
        const data = JSON.parse(localStorage.getItem("priceTotal"));
        yield put({
          type: FETCH_TOTAL,
          payload: data,
        });
      } else {
        const data = 0;
        yield put({
          type: FETCH_TOTAL,
          payload: data,
        });
      }
    } catch (error) {
      yield put({
        type: FETCH_ERROR,
        payload: error,
      });
    }
  }
};

export const addNewGameRequest = (item) => ({
  type: ADD_NEW_REQUEST,
  payload: item,
});

export const addNewGameSaga = function* () {
  while (true) {
    const newItem = yield take(ADD_NEW_REQUEST);
    const oldState = yield select((state) => state);

    if (persistedData && persistedData.length) {
      const oldWishList = JSON.parse(localStorage.getItem("wishList"));
      const newWishList = [...oldWishList, newItem];
      yield put({ type: ADD_TO_WISH_LIST, payload: newWishList });
    } else {
      const oldWishList = oldState.wishList.wishList;
      const newWishList = [...oldWishList, newItem.payload];
      yield put({ type: ADD_TO_WISH_LIST, payload: newWishList });
    }
  }
};

export const removeGamefromWishRequest = (game) => ({
  type: REMOVE_REQUEST,
  payload: game,
});

// export const removeGameSaga = function* () {
//   while (true) {
//
//     const gameToDelete = yield take(REMOVE_REQUEST);
// const oldState = yield select((state) => state);

//     if (persistedData && persistedData.length) {
//       const oldWishList = JSON.parse(localStorage.getItem("wishList"));
//       const newWishList = oldWishList.filter((x) => x?.id !== gameToDelete?.id);
//       yield put({
//         type: REMOVE_GAME_FROM_WISH_LIST,
//         payload: newWishList,
//       });
//     } else {
//       const oldWishList = oldState.wishList.wishList;
//       const newWishList = oldWishList.filter((x) => x?.id !== gameToDelete?.id);
//       yield put({
//         type: REMOVE_GAME_FROM_WISH_LIST,
//         payload: newWishList,
//       });
//     }
//   }
// };
export const handleRemoveGamefromWishList = (game) => (dispatch, getState) => {
  if (persistedData && persistedData.length) {
    const oldWishList = JSON.parse(localStorage.getItem("wishList"));
    const newWishList = oldWishList.filter((x) => x?.id !== game?.id);
    dispatch({
      type: REMOVE_GAME_FROM_WISH_LIST,
      payload: newWishList,
    });
  } else {
    const oldWishList = getState().wishList.wishList;
    const newWishList = oldWishList.filter((x) => x?.id !== game?.id);
    dispatch({
      type: REMOVE_GAME_FROM_WISH_LIST,
      payload: newWishList,
    });
  }
};
export const handleRemoveAllWish = () => ({
  type: REMOVE_ALL_FROM_WISH_LIST,
});

export const setTotalRequest = () => ({
  type: SET_TOTAL_REQUEST,
});

export const setTotalSaga = function* () {
  while (true) {
    yield take(SET_TOTAL_REQUEST);
    const oldState = yield select((state) => state);
    const wishList = oldState.wishList.wishList;
    const total = wishList.reduce((sum, item) => sum + (item.price || 0), 0);

    yield put({
      type: SET_TOTAL_PRICE,
      payload: total,
    });
  }
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
