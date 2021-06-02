import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ordersSelector, buyOrders} from '../../store/slices/ordersSlice';
import {userSelector} from '../../store/slices/userSlice';
import CartCard from './CartCard';

const Cart = () => {

    const dispatch = useDispatch();
    const { orders } = useSelector(ordersSelector)
    const {userData} = useSelector(userSelector)
    
    useEffect(() => {
        dispatch(buyOrders(userData.id))
    },[userData.id, dispatch])

    let total = orders.reduce((acc, val) => {
        return acc + val.price
    },0)
    
    return (
        <div>
        {orders.map((order) => <CartCard key={order.orderid} data={order}/>)}
            <div>
                <h1>Total: ${total}</h1>
            </div>
        </div>
    )
}

export default Cart;