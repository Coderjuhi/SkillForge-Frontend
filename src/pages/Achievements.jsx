import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Flame,
  Lock,
  Crown,
  Medal,
  Award,
  TrendingUp,
} from "lucide-react";

export default function Achievements(){


const badges = [
  {
    title: "HTML Master",
    icon: Trophy,
    desc: "Completed HTML track",
    unlocked: true,
    color: "text-amber-500 bg-amber-50",
  },
  {
    title: "React Learner",
    icon: Star,
    desc: "Started React module",
    unlocked: true,
    color: "text-orange-500 bg-orange-50",
  },
  {
    title: "MongoDB Explorer",
    icon: Medal,
    desc: "First DB query",
    unlocked: true,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    title: "7-Day Streak",
    icon: Flame,
    desc: "Learned 7 days straight",
    unlocked: false,
  },
  {
    title: "Node Ninja",
    icon: Lock,
    desc: "Complete Node.js track",
    unlocked: false,
  },
  {
    title: "Full Stack Hero",
    icon: Crown,
    desc: "Finish roadmap",
    unlocked: false,
  },
];

const leaderboard = [
  { rank: 1, name: "Marcus Lee", xp: 8420 },
  { rank: 2, name: "Priya Nair", xp: 7980 },
  { rank: 3, name: "Jane Doe", xp: 6540 },
  { rank: 4, name: "Aisha Rahman", xp: 5890 },
  { rank: 5, name: "Tom Becker", xp: 5210 },
];

return(
    <div className="p-6 mt-4">
  {/* Heading */}
  <div className="mb-6">
    <h1 className="text-3xl font-bold text-gray-900">
      Achievements
    </h1>
    <p className="text-gray-500 mt-1">
      Earn badges, climb levels, and rise up the leaderboard.
    </p>
  </div>

  {/* Level Card */}
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-white border border-gray-200 rounded-3xl p-6 mb-6"
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
          <Crown className="text-orange-500" size={30} />
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Current Level
          </p>
          <h2 className="text-4xl font-bold">
            Level 7
          </h2>
        </div>
      </div>

      <div className="w-[40%]">
        <div className="flex justify-between text-sm mb-2">
          <span>6,540 XP</span>
          <span>8,000 XP</span>
        </div>

        <div className="h-3 bg-orange-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "82%" }}
            transition={{ duration: 1 }}
            className="h-full bg-orange-500"
          />
        </div>

        <p className="text-sm text-gray-500 mt-2">
          1,460 XP to Level 8
        </p>
      </div>
    </div>
  </motion.div>

  {/* Stats */}
  <div className="grid md:grid-cols-3 gap-4 mb-6">
    {[
      {
        title: "Badges Earned",
        value: "12",
        icon: Award,
      },
      {
        title: "Current Streak",
        value: "7 Days",
        icon: Flame,
      },
      {
        title: "XP Earned",
        value: "6540",
        icon: TrendingUp,
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          className="bg-white border border-gray-200 rounded-2xl p-5"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>
              <h3 className="text-2xl font-bold mt-1">
                {item.value}
              </h3>
            </div>

            <Icon
              size={24}
              className="text-orange-500"
            />
          </div>
        </motion.div>
      );
    })}
  </div>

  {/* Bottom */}
  <div className="grid lg:grid-cols-4 gap-6">

    {/* Badges */}
    <div className="lg:col-span-3">
      <h2 className="font-semibold text-xl mb-4">
        Badges
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {badges.map((badge, index) => {
          const Icon = badge.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className={`border rounded-3xl p-5 ${
                badge.unlocked
                  ? "bg-white border-gray-200"
                  : "bg-gray-50 border-gray-200 opacity-70"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  badge.unlocked
                    ? badge.color
                    : "bg-gray-100"
                }`}
              >
                <Icon size={26} />
              </div>

              <h3 className="font-semibold">
                {badge.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {badge.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Leaderboard */}
    <div className="bg-white border border-gray-200 rounded-3xl p-5 h-fit">
      <h2 className="font-semibold text-xl mb-4">
        Leaderboard
      </h2>

      <div className="space-y-3">
        {leaderboard.map((user) => (
          <div
            key={user.rank}
            className={`flex justify-between items-center p-3 rounded-xl ${
              user.rank === 3
                ? "bg-orange-50"
                : "bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                {user.rank}
              </div>

              <span className="font-medium">
                {user.name}
              </span>
            </div>

            <span className="text-gray-600">
              {user.xp} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
);
}