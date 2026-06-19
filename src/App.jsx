import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './component/Home'; import Navbar from'./component/Navbar'; 
import AuthPage from "./pages/AuthPage";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import SkillAnalyzer from "./pages/SkillAnalyzer";
import Resources from "./pages/Resources";
import Achievements from "./pages/Achievements";
import './App.css'
import { i } from "framer-motion/client";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
   <Route
          path="/login"
          element={<AuthPage mode="login" />}
        />

        <Route
          path="/signup"
          element={<AuthPage mode="signup" />}
        />
        </Route>
      <Route element={<DashboardLayout />}> 
      <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/dashboard/map" element ={<Roadmap/>}/>
      <Route path="/dashboard/skill-analyzer" element ={<SkillAnalyzer/>}/>
      <Route path="/dashboard/resources" element ={<Resources/>}/>
      <Route path="/dashboard/achievements" element={<Achievements/>}/>
      <Route path="/dashboard/profile" element={<Profile/>}/>
      <Route path="/dashboard/settings" element={<Settings/>}/>
      </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
