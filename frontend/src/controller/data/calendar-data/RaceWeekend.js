const RaceWeekends = [
    {
        round: 1,
        raceName: "Bahrain Grand Prix",
        trackName: "Bahrain",
        date: "2024-02-29",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "03:30" },
                { name: "Free Practice 2", time: "07:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "04:30" },
                { name: "Qualifying", time: "08:00" },
            ],
            Sunday: [
                { name: "Race", time: "07:00" },
            ],
        },
        endDate: "2024-03-03"
    },
    {
        round: 2,
        raceName: "Saudi Arabian Grand Prix",
        trackName: "Jeddah",
        date: "2024-03-07",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "05:30" },
                { name: "Free Practice 2", time: "09:20" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "05:30" },
                { name: "Qualifying", time: "09:00" },
            ],
            Sunday: [
                { name: "Race", time: "09:00" },
            ],
        },
        endDate: "2024-03-10"
    },
    {
        round: 3,
        raceName: "Australian Grand Prix",
        trackName: "Australia",
        date: "2024-03-21",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "18:30" },
                { name: "Free Practice 2", time: "22:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "18:30" },
                { name: "Qualifying", time: "22:00" },
            ],
            Sunday: [
                { name: "Race", time: "21:00" },
            ],
        },
        endDate: "2024-03-24"
    },
    {
        round: 4,
        raceName: "Japanese Grand Prix",
        trackName: "Suzuka",
        date: "2024-04-04",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "19:30" },
                { name: "Free Practice 2", time: "23:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "19:30" },
                { name: "Qualifying", time: "23:00" },
            ],
            Sunday: [
                { name: "Race", time: "22:00" },
            ],
        },
        endDate: "2024-03-07"
    },
    {
        round: 5,
        raceName: "Chinese Grand Prix",
        trackName: "Shanghai",
        date: "2024-04-19",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "20:30" },
                { name: "Sprint Qualifying", time: "00:30" },
            ],
            Saturday: [
                { name: "Sprint Race", time: "20:00" },
                { name: "Qualifying", time: "00:00" },
            ],
            Sunday: [
                { name: "Race", time: "00:00" },
            ],
        },
        endDate: "2024-04-22"
    },
    {
        round: 6,
        raceName: "Miami Grand Prix",
        trackName: "Miami",
        date: "2024-05-03",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "09:30" },
                { name: "Sprint Qualifying", time: "13:30" },
            ],
            Saturday: [
                { name: "Sprint Race", time: "09:00" },
                { name: "Qualifying", time: "13:00" },
            ],
            Sunday: [
                { name: "Race", time: "13:00" },
            ],
        },
        endDate: "2024-04-06"
    },
    {
        round: 7,
        raceName: "Emilia-Romagna Grand Prix",
        trackName: "Imola",
        date: "2024-05-17",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-05-20"
    },
    {
        round: 8,
        raceName: "Monaco Grand Prix",
        trackName: "Monaco",
        date: "2024-05-24",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-05-27"
    },
    {
        round: 9,
        raceName: "Canadian Grand Prix",
        trackName: "Canada",
        date: "2024-06-07",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "10:30" },
                { name: "Free Practice 2", time: "14:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "09:30" },
                { name: "Qualifying", time: "13:00" },
            ],
            Sunday: [
                { name: "Race", time: "11:00" },
            ],
        },
        endDate: "2024-06-10"
    },
    {
        round: 10,
        raceName: "Spanish Grand Prix",
        trackName: "Spain",
        date: "2024-06-21",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-06-24"
    },
    {
        round: 11,
        raceName: "Austrian Grand Prix",
        trackName: "Austria",
        date: "2024-06-28",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "03:30" },
                { name: "Sprint Qualifying", time: "07:30" },
            ],
            Saturday: [
                { name: "Sprint Race", time: "03:00" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-07-01"
    },
    {
        round: 12,
        raceName: "British Grand Prix",
        trackName: "Silverstone",
        date: "2024-07-05",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "07:00" },
            ],
        },
        endDate: "2024-07-08"
    },
    {
        round: 13,
        raceName: "Hungarian Grand Prix",
        trackName: "Hungary",
        date: "2024-07-19",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-07-22"
    },
    {
        round: 14,
        raceName: "Belgian Grand Prix",
        trackName: "Spa",
        date: "2024-07-26",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-07-29"
    },
    {
        round: 15,
        raceName: "Dutch Grand Prix",
        trackName: "Zandvoort",
        date: "2024-08-23",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "03:30" },
                { name: "Free Practice 2", time: "07:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "02:30" },
                { name: "Qualifying", time: "06:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-06-24"
    },
    {
        round: 16,
        raceName: "Italian Grand Prix",
        trackName: "Monza",
        date: "2024-08-30",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "04:30" },
                { name: "Free Practice 2", time: "08:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "03:30" },
                { name: "Qualifying", time: "07:00" },
            ],
            Sunday: [
                { name: "Race", time: "06:00" },
            ],
        },
        endDate: "2024-09-02"
    },
    {
        round: 17,
        raceName: "Azerbaijan Grand Prix",
        trackName: "Baku",
        date: "2024-09-14",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "02:30" },
                { name: "Free Practice 2", time: "06:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "01:30" },
                { name: "Qualifying", time: "05:00" },
            ],
            Sunday: [
                { name: "Race", time: "04:00" },
            ],
        },
        endDate: "2024-09-16"
    },
    {
        round: 18,
        raceName: "Singapore Grand Prix",
        trackName: "Singapore",
        date: "2024-09-20",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "02:30" },
                { name: "Free Practice 2", time: "06:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "02:30" },
                { name: "Qualifying", time: "06:00" },
            ],
            Sunday: [
                { name: "Race", time: "05:00" },
            ],
        },
        endDate: "2024-09-23"
    },
    {
        round: 19,
        raceName: "United States Grand Prix",
        trackName: "COTA",
        date: "2024-10-18",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "10:30" },
                { name: "Sprint Qualifying", time: "14:30" },
            ],
            Saturday: [
                { name: "Sprint Race", time: "11:00" },
                { name: "Qualifying", time: "15:00" },
            ],
            Sunday: [
                { name: "Race", time: "12:00" },
            ],
        },
        endDate: "2024-10-21"
    },
    {
        round: 20,
        raceName: "Mexico City Grand Prix",
        trackName: "Mexico",
        date: "2024-10-25",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "11:30" },
                { name: "Free Practice 2", time: "15:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "10:30" },
                { name: "Qualifying", time: "14:00" },
            ],
            Sunday: [
                { name: "Race", time: "13:00" },
            ],
        },
        endDate: "2024-10-28"
    },
    {
        round: 21,
        raceName: "Brazilian Grand Prix",
        trackName: "Brazil",
        date: "2024-11-01",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "07:30" },
                { name: "Sprint Qualifying", time: "11:30" },
            ],
            Saturday: [
                { name: "Sprint Race", time: "07:00" },
                { name: "Qualifying", time: "11:00" },
            ],
            Sunday: [
                { name: "Race", time: "09:00" },
            ],
        },
        endDate: "2024-11-04"
    },
    {
        round: 22,
        raceName: "Las Vegas Grand Prix",
        trackName: "Vegas",
        date: "2024-11-21",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "18:30" },
                { name: "Free Practice 2", time: "22:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "18:30" },
                { name: "Qualifying", time: "22:00" },
            ],
            Sunday: [
                { name: "Race", time: "22:00" },
            ],
        },
        endDate: "2024-11-24"
    },
    {
        round: 23,
        raceName: "Qatar Grand Prix",
        trackName: "Qatar",
        date: "2024-11-29",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "05:30" },
                { name: "Sprint Qualifying", time: "09:30" },
            ],
            Saturday: [
                { name: "Sprint Race", time: "05:00" },
                { name: "Qualifying", time: "09:00" },
            ],
            Sunday: [
                { name: "Race", time: "08:00" },
            ],
        },
        endDate: "2024-12-02"
    },
    {
        round: 25,
        raceName: "Abu Dhabi Grand Prix",
        trackName: "AbuDhabi",
        date: "2024-12-06",
        schedule: {
            Friday: [
                { name: "Free Practice 1", time: "01:30" },
                { name: "Free Practice 2", time: "05:00" },
            ],
            Saturday: [
                { name: "Free Practice 3", time: "02:30" },
                { name: "Qualifying", time: "06:00" },
            ],
            Sunday: [
                { name: "Race", time: "05:00" },
            ],
        },
        endDate: "2024-12-09"
    },
]

export default RaceWeekends;