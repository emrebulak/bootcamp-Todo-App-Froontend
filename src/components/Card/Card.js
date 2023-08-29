import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = () => {
    return (
        <div className='d-flex justify-content-center my-3'>
            <div className='border col-md-9 p-2 d-flex justify-content-between'>

                <div className='text-start'>
                    <input className='mx-3 checksize' type='checkbox' />
                    <label className='fw-bold'>Deneme</label>
                    
                </div>
                <div>
                    <FontAwesomeIcon className='mx-3 text-warning icon' icon={faPen} />
                    <FontAwesomeIcon className='mx-3 text-danger icon' icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default Card;