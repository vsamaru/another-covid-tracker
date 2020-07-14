import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css'


const Chart = ({ history }) => {
    const computeData = (type) => {
        var tempArray = []
        for (let [key, value] of Object.entries(history)) {
            if (type === 'cases'){
            tempArray.push(value.confirmed)
            } else if (type === 'deaths'){
              tempArray.push(value.deaths)
            } else if (type === 'recovered'){
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


    if (history) {
        return (
            <div className="chartContainer">
                {lineChart}
            </div>
        )
    } else {
        return <h2>No History Availaible</h2>
    }
}

export default Chart;