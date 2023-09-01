import React, { useState } from 'react';
import Loading from '../Loading';
import axios from 'axios';
import toast from '../Toast';
import Swal from 'sweetalert2';

const Footer = ({ todos, setData }) => {

    const [loading, setLoading] = useState(false);

    const deleteAll = () => {
        Swal.fire({
            title: 'Dikkat?',
            text: "Hepsini silmek istediğinize emin misiniz",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet',
            cancelButtonText: 'İptal Et'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                await axios.get(`${process.env.REACT_APP_API_URL}/all/delete`);
                let datas = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
                setData(datas.data);
                toast('success', 'Hepsi silindi');
                setLoading(false);
            }
        })

    }

    const deleteDone = () => {

        Swal.fire({
            title: 'Dikkat?',
            text: "Tamamlananları silmek istediğinize emin misiniz",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet',
            cancelButtonText: 'İptal Et'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);

                for (let i = 0; i < todos.length; i++) {
                    if (todos[i].done === "true") {
                        await axios.delete(`${process.env.REACT_APP_API_URL}/delete/${todos[i].id}`);
                    }
                }

                let datas = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
                setData(datas.data);
                toast('success', 'Tamamlananlar silindi');
                setLoading(false);
            }
        })

    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='row d-flex justify-content-center'>
            <button disabled={todos.length > 0 ? false : true} onClick={deleteDone} className='btn btn-danger col-4 mx-3 my-4'>Delete done task</button>
            <button disabled={todos.length > 0 ? false : true} onClick={deleteAll} className='btn btn-danger col-4 mx-3 my-4'>Delete all task</button>
        </div>
    )
}

export default Footer;