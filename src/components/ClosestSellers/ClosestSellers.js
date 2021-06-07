import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getNearestUsers, userSelector} from "../../store/slices/userSlice";
import Map from '../Map/Map';
import SellerCard from './SellerCard';

const ClosestSellers = () => {

    const dispatch = useDispatch();
    const {userData, nearestUsers} = useSelector(userSelector)
    const [formData, setFormData] = useState({
        miles: '0',
    })

    
    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormData(data => ({...data, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        formData.lat = userData.lat
        formData.lng = userData.lng
        dispatch(getNearestUsers(formData))
    }

    console.log(nearestUsers)

    return (
        <div>
        <div className="flex justify-center">
            
            <form
            onSubmit={handleSubmit}
            className=" flex justify-between p-3 w-2/5 shadow-md rounded-lg" >
                <div>
                    <h1 className="text-lg font-semibold">Find Sellers in Radius</h1>
                    <label className='m-2' htmlFor='miles'>Miles: {formData.miles}</label>
                </div>

                <input 
                    onChange={handleChange}
                    value={formData.miles}
                    id='miles' 
                    name='miles' 
                    type="range"
                    min="0" max="100"
                />
                
                <div className="p-4">
                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center text-sm" >Find</button>
                </div>
            </form>
        </div>
        <div className=" flex justify-center ">
            <div className="w-2/5 mt-5 ">
            <Map />
            </div>
            
        </div>
        <div className=" flex justify-center mt-8 ">
        <h1 className="text-lg font-bold">Sellers</h1>  
            <div className=" flex justify-center w-3/5 ">
                
                {nearestUsers.map(data => <SellerCard data={data} />)}
            </div>
        </div>
        
        </div>
    )
}

export default ClosestSellers;