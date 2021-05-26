import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {signupUser, userSelector} from '../../store/slices/userSlice';

const SignUp = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {isSuccess} = useSelector(userSelector)

    const [formData, setFormData] = useState({
        username:"",
        name:"",
        email:"",
        password:"",
        confirm_password:"",
        phone:"",
        street_address:"",
        city:"",
        state:"",
        zip:"",
        
    })

    function handleSubmit(e) {
        e.preventDefault();
        if(formData.password !== formData.confirm_password) {
            return <div>Error</div>
        }
        dispatch(signupUser(formData))
    }

    // useEffect(() => {
    //     if(isSuccess){
    //         history.push('/');
    //     }
    // }, [isSuccess])

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}))
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex mt-5 flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username" />
                    <label>Full name</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Full Name" />
                    <label>Email</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email" />
                    <label>Password</label>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password" />
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        placeholder="Confirm Password" />
                    <label>Phone</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone" />
                    <label>Address</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="street_address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address" />
                    <label>City</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City" />
                    <label>State</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State" />
                    <label>Zip</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="Zip" />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    </form>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <Link className="no-underline border-b border-grey-dark text-grey-dark mx-1" to="#">
                            Terms of Service
                        </Link> and 
                        <Link className="no-underline border-b border-grey-dark text-grey-dark mx-1" to="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue mx-1" to="../login/">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}

export default SignUp;