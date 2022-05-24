import React from 'react';
import { useQuery } from 'react-query';
import Review from './Review';

const Reviews = () => {
    const { data: reviews } = useQuery('reviews', () => {
        return fetch('http://localhost:5000/api/home/review').then(res => res.json());
    });
    return (
        <div className="mb-5 mt-24">
            <div className="title">
                <h3 className='text-4xl text-primary font-bold text-center'>Clients Reviews</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;