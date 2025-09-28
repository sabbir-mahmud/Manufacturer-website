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
            headers: { "Content-Type": "application/json" },
            body,
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

        toast.info("Thanks, we will contact you soon!");
        e.target.reset();
    };

    return (
        <section className="bg-gray-50 py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left side - text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                            Unsure about starting your new business? 💡 Get in
                            touch with our specialist team for a high-level
                            consultation. Fill out the form, and our experts
                            will get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Right side - form */}
                    <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 sm:space-y-6"
                            >
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
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
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Message</span>
                                    </label>
                                    <textarea
                                        name="msg"
                                        rows="4"
                                        placeholder="Type your message..."
                                        className="textarea textarea-bordered w-full rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full rounded-lg py-3 text-white text-sm sm:text-base hover:shadow-md transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
