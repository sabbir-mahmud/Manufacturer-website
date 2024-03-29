import React, { useState } from "react";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import UserOrderDelete from "./UserOrderDelete";

const Orders = () => {
  const { user, handleLogout } = useUser();
  let { data: order, refetch } = useQuery(["order", user.email], () => {
    return fetch(`http://localhost:5000/api/order/?email=${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return toast.error("You are not authorized to perform this action");
      } else {
        return res.json();
      }
    });
  });
  if (!Array.isArray(order)) {
    order = [];
  }
  const [cancel, setCancel] = useState({});

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Orders</title>
      </Helmet>
      {cancel._id && (
        <UserOrderDelete
          cancel={cancel}
          refetch={refetch}
          setCancel={setCancel}
        />
      )}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Location</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {order &&
            order?.map((order) => {
              return (
                <tr key={order?._id} className="hover">
                  <td>{order?._id}</td>
                  <td>{order?.phone}</td>
                  <td>${order?.amount}</td>
                  <td>{order?.address}</td>
                  <td>{order?.status ? order?.status : "pending"}</td>
                  <td>
                    {order?.isPaid ? (
                      <p className="text-green-500">{order?.paymentID}</p>
                    ) : (
                      <>
                        <label
                          onClick={() => setCancel(order)}
                          htmlFor="user-delete-order"
                          className="text-red-500 hover:cursor-pointer hover:underline"
                        >
                          Cancel
                        </label>
                        <Link
                          className="mx-2 text-green-500 hover:underline"
                          to={`/dashboard/payment/${order?._id}`}
                        >
                          pay
                        </Link>
                      </>
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

export default Orders;
