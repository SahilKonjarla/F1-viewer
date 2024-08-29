import "../trackbody/trackbody.scss"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const DutchGP = () => {
    const [data, setData] = useState([]);
    const imageDimensions = {width: 1920, height: 1080};
    const chartDimensions = {width: 500, height: 300};


    const fetchData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:5000/location');
            const minX = Math.min(...res.data.map(item => item.x));
            const maxX = Math.max(...res.data.map(item => item.x));
            const minY = Math.min(...res.data.map(item => item.y));
            const maxY = Math.max(...res.data.map(item => item.y));

            // Scaling factors
            const scaleX = chartDimensions.width / imageDimensions.width;
            const scaleY = chartDimensions.height / imageDimensions.height;

            const formattedData = res.data.map((item, index) => {
                // Map the data to the chart's dimensions
                let adjustedX = ((item.x - minX) / (maxX - minX)) * imageDimensions.width * scaleX;
                let adjustedY = chartDimensions.height - ((item.y - minY) / (maxY - minY)) * imageDimensions.height * scaleY;

                adjustedX = chartDimensions.width - adjustedX;

                return {
                    id: index + 1,
                    x: adjustedX,
                    y: adjustedY,
                };
            });

            setData(formattedData);
            console.log(res.data);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    };

    useEffect(() => {
        fetchData();

        // Uncomment if you want to refresh the data periodically

        /*const interval = setInterval(() => {
            fetchData();
        }, 3700);

        return () => clearInterval(interval);*/

    }, []);

    return (
        <div className={"track-container"}>
            <img
                src={"https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit"}
                alt={""}
                className="track-image"
            />
            <div className="scatter-chart">
                <ScatterChart
                    width={400}
                    height={chartDimensions.height}
                    series={[{ data }]}
                    xAxis={[{ min: 0, max: 540}]}
                    yAxis={[{ min: 0, max: 300}]}
                    margin={{top:10, left: 40, right: 16, bottom: 13}}
                    leftAxis={null}
                    bottomAxis={null}
                    disableAxisListener={true}
                />
            </div>
        </div>
    );
};

export default DutchGP