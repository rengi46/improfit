import { GET_IMAGE , GET_ALL_IMAGE , ADD_IMAGE } from "../type/imageType";

const initialState = {
    loaded:true,
    listImage:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_IMAGE:
            return {
                ...state,
                listImage:action.payload,
                loaded:false
            }
        case ADD_IMAGE:
            return {
                ...state,
                listImage:[...state.listImage,action.payload]
            }
        default:
            return state
    }
}