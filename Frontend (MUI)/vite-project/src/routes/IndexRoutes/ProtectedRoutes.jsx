

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStorageItem } from "../../utils/helperFunctions";


const UnProtectedRoutes = ({ Component, allowedRoutes }) => {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    // const storageResponse = localStorage.getItem("userdata");
    // const customer = JSON.parse(storageResponse);
    // console.log("customer in unprotected routes", customer);
    let customer = getStorageItem("userdata");
    if (!customer) {
      const currentPath = window.location.pathname;
      if (allowedRoutes.includes(currentPath)) {
        setIsAllowed(true);
      } else {
        navigate('/login');
      }
    } else {
      setIsAllowed(true);
    }
  }, [navigate, allowedRoutes]);

  return isAllowed ? Component : null;
};

export default UnProtectedRoutes;
