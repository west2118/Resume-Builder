import { X } from "lucide-react";
import React from "react";

const SkillsSection = ({
  resumeData,
  setResumeData,
}: {
  resumeData: any;
  setResumeData: any;
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center">
            {skill}
            <button
              onClick={() => {
                setResumeData((prev) => ({
                  ...prev,
                  skills: prev.skills.filter((_, i) => i !== index),
                }));
              }}
              className="ml-2 text-blue-700 hover:text-blue-900">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>

      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Add a skill and press Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const value = (e.target as HTMLInputElement).value.trim();
            if (!value) return;

            setResumeData((prev) => ({
              ...prev,
              skills: [...prev.skills, value],
            }));

            (e.target as HTMLInputElement).value = "";
          }
        }}
      />
    </div>
  );
};

export default SkillsSection;
