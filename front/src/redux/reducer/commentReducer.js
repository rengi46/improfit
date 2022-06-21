import { GET_COMMENT, ADD_COMMENT } from "../type/commentType";

const initialState = {
    loaded:true,
    comments:[]

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state
            }
        case ADD_COMMENT:
            return {
                ...state
            }
        default:
            return state
    }
}