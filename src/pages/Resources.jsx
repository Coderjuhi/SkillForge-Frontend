import { motion } from "framer-motion";
import {
  Search,
  PlayCircle,
  FileText,
  CircleHelp,
  Bookmark,
  Clock3,
} from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "React Hooks Deep Dive",
      type: "Video",
      tag: "React",
      duration: "42 min",
      saved: true,
      icon: PlayCircle,
      color: "bg-orange-100 text-orange-500",
    },
    {
      title: "Understanding Event Loop",
      type: "Article",
      tag: "JavaScript",
      duration: "8 min read",
      saved: false,
      icon: FileText,
      color: "bg-blue-100 text-blue-500",
    },
    {
      title: "Build REST API with Express",
      type: "Video",
      tag: "Node.js",
      duration: "1h 12min",
      saved: false,
      icon: PlayCircle,
      color: "bg-orange-100 text-orange-500",
    },
    {
      title: "MongoDB Aggregation Practice",
      type: "Practice",
      tag: "MongoDB",
      duration: "15 Questions",
      saved: false,
      icon: CircleHelp,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "CSS Grid Complete Guide",
      type: "Article",
      tag: "CSS",
      duration: "12 min read",
      saved: true,
      icon: FileText,
      color: "bg-blue-100 text-blue-500",
    },
    {
      title: "JavaScript Coding Challenges",
      type: "Practice",
      tag: "JavaScript",
      duration: "30 Questions",
      saved: false,
      icon: CircleHelp,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="p-6 mt-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Resources
        </h1>

        <p className="text-gray-500 mt-1">
          Curated videos, articles and practice to level up.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-5 bg-white">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search resources..."
          className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["All", "Videos", "Articles", "Practice", "Bookmarks"].map(
          (item) => (
            <button
              key={item}
              className={`px-5 py-2 rounded-full text-sm transition ${
                item === "All"
                  ? "bg-orange-500 text-white"
                  : "border border-gray-200 hover:border-orange-300"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Resource Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {resources.map((resource, index) => {
          const Icon = resource.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${resource.color}`}
                >
                  <Icon size={22} />
                </div>

                <Bookmark
                  size={18}
                  className={
                    resource.saved
                      ? "fill-orange-500 text-orange-500"
                      : "text-gray-400"
                  }
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 mb-5">
                {resource.title}
              </h3>

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock3 size={14} />
                  {resource.duration}
                </div>

                <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                  {resource.tag}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}