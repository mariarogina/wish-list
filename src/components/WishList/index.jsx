import { connect } from "react-redux";
import {
  wishListSelector,
  handleRemoveAllWish,
  handleRemoveGamefromWishList,
  gameListSelector,
} from "../../redux/wishList";
import WishList from "./WishList";

export default connect(
  (state) => ({
    wishList: wishListSelector(state),
    gameList: gameListSelector(state),
  }),
  {
    handleRemoveAllWish,
    handleRemoveGamefromWishList,
  }
)(WishList);
