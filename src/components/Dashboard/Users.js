import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://secret-gorge-44931.herokuapp.com/users`, {
        method: 'get',
        headers: {
            authorization: `Bearer ${localStorage.getItem(`accessToken`)}`
        }
    }).then(res => res.json())
    )
    if (isLoading) {

        return <Loading ></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Users;