import React, { Component } from 'react'
import './App.css';

import CountrySelect from './components/CountrySelect'
import Numbers from './components/Numbers'
import Chart from './components/Chart'

import { getGlobalFigures, getGlobalHistory, getCountryFigures, getCountryHistory } from './ExtarnalSources'

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

  CountryChanged = async (country) => {
    if (country !== "Global") {
    const countryFigures = await getCountryFigures(country);
    const countryHistory = await getCountryHistory(countryFigures.countryInfo.iso3);
    this.setState({ data: countryFigures, history: countryHistory });
    } else {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div className="App">
        <CountrySelect CountryChanged={this.CountryChanged} />
          <Numbers data={this.state.data} />
          <Chart history={this.state.history} />
      </div>
    )
  }
}
