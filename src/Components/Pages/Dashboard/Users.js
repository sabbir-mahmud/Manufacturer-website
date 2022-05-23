import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';
import useUser from '../../../Hooks/useFirebase.js/useUser';
import Loading from '../../Shared/Loading/Loading';

const Users = () => {
    const { user } = useUser();
    const { data: users, loading } = useQuery('users', () => fetch('http://localhost:5000/api/users').then(res => res.json()));
    const { admin, adminLoading } = useAdmin(user);
    console.log(admin, adminLoading);

    if (loading || adminLoading) {
        return <Loading />
    }

    const makeAdmin = (email) => {
        if (email) {
            fetch(`http://localhost:5000/api/admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => console.log(data))
            toast.info('User is now an admin');
        } else {
            toast.error('user is not valid');
        }

    }


    return (
        <div className="overflow-x-auto">
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
                                    <td>Client</td>
                                    <td><button>Remove user</button></td>
                                    <td><button onClick={() => makeAdmin(user?.email)}>Make Admin</button></td>
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