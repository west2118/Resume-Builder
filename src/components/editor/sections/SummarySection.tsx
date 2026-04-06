import React from "react";

const SummarySection = ({
  resumeData,
  setResumeData,
}: {
  resumeData: any;
  setResumeData: any;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Professional Summary
      </h3>
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition h-32"
        placeholder="Write a brief summary of your professional background and key achievements..."
        value={resumeData.summary}
        onChange={(e) =>
          setResumeData((prev) => ({
            ...prev,
            summary: e.target.value,
          }))
        }
      />
      <p className="text-sm text-gray-500">
        Tip: Keep it concise and highlight your most impressive achievements.
      </p>
    </div>
  );
};

export default SummarySection;
