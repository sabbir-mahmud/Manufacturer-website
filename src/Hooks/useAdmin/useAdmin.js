import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(
                `${process.env.REACT_APP_API_URL}api/users/admin?email=${email}`,
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
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.message);
                });
            setAdminLoading(false);
        }
    }, [user]);

    return { admin, adminLoading };
};
export default useAdmin;
