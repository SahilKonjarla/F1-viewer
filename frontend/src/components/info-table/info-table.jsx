import React, { useState, useEffect } from 'react';
import "./info-table.scss"

// Helper function to convert seconds to minutes:seconds format
const formatLapTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(3); // Keep three decimal places for milliseconds
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const InfoTable = () => {
    const [driverStandings, setDriverInformation] = useState([]);

    // Fetch the data from the backend API
    useEffect(() => {
        fetch("localhost:8080/api/v1/infodata?" +
            "driverNumbers=1" +
            "&driverNumbers=11" +
            "&driverNumbers=16" +
            "&driverNumbers=55" +
            "&driverNumbers=44" +
            "&driverNumbers=63" +
            "&driverNumbers=31" +
            "&driverNumbers=10" +
            "&driverNumbers=4" +
            "&driverNumbers=81" +
            "&driverNumbers=77" +
            "&driverNumbers=24" +
            "&driverNumbers=18" +
            "&driverNumbers=14" +
            "&driverNumbers=20" +
            "&driverNumbers=27" +
            "&driverNumbers=3" +
            "&driverNumbers=22" +
            "&driverNumbers=23" +
            "&driverNumbers=2")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // Sort drivers by position before setting the state
                const sortedDrivers = data.sort((a, b) => a.position - b.position);
                setDriverInformation(sortedDrivers)
            })
            .catch(error => console.error('Error fetching driver data:', error))
    }, []);


    return (
        <div className="info-table">
            <div className="table-header">
                <h2>Lap 1</h2>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Position</th>
                    <th>Driver</th>
                    <th>Tyre Compound</th>
                    <th>S1</th>
                    <th>S2</th>
                    <th>S3</th>
                    <th>Lap Time</th>
                    <th>Interval</th>
                </tr>
                </thead>
                <tbody>
                {driverStandings.map((driver, index) => (
                    <tr key={index}>
                        <td>{driver.position}</td>
                        <td>{driver.driver}</td>
                        <td>{driver.tyre}</td>
                        <td>{driver.s1}</td>
                        <td>{driver.s2}</td>
                        <td>{driver.s3}</td>
                        <td>{formatLapTime(driver.laptime)}</td>
                        <td>{driver.interval}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default InfoTable;
