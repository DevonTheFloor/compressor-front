import headerBarReducer from "../components/header-bar/redux-header-bar/reducer";
import dataPictureCompressReducer from "./dataPicturesCompress/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    headerBarState: headerBarReducer,
    pictureCompressState: dataPictureCompressReducer
});

const store = createStore(rootReducer);

export default store;



