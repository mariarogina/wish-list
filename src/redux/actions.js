export const FETCH_GAME_LIST = "FETCH_GAME_LIST";
export const FETCH_ERROR = "FETCH_GAME_ERROR";
export const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
export const REMOVE_GAME_FROM_WISH_LIST = "REMOVE_GAME_FROM_WISH_LIST";
export const REMOVE_ALL_FROM_WISH_LIST = "REMOVE_ALL_FROM_WISH_LIST";

//Action Creators

export const handleFetchList = (wishList) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_GAME_LIST,
    payload: wishList,
  });

  try {
    let response, data;
    response = await fetch(
      "https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json"
    );
    data = await response.json();
  } catch (error) {
    await dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  }
};

export const addGame = (wishList) => {
  return {
    type: ADD_TO_WISH_LIST,
    payload: wishList,
  };
};

export const removeGame = (wishList) => {
  return {
    type: REMOVE_GAME_FROM_WISH_LIST,
    payload: wishList,
  };
};

export const removeAll = (wishList) => {
  return {
    type: REMOVE_ALL_FROM_WISH_LIST,
    payload: wishList,
  };
};
