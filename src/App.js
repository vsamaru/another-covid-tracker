import React from 'react';
import './App.css';

import Numbers from './components/Numbers'
import Chart from './components/Chart'
import Table from './components/Table'

function App() {
  getGlobalFigures()
  getGlobalHistory()
  return (
    <div className="App">
      <Numbers />
      <Chart />
      <Table />
    </div>
  );
}

const numbersUrl = "https://corona.lmao.ninja/v2/all";
const globalDataUrl = 'https://covidapi.info/api/v1/global/count'

async function getGlobalFigures() {
  await fetch(numbersUrl)
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
}
async function getGlobalHistory() {
  fetch(globalDataUrl)
  .then(response => response.json())
  .then(data => {
      console.log(data)
  })
}

export default App;
