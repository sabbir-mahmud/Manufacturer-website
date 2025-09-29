import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const OrderDelete = ({ deleted, refetch, setDeleted }) => {
    const { handleLogout } = useUser();
    const handleOrderCancel = (orderId) => {
        const url = `${process.env.REACT_APP_API_URL}api/orders/${orderId}`;
        fetch(url, {
            method: "DELETE",
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
        });
        toast.success("Order Cancelled");
        refetch();
        setDeleted({});
    };
    return (
        <div>
            <input type="checkbox" id="delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box relative">
                    <label
                        for="delete-order"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Are you sure!</h3>
                    <p className="py-4">you want to delete this order</p>
                    <button
                        onClick={() => handleOrderCancel(deleted._id)}
                        className="btn btn-primary"
                    >
                        yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDelete;
