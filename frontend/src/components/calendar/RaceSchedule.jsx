import React from 'react';
import "./raceschedule.scss"

const RaceSchedule = ({ schedule }) => {
    return (
        <div className="race-schedule">
            <div className={"schedule-grid"}>
                {Object.keys(schedule).map((day) => (
                    <div key={day} className="schedule-column">
                        <h3>{day}</h3>
                        <ul>
                            {schedule[day].map((session, index) => (
                                <li key={index}>
                                    <strong>{session.name}</strong>: {session.time}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RaceSchedule
