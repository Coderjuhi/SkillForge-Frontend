import { motion } from "framer-motion";
import {
    CheckCircle2,
    Lock,
    LoaderCircle,
    ArrowDown,
} from "lucide-react";
export default function Roadmap() {


    const roadmap = [
        {
            title: "HTML",
            desc: "Semantic markup, forms, accessibility",
            status: "completed",
            progress: 100,
        },
        {
            title: "CSS",
            desc: "Flexbox, Grid, Responsive Design",
            status: "completed",
            progress: 100,
        },
        {
            title: "JavaScript",
            desc: "ES6+, DOM, Async",
            status: "completed",
            progress: 100,
        },
        {
            title: "React",
            desc: "Hooks, State, Context API",
            status: "progress",
            progress: 60,
        },
        {
            title: "Node.js",
            desc: "Express, Middleware",
            status: "locked",
            progress: 0,
        }, {
            title: "Express.js",
            desc: "Express, Middleware",
            status: "locked",
            progress: 0,
        }, {
            title: "MongoDB",
            desc: "Express, Middleware",
            status: "locked",
            progress: 0,
        },
    ];
    return (
        <div className="max-w-7xl mx-auto px-6 py-5 mt-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        MERN Developer Roadmap
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Follow the learning path step by step
                    </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
                    38% Complete
                </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-5">

                {/* Roadmap */}
                <div className="space-y-3">

                    {roadmap.map((item, index) => (
                        <div key={index}>
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border border-gray-200 rounded-2xl px-4 h-28 max-w-xl  py-4 mx-auto "
                            >
                                <div className="flex items-center gap-4">

                                    <div className="shrink-0">
                                        {item.status === "completed" && (
                                            <CheckCircle2
                                                size={28}
                                                className="text-emerald-500"
                                            />
                                        )}

                                        {item.status === "progress" && (
                                            <LoaderCircle
                                                size={28}
                                                className="text-orange-500 animate-spin"
                                            />
                                        )}

                                        {item.status === "locked" && (
                                            <Lock
                                                size={28}
                                                className="text-gray-400"
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">
                                                {item.title}
                                            </h3>

                                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                                {item.status}
                                            </span>
                                        </div>

                                        <p className="text-sm text-gray-500">
                                            {item.desc}
                                        </p>

                                        <div className="mt-2 flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${item.status === "completed"
                                                            ? "bg-emerald-500"
                                                            : "bg-orange-500"
                                                        }`}
                                                    style={{
                                                        width: `${item.progress}%`,
                                                    }}
                                                />
                                            </div>

                                            <span className="text-xs text-gray-500">
                                                {item.progress}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {index !== roadmap.length - 1 && (
                                <div className="flex justify-center py-1">
                                    <ArrowDown
                                        size={18}
                                        className="text-gray-400"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Panel */}
                <div className="sticky top-24 h-fit space-y-4">

                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                        <h3 className="font-semibold mb-4">
                            Milestones
                        </h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2
                                    size={16}
                                    className="text-emerald-500"
                                />
                                Frontend Foundation
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-gray-300" />
                                React Mastery
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-gray-300" />
                                Backend APIs
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full border border-gray-300" />
                                Deployment
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                        <p className="font-semibold text-orange-600">
                            React - 60% done
                        </p>

                        <p className="text-sm text-gray-600 mt-1">
                            Complete Hooks module to unlock Node.js.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}