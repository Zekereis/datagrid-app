import React from 'react';
import './App.css';
import HomeHeader from './components/HomeHeader';
import HomeTable from './components/HomeTable';

const App = () => {
  return (
    <div className='App'>
      <HomeHeader />
      <HomeTable />
    </div>
  );
}

export default App;
