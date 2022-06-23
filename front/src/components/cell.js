import React from 'react'
import { useNavigate  } from "react-router-dom";

export const Cell = ({rank,title,date}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${rank}`);
  }
  return (
    <tr className=" border-b bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-600" onClick={()=>{handleClick()}}>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {rank}
      </th>
      <td className="px-6 py-4">
        {title}
      </td>
      <td className="px-6 py-4">
        {date}
      </td>
    </tr>
  )
}
