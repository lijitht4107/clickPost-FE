import { Navigate,Outlet } from "react-router-dom";

export const LoginAuth=()=>{
    const token = localStorage.getItem('token')
    return(
        token ? <Navigate to={'/'}/> : <Outlet/>
    )
}
export const UserAuth=()=>{
    const token = localStorage.getItem('token')
    return(
        token ? <Outlet/> : <Navigate to={'/'}/>
    )
}