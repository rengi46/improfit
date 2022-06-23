import React from 'react'
import { AddComment } from './forms/fAddComment'

export const ListComments = ({coments}) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg w-2/3 mx-auto my-16 ">
      <div className="w-full text-sm text-left  dark:text-gray-400">
        <div className="text-lg text-gray-700 uppercase p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <AddComment
            imageId={coments.imageId}
          />
        </div>
        <div className=" border-b p-2 text-gray-300 bg-gray-800 border-gray-700 ">
          {
            coments.comments.map((item,index) => {
              return <div className="px-6 py-4 font-medium" key={index}>
                {item}
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
