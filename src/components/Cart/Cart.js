import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ordersSelector, buyOrders} from '../../store/slices/ordersSlice';
import {userSelector} from '../../store/slices/userSlice';
import CartCard from './CartCard';

const Cart = () => {

    const dispatch = useDispatch();
    const { orders } = useSelector(ordersSelector)
    const {userData} = useSelector(userSelector)
    console.log(orders)
    useEffect(() => {
        dispatch(buyOrders(userData.id))
    },[userData.id, dispatch])

    
    return (
        <div>
        {orders.map((order) => <CartCard key={order.id} data={order}/>)}
            
        </div>
    )
}

export default Cart;