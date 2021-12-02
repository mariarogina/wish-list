import { connect } from "react-redux";
import {
  wishListSelector,
  handleRemoveAllWish,
  handleRemoveGamefromWishList,
  gameListSelector,
  totalPriceSelector,
  setTotalRequest,
  fetchTotalRequest,
  addNewGameRequest,
} from "../../redux/wishList";
import WishList from "./WishList";

export default connect(
  (state) => ({
    wishList: wishListSelector(state),
    gameList: gameListSelector(state),
    totalPrice: totalPriceSelector(state),
  }),
  {
    handleRemoveAllWish,
    handleRemoveGamefromWishList,
    setTotalRequest,
    fetchTotalRequest,
    addNewGameRequest,
  }
)(WishList);
