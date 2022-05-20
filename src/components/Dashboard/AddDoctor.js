import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('service', () => fetch(`http://localhost:5000/service`).then(res => res.json())
    )

    const imgageStorageKey = `25e2ae4e569db13b985d30f51ce49721`;
    if (isLoading) {
        return <Loading></Loading>
    }

    // onSubmit Function
    const onSubmit = async (data) => {

        // send request to imagebb to save image
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        service: data.service,
                        img: img
                    }
                    // Send newly added doctor's info to database
                    fetch(`http://localhost:5000/doctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Doctor Added Successfully');
                                reset();
                            }
                            else {
                                toast.error(`Failed to add Doctor`);
                            }
                        })
                }
            })





    }
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='w-1/3 shadow-xl  '>
                <div className=' text-3xl card-body text-center '>
                    <h1 className='text-5xl font-bold mb-10'>Add new doctor</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">

                            {/* Field -1 */}
                            <label className="label">
                                <span className="label-text text-xl">Doctor's Name?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Doctor's Name"
                                className="input input-bordered w-full text-xl "
                                {...register("name", {
                                    required: true
                                })}

                            />
                            <p>{errors.name?.type === 'required' && <p className='text-red-500'>First name is required</p>}</p>

                            {/* Field -2 */}
                            <label className="label mt-5">
                                <span className="label-text text-xl ">Doctor's Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered  w-full text-xl "
                                {...register("email", {
                                    required: true
                                })}

                            />
                            <p>{errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}</p>

                            {/* Field -3 */}
                            <label className="label mt-5 ">
                                <span className="label-text text-xl">Service Going to Provide</span>

                            </label>
                            <select {...register("service")} class="select select-bordered">
                                {
                                    services.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}</option>)
                                }

                            </select>

                            <p>{errors.service?.type === 'required' && "Service is required"}</p>

                            {/* Image Field */}
                            <label className="label mt-5 ">
                                <span className="label-text text-xl">Photo</span>

                            </label>
                            <input
                                type="file"
                                placeholder="Enter Email"
                                className="input input-bordered  w-full text-xl  "
                                {...register("image", {
                                    required: true
                                })}

                            />


                            {/* Submit Button */}
                            <button className="btn  mt-5 mb-3 btn-neutral">ADD</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};


export default AddDoctor;