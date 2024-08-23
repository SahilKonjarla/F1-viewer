import React from 'react';
import "./leftbar.scss"
import RaceCalendar from "../calendar/RaceCalendar";

const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="race-calendar">
                <RaceCalendar/>
            </div>
        </div>
    );
}

export default LeftBar;