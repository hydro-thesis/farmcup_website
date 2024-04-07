import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'





const Clock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    function formatTime(val) {
        if(val < 10) {
            return '0' + val;
        } else {
            return '' + val;
        }
    }

    function formatDate(d) {
        const year = d.getFullYear();
        const month = formatTime(d.getMonth() + 1); // Months are zero-indexed
        const day = formatTime(d.getDate());
        return `${year}-${month}-${day}`;
    }
    
    function tick() {
        const d = new Date();
        const formattedTime = formatTime(d.getHours()) + ':' + formatTime(d.getMinutes()) + ':' + formatTime(d.getSeconds());
    
        setTime(formattedTime);
    
        setDate(formatDate(d))
    }

    useEffect(() => {
        const timerID = setInterval(tick, 1000)
    
        return function cleanup() {
            clearInterval(timerID)
        }
    })

    return (
        <div>
            <h1>Time: {time}</h1>
            <h2>Date: {date}</h2>

        </div>
    )
}

export default Clock;