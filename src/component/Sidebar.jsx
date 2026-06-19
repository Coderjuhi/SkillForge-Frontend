import {LayoutDashboard, Map,Brain,BookOpen,Trophy,User,Settings, LogOut } from "lucide-react";
import { NavLink ,useNavigate} from "react-router";

export default function Sidebar(){
    const Navigate = useNavigate();
  const Links = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
      {
        name: "Roadmap",
        path: "/dashboard/map",
        icon: Map,
    },  {
        name: "Skill Analyzer",
        path: "/dashboard/skill-analyzer",
        icon: Brain,
    },  {
        name: "Resources",
        path: "/dashboard/resources",
        icon: BookOpen,
    },{
        name: "Achievements",
        path: "/dashboard/achievements",
        icon: Trophy,
    },{
        name: "Profile",
        path: "/dashboard/profile",
        icon: User,
    },{
        name: "Settings",
        path: "/dashboard/settings",
        icon: Settings,
    },
  ];

const handlelogout = () => {
    localStorage.removeItem("token");
        Navigate("/login");
    
}
   return(
    <>
<aside className="fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-200 flex flex-col ">  
        <div className="h-15 px-6 border-b border-gray-200 mb-4">
                    <img className="w-30 h-17" src="logo.png" alt="Logo" />

                </div>
    <nav className="flex-1 px-2">
        {Links.map((item) => {
            const Icon = item.icon;

            return(
                <NavLink 
                key={item.path}
                to={item.path}
                end={item.path ==="/dashboard"}
                className={({isActive}) =>
                 `flex items-center gap-3 p-3 rounded-xl transition ${
                    isActive
                    ? "bg-red-50 text-red-500"
                    : "hover:bg-gray-100"
                 }`
                }
                >
                <Icon size={18}/> {item.name}
                </NavLink>
            );
        })}
    </nav>
    <div className=" mt-12 p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl" onClick={handlelogout}>
            <LogOut size={18}/>
            Logout
        </button>
    </div>
</aside> 
    </>
   );
}