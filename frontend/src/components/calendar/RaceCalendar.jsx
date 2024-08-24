import React, {useState, useEffect} from 'react';
import RaceHeader from "./RaceHeader";
import RaceSchedule from "./RaceSchedule";
import "./racecalendar.scss";

const RaceCalendar = () => {

    let fetchedData = null;

    async function getWeekendData() {
        try {
            const response = await fetch('https://api.openf1.org/v1/sessions?year=2024&location=Sakhir');
            fetchedData = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async function useData() {
        await getWeekendData();
        console.log(fetchedData);
    }

    useData();


    const raceWeekends = [
        {
            round: 1,
            raceName: "Bahrain Grand Prix",
            date: "2024-03-03",
            schedule: {
                Friday: [
                    { name: "Practice 1", time: "10:00 - 11:30" },
                    { name: "Practice 2", time: "14:00 - 15:30" },
                ],
                Saturday: [
                    { name: "Practice 3", time: "11:00 - 12:00" },
                    { name: "Qualifying", time: "15:00 - 16:00" },
                ],
                Sunday: [
                    { name: "Race", time: "14:00 - 16:00" },
                ],
            },
        },
        {
            round: 2,
            raceName: "Saudi Arabian Grand Prix",
            date: "2024-03-17",
            schedule: {
                Friday: [
                    { name: "Practice 1", time: "12:00 - 13:30" },
                    { name: "Practice 2", time: "16:00 - 17:30" },
                ],
                Saturday: [
                    { name: "Practice 3", time: "13:00 - 14:00" },
                    { name: "Qualifying", time: "18:00 - 19:00" },
                ],
                Sunday: [
                    { name: "Race", time: "20:00 - 22:00" },
                ],
            },
        },
        {
            round: 3,
            raceName: "Azerbaijan",
            date: "2024-04-07",
            schedule: {
                Friday: [
                    { name: "Practice 1", time: "10:00 - 11:30" },
                    { name: "Qualifying", time: "14:00 - 15:00" },
                ],
                Saturday: [
                    { name: "Sprint Race", time: "15:00 - 16:00" },
                ],
                Sunday: [
                    { name: "Race", time: "14:00 - 16:00" },
                ],
            },
        }
    ]

    const [currentRace, setCurrentRace] = useState(null);

    useEffect(() => {
        const today = new Date();
        const upcomingRace = raceWeekends.find(
            (race) => new Date(race.date) >= today
        );

        setCurrentRace(upcomingRace || raceWeekends[raceWeekends.length - 1]);
    }, []);

    if (!currentRace) {
        return <div>Loading...</div>
    }

    return (
        <div className="race-calendar">
            <RaceHeader
            currentRound={currentRace.round}
            totalRounds={raceWeekends.length}
            raceName={currentRace.raceName}
            />
            <RaceSchedule schedule={currentRace.schedule} />
        </div>
    );
}

export default RaceCalendar;

