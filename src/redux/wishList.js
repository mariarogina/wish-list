import { createSelector } from "reselect";

export const moduleName = "wishList";

export const FETCH_GAME_LIST = `${moduleName}/FETCH_GAME_LIST`;
export const FETCH_ERROR = `${moduleName}/FETCH_GAME_ERROR`;
export const ADD_TO_WISH_LIST = `${moduleName}/ADD_TO_WISH_LIST`;
export const REMOVE_GAME_FROM_GAME_LIST = `${moduleName}/REMOVE_GAME_FROM_GAME_LIST`;
export const REMOVE_GAME_FROM_WISH_LIST = `${moduleName}/REMOVE_GAME_FROM_WISH_LIST`;
export const REMOVE_ALL_FROM_GAME_LIST = `${moduleName}/REMOVE_ALL_FROM_GAME_LIST`;
export const REMOVE_ALL_FROM_WISH_LIST = `${moduleName}/REMOVE_ALL_FROM_WISH_LIST`;

export const reducerRecord = {
  gameList: null,
  wishList: null,
  totalPrice: null,
};

//Reducer

export default function reducer(state = reducerRecord, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_GAME_LIST:
      return { ...state, gameList: payload };
    case REMOVE_GAME_FROM_GAME_LIST:
      return {
        ...state,
        gameList: state.gameList.filter((x) => x.id !== action.payload.id),
      };
    case ADD_TO_WISH_LIST:
    case "ADD_ITEM":
      return { ...state, wishList: [...state.wishList, action.payload] };
    case REMOVE_GAME_FROM_WISH_LIST:
      return {
        ...state,
        wishList: state.wishList.filter((x) => x.id !== action.payload.id),
      };
    case REMOVE_ALL_FROM_GAME_LIST:
      return { ...state, gameList: [] };
    case REMOVE_ALL_FROM_WISH_LIST:
      return { ...state, wishList: [] };

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

export const handleAddNewGame = (item) => (dispatch, getState) => {
  const wishList = getState().wishList;
  console.log(wishList);

  const newWishList = [...wishList, item];

  dispatch({
    type: ADD_TO_WISH_LIST,
    payload: newWishList,
  });
};

export const handleRemoveGamefromGameList = (game) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_GAME_FROM_GAME_LIST,
    payload: game,
  });
};

export const handleRemoveGamefromWishList = (game) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_GAME_FROM_GAME_LIST,
    payload: game,
  });
};
export const handleRemoveAllGame = () => ({
  type: REMOVE_ALL_FROM_GAME_LIST,
});
export const handleRemoveAllWish = () => ({
  type: REMOVE_ALL_FROM_WISH_LIST,
});

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
