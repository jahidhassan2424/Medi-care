import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem(`accessToken`)}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('User set as admin', {
                    autoClose: 2000

                })
            })

    }
    const handleAlreadyAdmin = () => {
        toast.error('User is already an Admin', {
            autoClose: 2000

        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin'
                    ?
                    <button onClick={handleMakeAdmin} className="btn">Make Admin</button>
                    :
                    <button className="btn text-[9px]">Remove Admin</button>
            }
            </td>

            <td><button className="btn ">Remove User</button></td>
        </tr >
    );
};

export default UserRow;