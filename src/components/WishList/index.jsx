import { connect } from "react-redux";
import {
  wishListSelector,
  handleRemoveAllWish,
  handleRemoveGamefromWishList,
  gameListSelector,
  totalPriceSelector,
  handleSetTotalPrice,
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
    handleSetTotalPrice,
    fetchTotalRequest,
    addNewGameRequest,
  }
)(WishList);
