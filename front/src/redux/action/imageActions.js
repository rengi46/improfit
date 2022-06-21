import axios from "axios";
import {  ADD_IMAGE, GET_ALL_IMAGE } from "../type/imageType";


export const getAllImage = () => {
    return (dispatch) => {
        var config = {
            method: 'get',
            url: 'http://localhost:3001/imageList',
            headers: { }
        };
        axios(config)
        .then(response=>{
            dispatch({
                type: GET_ALL_IMAGE,
                payload: response.data.body
            })
        })
    }
}

export const getImage = (idImage) => {
    return (dispatch) => {
        var config = {
            method: 'get',
            url: `http://localhost:3001/image/${idImage}`,
            headers: { }
        };
        axios(config)
        .then(response=>{
            dispatch({
                type: ADD_IMAGE,
                payload: response.data.body
            })
        })
    }
}
