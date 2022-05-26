import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import UserDelModal from './UserDelModal';

const Users = () => {
    const [userDel, setUserDel] = useState({});
    const { data: users, loading, refetch } = useQuery('users', () => fetch('https://young-garden-78103.herokuapp.com/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
    }).then(res => res.json()));

    if (loading) {
        return <Loading />
    }

    const makeAdmin = (email) => {
        if (email) {
            fetch(`https://young-garden-78103.herokuapp.com/api/admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => console.log(data))
            toast.info('User is now an admin');
        } else {
            toast.error('user is not valid');
        }
        refetch();

    }


    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Users</title>
            </Helmet>
            {
                userDel._id && <UserDelModal userDel={userDel} setUserDel={setUserDel} refetch={refetch} />
            }
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>user email</th>
                        <th>role</th>
                        <th colSpan='2'>action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(user => {
                            return (
                                <tr key={user._id} className="hover">
                                    <td>{user?.email}</td>
                                    <td>{user?.isAdmin ? 'admin' : 'client'}</td>
                                    <td><label htmlFor='user-delete' onClick={() => setUserDel(user)} className='text-red-500 hover:underline hover:cursor-pointer'>Remove user</label></td>
                                    <td>{
                                        !user?.isAdmin && <button onClick={() => makeAdmin(user?.email)} className='text-orange-500 hover:underline hover:cursor-pointer'>Make Admin</button>
                                    }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;