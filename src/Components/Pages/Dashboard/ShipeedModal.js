import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const ShippedModal = ({ shipped, refetch, setShipped }) => {
    const { handleLogout } = useUser();
    const handleShipped = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}api/order/shipped/${id}`, {
            method: "PATCH",
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
        toast.success("Order Shipped");
        setShipped({});
        refetch();
    };
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="shipped-modal"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle bg-transparent">
                    <div className="modal-box relative">
                        <label
                            for="shipped-modal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">Are you sure!</h3>
                        <p className="py-4">you want to shipped this order</p>
                        <button
                            onClick={() => handleShipped(shipped._id)}
                            className="btn btn-primary"
                        >
                            yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippedModal;
