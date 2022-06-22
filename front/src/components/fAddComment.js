import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCommentByImage } from '../redux/action/commentActions'
import { Input } from './input'

export const AddComment = ({imageId}) => {
  const [comment,setComment] = useState("")
  const dispatch = useDispatch()
  const onSubmit = ()=>{
    dispatch(addCommentByImage(imageId,comment))
    setComment("")
  }
  return (
    <div className='flex items-center justify-between'>
      <Input
        onChange={(e)=>{setComment(e.target.value)}}
        value={comment}
        name="comment"
        placeholder=" "
      />
      <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
      onClick={onSubmit}>
      add</button>
  </div>
  )
}
