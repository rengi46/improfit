import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';


import { getAllImage } from '../redux/action/imageActions';
import { Button } from './button';
import ImageCard from './imageCard';

export const ImagePgae = () => {
  //hooks
    const { id } = useParams();
    const dispatch = useDispatch();
    const imageState = useSelector(state => state.image);

  //hooks

  //verification state
    React.useEffect(() => {
      if (imageState.loaded){
        dispatch(getAllImage());
      }
    }, [dispatch, imageState.loaded, id]);
    return (
        <div className='w-full m-auto my-16 text-center'>
        <Button goTo='/' />
           {!imageState.loaded && 
              <ImageCard
                title={imageState.listImage[id-1].title}
                url={imageState.listImage[id-1].url}
              />
            }
        </div>
    )
}


