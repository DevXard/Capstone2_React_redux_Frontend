import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllItems, itemsSelector} from "../../store/slices/itemsSlice"
import {userSelector} from '../../store/slices/userSlice';
import ItemsCard from './ItemsCard';
import './items.css'

const Items = () => {

    const dispatch = useDispatch();
    const {items} = useSelector(itemsSelector)
    const {isLogedIn} = useSelector(userSelector)

    useEffect(() => {
        if(isLogedIn){
            dispatch(getAllItems())
        }
            
        
            
    }, [dispatch, isLogedIn]);

     
    return(
        <div className="flex justify-center ">
            <div className=" w-11/12 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center  shadow-xl rounded-xl scroll-hide border border-gray-200">
            {items.map(item => <ItemsCard key={item.id} item={item}></ItemsCard>)}
            </div>
        </div>
        
    )
}

export default Items;