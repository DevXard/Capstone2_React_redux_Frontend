import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {getItemByName} from '../../store/slices/itemsSlice';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        search: ''
    })

    
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(data => ({...data, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(getItemByName(formData.search))
    }
    
    return (
        <div>
            <div className="p-8 mb-5 flex justify-center">
                <form 
                onSubmit={handleSubmit}
                className="bg-white w-10/12 flex items-center rounded-full shadow-xl border border-gray-100">
                    <input 
                    className="rounded-l-full w-full py-4 px-6 leading-tight focus:outline-none" 
                    name="search"
                    value={formData.search}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Search"/>
                    <div className="p-4">
                        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center text-sm" >Search</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default SearchBar;