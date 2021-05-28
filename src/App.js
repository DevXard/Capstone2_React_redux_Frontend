import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useJwt} from "react-jwt";

import Items from './components/items/Items';
import SearchBar from './components/search/searchBar';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/LogIn';
import API from './api';
import {refreshToken} from './store/slices/userSlice';


function App() {
  
  const { isExpired } = useJwt(API.token);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!API.token || isExpired){
      
      dispatch(refreshToken())
    }
    
  },[isExpired, API.token])

  function test() {
    console.log(API.token)
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
      </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
