import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Items from './components/items/Items';
import SearchBar from './components/search/searchBar';
import Nav from './components/Nav/Nav';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/LogIn';


function App() {
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
      </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
