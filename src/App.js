import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import SearchResults from './screens/SearchResults';
import './App.css';

function App() {
  return (
    <div className="App light-back">
      <SearchBar />
      <Switch>
        <Route path="/items/:id">
          <SearchResults />
        </Route>
        <Route path="/items">
          <SearchResults />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
