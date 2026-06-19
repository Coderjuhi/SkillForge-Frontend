import { useState } from "react";
import {
  Mail,
  Lock,
  Globe,
  Rocket,
  Brain,
  Trophy,
  Quote,
  Eye,
  EyeOff,
  User,
} from "lucide-react";
import { NavLink ,useNavigate} from "react-router-dom";
import api from "../api/api";

export default function AuthPage({ mode }) {
  const [name,setName] = useState("");
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isSignup = mode === "signup";


   const handleSubmit = async(e) =>{
   e.preventDefault();
   try{

      const endpoint = isSignup
      ? "http://localhost:5001/api/auth/register"
      : "http://localhost:5001/api/auth/login";
       
      const payload = isSignup
      ? {name,email,password }
      : {email,password};
      
      const response = await api.post(endpoint,payload);
      localStorage.setItem(
        "token",
        response.data.token
      );
      
      navigate("/dashboard");
   } catch(error){
            console.log(error.response.data);
   }
   };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sky-300 via-sky-200 to-cyan-100 relative overflow-hidden">

        <div className="absolute w-72 h-72 bg-white/20 rounded-full -top-20 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full bottom-0 right-0 blur-3xl animate-pulse"></div>

        <div className="flex flex-col justify-center px-16 z-10">

          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
            <Quote size={40} className="text-orange-500 mb-4" />

            <h2 className="text-4xl font-bold text-slate-800 leading-snug">
              SkillForge gave me a clear path from beginner to hired.
            </h2>

            <p className="mt-5 text-slate-600">
              Aisha Rahman — Frontend Developer
            </p>
          </div>

          <div className="mt-16 space-y-5 text-slate-700">

            <div className="flex items-center gap-3">
              <Rocket size={20} className="text-orange-500" />
              <p>Personalized AI Roadmaps</p>
            </div>

            <div className="flex items-center gap-3">
              <Brain size={20} className="text-orange-500" />
              <p>Real-Time Skill Analysis</p>
            </div>

            <div className="flex items-center gap-3">
              <Trophy size={20} className="text-orange-500" />
              <p>Gamified Progress Tracking</p>
            </div>

          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 bg-white">

        <div className="w-full max-w-md mt-20">

          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          <p className="text-slate-500 mb-8">
            {isSignup
              ? "Create your account and start your journey."
              : "Log in to continue building your career roadmap."}
          </p>

          <form className="space-y-5" onSubmit = {handleSubmit}>

            {isSignup && (
              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-11 py-3 border rounded-xl outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full pl-11 pr-12 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>
            </div>

            {!isSignup && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-orange-500 text-sm"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px bg-gray-300 flex-1"></div>

              <span className="text-gray-400 text-sm">
                or continue with
              </span>

              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <button
              type="button"
              className="w-full border py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <Globe size={18} />
              Continue with Google
            </button>

            <p className="text-center text-gray-500">

              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}

              <NavLink
                to={isSignup ? "/login" : "/signup"}
                className="text-orange-500 font-semibold ml-2"
              >
                {isSignup ? "Login" : "Sign Up"}
              </NavLink>

            </p>

          </form>
        </div>
      </div>
    </div>
  );
}