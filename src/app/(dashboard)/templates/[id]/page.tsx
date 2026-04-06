// app/editor/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { ResumeData } from "@/utils/types";
import FormRenderer from "@/components/editor/FormRenderer";
import TopNavBar from "@/components/editor/TopNavBar";
import { previewData, sections } from "@/utils/constants";
import { templateComponents } from "@/utils/templateRegistry";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const params = useParams();
  const [activeSection, setActiveSection] = useState("personal");
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>(previewData);

  const templateId = params.id as string;

  const SelectedTemplate =
    templateComponents[templateId as keyof typeof templateComponents];

  const updateObjectSection = (
    section: keyof typeof resumeData,
    field: string,
    value: any,
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as object),
        [field]: value,
      },
    }));
  };

  const updateArraySection = (
    section: keyof typeof resumeData,
    index: number,
    field: string,
    value: any,
  ) => {
    setResumeData((prev) => {
      const updatedArray = [...(prev[section] as any[])];

      updatedArray[index] = {
        ...updatedArray[index],
        [field]: value,
      };

      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  // Add new item to array section
  const addArrayItem = (section: keyof ResumeData) => {
    setResumeData((prev) => {
      const newItemTemplates: Record<string, any> = {
        experience: {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
        education: {
          degree: "",
          school: "",
          location: "",
          graduationDate: "",
        },
        projects: {
          name: "",
          description: "",
        },
        certifications: {
          name: "",
          description: "",
          date: "",
        },
      };

      return {
        ...prev,
        [section]: [...(prev[section] as any[]), newItemTemplates[section]],
      };
    });
  };

  // Remove item from array section
  const removeArrayItem = (section: keyof ResumeData, index: number) => {
    setResumeData((prev) => {
      const updated = [...(prev[section] as any[])];
      updated.splice(index, 1);

      return {
        ...prev,
        [section]: updated,
      };
    });
  };

  const handleDownloadPDF = async () => {
    const fullHTML = `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              background: white;
            }
          </style>
        </head>
        <body>
        ${document.getElementById("resume-preview")?.innerHTML}
        </body>
      </html>
    `;

    const res = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html: fullHTML }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
  };

  const handleSave = async () => {
    try {
      await axios.post("/api/resume/save", {
        template: templateId,
        resumeData,
      });

      toast.success("Resume saved successfully!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to save resume");
    }
  };

  return (
    <main className="flex-1 min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar
        setShowMobilePreview={setShowMobilePreview}
        showMobilePreview={showMobilePreview}
        handleDownloadPDF={handleDownloadPDF}
        handleSave={handleSave}
      />

      {/* Editor Content */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-73px)]">
        {/* Left Side - Form Sections */}
        <div
          className={`
          ${showMobilePreview ? "hidden" : "block"} 
          lg:block w-full lg:w-1/2 border-r border-gray-200 bg-white overflow-y-auto
        `}>
          <div className="flex h-full">
            {/* Section Tabs */}
            <div className="w-20 sm:w-24 bg-gray-50 border-r border-gray-200">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setShowMobilePreview(false);
                    }}
                    className={`w-full flex flex-col items-center justify-center py-4 px-2 transition-colors relative ${
                      activeSection === section.id
                        ? "text-blue-600 bg-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-xs sm:text-sm mt-1 text-center">
                      {section.label}
                    </span>
                    {activeSection === section.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Form Content */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
              <FormRenderer
                activeSection={activeSection}
                resumeData={resumeData}
                updateObjectSection={updateObjectSection}
                updateArraySection={updateArraySection}
                addArrayItem={addArrayItem}
                removeArrayItem={removeArrayItem}
                setResumeData={setResumeData}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div
          className={`
          ${showMobilePreview ? "block" : "hidden"} 
          lg:block w-full space-y-4 lg:w-1/2 bg-gray-100 p-4 sm:p-6 overflow-y-auto hide-scrollbar
        `}>
          <div id="resume-preview">
            {SelectedTemplate ? (
              <SelectedTemplate resumeData={resumeData} />
            ) : (
              <div>Template not found</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
