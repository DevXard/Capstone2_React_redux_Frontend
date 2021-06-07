import {useState} from 'react';
import {useSelector} from "react-redux";

import {userSelector} from '../../store/slices/userSlice';

const SearchBar = () => {

    const {userData} = useSelector(userSelector);
    const [formData, setFormData] = useState({
        miles: '0'
    })

    console.log(userData);
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(data => ({...data, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }
    
    return (
        <div>
            <div className="p-8 mb-5 flex justify-center">
                <form className="bg-white w-10/12 flex items-center rounded-full shadow-xl border border-gray-100">
                    <input className="rounded-l-full w-full py-4 px-6 leading-tight focus:outline-none" type="text" placeholder="Search"/>
                    <div className="p-4">
                        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center text-sm" >Search</button>
                    </div>
                </form>

            </div>
            <h1 className="flex justify-center text-lg font-bold">Look for sellers near me</h1>
            <div className="flex justify-center">
                
                <form className="flex justify-center" >
                    <input 
                    onChange={handleChange}
                    value={formData.miles}
                    id='miles' 
                    name='miles' 
                    type="range"
                    min="0" max="100"
                    />
                    <label className='m-2' htmlFor='miles'>Miles: {formData.miles}</label>
                    <div className="p-4">
                        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center text-sm" >Find</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;