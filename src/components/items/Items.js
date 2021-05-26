import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllItems, itemsSelector} from "../../store/slices/itemsSlice"

const Items = () => {

    const dispatch = useDispatch();
    const {items} = useSelector(itemsSelector)

    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch]);

     
    return(
        <div>
        <h1>hi</h1>
           {items.map(item => <div key={item.id}>{item.type}</div>)}
        </div>
    )
}

export default Items;