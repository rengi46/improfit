import React, { useState } from 'react'
import { useFormik } from 'formik';

import InputUpdate from '../inputs/inputFile/inputUpdate';
import { Input } from '../inputs/input';
import { useDispatch } from 'react-redux';
import { addImage } from '../../redux/action/imageActions';


export const AddImage = ({close}) => {
  const [img,setImg] = useState(false)
  const dispatch = useDispatch()
    const formik = useFormik({
      initialValues:{
        title: '',
        image: ''
      },
      onSubmit :async values => {
        dispatch(addImage(values.image,values.title));
        close()
      }
    });

    const onChange = (e)=>{
      formik.handleChange(e);
      formik.setFieldValue('image', e.target.files[0]);
      setImg(true)
    }


  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex items-center justify-center flex-col">
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        name="title"
        placeholder=' '
      />
      <InputUpdate
        onChange={(e) => { onChange(e) }}
        onBlur={formik.handleBlur}
        name="image"
      />
      {  img &&
        <img
          src={URL.createObjectURL(formik.values.image)}
          alt={formik.values.image.name}
          className="img p-2"
          height={200}
          width={200} />
      }
      <button type="Summit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        upload image
      </button>
    </form>
  )
}
