// src/components/dashboard/ChartCard.js
import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ChartCard = ({ title }) => {
  const [timeRange, setTimeRange] = useState('7days');
  
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: title,
        data: title === 'Earnings' ? [0, 0, 0, 0, 0, 0, 0] : [0, 0, 0, 0, 0, 1, 0],
        backgroundColor: title === 'Earnings' ? 'rgba(54, 162, 235, 0.5)' : 'rgba(153, 102, 255, 0.5)',
        borderColor: title === 'Earnings' ? 'rgb(54, 162, 235)' : 'rgb(153, 102, 255)',
        borderWidth: 2,
        fill: title === 'Admissions' ? false : true,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      <div className="p-4 flex items-start">
        <div className="w-1/4 pr-4">
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-primary"
                name={`${title}-time-range`}
                value="7days"
                checked={timeRange === '7days'}
                onChange={() => setTimeRange('7days')}
              />
              <span className="ml-2">7 Days</span>
            </label>
            <label className="inline-flex items-center block">
              <input
                type="radio"
                className="form-radio text-primary"
                name={`${title}-time-range`}
                value="6months"
                checked={timeRange === '6months'}
                onChange={() => setTimeRange('6months')}
              />
              <span className="ml-2">6 Months</span>
            </label>
            <label className="inline-flex items-center block">
              <input
                type="radio"
                className="form-radio text-primary"
                name={`${title}-time-range`}
                value="1year"
                checked={timeRange === '1year'}
                onChange={() => setTimeRange('1year')}
              />
              <span className="ml-2">1 Year</span>
            </label>
          </div>
        </div>
        <div className="w-3/4 h-64">
          {title === 'Earnings' ? (
            <Line data={data} options={options} />
          ) : (
            <Bar data={data} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
