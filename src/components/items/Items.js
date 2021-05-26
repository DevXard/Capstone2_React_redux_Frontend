import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllItems, itemsSelector} from "../../store/slices/itemsSlice"
import ItemsCard from './ItemsCard';
import './items.css'

const Items = () => {

    const dispatch = useDispatch();
    const {items} = useSelector(itemsSelector)

    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch]);

     
    return(
        <div className="flex justify-center ">
            <div className=" w-11/12 grid grid-rows-1 grid-flow-col gap-4 overflow-x-scroll shadow-xl rounded-xl scroll-hide border border-gray-200">
            {items.map(item => <ItemsCard key={item.id} item={item}></ItemsCard>)}
            </div>
        </div>
        
    )
}

export default Items;