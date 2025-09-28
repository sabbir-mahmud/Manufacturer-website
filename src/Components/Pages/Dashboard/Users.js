import { useState } from "react";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import Loading from "../../Shared/Loading/Loading";
import UserDelModal from "./UserDelModal";

const Users = () => {
    const { handleLogout } = useUser();
    const [userDel, setUserDel] = useState({});
    const {
        data: users,
        loading,
        refetch,
    } = useQuery("users", () =>
        fetch(`${process.env.REACT_APP_API_URL}api/users/all-users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => {
            if (res.status === 401 || res.status === 403) {
                handleLogout();
                return toast.error(
                    "You are not authorized to perform this action"
                );
            } else {
                return res.json();
            }
        })
    );

    if (loading) {
        return <Loading />;
    }

    const makeAdmin = (email) => {
        if (email) {
            fetch(
                `${process.env.REACT_APP_API_URL}api/users/make-admin/${email}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
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
                .then((data) => console.log(data));
            toast.info("User is now an admin");
        } else {
            toast.error("user is not valid");
        }
        refetch();
    };

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Users</title>
            </Helmet>
            {userDel._id && (
                <UserDelModal
                    userDel={userDel}
                    setUserDel={setUserDel}
                    refetch={refetch}
                />
            )}
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>user email</th>
                        <th>role</th>
                        <th colSpan="2">action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => {
                        return (
                            <tr key={user._id} className="hover">
                                <td>{user?.email}</td>
                                <td>{user?.is_admin ? "admin" : "client"}</td>
                                <td>
                                    <label
                                        htmlFor="user-delete"
                                        onClick={() => setUserDel(user)}
                                        className="text-red-500 hover:underline hover:cursor-pointer"
                                    >
                                        Remove user
                                    </label>
                                </td>
                                <td>
                                    {!user?.is_admin && (
                                        <button
                                            onClick={() =>
                                                makeAdmin(user?.email)
                                            }
                                            className="text-orange-500 hover:underline hover:cursor-pointer"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
