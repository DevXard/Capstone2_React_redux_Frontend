import {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getUser, userSelector} from '../../store/slices/userSlice';
import ItemsCard from '../items/ItemsCard';
import Map from '../Map/Map';

const UserDetails = () => {

    const { id } = useParams();
    const {foundUser} = useSelector(userSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(id))

    },[dispatch])

    if(!foundUser.user) {
        return <div>Loading</div>
    }

    const {user, items} = foundUser
    
    return(
        <div>
        <div className="flex justify-center mb-8">
            <div className="flex justify-center w-2/5">
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 ">
                    <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
                    src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                    alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <h1>Username: {user.username}</h1>
                    <h1>Name: {user.name}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>Phone: {user.phone}</h1>
                    
                    </div>
                </figure>
            </div>
            
        </div>
        <Map />
        <div className='flex justify-center mt-8'>
            <div className=" w-11/12 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center  shadow-xl rounded-xl scroll-hide border border-gray-200">
                {items.map(item => <ItemsCard key={item.id} item={item} /> )}
            </div>
        </div>
        </div>
    )
}

export default UserDetails;