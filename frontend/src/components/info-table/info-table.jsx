import React, { useState, useEffect } from 'react';
import "./info-table.scss"
import RaceWeekend from "../../controller/data/calendar-data/RaceWeekend";


// Helper function to format the interval based on position
const formatInterval = (position, interval) => {
    return position === 1 ? "Interval" : interval.toFixed(3); // Return "Interval" for position 1, otherwise format the interval with 3 decimals
};

// Helper function to convert seconds to minutes:seconds format
const formatLapTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(3); // Keep three decimal places for milliseconds
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const InfoTable = () => {
    const [driverStandings, setDriverInformation] = useState([]);
    const [currentLap, setCurrentLap] = useState(1);
    const [totalLaps, setTotalLaps] = useState(50);
    const currentDate = new Date();
    const nextRace = RaceWeekend.find(race => new Date(race.endDate) >= currentDate);
    const race = nextRace || RaceWeekend[0];

    // Fetch the data from the backend API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/infodata?" +
                    "trackName=" + race.trackName +
                    "&driverNumbers=1" +
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
                    "&driverNumbers=30" +
                    "&driverNumbers=22" +
                    "&driverNumbers=23" +
                    "&driverNumbers=43", {
                    method: "GET",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    credentials: "include"
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                setCurrentLap(data.currentLap)
                setTotalLaps(data.totalLaps)
                // Sort drivers by position before setting the state
                const sortedDrivers = data.driverData.sort((a, b) => a.position - b.position);
                setDriverInformation(sortedDrivers);
            } catch (e) {
                console.error('Error fetching driver data:', e);
            }
        };

        fetchData()
        //const interval = setInterval(fetchData, 90000);
        //return () => clearInterval(interval);
    }, []);


    return (
        <div className="info-table">
            <div className="table-header">
                <h2>Lap {currentLap} / {totalLaps}</h2>
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
                        <td>{driver.compound}</td>
                        <td>{driver.s1}</td>
                        <td>{driver.s2}</td>
                        <td>{driver.s3}</td>
                        <td>{formatLapTime(driver.laptime)}</td>
                        <td>{formatInterval(driver.position, driver.interval)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default InfoTable;
