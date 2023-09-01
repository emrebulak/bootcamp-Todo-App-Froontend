import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Card.css';
import toast from '../Toast';
import Swal from 'sweetalert2';
import Loading from '../Loading';

const Card = ({ todo, setData }) => {
    const [loading, setLoading] = useState(false);
    const handleCheckboxChange = async (todo) => {
        setLoading(true);
        let values = {
            title: todo.title,
            done: todo.done === "true" ? "false" : "true"
        }

        await axios.put(`${process.env.REACT_APP_API_URL}/update/${todo.id}`, values);
        let datas = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
        setData(datas.data);
        toast('success', 'Güncellendi');
        setLoading(false);
    };

    const updateItem = (todo) => {

        Swal.fire({
            title: 'Güncelle',
            html: `
            <input id='editData' class='form-control' type'text' value='${todo.title}'/>
            `,
            confirmButtonText: 'Güncelle',
            showDenyButton: true,
            denyButtonText: 'İptal Et'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                let data = {
                    title: document.getElementById('editData').value,
                    done: todo.done
                }

                if (document.getElementById('editData').value !== '') {
                    await axios.put(`${process.env.REACT_APP_API_URL}/update/${todo.id}`, data);
                    let datas = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
                    setData(datas.data);
                    toast('success', 'Güncellendi');
                } else {
                    toast('error', 'Boş değer verilemez');
                }

                setLoading(false);

            }
        })

    }

    const deleteItem = (todo) => {

        Swal.fire({
            title: 'Dikkat?',
            text: "Silmek istediğinize emin misiniz",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet',
            cancelButtonText: 'İptal Et'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                await axios.delete(`${process.env.REACT_APP_API_URL}/delete/${todo.id}`);
                let datas = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
                setData(datas.data);
                toast('success', 'Silindi');
                setLoading(false);
            }
        })

    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='d-flex justify-content-center my-3'>
            <div className='border col-md-9 p-2 d-flex justify-content-between'>
                <div className='text-start'>
                    <input
                        checked={todo.done === "true" ? true : false}
                        onChange={() => handleCheckboxChange(todo)}
                        className='mx-3 checksize'
                        type='checkbox'
                        value={todo}
                    />
                    <label className={todo.done === "true" ? "fw-bold passive" : "fw-bold active"}>{todo.title}</label>
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => updateItem(todo)} className='mx-3 text-warning icon' icon={faPen} />
                    <FontAwesomeIcon onClick={() => deleteItem(todo)} className='mx-3 text-danger icon' icon={faTrash} />
                </div>
            </div>
        </div>
    );
};

export default Card;

