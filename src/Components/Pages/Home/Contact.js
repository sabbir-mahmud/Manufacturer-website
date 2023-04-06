import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      email: e.target.email.value,
      phone: e.target.phone.value,
      msg: e.target.msg.value,
    });
    console.log(body);
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.info("thanks, we will contact with you!");
    e.target.reset();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-2/4 lg:ml-24 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact US!</h1>
          <p className="py-6">
            confused to start your new business. contact with our specialist
            team to get a high-level business talk. just fill out the form our
            team will contact you as soon as possible.
          </p>
        </div>
        <div className="lg:w-2/4 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="your email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Your phone number"
                  className="input input-bordered"
                  name="phone"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="input input-bordered"
                  name="msg"
                  id="message"
                  placeholder="Your Message"
                  cols="10"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
