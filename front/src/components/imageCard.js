import React from 'react'

const ImageCard = ({title,url}) => {
  return (
    <div className="max-w-xl w-5/6 h-5/6 mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-300 flex justify-center items-center flex-col">
      <div className='w-full h-80'> 
        <img  className="h-80 m-auto" src={url} alt=""/>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </div>
    </div>
  )
}

export default ImageCard