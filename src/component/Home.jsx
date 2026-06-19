import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, BarChart3, Palette, Shield, Coffee, Compass, Route, ChartNoAxesCombined, ScanSearch, Sparkles, Star,Copyright } from "lucide-react";


const cards = [
    {
        title: "MERN Developer",
        desc: "MongoDB, Express, React & Node.js full-stack mastery.",
        skills: "8 Skills",
        learners: "12.4k Learners",
        icon: <Code2 size={24} />,
    },
    {
        title: "Data Analyst",
        desc: "SQL, Python, visualization and statistical insight.",
        skills: "7 Skills",
        learners: "9.1k Learners",
        icon: <BarChart3 size={24} />,
    },
    {
        title: "UI/UX Designer",
        desc: "Design systems, prototyping and user research.",
        skills: "6 Skills",
        learners: "7.8k Learners",
        icon: <Palette size={24} />,
    },
    {
        title: "Cyber Security",
        desc: "Network defense, ethical hacking and threat analysis.",
        skills: "9 Skills",
        learners: "5.3k Learners",
        icon: <Shield size={24} />,
    },
    {
        title: "Java Developer",
        desc: "Core Java, Spring Boot, microservices and APIs.",
        skills: "8 Skills",
        learners: "10.6k Learners",
        icon: <Coffee size={24} />,
    },
];
const steps = [
    {
        icon: Compass,
        title: "Choose Career",
        description:
            "Select from curated career tracks or define your own  goal.",
    },
    {
        icon: Route,
        title: "Generate Roadmap",
        description:
            "Get a structured, milestone-based learning roadmap",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Track Progress",
        description:
            "Mark skills complete and watch your streak grow",
    },
    {
        icon: ScanSearch,
        title: "Analyze Skills",
        description:
            "Compare your resume against real job descriptions",
    },
    {
        icon: Sparkles,
        title: "Get Recommendations",
        description:
            "Receive targeted resources to skill gaps.",
    },
];


const boxes = [
    {
        review:
            "CareerPilot turned my scattered learning into a clear path. I landed my first dev role in 4 months.",
        name: "Aisha Rahman",
        role: "Frontend Developer @ Shopify",
        initials: "AR",
    },
    {
        review:
            "The skill gap analyzer showed me exactly what I was missing. The recommendations were spot on.",
        name: "Marcus Lee",
        role: "Data Analyst @ Spotify",
        initials: "ML",
    },
    {
        review:
            "The roadmap and streak tracking kept me accountable. It feels like a game, but for your career.",
        name: "Priya Nair",
        role: "UX Designer @ Figma",
        initials: "PN",
    },
];

