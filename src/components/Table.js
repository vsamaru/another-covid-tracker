import React from 'react'

export const Table = () => {
    return (
        <div>
            <table>
                <thead>
                    <th>Date</th>
                    <th>Cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </thead>
                <tbody>
                    <tr>
                        <td>12-12-2020</td>
                        <td>30000</td>
                        <td>30000</td>
                        <td>30000</td>
                    </tr>
                </tbody>
             </table>
        </div>
    )
}

export default Table;
