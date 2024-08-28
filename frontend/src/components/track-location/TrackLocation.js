import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrackHeader from './trackheader/Trackheader'
import TrackBody from "./trackbody/TrackBody";
import RaceWeekend from "../../controller/data/calendar-data/RaceWeekend";
import "./tracklocation.scss";

const TrackLocation = () => {
    const [data, setData] = useState(null);
    const currentDate = new Date();
    const nextRace = RaceWeekend.find(race => new Date(race.endDate) >= currentDate);
    const race = nextRace || RaceWeekend[0];

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
