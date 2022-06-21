import { GET_IMAGE , GET_ALL_IMAGE , ADD_IMAGE } from "../type/imageType";

const initialState = {
    cargando:true,
    listImage:[],
    Image:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_IMAGE:
            return {
                ...state,
                listImage:action.payload,
                cargando:false
            }
        case ADD_IMAGE:
            return {
                ...state
            }
        default:
            return state
    }
}