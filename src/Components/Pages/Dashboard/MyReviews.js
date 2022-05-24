import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useUser from '../../../Hooks/useFirebase.js/useUser';

const MyReviews = () => {
    const { user } = useUser();
    const { data: userData } = useQuery(user?.email, () => fetch(`http://localhost:5000/api/users/profile/${user?.email}`).then(res => res.json()));
    console.log(userData);
    const handleReviewSubmit = e => {
        e.preventDefault();
        const review = {
            name: user?.displayName,
            img: userData?.avatar || 'https://api.lorem.space/image/face?hash=92310',
            bio: userData?.bio || 'Web Developer',
            location: e.target.location.value,
            starts: e.target.start.value,
            review: e.target.review.value,
        }
        console.log(review);
        fetch('http://localhost:5000/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    e.target.reset();
                    toast.success('Review added successfully');
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <div className=" my-14 w-4/5 mx-auto rounded-xl shadow-2xl bg-base-100">
                <h3 className='text-center font-bold pt-5'>Add a review</h3>
                <form className='flex w-3/5 mx-auto' onSubmit={handleReviewSubmit} >
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user.displayName} className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" name='location' placeholder='Dhaka, Bangladesh' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starts</span>
                            </label>
                            <select className="input input-bordered" name="start" id="start">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea className="input input-bordered" name="review" id="review" cols="30" rows="10"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyReviews;