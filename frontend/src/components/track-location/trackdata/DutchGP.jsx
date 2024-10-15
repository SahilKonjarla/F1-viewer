import "../trackbody/trackbody.scss"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const DutchGP = () => {
    const [data, setData] = useState([]);
    const chartDimensions = {width: 500, height: 300};


    const fetchData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:5000/location');
            let minX = Math.min(...res.data.map(item => item.x));
            let maxX = Math.max(...res.data.map(item => item.x));
            let minY = Math.min(...res.data.map(item => item.y));
            let maxY = Math.max(...res.data.map(item => item.y));

            // Ensure a minimum range to avoid zero range issues
            if (maxX === minX) {
                maxX += 1;
                minX -= 1;
            }
            if (maxY === minY) {
                maxY += 1;
                minY -= 1;
            }

            const scaleX = chartDimensions.width / (maxX - minX);
            const scaleY = chartDimensions.height / (maxY - minY);

            const formattedData = res.data.map((item, index) => {
                let adjustedX = (item.x - minX) * scaleX;
                let adjustedY = chartDimensions.height - (item.y - minY) * scaleY;

                adjustedX = chartDimensions.width - adjustedX;

                return {
                    id: index + 1,
                    x: adjustedX,
                    y: adjustedY,
                };
            });

            setData(formattedData);
            console.log(formattedData);
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
                    //leftAxis={null}
                    //bottomAxis={null}
                    disableAxisListener={true}
                />
            </div>
        </div>
    );
};

export default DutchGP