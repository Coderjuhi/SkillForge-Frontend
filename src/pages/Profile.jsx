import { motion } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  CheckCircle2,
  FolderGit2,
  Clock3,
  Pencil,
} from "lucide-react";
import {useOutletContext} from "react-router-dom";
export default function Profile() {

  const {user} = useOutletContext();
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
  ];

  const stats = [
    {
      icon: CheckCircle2,
      value: "24",
      label: "Completed Skills",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      icon: FolderGit2,
      value: "8",
      label: "Projects",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: Clock3,
      value: "146",
      label: "Hours Learned",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ];

  const activities = [
    {
      title: "Completed React Hooks lesson",
      time: "2 hours ago",
      color: "bg-orange-500",
    },
    {
      title: "Earned 7-Day Streak badge",
      time: "Yesterday",
      color: "bg-yellow-500",
    },
    {
      title: "Analyzed resume for Frontend role",
      time: "2 days ago",
      color: "bg-blue-500",
    },
    {
      title: "Completed JavaScript track",
      time: "5 days ago",
      color: "bg-green-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-500 mt-1">
            Your learning identity and activity.
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                <User size={42} className="text-orange-500" />
              </div>

              <h2 className="text-2xl font-bold mt-5 text-gray-900">
                {user?.name}
              </h2>

              <span className="mt-3 px-4 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
                MERN Developer
              </span>

              <div className="mt-8 space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>{user?.email}</span>
                </div>

                {/* <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>Lucknow, India</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Skills</h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm border border-gray-200 bg-gray-50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-5`}
                  >
                    <Icon className={stat.color} size={24} />
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </h2>

                  <p className="text-gray-500 mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Activity Timeline */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Activity Timeline
            </h3>

            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${activity.color}`}
                    ></div>

                    {index !== activities.length - 1 && (
                      <div className="w-[2px] h-12 bg-gray-200 mt-1"></div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900">
                      {activity.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between mb-3">
              <span className="font-medium text-gray-700">
                MERN Roadmap Progress
              </span>

              <span className="text-orange-500 font-semibold">
                78%
              </span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1 }}
                className="h-full bg-orange-500 rounded-full"
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Keep learning to unlock the next achievement badge.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}