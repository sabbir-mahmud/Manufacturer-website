import { toast } from "react-toastify";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            email: e.target.email.value,
            phone: e.target.phone.value,
            msg: e.target.msg.value,
        });
        fetch(`${process.env.REACT_APP_API_URL}api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        toast.info("Thanks, we will contact you soon!");
        e.target.reset();
    };

    return (
        <div className="hero min-h-screen bg-gray-50 rounded-md mt-6">
            <div className="hero-content flex-col lg:flex-row gap-12 w-full max-w-6xl">
                {/* Left side - text */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Contact <span className="text-primary">Us</span>
                    </h1>
                    <p className="py-6 text-gray-600 leading-relaxed">
                        Unsure about starting your new business? 💡 Get in touch
                        with our specialist team for a high-level consultation.
                        Just fill out the form, and our experts will get back to
                        you as soon as possible.
                    </p>
                </div>

                {/* Right side - form */}
                <div className="flex-1">
                    <div className="card w-full shadow-lg border border-gray-200 rounded-xl bg-white">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body space-y-4">
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full rounded-lg"
                                        name="email"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="input input-bordered w-full rounded-lg"
                                        name="phone"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Message</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered w-full rounded-lg"
                                        name="msg"
                                        rows="4"
                                        placeholder="Type your message..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <div className="form-control mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full rounded-lg"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
