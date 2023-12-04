import React from "react";

const DateTime = ({dateString}) => {
    if (!dateString) {
        return null;
    }
    return <div style={{color: 'red'}}>{dateString}</div>
};

export default DateTime;