import { put, take, call } from "redux-saga/effects";
import { FETCH_GAME_LIST, FETCH_LIST_REQUEST, FETCH_ERROR } from "./wishList";
import { fetchListSaga, formatData } from "./wishList";

const wishListData = {
  1: {
    name: "Saints Row 2",
    price: 49,
    cover:
      "http://s.gama-gama.ru/fullsize/e56c325f30f3d01b0f0f1ea8d5b59d70.jpg",
  },
};

describe("wishList test", () => {
  it("fetch gameList", () => {
    //form object from action creator
    const actionUp = { type: FETCH_LIST_REQUEST };
    //fetchListGen acts like fetchListSaga
    const fetchListGen = fetchListSaga();
    //does saga take appropriate action creator
    //first saga yield
    expect(fetchListGen.next().value).toEqual(take(FETCH_LIST_REQUEST));
    //second yield: receiving appropriate
    // skip fetch
    //get json: compare yield to data
    expect(fetchListGen.next().value.type).toEqual("CALL");
    expect(fetchListGen.next(wishListData).value).toEqual([wishListData["1"]]);
    //next yield
    expect(fetchListGen.next().value.type).toEqual("PUT");
  });
});
