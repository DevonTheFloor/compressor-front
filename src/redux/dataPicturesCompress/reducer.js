// import initStateDataPictureCompress from "./init-state";
// import {INIT_DATA_PICTURE_COMPRESS} from "./type";

const dataPictureCompressReducer = (state = {}, action) => {
    switch (action.type) {
    case "INIT_DATA_PICTURE_COMPRESS":
        return {
            ...state,
            numberPictures: action.numberPictures,
            dataPictures: [],
            compressPictureId: action.compressPictureId
        };
    case "ADD_NEW_LINK_PICTURE":
        return {
            ...state,
            dataPictures: [...state.dataPictures, action.newDataPictures],
        };
    case "DECREMENT_NUMBER_PICTURE_COMPRESS":
        return {
            ...state,
            numberPictures: state.numberPictures--,
        };
    case "GET_PICTURES_LINKS":
        return state.dataPictures.map(dataPicture => dataPicture.pinctureLink);

    case "GET_PICTURES_DATA":
        return {
            ...state,
        };
    
    default: return state;
    }
};

export default dataPictureCompressReducer;