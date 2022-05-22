import React from 'react';

const Contact = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-2/4 ml-24 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact US!</h1>
                    <p className="py-6">confused to start your new business. contact with our specialist team to get a high-level business talk. just fill out the form our team will contact you as soon as possible.</p>
                </div>
                <div className="w-2/4 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="Your phone number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="input input-bordered" name="message" id="message" placeholder='Your Message' cols="10" rows="5"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;