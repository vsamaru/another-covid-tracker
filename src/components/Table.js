import React from 'react'

export const Table = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Cases</td>
                        <td>Deaths</td>
                        <td>Recovered</td>
                    </tr>
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
