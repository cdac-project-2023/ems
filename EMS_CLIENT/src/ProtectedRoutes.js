import { Navigate } from "react-router-dom";

export default function ProtectedRoutes(){
    var isLoggedIn = false; 
    var isLoggedInFromSessionStorage = sessionStorage.getItem("isLoggedIn");
    if (isLoggedInFromSessionStorage != null) {
        if (isLoggedInFromSessionStorage == "true") {
            isLoggedIn = true;
        }
    }

    if (isLoggedIn)
        {   
            return null;
        }
        else {
            return <Navigate to={"/login"} replace={true}/>
        }
}