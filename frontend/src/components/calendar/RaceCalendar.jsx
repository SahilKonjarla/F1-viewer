import React from 'react';
import RaceHeader from "./RaceHeader";
import RaceSchedule from "./RaceSchedule";
import "./racecalendar.scss";
import RaceWeekend from "../../controller/data/calendar-data/RaceWeekend";
import raceWeekend from "../../controller/data/calendar-data/RaceWeekend";

const RaceCalendar = () => {
    const currentDate = new Date();
    const nextRace = RaceWeekend.find(race => new Date(race.endDate) >= currentDate);
    const race = nextRace || raceWeekend[0]

    return (
        <div className="race-calendar">
            <RaceHeader
            currentRound={race.round}
            totalRounds={RaceWeekend.length}
            raceName={race.raceName}
            />
            <RaceSchedule schedule={race.schedule} />
        </div>
    );
}

export default RaceCalendar;

