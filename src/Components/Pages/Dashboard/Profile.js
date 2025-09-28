import { motion } from "framer-motion";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import Loading from "../../Shared/Loading/Loading";

const Profile = () => {
    const { user, loading, handleLogout } = useUser();
    const { data: userDetails, loading: dataLoading } = useQuery(
        user.email,
        () =>
            fetch(`${process.env.REACT_APP_API_URL}api/users/${user.email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }).then((res) => {
                if (res.status === 401 || res.status === 403) {
                    toast.error(
                        "You are not authorized to perform this action"
                    );
                } else {
                    return res.json();
                }
            })
    );

    if (dataLoading || loading || !userDetails || userDetails.length === 0) {
        return <Loading />;
    }

    const details = userDetails[0];
    const placeholderImg = "https://api.lorem.space/image/face?hash=3174";

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 25 },
        },
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <Helmet>
                <title>{user?.displayName || "Profile"}</title>
            </Helmet>

            {/* Profile Header */}
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-8 mb-12"
                variants={itemVariants}
            >
                <div className="avatar">
                    <div className="w-48 h-48 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg">
                        <img
                            src={details?.avatar || placeholderImg}
                            alt={user?.displayName}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {user?.displayName}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {details?.bio || "Web Developer"}
                    </p>
                </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                variants={containerVariants}
            >
                {/* Personal Details */}
                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Personal Details
                    </h3>
                    <p className="text-gray-700 mb-2">
                        <strong>Email:</strong>{" "}
                        {user?.email || "info@gmail.com"}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Phone:</strong>{" "}
                        {details?.phone || "+8801756644241"}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Address:</strong>{" "}
                        {details?.address || "Dhaka, Bangladesh"}
                    </p>
                </motion.div>

                {/* Education Details */}
                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Education
                    </h3>
                    <p className="text-gray-700">
                        {details?.education || "CSE at BUET"}
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-bold text-primary mb-4">
                        Connect With
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {details?.github ? (
                            <a
                                href={details.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub
                            </a>
                        ) : (
                            <span className="text-gray-400">
                                GitHub not found
                            </span>
                        )}
                        {details?.linkedin ? (
                            <a
                                href={details.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                LinkedIn
                            </a>
                        ) : (
                            <span className="text-gray-400">
                                LinkedIn not found
                            </span>
                        )}
                    </div>
                </motion.div>
            </motion.div>

            {/* Logout Button */}
            <motion.div
                className="mt-10 flex justify-center"
                variants={itemVariants}
            >
                <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-primary px-8 py-2 hover:bg-primary hover:text-white transition"
                >
                    Logout
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Profile;
