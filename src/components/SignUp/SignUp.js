import {useState} from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {

    const [formData, setFormData] = useState({
        username:"",
        fullname:"",
        email:"",
        password:"",
        confirm_password:"",
        phone:"",
        address:"",
        ciry:"",
        state:"",
        zip:"",
        
    })

    function handleSubmit(e) {
        e.preventDefault();
        
    }

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
                    <lable>Username</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username" />
                    <lable>Full name</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Full Name" />
                    <lable>Email</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email" />
                    <lable>Password</lable>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password" />
                    <lable>Confirm Password</lable>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        placeholder="Confirm Password" />
                    <lable>Phone</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone" />
                    <lable>Address</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address" />
                    <lable>City</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City" />
                    <lable>State</lable>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State" />
                    <lable>Zip</lable>
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
                        <Link className="no-underline border-b border-grey-dark text-grey-dark mx-1" href="#">
                            Terms of Service
                        </Link> and 
                        <Link className="no-underline border-b border-grey-dark text-grey-dark mx-1" href="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue mx-1" href="../login/">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}

export default SignUp;