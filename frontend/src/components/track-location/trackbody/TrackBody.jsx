import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './trackbody.scss'

const TrackBody = () => {
    const [data, setData] = useState(null);

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
        <div className="track-body">
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TrackBody;
