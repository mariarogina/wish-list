import { connect } from "react-redux";
import {
  gameListSelector,
  handleFetchList,
  handleAddNewGame,
  handleRemoveGamefromGameList,
  handleRemoveAllGame,
} from "../../redux/wishList";
import GameList from "./GameList";

export default connect((state) => ({ gameList: gameListSelector(state) }), {
  handleFetchList,
  handleRemoveAllGame,
  handleAddNewGame,
  handleRemoveGamefromGameList,
})(GameList);
