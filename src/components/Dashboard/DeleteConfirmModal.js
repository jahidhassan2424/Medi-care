import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;
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
                    setDeletingDoctor(null)
                    refetch();
                    toast.success('Doctor removed successfully', {
                        autoClose: 2000
                    });
                }
            })
    }
    return (
        <div>


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you Sure to delete {name}?</h3>
                    <p className='text-lg'>This action can't be Undone.</p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" className=' btn btn-error' onClick={() => handleDeleteDoctor(email)} class="btn">Remove</label>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;