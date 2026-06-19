import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const isAuthPage =
        location.pathname === "/login" ||
        location.pathname === "/signup";

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl border border-gray-200 rounded-2xl z-50 bg-transparent backdrop-blur-md shadow-md">
            <div className="flex items-center justify-between px-6 py-2">

                <div className="flex items-center">
                    <img className="w-30 h-17" src="logo.png" alt="Logo" />
                </div>

                <div className="flex items-center gap-8 text-gray-600 font-medium">

                    <NavLink to="/" className="hover:text-blue-600 transition">
                        Home
                    </NavLink>

                    {!isAuthPage && (
                        <>
                            <a href="#features" className="hover:text-blue-600 transition">
                                Features
                            </a>

                            <a href="#how-it-works" className="hover:text-blue-600 transition">
                                How it Works
                            </a>

                            <a href="#testinomials" className="hover:text-blue-600 transition">
                                Testimonials
                            </a>
                        </>
                    )}
                </div>

                {!isAuthPage && (
                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/login"
                            className="text-gray-600 hover:text-black transition"
                        >
                            Log In
                        </NavLink>

                        <NavLink
                            to="/signup"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg transition"
                        >
                            Get Started
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}