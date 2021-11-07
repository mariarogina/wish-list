import { connect } from "react-redux";
import {
  wishListSelector,
  handleRemoveAllWish,
  handleRemoveGamefromWishList,
  handleFetchWishList,
  gameListSelector,
  totalPriceSelector,
  handleSetTotalPrice,
  handleFetchTotal,
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
    handleFetchWishList,
    handleSetTotalPrice,
    handleFetchTotal,
  }
)(WishList);
