import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import DeleteConfirmModal from './DeleteConfirmModal';
import { Link } from 'react-router-dom';

const ManageDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { isLoading, refetch } = useQuery('doctors', () => fetch(`https://secret-gorge-44931.herokuapp.com/doctor`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    // Delete Doctor

    return (
        <div class="overflow-x-auto">
            {
                doctors.length
                    ?
                    <div>
                        <table class="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service Color</th>
                                    <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctors?.map((doctor, index) => <tr>
                                        <th>{index + 1}</th>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.service}</td>
                                        <td>
                                            <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error">Delete</label>

                                        </td>
                                    </tr>

                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <div>
                        <h1 className='text-5xl text-center mt-20'>Currently, No Doctor available </h1>
                        <div className='mt-10 text-center'>
                            <Link className='btn btn-primary text-white font-bold text-xl' to="/dashboard/add-doctor">Add Doctor</Link>
                        </div>
                    </div>
            }
            <div>
                {
                    deletingDoctor && <DeleteConfirmModal
                        deletingDoctor={deletingDoctor}
                        setDeletingDoctor={setDeletingDoctor}
                        refetch={refetch}
                    ></DeleteConfirmModal>
                }
            </div>
        </div>
    );
};

export default ManageDoctor;