import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";


import { getCommentByImage } from '../../redux/action/commentActions';
import { getAllImage } from '../../redux/action/imageActions';
import { Button } from '../button';
import { BackIcon } from '../icons/backIcon';
import ImageCard from '../imageCard';
import { ListComments } from '../listComments';

export const ImagePgae = () => {
  //hooks
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageState = useSelector(state => state.image);
    const commentState = useSelector(state => state.comment);
  //hooks

  //verification state
    React.useEffect(() => {
      if (imageState.loaded){
        dispatch(getAllImage());
      }
      else if (commentState.loaded ){
        console.log("comment loaded");
        dispatch(getCommentByImage(imageState.listImage[id-1]._id));
      }
      else if(commentState.comments[0].imageId !== imageState.listImage[id-1]._id){
        console.log(commentState);
        dispatch(getCommentByImage(imageState.listImage[id-1]._id));
      }
    }, [dispatch, imageState.loaded, commentState , id]);
  //verification state

  //function
    const handleClick = () => {
      navigate('/');
    }


    return (
        <div className='w-full m-auto my-16 text-center'>
        <Button click={handleClick} >
          <BackIcon />
        </Button>
          {
            !imageState.loaded && 
              <ImageCard
                title={imageState.listImage[id-1].title}
                url={imageState.listImage[id-1].url}
              />
            }
            {
              !commentState.loaded &&
                <ListComments
                  coments={commentState.comments[0]}
                />
           
            }
        </div>
    )
}


