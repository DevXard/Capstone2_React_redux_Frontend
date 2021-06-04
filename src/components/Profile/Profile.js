import {useSelector} from "react-redux";

import {userSelector} from '../../store/slices/userSlice';

import Map from '../Map/Map'

const Profile = () => {

    const {userData} = useSelector(userSelector)
    const {name, username, email, phone, lng, lat} = userData;
    console.log(userData)
    return (
        <>
        <div className="flex justify-center">
            <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0  ">
            <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
            src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" alt="" width="384" height="512"/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <div>
                    <h1 className="text-xl font-bold">Username: <span className="text-lg font-normal">{username}</span></h1>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Name: <span className="text-lg font-normal">{name}</span></h1>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Email: <span className="text-lg font-normal">{email}</span></h1>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Phone: <span className="text-lg font-normal">{phone}</span></h1>
                </div>
              </blockquote>
              
            </div>
          </figure>
          
        </div>
        <div className="flex justify-center m-8">
            <div className='w-3/6'>
                <Map lat={lat} lng={lng}/>
            </div>  
        </div>
        
        </>
    )
}

export default Profile;