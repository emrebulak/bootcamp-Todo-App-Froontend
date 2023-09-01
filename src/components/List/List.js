import React, { useState, useEffect } from 'react';
import './List.css';

// Components
import Card from '../Card';

const List = ({ todos, setData }) => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(todos);
    }, [todos]);

    const allItem = () => {
        setFilterData(todos);
    };

    const doneItem = () => {
        const data = todos.filter((t) => t.done === "true");
        setFilterData(data);
    };

    const todoItem = () => {
        const data = todos.filter((t) => t.done === "false");
        setFilterData(data);
    };

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3>Todo List ({filterData.length})</h3>
            </div>
            <div className='col-md-12'>
                <button onClick={allItem} className='btn btn-info col-md-3 mx-2 my-2 text-light'>
                    All
                </button>
                <button onClick={doneItem} className='btn btn-info col-md-3 mx-2 my-2 text-light'>
                    Done
                </button>
                <button onClick={todoItem} className='btn btn-info col-md-3 mx-2 my-2 text-light'>
                    Todo
                </button>
            </div>

            <div className='col-md-12'>
                {filterData.map((todo, i) => (
                    <Card todo={todo} setData={setData} key={i} />
                ))}
            </div>
        </div>
    );
};

export default List;
