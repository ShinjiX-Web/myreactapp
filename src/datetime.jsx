import React, { useState, useEffect } from 'react'
import './datetime.css';

export const DateTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div className='time'>
            {date.toLocaleTimeString()}
        </div>
    )
}

export default DateTime