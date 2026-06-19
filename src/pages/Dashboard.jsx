import {
    Search,
    Bell,
    Target,
    Gauge,
    Flag,
    Flame,
    BookOpen,
    Award,
    Trophy,
    ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
} from "recharts";

export default function Dashboard({user}) {
    const weeklyData = [
        { day: "Mon", hours: 2 },
        { day: "Tue", hours: 3 },
        { day: "Wed", hours: 2.3 },
        { day: "Thu", hours: 4 },
        { day: "Fri", hours: 2.8 },
        { day: "Sat", hours: 4.5 },
        { day: "Sun", hours: 3.2 },
    ];

    const monthlyData = [
        { week: "W1", value: 22 },
        { week: "W2", value: 38 },
        { week: "W3", value: 47 },
        { week: "W4", value: 58 },
        { week: "W5", value: 65 },
    ];

    const achievements = [
        {
            title: "Roadmap Explorer",
            subtitle: "Started your first roadmap",
            icon: BookOpen,
        },
        {
            title: "React Master",
            subtitle: "Completed React module",
            icon: Award,
        },
        {
            title: "7-Day Streak",
            subtitle: "Learned 7 days in a row",
            icon: Trophy,
        },
    ];

    const stats = [
        {
            title: "Career Progress",
            value: "65%",
            increase: "+8%",
            icon: Target,
            progress: "65%",
            bg: "bg-orange-100",
            color: "text-orange-500",
            border:"text-orange-200",
        },
        {
            title: "Skill Match Score",
            value: "78%",
            increase: "+5%",
            icon: Gauge,
            progress: "78%",
            bg: "bg-orange-50",
            color: "text-orange-400",
            border:"text-orange-100",
        },
        {
            title: "Current Goal",
            value: "React Hooks",
            increase: "",
            icon: Flag,
            progress: "0%",
            bg: "bg-green-100",
            border:"text-green-200",
            color: "text-green-500",

        },
        {
            title: "Current Streak",
            value: "12 Days",
            increase: "+1",
            icon: Flame,
            progress: "0%",
            bg: "bg-yellow-100",
            border:"text-yellow-200",
            color: "text-yellow-500",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=" bg-[#faf8f6] min-h-screen "
        >
    
                  
            {/* Welcome */}

            <div className="flex items-center justify-between mb-8 mt-20">
                <div>
                    <h1 className="text-3xl font-bold">
                        Welcome back, {user?.name}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Here's how your learning journey is going.
                    </p>
                </div>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-orange-600 transition">
                    Continue Learning
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 ">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                            }}
                            className="bg-white rounded-3xl p-6 border shadow-sm  border-gray-300 border-b"
                        >
                            <div className="flex justify-between ">
                                <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border  ${item.border} ${item.bg}` }
                                >
                                    <Icon
                                        size={18}
                                        className={item.color}
                                    />
                                </div>

                                <span className="text-green-500 font-semibold">
                                    {item.increase}
                                </span>
                            </div>

                            <p className="text-gray-500 mt-6">
                                {item.title}
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                {item.value}
                            </h2>

                            {item.progress !== "0%" && (
                                <div className="w-full h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: item.progress,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                        }}
                                        className="h-full bg-orange-500"
                                    />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Charts */}

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-3xl border p-6  border-gray-300 border-b">
                    <h2 className="text-xl font-semibold mb-2">
                        Weekly Learning Activity
                    </h2>

                    <p className="text-gray-500 text-sm mb-6">
                        Hours spent learning
                    </p>

                    <ResponsiveContainer
                        width="100%"
                        height={280}
                    >
                        <AreaChart data={weeklyData}>
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />

                            <Area
                                type="monotone"
                                dataKey="hours"
                                stroke="#f97316"
                                fill="#fed7aa"
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-3xl border p-6 border-gray-300 border-b">
                    <h2 className="text-xl font-semibold mb-2">
                        Monthly Progress
                    </h2>

                    <p className="text-gray-500 text-sm mb-6">
                        Roadmap completion %
                    </p>

                    <ResponsiveContainer
                        width="100%"
                        height={280}
                    >
                        <BarChart data={monthlyData}>
                            <XAxis dataKey="week" />
                            <YAxis />
                            <Tooltip />

                            <Bar
                                dataKey="value"
                                fill="#f59e0b"
                                radius={[8, 8, 0, 0]}
                                animationDuration={1800}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Achievements */}

            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">
                        Recent Achievements
                    </h2>

                    <button className="text-sm text-gray-500 hover:text-black">
                        View All
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map(
                        (item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="bg-white border rounded-3xl p-4 border-gray-300 border-b flex items-center justify-center flex-col"
                                >
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-5">
                                        <Icon className="text-orange-500" />
                                    </div>

                                    <h3 className="font-semibold text-sm">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 mt-1 text-sm">
                                        {item.subtitle}
                                    </p>
                                </motion.div>
                            );
                        }
                    )}
                </div>
            </div>
        </motion.div>
    );
}