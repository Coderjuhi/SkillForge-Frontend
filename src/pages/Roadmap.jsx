import { motion } from "framer-motion";
import {
    CheckCircle2,
    Lock,
    LoaderCircle,
    ArrowDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Roadmap() {

    const [roadmap, setRoadmap] = useState(null);

    const fetchRoadmap = async () => {
        try {
            const res = await api.get(
                "/api/roadmap/my-roadmap",
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );

            setRoadmap(res.data.roadmap);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchRoadmap();
    }, []);
    if (!roadmap) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading Roadmap...
            </div>
        );
    }
    const totalSkills = roadmap.skills.length;

    const completedSkills =
        roadmap.skills.filter(
            (skill) => skill.completed
        ).length;

    const progress = Math.round(
        (completedSkills / totalSkills) * 100
    );
    return (

        <div className="max-w-7xl mx-auto px-6 py-5 mt-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        {roadmap.careerGoal} Roadmap
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Follow the learning path step by step
                    </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
                    {progress}% Complete
                </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-5">

                {/* Roadmap */}
                <div className="space-y-3">

                    {roadmap.skills.map((item, index) => (
                        <div key={index}>
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border border-gray-200 rounded-2xl px-4 h-28 max-w-xl  py-4 mx-auto "
                            >
                                <div className="flex items-center gap-4">

                                    <div className="shrink-0">
                                        {item.completed ? (
                                            <CheckCircle2
                                                size={28}
                                                className="text-emerald-500"
                                            />
                                        ) : (
                                            <Lock
                                                size={28}
                                                className="text-gray-400"
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>

                                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                                {item.completed ? "Completed" : "Pending"}
                                            </span>
                                        </div>

                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>

                                        <div className="mt-2 flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${item.status === "completed"
                                                        ? "bg-emerald-500"
                                                        : "bg-orange-500"
                                                        }`}
                                                    style={{
                                                        width: item.completed ? "100%" : "0%"
                                                    }}
                                                />
                                            </div>

                                            <span className="text-xs text-gray-500">
                                                {item.completed ? "100%" : "0%"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {index !== roadmap.skills.length - 1 && (
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