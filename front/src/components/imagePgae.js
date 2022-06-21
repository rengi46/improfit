import React from 'react'
import {  useParams } from 'react-router-dom';

export const ImagePgae = () => {
    const { id } = useParams();
  return (

    <div>imagePgae {id}</div>
  )
}

