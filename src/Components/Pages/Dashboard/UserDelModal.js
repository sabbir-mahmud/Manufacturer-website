import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const UserDelModal = ({ userDel, setUserDel, refetch }) => {
    const { handleLogout } = useUser();

    const handleUserDel = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}api/users/user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    handleLogout();
                    toast.error(
                        "You are not authorized to perform this action"
                    );
                    return null;
                }
                return res.json();
            })
            .then((res) => {
                if (res) {
                    toast.success("User deleted successfully");
                    refetch(); // ✅ only after success
                    setUserDel({}); // ✅ close modal after success
                }
            })
            .catch(() => toast.error("Failed to delete user"));
    };

    return (
        <div>
            <input type="checkbox" id="user-delete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box relative">
                    <label
                        htmlFor="user-delete"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Are you sure?</h3>
                    <p className="py-4">
                        Do you really want to delete {userDel?.email}?
                    </p>
                    <button
                        onClick={() => handleUserDel(userDel._id)}
                        className="btn btn-primary"
                    >
                        Yes, delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDelModal;
