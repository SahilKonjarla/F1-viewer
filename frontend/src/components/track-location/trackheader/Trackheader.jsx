import "./trackheader.scss"
import React from "react";

const TrackHeader = ({ track }) => {
    return (
        <div className="track-header">
            <h1>
                {track}
            </h1>
        </div>
    );
};

export default TrackHeader;