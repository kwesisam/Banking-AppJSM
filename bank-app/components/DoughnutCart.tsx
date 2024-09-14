/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import React from 'react'
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutCart = ({accounts}: DoughnutChartProps) => {
    const data = {
        labels: [
          'Bank 1',
          'Bank 2',
          'Bank 3'
        ],
        datasets: [{
          label: 'Banks',
          data: [300, 50, 100],
          backgroundColor: [
            '#0747b6',
            '#2265d8',
            '#2f91fa'
          ],
        }]
      };
  return (
     <Doughnut data={data} options={
        {
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
     } />
    )
}

export default DoughnutCart