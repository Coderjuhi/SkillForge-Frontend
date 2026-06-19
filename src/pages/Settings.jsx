import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Bell,
  Moon,
  Shield,
  Trash2,
  Save,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 space-y-6 mt-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account preferences and security.
        </p>
      </div>

      {/* Account Information */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white border border-gray-200 rounded-3xl p-6"
      >
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
          <User size={20} />
          Account Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Jane Doe"
              className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Email
            </label>

            <input
              type="email"
              defaultValue="jane@example.com"
              className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>
      </motion.div>

      {/* Security */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white border border-gray-200 rounded-3xl p-6"
      >
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
          <Shield size={20} />
          Security
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white border border-gray-200 rounded-3xl p-6"
      >
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
          <Bell size={20} />
          Notifications
        </h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Email Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Receive updates via email.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-orange-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Achievement Alerts
              </h3>

              <p className="text-sm text-gray-500">
                Get notified when you unlock badges.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-orange-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Roadmap Updates
              </h3>

              <p className="text-sm text-gray-500">
                Weekly progress reminders.
              </p>
            </div>

            <input
              type="checkbox"
              className="w-5 h-5 accent-orange-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Appearance */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white border border-gray-200 rounded-3xl p-6"
      >
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
          <Moon size={20} />
          Appearance
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <button className="border-2 border-orange-500 bg-orange-50 rounded-2xl p-4 text-left">
            <h3 className="font-medium">Light Mode</h3>
            <p className="text-sm text-gray-500 mt-1">
              Default application theme
            </p>
          </button>

          <button className="border border-gray-200 rounded-2xl p-4 text-left hover:border-orange-300">
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-gray-500 mt-1">
              Coming Soon
            </p>
          </button>
        </div>
      </motion.div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Danger Zone */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white border border-red-200 rounded-3xl p-6"
      >
        <h2 className="text-lg font-semibold text-red-500 flex items-center gap-2 mb-4">
          <Trash2 size={20} />
          Danger Zone
        </h2>

        <p className="text-gray-500 mb-4">
          Permanently delete your account and all associated data.
        </p>

        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition">
          Delete Account
        </button>
      </motion.div>
    </div>
  );
}