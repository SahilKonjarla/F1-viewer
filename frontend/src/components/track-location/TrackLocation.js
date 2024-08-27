import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrackHeader from './trackheader/Trackheader'
import TrackBody from "./trackbody/TrackBody";
import RaceWeekend from "../../controller/data/calendar-data/RaceWeekend";
import "./tracklocation.scss";

const TrackLocation = () => {
    const [data, setData] = useState(null);
    const race = RaceWeekend[0]

    const fetchData = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:5000/session')
            setData(res.data);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    }

    useEffect(() => {
        fetchData();

        /*const interval = setInterval(() => {
            fetchData();
        }, 3700);

        return () => clearInterval(interval);*/
    }, []);


    return (
        <div className="track-location">
            <div className="track-header">
                <TrackHeader track={race.raceName}/>
            </div>
            <div className="track-body">
                <TrackBody/>
            </div>
        </div>
    );
};

export default TrackLocation;
