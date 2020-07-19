import React from 'react';
import { Line } from 'react-chartjs-2';
import { getChartData } from "./helper";

const state = (page, news) => {
    const { objectIds, votes } = getChartData(page, news)
    return {
        labels: objectIds,
        datasets: [
            {
                label: '',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 2,
                data: votes                                     
            }
        ]
    }
}

export const LineChart = ({ page, news }) =>
    <div className="lineChart">
        <Line
            data={state(page, news)}
            options={{
                legend: {
                    display: false
                },
            }}
        />
    </div>
