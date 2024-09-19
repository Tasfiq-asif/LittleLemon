import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import PropTypes from "prop-types";


const AdminRoutes = ({children}) => {
    const {user,loading} =useAuth()

    if(user.role === "admin"){return children}

    if (loading){return <LoadingSpinner/>}
    return (
        <div>
            <Navigate to={'/dashboard'}/>
        </div>
    );
};

export default AdminRoutes;
AdminRoutes.propTypes = {
  children: PropTypes.element,
};