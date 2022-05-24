import { Navigate, useLocation } from "react-router-dom";
import useUser from "../../Hooks/useFirebase.js/useUser";

function RequireUser({ children }) {
    const { user, loading } = useUser();
    const location = useLocation();

    if (loading) {
        return;
    }

    if (!user.uid) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireUser;