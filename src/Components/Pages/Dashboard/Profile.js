import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useUser from '../../../Hooks/useFirebase.js/useUser';
import Loading from '../../Shared/Loading/Loading';

const Profile = () => {
    const { user, loading } = useUser();
    const { data: userDetails, loading: dataLoading } = useQuery(user.email, () => fetch(`http://localhost:5000/api/users/profile/${user.email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            return toast.error('You are not authorized to perform this action');
        } else {
            return res.json();

        }
    }));

    if (dataLoading || loading) {
        return <Loading />
    }
    const img = 'https://api.lorem.space/image/face?hash=3174'

    return (
        <div className='my-24 container mx-auto px-14'>
            <Helmet>
                <title>{user?.displayName}</title>
            </Helmet>
            <div className="profile flex items-center">
                <div className="avatar mr-14">
                    <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={userDetails?.avatar ? userDetails.avatar : img} alt='' />
                    </div>
                </div>
                <div className="user-details">
                    <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                    <p>Bio: {userDetails?.bio ? userDetails?.bio : 'Web Developer'}</p>
                </div>
            </div>
            <div className="mb-5 mt-14">
                <h3 className='mt-5 font-bold text-3xl mb-3 text-primary'>Personal details:</h3>
                <p className='mb-2 font-serif text-md text-primary ml-3'>email: {user?.email ? user?.email : 'info@gmail.com'}</p>
                <p className='mb-2 font-serif text-md text-primary ml-3'>phone: {userDetails?.phone ? userDetails?.phone : '+8801756644241'}</p>
                <p className='mb-2 font-serif text-md text-primary ml-3'>address: {userDetails?.address ? userDetails?.address : 'Dhaka, Bangladesh'}</p>

            </div>
            <div className="my-4">
                <h3 className='mt-5 font-bold text-3xl mb-3 text-primary'>Education details:</h3>
                <p className='mb-2 font-serif text-md text-primary ml-3'>{userDetails?.education ? userDetails?.education : 'CSE at BUET'}</p>

            </div>
            <div className="my-4">
                <h3 className='mt-5 font-bold text-3xl mb-3 text-primary'>Connect with:</h3>
                {userDetails?.github ? <a className='text-md ml-3 hover:underline hover:text-blue-500 hover:pointer' href={userDetails?.github}>Github</a> : <p className='ml-3 inline-block'>github not found</p>}
                {userDetails?.linkedIn ? <a className='text-md hover:underline hover:text-blue-500 hover:pointer mx-3' href={userDetails?.linkedIn}>linkedIn</a> : <p className=' mx-3 inline-block'>linkedIn not found</p>}

            </div>
        </div>
    );
};

export default Profile;