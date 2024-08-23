import React from 'react';
import "./raceheader.scss"

const RaceHeader = ({currentRound, totalRounds, raceName}) => {
    return (
        <div className="race-header">
            <h1>
                Round: {currentRound}/{totalRounds} Race: {raceName}
            </h1>
        </div>
    );
};

export default RaceHeader;