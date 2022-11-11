import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRouts = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    // const navigate = useNavigate();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default PrivateRouts;