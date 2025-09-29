import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const useUser = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // get user from firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        auth.signOut();
        navigate("/login");
        setUser({});
        toast.info("You are logged out!");
    };

    return {
        user,
        loading,
        error,
        setUser,
        setLoading,
        setError,
        handleLogout,
    };
};

export default useUser;
