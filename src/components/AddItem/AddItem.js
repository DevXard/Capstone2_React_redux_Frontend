import { Link } from 'react-router-dom';

const AddItem = () => {


    function handleChange(){

    }

    function handleSubmit(){

    }

    return (
        <div className="bg-grey-lighter min-h-screen flex mt-5 flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Add New Item</h1>
                    <form onSubmit={handleSubmit}>
                    <label>Type</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="type"
                        
                        onChange={handleChange}
                        placeholder="Type" />
                    <label>Name</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        
                        onChange={handleChange}
                        placeholder="Name" />
                    <label>Details</label>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="details"
                        
                        onChange={handleChange}
                        placeholder="Details" />
                    <label>quantity</label>
                    <input 
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="quantity"
                        
                        onChange={handleChange}
                        placeholder="Quantity" />
                    <label>Price</label>
                    <input 
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="price"
                        
                        onChange={handleChange}
                        placeholder="Price" />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Add Item</button>
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

export default AddItem;