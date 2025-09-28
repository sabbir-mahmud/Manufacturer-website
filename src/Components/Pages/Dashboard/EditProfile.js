import { motion } from "framer-motion";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import Loading from "../../Shared/Loading/Loading";

const EditProfile = () => {
    const { user, loading, handleLogout } = useUser();
    const { register, handleSubmit, reset } = useForm();

    if (loading) return <Loading />;

    const handleEditProfile = async (data) => {
        const image = data.avatar[0];
        const formData = new FormData();
        formData.append("avatar", image);
        formData.append("user", user?.email);
        formData.append("name", user?.displayName);
        formData.append("phone", data.number);
        formData.append("address", data.location);
        formData.append("bio", data.bio);
        formData.append("education", data.education);
        formData.append("linkedin", data.linkedIn);
        formData.append("github", data.github);

        fetch(`${process.env.REACT_APP_API_URL}api/users/profile`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: formData,
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    handleLogout();
                    return toast.error(
                        "You are not authorized to perform this action"
                    );
                } else {
                    return res.json();
                }
            })
            .then(() => {
                toast.success("Profile Updated Successfully!");
                reset();
            });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Helmet>
                <title>Edit Profile</title>
            </Helmet>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden p-6 border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Update Your Profile
                </h2>

                <motion.form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(handleEditProfile)}
                    variants={containerVariants}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder={user.displayName}
                            disabled
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                        <input
                            type="email"
                            placeholder={user.email}
                            disabled
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <input
                        type="number"
                        {...register("number", { required: true })}
                        placeholder="Phone Number"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        {...register("location", { required: true })}
                        placeholder="Location"
                        className="input input-bordered w-full"
                    />

                    <textarea
                        {...register("bio", { required: true })}
                        placeholder="Write a short bio..."
                        className="textarea textarea-bordered w-full h-24 resize-none"
                    />

                    <input
                        type="text"
                        {...register("education", { required: true })}
                        placeholder="Education"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="url"
                        {...register("linkedIn", { required: true })}
                        placeholder="LinkedIn URL"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="url"
                        {...register("github", { required: true })}
                        placeholder="Github URL"
                        className="input input-bordered w-full"
                    />

                    {/* Modern File Input */}
                    <label className="w-full">
                        <span className="block mb-1 text-gray-700 font-medium">
                            Upload Avatar
                        </span>
                        <input
                            type="file"
                            {...register("avatar", { required: true })}
                            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-primary file:text-white hover:file:bg-primary-focus
              cursor-pointer transition-all"
                        />
                    </label>

                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-lg font-semibold mt-2"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Update Profile
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default EditProfile;
