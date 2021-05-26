import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Items from './components/items/Items'
import SearchBar from './components/search/searchBar'
import Nav from './components/Nav/Nav'
import SignUp from './components/SignUp/SignUp'


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
      </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
