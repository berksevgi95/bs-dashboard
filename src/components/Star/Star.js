import React from 'react';

import './styles.css'

const Star = ({
    rank,
    className
}) => {

    return (
        <div className={`star ${className || ''}`}>
            {rank && rank <= 5 && Array.apply(null, Array(rank)).map((star, index) => (
                <div key={index} className="filled">
                    ✭
                </div>
            ))}
            {rank && rank <= 5 ? Array.apply(null, Array(5 - rank)).map((star, index) => (
                <div key={index} className="empty">
                    ✭
                </div>
            )) : Array.apply(null, Array(5)).map((star, index) => (
                <div key={index} className="empty">
                    ✭
                </div>
            ))}
        </div>
    )
}

export default Star;