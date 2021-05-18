// import initStateDataPictureCompress from "./init-state";
// import {INIT_DATA_PICTURE_COMPRESS} from "./type";

const dataPictureCompressReducer = (state = {}, action) => {
    switch (action.type) {
    case "INIT_DATA_PICTURE_COMPRESS":
        return {
            ...state,
            numberPictures: action.numberPictures,
            linkPicture: [],
            compressPictureId: action.compressPictureId
        };
    case "ADD_NEW_LINK_PICTURE":
        return {
            ...state,
            linkPicture: [...state.linkPicture, action.newLinkPicture],
        };
    case "DECREMENT_NUMBER_PICTURE_COMPRESS":
        return {
            ...state,
            numberPictures: state.numberPictures--,
        };
    
    default: return state;
    }
};

export default dataPictureCompressReducer;