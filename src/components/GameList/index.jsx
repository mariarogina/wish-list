import { connect } from "react-redux";
import {
  gameListSelector,
  wishListSelector,
  fetchListRequest,
  addNewGameRequest,
  setTotalRequest,
  handleRemoveGamefromWishList,
} from "../../redux/wishList";
import GameList from "./GameList";

export default connect(
  (state) => ({
    gameList: gameListSelector(state),
    wishList: wishListSelector(state),
  }),
  {
    fetchListRequest,
    addNewGameRequest,
    setTotalRequest,
    handleRemoveGamefromWishList,
  }
)(GameList);
