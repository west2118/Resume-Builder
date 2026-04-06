import { Plus, X } from "lucide-react";
import React from "react";

const CertificationsSection = ({
  resumeData,
  updateArraySection,
  addArrayItem,
  removeArrayItem,
}: {
  resumeData: any;
  updateArraySection: any;
  addArrayItem: any;
  removeArrayItem: any;
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Certifications</h3>
        <button
          onClick={() => addArrayItem("certifications")}
          className="flex items-center text-sm text-blue-600 hover:text-blue-700">
          <Plus className="w-4 h-4 mr-1" /> Add Certification
        </button>
      </div>
      {resumeData.certifications.map((cert, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-800">
              Certificate {index + 1}
            </h4>
            <button
              onClick={() => removeArrayItem("certifications", index)}
              className="text-gray-400 hover:text-red-500">
              <X className="w-4 h-4" />
            </button>
          </div>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
            placeholder="Title"
            value={cert.name}
            onChange={(e) =>
              updateArraySection("experience", index, "name", e.target.value)
            }
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              placeholder="Description"
              value={cert.description}
              onChange={(e) =>
                updateArraySection(
                  "experience",
                  index,
                  "description",
                  e.target.value,
                )
              }
            />
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
              placeholder="Date"
              value={cert.date}
              onChange={(e) =>
                updateArraySection("experience", index, "date", e.target.value)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;
