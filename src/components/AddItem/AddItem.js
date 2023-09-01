import React, { useState } from 'react';
import './AddItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import toast from '../Toast';
import Loading from '../Loading';

const element = <FontAwesomeIcon icon={faBook} />

const AddItem = ({ setData }) => {

    const [item, setItem] = useState('');
    const [loading, setLoading] = useState(false);

    const addItem = async () => {
        setLoading(true);
        let body = {
            title: item,
            done: "false"
        };

        await axios.post(`${process.env.REACT_APP_API_URL}/create`, body);
        let datas = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
        setData(datas.data);
        setLoading(false);
        setItem('');
        toast('success', 'Eklendi');
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="row justify-content-center my-3 border m-3">
            <div className="col-9">
                <div className="input-group flex-nowrap my-3">
                    <span className="input-group-text bg-info text-light">{element}</span>
                    <input value={item} onChange={(e) => setItem(e.target.value)} type="text" className="form-control" placeholder="New Todo" />

                </div>
                <div className='input-group flex-nowrap my-3'>
                    <button disabled={item === '' ? true : false} onClick={addItem} className='btn btn-info input-group text-light'>Add new task</button>
                </div>
            </div>
        </div>

    )
}

export default AddItem;