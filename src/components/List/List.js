import React from 'react';
import './List.css';

//Componenets
import Card from '../Card';

const List = () => {
    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3>Todo List</h3>
            </div>
            <div className='col-md-12'>
                <button className='btn btn-info col-md-3 mx-2 my-2 text-light'>All</button>
                <button className='btn btn-info col-md-3 mx-2 my-2 text-light'>Done</button>
                <button className='btn btn-info col-md-3 mx-2 my-2 text-light'>Todo</button>
            </div>

            <div className='col-md-12'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default List;