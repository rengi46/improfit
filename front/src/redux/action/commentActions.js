import axios from "axios";
import { GET_COMMENT, ADD_COMMENT } from "../type/commentType";



export const getCommentByImage = (idImage) => {
  return (dispatch) => {
    var config = {
      method: 'get',
      url: `http://localhost:3001/comments/${idImage}`,
      headers: { }
    };
    axios(config)
    .then(response=>{
        dispatch({
          type: GET_COMMENT,
          payload: response.data.body
        })
    })
  }
}

export const addCommentByImage = (idImage,comment) => {
  return (dispatch) => {
    var config = {
      method: 'post',
      url: `http://localhost:3001/comments`,
      headers: { },
      data:{
        imageId:idImage,
        comment:comment
      }
    };
    axios(config)
    .then(response=>{
      dispatch({
        type: ADD_COMMENT,
        payload:response.data.body
      })
    })
  }
}