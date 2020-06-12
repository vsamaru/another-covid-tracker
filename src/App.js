import React, { Component } from 'react'
import './App.css';

import Numbers from './components/Numbers'
import Chart from './components/Chart'
import Table from './components/Table'

import { getGlobalFigures, getGlobalHistory } from './ExtarnalSources'

export default class App extends Component {
  state = {
    data: {},
    history: {}
  }
  async componentDidMount() {
    const data = await getGlobalFigures();
    const history = await getGlobalHistory();
    this.setState({ data, history });
  }
  render() {
    return (
      <div className="App">
          <Numbers />
          <Chart />
          <Table />
          <button onClick={()=>{console.log(this.state)}}>WOW</button>
          {/* <h1>{this.state}</h1> */}
        </div>
    )
  }
}
