import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../component/DashboardNavbar";
import { useEffect, useState } from "react";
import { header } from "framer-motion/client";
import api from '../api/api'  ;

export default function DashboardLayout() {
    const[user,setUser] =useState(null);
    
  useEffect(( )=> {
        const fetchUser = async () =>{
           const token = localStorage.getItem("token");
           const res = await api.get("/api/auth/me",
            {
                headers: {
                    Authorization: token
                }
            }
           );
             console.log(res.data);

           setUser(res.data.user);
        };
        fetchUser();
    }, []);


    return (
        <div className="flex bg-gray-50">
            <Sidebar />
            <DashboardNavbar user={user}/>
            <div className="ml-64 min-h-screen flex-1 p-8">
                <Outlet  context={{user,setUser}}/>
            </div>
        </div>
    );
}