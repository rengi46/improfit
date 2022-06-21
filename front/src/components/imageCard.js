import React from 'react'

const ImageCard = ({title,url}) => {
  return (
    <div class="max-w-xl mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-300 ">
        <img class="rounded-t-lg w-full cover" src={url} alt=""/>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </div>
    </div>
  )
}

export default ImageCard