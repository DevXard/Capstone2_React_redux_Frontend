import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {loginUser, userSelector} from '../../store/slices/userSlice';

const LogIn = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {isLogedIn} = useSelector(userSelector)

    const [formData, setFormData] = useState({
        username:"",
        password:""
        
    })
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginUser(formData))
    }

    useEffect(() => {
        if(isLogedIn){
            history.push('/');
        }
    }, [isLogedIn])

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
                    <label>Password</label>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password" />
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

export default LogIn;