import React from 'react';
import { Puff } from 'react-loader-spinner'
import './Loading.css';

const Loading = () => {
    return (
        <div className='loading-container'>
                <Puff
                    height={80}
                    width={80}
                    radius={1}
                    color="#2980b9"
                    aria-label="puff-loading"
                />
        </div>
    )
}

export default Loading;