export default function Home() {
    return (
        <>

            <div>
                <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-r from-purple-200 via-indigo to-sky-100">

                    <div className="flex items-center mt-60 justify-center">
                        <div className="animate-float absolute bottom-10 right-20 h-30 w-30 rounded-3xl bg-white/40 backdrop-blur-md"></div>
                        <div className="animate-float absolute bottom-10 left-10 h-22 w-22 rounded-3xl bg-white/40 backdrop-blur-md"></div>
                        <div className="animate-float absolute top-30 left-10 h-25 w-25 rounded-3xl bg-white/40 backdrop-blur-md"></div>
                        <div className="animate-float absolute top-30 right-20 h-18 w-18 rounded-3xl bg-white/40 backdrop-blur-md"></div>
                        <div className="animate-float absolute flex justify-center top-36 h-32 w-32 rounded-3xl bg-white/40 backdrop-blur-md"></div>
                        <div className="animate-float absolute flex justify-center bottom-30 left-120 h-19 w-19 rounded-3xl bg-white/40 backdrop-blur-md"></div>
                        <div className="flex items-center justify-center ">
                            <div className="flex flex-col items-center ">
                                <h1 className="text-6xl font-bold text-center w-[700px] text-blue-400">
                                    From Career Goals to <span className="text-black">Job Readiness </span>
                                </h1>
                                <p className=" text-gray-400 text-center w-[700px] text-xl mt-4">
                                    Generate personalized learning roadmaps, analyze skill gaps,
                                    <br /> and become job-ready faster.
                                </p>
                                <div className="gap-4 flex flex-row mt-9 ">
                                    <button className="border border-orange-500 py-1  px-4 text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-1xl flex items-center gap-1 rounded-lg">Start Learning <ArrowRight /></button>
                                    <button className="border border-gray-400 hover:bg-gray-200 py-1 px-4 text-black font-semibold  rounded-lg flex gap-2"><Compass/>Explore Careers</button>
                                </div>
                                <div className="flex items-center justify-center text-sm gap-4 mt-14">
                                    <span>
                                        <span className="font-semibold text-foreground">50k+ </span>
                                        learners</span>
                                    <span className="h-4 w-px bg-gray-400"></span>
                                    <span>
                                        <span className="font-semibold text-foreground">120+ </span>roadmaps
                                    </span>
                                    <span className="h-4 w-px bg-gray-400"></span>
                                    <span>
                                        <span className="font-semibold text-foreground">4.9</span> ratings
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="relative min-h-screen overflow-hidden bg-white">
                    <div className="mt-30 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-4xl font-semibold text-black">Featured Careers</h1>
                            <p className="text-xl text-gray-500 mt-4">Pick a track and we'll generate a step-by-step roadmap tailored to your goals.</p>
                        </div>
                        <div className="max-w-7xl mx-auto px-6 py-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {cards.map((card, index) => (
                                    <motion.div key={index}
                                        initial={{ opacity: 0, y: 70 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1, }}
                                        className="
              group
              relative
              bg-white
              border
              border-gray-200
              rounded-3xl
              p-7
              min-h-[280px]
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-orange-300
              cursor-pointer  "   >
                                        <div
                                            className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-br
                from-orange-50
                to-transparent
              "
                                        />
                                        <div className="
                absolute
                top-6
                right-6
                opacity-0
                translate-x-4
                transition-all
                duration-500
                group-hover:opacity-100
                group-hover:translate-x-0
              "
                                        >
                                            <ArrowUpRight
                                                size={24}
                                                className="text-orange-500"
                                            />
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className="
                relative
                w-12
                h-12
                rounded-2xl
                bg-orange-100
                flex
                items-center
                justify-center
                text-orange-500
                transition-all
                duration-500
                group-hover:scale-110
              "
                                        >
                                            {card.icon}
                                        </div>
                                        <h3 className="relative text-2xl font-semibold mt-8 text-gray-800">
                                            {card.title}
                                        </h3>
                                        <p className="relative text-gray-500 mt-4 leading-relaxed">
                                            {card.desc}
                                        </p>
                                        <div className="relative flex gap-8 mt-10 text-sm text-gray-400">
                                            <span>{card.skills}</span>
                                            <span>{card.learners}</span>
                                        </div>
                                    </motion.div>

                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how-it-works" className="relative min-h-[65vh] overflow-hidden bg-gradient-to-br from-sky-100 to-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4 mt-10"> How It Works
                            </h2>
                            <p className="text-lg text-gray-500">
                                Five simple steps from confused to career-ready
                            </p>
                        </div>
                        {/* cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="bg-white rounded-3xl  px-8 py-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex-justify-center ">
                                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-orange-400 to-white flex items-center justify-center mb-6 mx-auto">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <p className="text-sm font-bold text-gray-900 mb-3 flex justify-center">
                                            {step.title}
                                        </p>
                                        <p className="text-gray-600 text-sm flex justify-center ">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section id="testinomials" className="relative min-h-[80vh] overflow-hidden bg-white">
                    <div className="mx-auto ">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4 mt-10">Loved by learners
                            </h2>
                            <p className="text-lg text-gray-500">
                                Thousands have accelerated their careers with CareerPilot.
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {boxes.map((box, index) => (
                                <div key={index} className="group    bg-white border border-gray-200 rounded-3xl p-8    min-h-[280px] w-full transition-all duration-500 hover:-translate-y-2 hover:drop-shadow-xl">
                                    <div className="flex gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) =>
                                        (
                                            <Star key={i} size={18} fill="currentColor" className="text-yellow-500" />
                                        )
                                        )}
                                    </div>
                                    <p className="mt-8 text-gray-600 " >
                                        "{box.review}"
                                    </p>
                                    <div className="flex items-center gap-4 mt-10">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 font-semibold flex items-center justify-center">
                                            {box.initials}
                                        </div>
                                        <div>
                                            <h4>{box.name}</h4>
                                            <p className="text-sm text-gray-500">
                                                {box.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section >

                <footer className="border-t border-gray-200" >
                    <div  className="relative min-h-[60vh] overflow-hidden bg-white mt-10">
                        <div className="grid grid-cols-1 gap-4 md:grid-col-2 lg:grid-cols-5">
                            <div className="col-span-2">
                                <div> <img className="w-30 h-17" src="logo.png" alt="Logo" />
                                </div>
                                <div className="text-gray-400 ml-4 max-w-sm">
                                    <h3>Personalized learning roadmaps and skill analysis to get you job-ready, faster.</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-5">Product</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>Roadmaps</li>
                                    <li>Skill Analyzer</li>
                                    <li>Resources</li>
                                    <li>Achievements</li>
                                </ul>
                            </div>
                            <div><h3 className="font-semibold mb-5">Company</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div> 
                            <div><h3 className="font-semibold mb-5">Resources</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>Docs</li>
                                    <li>Community</li>
                                    <li>Support</li>
                                    <li>Changelog</li>
                                </ul>
                            </div>
                        </div>
                        <hr  className="mt-12 pt-6 border-gray-200"/>
                        <div className="flex flext-row mt-6 text-gray-500 justify-between text-sm">
                            <div>
                                <h3 className="flex "><Copyright className="h-4"/>2026 SkillForge.All Rights reserved.</h3>
                            </div>
                            <div className="flex gap-4 mr-4">
                                <h3>Privacy</h3>
                                <h3>Terms</h3>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    )
}