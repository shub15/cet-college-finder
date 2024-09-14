import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
// import axios from 'axios';  // Assuming you're using axios to fetch data

// Import required chart components
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CutoffChart = () => {
    const [cutoffData, setCutoffData] = useState([
        { "year": 2020, "cutoff": 85 },
        { "year": 2021, "cutoff": 87 },
        { "year": 2022, "cutoff": 89 },
        { "year": 2023, "cutoff": 91 }
    ]);

    // Fetch cutoff data from backend
    //   useEffect(() => {
    //     const fetchCutoffData = async () => {
    //       try {
    //         const response = await axios.get('/api/cutoffs');  // Replace with your backend API endpoint
    //         setCutoffData(response.data);
    //       } catch (error) {
    //         console.error('Error fetching cutoff data:', error);
    //       }
    //     };

    //     fetchCutoffData();
    //   }, []);

    // Prepare data for the chart
    const data = {
        labels: cutoffData.map(item => item.year),  // Extract years
        datasets: [
            {
                label: 'Cutoff Percentile',
                data: cutoffData.map(item => item.cutoff),  // Extract cutoff values
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,  // Smoothing the curve
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#ff6347',  // Change legend label color
            },
          },
          title: {
            display: true,
            text: 'Cutoff Trend Over the Years',
            color: '#1e90ff',  // Change title color
            font: {
              size: 20,  // Optional: Change font size
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year',
              color: '#32cd32',  // Change X-axis label color
              font: {
                size: 16,  // Optional: Change X-axis font size
              },
            },
            ticks: {
              color: '#32cd32',  // Change X-axis tick labels color
              font: {
                size: 14,  // Change tick font size
              },
            },
            grid: {
              color: '#ddd',  // Change grid line color for X-axis
              lineWidth: 1,   // Change grid line width
            },
          },
          y: {
            title: {
              display: true,
              text: 'Cutoff (%)',
              color: '#ff6347',  // Change Y-axis label color
              font: {
                size: 16,  // Optional: Change Y-axis font size
              },
            },
            ticks: {
              color: '#ff6347',  // Change Y-axis tick labels color
              font: {
                size: 14,  // Change tick font size
              },
            },
            grid: {
              color: '#ccc',  // Change grid line color for Y-axis
              lineWidth: 1,   // Change grid line width
            },
          },
        },
      };

    return (
        <div className="p-8 sm:mx-24 sm:px-24 bg-blue-100 shadow-md rounded-md">
            <Line data={data} options={options} />
        </div>
    );
};

export default CutoffChart;
