import React from "react";

const DateTimeString = ({dateString}) => {
    if (!dateString) {
        return null;
    }
    return <div style={{color: 'red'}}>{dateString}</div>
};

export default DateTimeString;