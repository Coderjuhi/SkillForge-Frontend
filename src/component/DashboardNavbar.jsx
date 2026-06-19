import { Search, Bell } from "lucide-react";
import {useState,useEffect} from "react";

export default function DashboardNavbar({user}) {

       const firstLetter = user ? user.name.charAt(0).toUpperCase() : "";
    
  return (
    <header className="fixed top-0 left-64 right-0 z-40 bg-white border-b border-gray-200 h-15">
      <div className="h-full px-8 flex items-center justify-between">
        
        {/* Search */}

        <div className="relative w-full max-w-xl bg-gray-50 rounded-2xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search skills, roadmaps, resources..."
            className="w-full pl-11 pr-2 py-1 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-6">
          <button className="relative">
            <Bell
              size={22}
              className="text-gray-600"
            />

            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold">
              {firstLetter}
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                {user?.name}
              </h3>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}