import React from 'react';
import { toast } from 'react-toastify';

const UserDelModal = ({ userDel, setUserDel, refetch }) => {
    const handleUserDel = id => {
        fetch(`https://young-garden-78103.herokuapp.com/api/admin/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(res => toast.info('user deleted'));
        refetch();
        setUserDel({});
    }
    return (
        <div>
            <div>
                <input type="checkbox" id="user-delete" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle bg-transparent">
                    <div className="modal-box relative">
                        <label for="user-delete" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Are you sure!</h3>
                        <p className="py-4">you want to delete this order</p>
                        <button onClick={() => handleUserDel(userDel._id)} className="btn btn-primary">yes</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserDelModal;