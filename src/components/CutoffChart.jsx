import React, { useState, useEffect, useContext } from 'react';
import { Line } from 'react-chartjs-2';
// import axios from 'axios';  // Uncomment when you want to fetch data
import DarkModeContext from './DarkModeContext'; // Import your dark mode context
import { ThemeContext } from './ThemeContext';

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
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [cutoffData, setCutoffData] = useState([
        { year: 2020, cutoff: 85 },
        { year: 2021, cutoff: 89 },
        { year: 2022, cutoff: 95 },
        { year: 2023, cutoff: 98 },
    ]);

    const themeHandler = (theme.background != "bg-gray-50" && theme.background != "bg-solarized-light-bg");
    const { dark } = useContext(DarkModeContext); // Get dark mode state

    // Fetch cutoff data from backend
    // useEffect(() => {
    //     const fetchCutoffData = async () => {
    //         try {
    //             const response = await axios.get('/api/cutoffs');  // Replace with your backend API endpoint
    //             setCutoffData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching cutoff data:', error);
    //         }
    //     };

    //     fetchCutoffData();
    // }, []);

    // Prepare data for the chart
    const data = {
        labels: cutoffData.map((item) => item.year),
        datasets: [
            {
                label: 'Cutoff Percentile',
                data: cutoffData.map((item) => item.cutoff),
                // borderColor: dark ? 'rgba(66, 135, 245, 1)' : 'rgba(75, 192, 192, 1)', // Change border color based on mode
                // backgroundColor: dark ? 'rgba(66, 135, 245, 0.2)' : 'rgba(75, 192, 192, 0.2)', // Change fill color based on mode
                borderColor: themeHandler ? 'rgba(66, 135, 245, 1)' : 'rgba(75, 192, 192, 1)', // Change border color based on mode
                backgroundColor: themeHandler ? 'rgba(66, 135, 245, 0.2)' : 'rgba(75, 192, 192, 0.2)', // Change fill color based on mode
                fill: true,
                tension: 0.4, // Smoothing the curve
                pointBorderColor: '#fff', // Point border color
                pointBackgroundColor: themeHandler ? 'rgba(66, 135, 245, 1)' : 'rgba(75, 192, 192, 1)', // Change point color based on mode
                pointRadius: 5, // Point size
                pointHoverRadius: 7, // Point hover size
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
                    color: themeHandler ? '#ffffff' : '#333', // Change legend label color based on mode
                },
            },
            title: {
                display: true,
                text: 'Cutoff Trend Over the Years',
                color: themeHandler ? '#ffffff' : '#333', // Change title color based on mode
                font: {
                    size: 24, // Change font size
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    color: themeHandler ? '#ffffff' : '#666', // Change X-axis label color based on mode
                    font: {
                        size: 16,
                    },
                },
                ticks: {
                    color: themeHandler ? '#ffffff' : '#666', // Change X-axis tick labels color based on mode
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    color: themeHandler ? 'rgba(255, 255, 255, 0.1)' : 'rgba(200, 200, 200, 0.2)', // Change grid line color for X-axis based on mode
                    lineWidth: 1,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Cutoff (%)',
                    color: themeHandler ? '#ffffff' : '#666', // Change Y-axis label color based on mode
                    font: {
                        size: 16,
                    },
                },
                ticks: {
                    color: themeHandler ? '#ffffff' : '#666', // Change Y-axis tick labels color based on mode
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    color: themeHandler ? 'rgba(255, 255, 255, 0.1)' : 'rgba(200, 200, 200, 0.2)', // Change grid line color for Y-axis based on mode
                    lineWidth: 1,
                },
            },
        },
    };

    return (
        <div className={`p-8 shadow-lg rounded-lg ${theme.background} ${theme.text}`}> {/* Change background based on mode */}
            <Line data={data} options={options} />
        </div>
    );
};

export default CutoffChart;
