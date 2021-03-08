import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './screens/SearchResults';
import './App.css';

function App() {
  const [data, setData] = useState('');
  return (
    <div className="App light-back">
      <SearchBar dataSetter={(e) => setData(e)} />
      <SearchResults data={data} />
    </div>
  );
}

export default App;
