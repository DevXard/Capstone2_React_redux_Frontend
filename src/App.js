import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useJwt} from "react-jwt";

import Items from './components/items/Items';
import SearchBar from './components/search/searchBar';
import Nav from './components/Nav/Nav';
import DetailsPage from './components/Details/DetailsPage';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import ClosestSellers from './components/ClosestSellers/ClosestSellers';
import Map from './components/Map/Map';
import Profile from './components/Profile/Profile';
import AddItem from './components/AddItem/AddItem';
import UserDetails from './components/User/UserDetails';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/LogIn';
import API from './api';
import {refreshToken} from './store/slices/userSlice';
import { userSelector } from './store/slices/userSlice'


function App() {
  const {isLogedIn} = useSelector(userSelector)
  const { isExpired } = useJwt(API.token);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!API.token || isExpired){
      
      dispatch(refreshToken())
    }
    
  },[isExpired, dispatch]);

  

  return (
    <>
    <BrowserRouter>
      <Nav />
      
      <Switch >
        <Route exact path="/">
          <SearchBar />
          <Items />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/additem">
          <AddItem />
        </Route>
        <Route exact path="/details/:id">
          <DetailsPage />
        </Route>
        <Route exact path="/cart" >
          <Cart />
        </Route>
        <Route exact path="/orders" >
          <Orders />
        </Route>
        <Route exact path="/map" >
          <Map />
        </Route>
        <Route exact path="/closeseller" >
          <ClosestSellers />
        </Route>
        <Route exact path="/user/:id" >
          <UserDetails />
        </Route>
      </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
