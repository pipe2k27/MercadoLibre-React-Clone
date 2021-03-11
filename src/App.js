import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import SearchResults from './screens/SearchResults';
import Home from './screens/Home';
import Item from './screens/Item';

function App() {
  return (
    <div className="App light-back">
      <SearchBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items">
          <SearchResults />
        </Route>
        <Route exact path="/items/:id">
          <Item />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
