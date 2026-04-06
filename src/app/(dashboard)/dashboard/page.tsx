"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, FileText, Edit2, Trash2, Copy, Download } from "lucide-react";
import { useRouter } from "next/navigation";

type Resume = {
  id: string;
  template: string;
  fullName: string;
  jobTitle: string;
  updatedAt: string;
};

const DashboardPage = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const router = useRouter();

  // ✅ Fetch resumes
  const fetchResumes = async () => {
    try {
      const { data } = await axios.get("/api/resume", {
        withCredentials: true,
      });

      setResumes(data);
    } catch (error) {
      console.error("Failed to fetch resumes", error);
    }
  };

  // ✅ Run on mount
  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage your resumes</p>
        </div>

        <button
          onClick={() => router.push("/templates")}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Create New Resume
        </button>
      </div>

      {/* Resume List */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Resumes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                {resume.fullName?.charAt(0) || "R"}
              </div>

              <div className="flex-1 ml-3">
                <h4 className="font-semibold text-gray-800 truncate">
                  {resume.fullName || "Untitled Resume"}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {resume.jobTitle || "No job title"}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/editor/${resume.id}`)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit2 className="w-4 h-4" />
                </button>

                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>

                <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg">
                  <Copy className="w-4 h-4" />
                </button>

                <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {resumes.length === 0 && (
          <div className="text-gray-500 text-sm">
            No resumes yet. Create your first one.
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
