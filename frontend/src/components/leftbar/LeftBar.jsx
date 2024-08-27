import React from 'react';
import "./leftbar.scss"
import RaceCalendar from "../calendar/RaceCalendar";
import TrackLocation from "../track-location/TrackLocation";

const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="race-calendar">
                <RaceCalendar/>
            </div>
            <div className="track-location">
                <TrackLocation/>
            </div>
        </div>
    );
}

export default LeftBar;