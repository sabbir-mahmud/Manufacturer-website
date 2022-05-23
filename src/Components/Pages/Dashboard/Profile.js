import React from 'react';
import useUser from '../../../Hooks/useFirebase.js/useUser';

const Profile = () => {
    const { user } = useUser();
    return (
        <div className='my-24 container mx-auto px-14'>
            <div className="profile flex items-center">
                <div className="avatar mr-14">
                    <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                    </div>
                </div>
                <div className="user-details">
                    <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                    <p>Web Developer</p>
                </div>
            </div>
            <div className="my-5">
                <h3 className='mt-5'>Others details:</h3>
                <p>email: {user?.email}</p>
            </div>
        </div>
    );
};

export default Profile;