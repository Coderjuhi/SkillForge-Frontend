import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export default function SkillAnalyzer() {
  return (
    <div className="p-6 space-y-6 mt-4">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          AI Skill Analyzer
        </h1>
        <p className="text-gray-500 mt-1">
          Upload resume and get AI-powered skill gap analysis.
        </p>
      </div>

      {/* Upload Section */}
      <div className="grid lg:grid-cols-2 gap-5">

        {/* Resume Upload */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl border border-gray-200 p-5"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Upload size={18} />
            Resume Upload
          </h3>

          <label className="border-2 border-dashed border-gray-300 hover:border-orange-200 rounded-xl h-60 flex flex-col items-center justify-center cursor-pointer  transition">
            <Upload size={40} className="text-orange-500 mb-3" />

            <p className="font-medium">
              Drag & Drop Resume
            </p>

            <span className="text-sm text-gray-500">
              PDF, DOCX (Max 5MB)
            </span>

            <input
              type="file"
              className="hidden"
            />
          </label>

          {/* Preview */}
          <div className="mt-4 border border-gray-300 rounded-xl p-3 flex items-center gap-3">
            <FileText className="text-orange-500" />
            <div>
              <p className="font-medium">
                resume.pdf
              </p>
              <span className="text-sm text-gray-500">
                Ready for analysis
              </span>
            </div>
          </div>
        </motion.div>

        {/* Job Description */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl border border-gray-200 p-5"
        >
          <h3 className="font-semibold mb-4">
            Job Description
          </h3>

          <textarea
            rows={10}
            placeholder="Paste Job Description here..."
            className="w-full border border-gray-300 hover:border-orange-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          />

          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
            <Sparkles size={18} />
            Analyze Resume
          </button>
        </motion.div>
      </div>

      {/* Results */}
      <div className="grid lg:grid-cols-3 gap-5">

        {/* Match Score */}
        <div className="bg-white rounded-2xl border border-gray-300 p-6">
          <h3 className="font-semibold mb-5">
            Match Score
          </h3>

          <div className="flex justify-center">
            <div className="relative w-40 h-40">
              <svg className="w-40 h-40 rotate-[-90deg]">
                <circle
                  cx="80"
                  cy="80"
                  r="65"
                  stroke="#eee"
                  strokeWidth="12"
                  fill="none"
                />

                <circle
                  cx="80"
                  cy="80"
                  r="65"
                  stroke="#f97316"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="408"
                  strokeDashoffset="82"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-bold">
                  80%
                </span>
                <span className="text-gray-500 text-sm">
                  Match
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl border border-gray-300 p-6">
          <h3 className="font-semibold mb-5">
            Skills Analysis
          </h3>

          <div>
            <div className="flex items-center gap-2 text-green-600 mb-3">
              <CheckCircle2 size={18} />
              <span className="font-medium">
                Matched Skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 text-red-500 mb-3">
              <AlertCircle size={18} />
              <span className="font-medium">
                Missing Skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Docker", "AWS", "Redis"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-white rounded-2xl border border-gray-300 p-6">
          <h3 className="font-semibold mb-5 flex items-center gap-2">
            <TrendingUp size={18} />
            AI Recommendations
          </h3>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-orange-50">
              Learn Docker fundamentals
            </div>

            <div className="p-3 rounded-xl bg-orange-50">
              Study AWS EC2 & S3
            </div>

            <div className="p-3 rounded-xl bg-orange-50">
              Practice CI/CD pipelines
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}