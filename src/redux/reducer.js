import { combineReducers } from "redux";
import wishListReducer, { moduleName as wishListModule } from "./wishList";

// export default combineReducers({ [wishListModule]: wishListReducer });

export default combineReducers({ wishListReducer: wishListReducer });
