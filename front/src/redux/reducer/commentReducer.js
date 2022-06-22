import { GET_COMMENT, ADD_COMMENT } from "../type/commentType";

const initialState = {
    loaded:true,
    comments:null

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
                comments:action.payload,
                loaded:false
            }
        case ADD_COMMENT:
            return {
                ...state
            }
        default:
            return state
    }
}