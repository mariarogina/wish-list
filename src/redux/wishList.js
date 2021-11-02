import { createSelector } from "reselect";
import * as actions from "./actions";

export const moduleName = "wishList";
export const reducerRecord = { gameList: null, wishList: null };

export default function reducer(state = reducerRecord, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.FETCH_GAME_LIST:
      return { ...state, gameList: payload };
    case actions.ADD_TO_WISH_LIST:
    case actions.REMOVE_GAME_FROM_WISH_LIST:
    case actions.REMOVE_ALL_FROM_WISH_LIST:
      return { ...state, wishList: payload };
    default:
      return state;
  }
}

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

//Handlers

export const handleAddNewGame = (item) => (dispatch, getState) => {
  const { wishList } = getState()[wishList];

  let items = [...tableData];
  let lastId = Math.max.apply(
    null,
    items.map((item) => item.id)
  );
  let newId = lastId + 1;

  const newWishList = [...wishList, { ...item, id: newId }];

  dispatch({
    type: actions.ADD_TO_WISH_LIST,
    payload: newWishList,
  });
};

export const handleRemoveGame = () => (dispatch, getState) => {
  const { wishList } = getState()[wishList];
  dispatch({
    type: actions.REMOVE_GAME_FROM_WISH_LIST,
    payload: wishList.filter((x) => x.id !== action.payload.id),
  });
};

export const handleRemoveAll = () => {
  const { wishList } = getState()[wishList];
  const cleanedWishList = [];
  dispatch({
    type: actions.REMOVE_ALL_FROM_WISH_LIST,
    payload: cleanedWishList,
  });
};
