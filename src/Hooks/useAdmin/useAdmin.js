import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/api/admin?email=${email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    if (data.role === "admin") {
                        setAdmin(true);
                    }
                    else {
                        setAdmin(false);
                    }
                })
            setAdminLoading(false);
        }
    }, [user])

    return { admin, adminLoading };

}
export default useAdmin;