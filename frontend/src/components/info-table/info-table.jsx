import React from 'react';
import "./info-table.scss"

const InfoTable = () => {
    // Sample static data for F1 driver standings
    const driverStandings = [
        { position: 1, driver: "VER", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 2, driver: "HAM", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 3, driver: "NOR", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 4, driver: "SAI", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 5, driver: "LEC", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 6, driver: "ALB", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 7, driver: "COL", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 8, driver: "BOT", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 9, driver: "ALO", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 10, driver: "RUS", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 11, driver: "PIA", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 12, driver: "PER", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 13, driver: "TSU", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 14, driver: "LAW", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 15, driver: "GUA", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 16, driver: "OCO", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 17, driver: "GAS", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 18, driver: "MAG", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 19, driver: "HUL", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
        { position: 20, driver: "STR", tyre: "S", pitstops: 1, s1: 0, s2: 0, s3: 0, laptime: 0, interval: "Interval"},
    ];

    // Total # of API calls per driver for all necessary information needed
    // For 1 Driver: Intervals, laps, position, compound

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
                    <th>Pit Stops</th>
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
                        <td>{driver.pitstops}</td>
                        <td>{driver.s1}</td>
                        <td>{driver.s2}</td>
                        <td>{driver.s3}</td>
                        <td>{driver.laptime}</td>
                        <td>{driver.interval}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default InfoTable;
