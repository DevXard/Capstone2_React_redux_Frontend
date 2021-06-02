import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ordersSelector, sellOrders} from '../../store/slices/ordersSlice';
import {userSelector} from '../../store/slices/userSlice';
import CartCard from '../Cart/CartCard';

const Orders = () => {

    const dispatch = useDispatch();
    const {orders} = useSelector(ordersSelector)
    const {userData} = useSelector(userSelector)

    useEffect(() => {
        dispatch(sellOrders(userData.id))
    },[userData.id, dispatch])
    
    let total = orders.reduce((acc, val) => {
        return acc + val.price
    },0)

    return (
        <div> 
            {orders.map((order) => <CartCard key={order.orderid} data={order}/>)}
            <div className="flex justify-end m-3">
                <h1 className="p-3 border rounded-lg">Total: ${total}</h1>
            </div>
        </div>
    )
}

export default Orders;