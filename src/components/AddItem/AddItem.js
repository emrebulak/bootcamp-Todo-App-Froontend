import React from 'react';
import './AddItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faBook} />

const AddItem = () => {
    return (
        <div className="row justify-content-center my-3 border m-3">
            <div className="col-9">
                <div className="input-group flex-nowrap my-3">
                    <span className="input-group-text bg-info text-light">{element}</span>
                    <input type="text" className="form-control" placeholder="New Todo" />

                </div>
                <div className='input-group flex-nowrap my-3'>
                    <button className='btn btn-info input-group text-light'>Add new task</button>
                </div>
            </div>
        </div>

    )
}

export default AddItem;