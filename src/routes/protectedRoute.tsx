import { Navigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { useAppSelector } from "../hooks/storeHooks";

export const ProtectedRoute = ({ children }: {children: React.ReactNode}) => {
    const user = useAppSelector(state => state.user.user);
    
    if (isEmpty(user.name) || isEmpty(user.company)) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };
