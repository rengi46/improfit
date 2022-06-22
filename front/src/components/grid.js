import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllImage } from '../redux/action/imageActions';
import { Cell } from './cell'

export const ImageGrid = () => {
    const image = useSelector(state => state.image);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(image.loaded){
            dispatch(getAllImage());
        }
    },[dispatch,image]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto my-16 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Rank
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
            {image.loaded ? <tr><td>loaded...</td></tr> :
                image.listImage.map((item,index) => {
                    const date = String(item.date).split("T")[0]
                    console.log(date)
                    return <Cell
                        rank={item.rank}
                        title={item.title}
                        date={date}
                        key={index}
                    />
                })
            }
            </tbody>
        </table>
    </div>
)
}
