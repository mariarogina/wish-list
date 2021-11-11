import { connect } from "react-redux";
import {
  gameListSelector,
  wishListSelector,
  handleFetchList,
  handleAddNewGame,
  handleSetTotalPrice,
  handleRemoveGamefromWishList,
  handleRemoveAllGame,
} from "../../redux/wishList";
import GameList from "./GameList";

export default connect(
  (state) => ({
    gameList: gameListSelector(state),
    wishList: wishListSelector(state),
  }),
  {
    handleFetchList,
    handleRemoveAllGame,
    handleAddNewGame,
    handleSetTotalPrice,
    handleRemoveGamefromWishList,
  }
)(GameList);
