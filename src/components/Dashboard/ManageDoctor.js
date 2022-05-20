import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const ManageDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const { isLoading, refetch } = useQuery('doctors', () => fetch(`http://localhost:5000/doctor`, {
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
    const handleDeleteDoctor = (email) => {

        fetch(`http://localhost:5000/removeDoctor/${email}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.success('Doctor removed successfully', {
                        autoClose: 2000
                    });
                }
            })

    }
    return (
        <div class="overflow-x-auto">
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
                    {/* <!-- row 1 --> */}
                    {
                        doctors?.map((doctor, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.service}</td>
                            <td>
                                <label for="delete-confirm-modal" class="btn modal-button">
                                    <button for="delete-confirm-modal" className=' btn btn-error' onClick={() => handleDeleteDoctor(doctor.email)} class="btn">Remove</button>
                                </label>

                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            <div>

            </div>
        </div>
    );
};

export default ManageDoctor;