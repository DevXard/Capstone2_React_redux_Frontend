import {Link} from 'react-router-dom';
import {useJwt} from 'react-jwt';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector, logOutUser} from '../../store/slices/userSlice'


const Nav = () => {

    const dispatch = useDispatch();
    const {isLogedIn, token} = useSelector(userSelector)
    const {decodedToken} = useJwt(token)

    async function logOut() {
        /*Destructoring user Id from token 
        and dispatching action to logout */
        const {uId} = decodedToken
        dispatch(logOutUser(uId))
    }
    
    /*
        If Redux user state isLogedIn is true show logout page
        else show login page
     */
    function logedIn() {
        if(isLogedIn){
            
            return (
            <div>
                <Link to="" onClick={logOut} className="text-white mx-2">Log Out</Link>
            </div>
            )
        }
        return (
            <div>
                <Link to="/login" className="text-white mx-2">Login</Link>
                <Link to="/signup" className="text-white mx-2">Sign Up</Link>
            </div>
        )
            
        
    }

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

                    {logedIn()}
                </div>
            </div>
        </nav>
        
    )
}

export default Nav;