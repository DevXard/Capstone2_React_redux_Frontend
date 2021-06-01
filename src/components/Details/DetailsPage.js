import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {getItem, itemsSelector} from '../../store/slices/itemsSlice';

const DetailsPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {item} = useSelector(itemsSelector)

    useEffect(() => {
        dispatch(getItem(id))
    },[id, dispatch])
    
    let isoDate = new Date(item.date)

    let date = `${isoDate.getFullYear()}/${isoDate.getMonth()}/${isoDate.getDate()}`
    
    return (
        <div className='m-8 px-8' >
        <div className="flex shadow-lg ">
        <div className="flex-none w-48 relative">
          <img src="https://c8.alamy.com/comp/T58125/selection-of-fruit-and-vegetables-on-white-background-T58125.jpg" alt="" className="absolute inset-0 w-full h-full object-cover p-3 border border-gray-100"/>
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              {item.type}
            </h1>
            <h1 className="flex-auto text-2xl font-semibold">
              {item.name}
            </h1>
            <div className="text-xl font-semibold text-gray-500">
              ${item.price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              Quantity: {item.quantity}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6">
            <div className="space-x-2 flex">
              <p>{item.details}</p>
            </div>
            <div className="ml-auto text-sm text-gray-500 underline">{date}</div>
          </div>
          <div className="flex space-x-3 mb-4 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
              <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
              <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
              <svg width="20" height="20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
        </div>
    )
}

export default DetailsPage;