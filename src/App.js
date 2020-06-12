import React from 'react';
import './App.css';

import Numbers from './components/Numbers'
import Chart from './components/Chart'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <Numbers />
      <Chart />
      <Table />
    </div>
  );
}

export default App;
