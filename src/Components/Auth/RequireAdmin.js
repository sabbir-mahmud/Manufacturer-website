import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import useUser from "../../Hooks/useFirebase.js/useUser";
import Loading from "../Shared/Loading/Loading";

function RequireAdmin({ children }) {
    const { user, loading } = useUser();
    const { admin, adminLoading } = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />;
    } else {

        if (user?.uid || admin) {
            return children;
        } else {
            return <Navigate to="/dashboard" state={{ from: location }} replace />;
        }
    }


}

export default RequireAdmin;