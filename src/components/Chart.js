import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getGlobalHistory } from '../ExtarnalSources.js';
import './Chart.css'
const Chart = () => {
    const [history, setHistory] = useState({});

    useEffect(() => {
        const fetchHistory = async () => {
            setHistory(await getGlobalHistory());
        }
        
        fetchHistory()
        
        
    }, []);

    const computeData = (type) => {
        var tempArray = []
        for (let [key, value] of Object.entries(history)) {
            console.log(key)
            if (type == 'cases'){
            tempArray.push(value.confirmed)
            } else if (type == 'deaths'){
              tempArray.push(value.deaths)
            } else if (type == 'recovered'){
                tempArray.push(value.recovered)
              }
        }
        return tempArray
      }

    const lineChart = (
        history ? (<Line 
        data={{
            labels: Object.keys(history),
            datasets: [{
                // data: history.map((data) => data.cases)
                data: computeData('cases'),
                borderColor: 'blue',
                label: "Cases"
            },{
                data: computeData('deaths'),
                borderColor: 'red',
                label: "Deaths"
            },{
                data: computeData('recovered'),
                borderColor: 'green',
                label: "Recovered"
            }
            ]
        }}
        />) : null
    )


    return (
        <div className="chartContainer">
            {lineChart}
        </div>
    )
}

export default Chart;