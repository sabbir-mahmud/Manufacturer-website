import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import useUser from "../../Hooks/useFirebase.js/useUser";

function RequireAdmin({ children }) {
    const { user, loading } = useUser();
    const { admin, adminLoading } = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return;
    }

    if (!user.uid || !admin) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAdmin;