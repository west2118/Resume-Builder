import { Plus, X } from "lucide-react";
import React from "react";

const ProjectsSection = ({
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
        <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
        <button
          onClick={() => addArrayItem("projects")}
          className="flex items-center text-sm text-blue-600 hover:text-blue-700">
          <Plus className="w-4 h-4 mr-1" /> Add Project
        </button>
      </div>
      {resumeData.projects.map((project, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-800">Project {index + 1}</h4>
            <button
              onClick={() => removeArrayItem("projects", index)}
              className="text-gray-400 hover:text-red-500">
              <X className="w-4 h-4" />
            </button>
          </div>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
            placeholder="Title"
            value={project.name}
            onChange={(e) =>
              updateArraySection("projects", index, "name", e.target.value)
            }
          />
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm h-20"
            placeholder="Project description"
            value={project.description}
            onChange={(e) =>
              updateArraySection(
                "projects",
                index,
                "description",
                e.target.value,
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
