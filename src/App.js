import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useJwt} from "react-jwt";

import Items from './components/items/Items';
import SearchBar from './components/search/searchBar';
import Nav from './components/Nav/Nav';
import DetailsPage from './components/Details/DetailsPage';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import AddItem from './components/AddItem/AddItem';
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
    
  },[isExpired, API.token])

  function test() {
    console.log()
  }

  return (
    <>
    <BrowserRouter>
      <Nav />
      <button onClick={test} >Test</button>
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
      </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
