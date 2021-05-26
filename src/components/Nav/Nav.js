import {Link} from 'react-router-dom';

const Nav = () => {

    return(
        <nav class="bg-gray-800">
            <div className="max-w-full p-5 mx-auto">
                <div className='flex justify-between'>
                    <div className='flex'>
                        <Link to="/" className="text-white mx-5"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg></Link>

                        <div>
                            <Link to="/" className="text-white mx-2">Profine</Link>
                            <Link to="/" className="text-white mx-2">Register</Link>
                        </div>
                    </div>

                    <div>
                        <Link to="/" className="text-white mx-2">Login</Link>
                        <Link to="/" className="text-white mx-2">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav;