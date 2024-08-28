import React, { useEffect, useState } from 'react';
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { LinePlot, MarkPlot, lineElementClasses, markElementClasses } from "@mui/x-charts/LineChart";
import axios from 'axios';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import './trackbody.scss';

const TrackBody = () => {
    /*const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:5000/location');
            const formattedData = res.data.map(item => ({
                id: 1,
                x: item.x,
                y: item.y,
            }));
            setData(formattedData);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    };

    useEffect(() => {
        fetchData();

        // Uncomment if you want to refresh the data periodically

        const interval = setInterval(() => {
            fetchData();
        }, 3700);

        return () => clearInterval(interval);

    }, []);*/
    const data = [
        { x: 100, y: 200, id: 1 },
        { x: 120, y: 100, id: 2 },
        { x: 170, y: 300, id: 3 },
        { x: 140, y: 250, id: 4 },
        { x: 150, y: 400, id: 5 },
        { x: 110, y: 280, id: 6 },
    ];

    return (
        <ScatterChart
            width={500}
            height={300}
            series={[{ data }]}
            xAxis={[{ min: 0 }]}
            leftAxis={null}
            bottomAxis={null}
            sx={{
                backgroundImage: 'url("https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit")',
                backgroundSize: "cover",
                backgroundPosition: "170% center",
                backgroundRepeat: "no-repeat",
            }}
        />
        /*<div className="track-body">
            <ChartContainer
                width={500}
                height={300}
                series={[{
                    type: 'scatter',
                    data: data,
                    xKey: 'x',
                    yKey: 'y',
                }]}
                xAxis={[
                    {
                        id: 'x-axis',
                        data: data.map(item => item.x),
                        scaleType: 'point'
                    }]}
                yAxis={[
                    {
                        id: 'y-axis',
                        data: data.map(item => item.y),
                        scaleType: 'point'
                    }]}
                sx={{
                    backgroundImage: 'url("https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit")',
                    backgroundSize: "cover",
                    backgroundPosition: "170% center",
                    backgroundRepeat: "no-repeat",
                    [`& .${lineElementClasses.root}`]: {
                        stroke: '#FF0000',
                        strokeWidth: 2,
                    },
                    [`& .${markElementClasses.root}`]: {
                        stroke: '#FF0000',
                        scale: '0.6',
                        fill: '#fff',
                        strokeWidth: 2,
                    },
                }}
                disableAxisListener
            >
                <LinePlot />
                <MarkPlot />
            </ChartContainer>
        </div>*/
    );
};

export default TrackBody;
