import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import CustomLink from "./CustomLink";

const Navbar = () => {
    const { user, handleLogout } = useUser();
    const { data: userDetails } = useQuery(
        ["userDetails", user?.uid],
        () =>
            fetch(
                `${process.env.REACT_APP_API_URL}api/users/profile/${user?.email}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            ).then((res) => res.json()),
        {
            enabled: !!user?.uid,
        }
    );

    const img = "https://api.lorem.space/image/face?hash=33791";

    const menuLinks = (
        <>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <CustomLink to="/">Home</CustomLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <CustomLink to="/products">Products</CustomLink>
            </motion.li>
            {user?.uid && (
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                </motion.li>
            )}
        </>
    );

    const MobileLinks = (
        <>
            {["/", "/products", "/blogs", "/portfolio"].map((path, i) => (
                <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                >
                    <Link to={path}>{path.replace("/", "") || "Home"}</Link>
                </motion.li>
            ))}
            {user?.uid && (
                <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/dashboard">Dashboard</Link>
                </motion.li>
            )}
        </>
    );

    return (
        <motion.section
            className="bg-neutral"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <motion.ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {MobileLinks}
                        </motion.ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl text-white"
                    >
                        Router Zone
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <motion.ul
                        className="menu menu-horizontal p-0"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                    >
                        {menuLinks}
                    </motion.ul>
                </div>

                <div className="navbar-end">
                    {user?.uid ? (
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={userDetails?.avatar || img}
                                        alt={user?.displayName || "user avatar"}
                                    />
                                </div>
                            </label>
                            <motion.ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <li>
                                    <Link
                                        to="/dashboard/profile"
                                        className="justify-between"
                                    >
                                        {user?.displayName || "user name"}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/settings">
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </motion.ul>
                        </div>
                    ) : (
                        <motion.li
                            className="list-none"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                className="bg-secondary px-3 py-1 rounded text-white shadow"
                                to="/login"
                            >
                                login
                            </Link>
                        </motion.li>
                    )}
                </div>
            </div>
        </motion.section>
    );
};

export default Navbar;
