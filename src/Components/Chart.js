import React, { useEffect, useRef } from "react";
import {Chart} from "chart.js/auto";

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
                datasets: [{
                    label: 'Data',
                    data,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }, [data]);

    return <canvas ref={chartRef}></canvas>
}

export default ChartComponent;