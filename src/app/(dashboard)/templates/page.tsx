// app/templates/page.tsx
"use client";

import React, { useState } from "react";
import {
  Eye,
  Check,
  Palette,
  Layout,
  Grid,
  Layers,
  FileText,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code,
  ArrowLeft,
  X,
} from "lucide-react";
import Link from "next/link";
import { templates } from "@/utils/templates";

const TemplateSelectionPage = () => {
  // Template categories
  const categories = [
    { id: "all", label: "All Templates", icon: Grid },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "creative", label: "Creative", icon: Sparkles },
    { id: "simple", label: "Simple", icon: FileText },
    { id: "technical", label: "Technical", icon: Code },
    { id: "academic", label: "Academic", icon: GraduationCap },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Filter templates by category
  const filteredTemplates =
    activeCategory === "all"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Choose Template
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Select a template and customize it to your style
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 bg-white">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex space-x-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className={`bg-white rounded-lg border-2 overflow-hidden transition-all hover:shadow-xl border-gray-200 hover:border-gray-300`}>
              {/* Template Preview Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden group flex items-center justify-center">
                <img
                  src={template.image}
                  alt={template.name}
                  className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                />

                {template.popularity && (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-linear-to-r from-yellow-400 to-yellow-500 text-white text-xs font-medium rounded-full">
                    {template.popularity}
                  </span>
                )}
              </div>

              {/* Template Info */}
              <div className="p-4">
                <div className="mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {template.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                  {template.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{template.features.length - 3}
                    </span>
                  )}
                </div>

                {/* Select Button */}
                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={`/templates/${template.id}`}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border transition-colors border-gray-300 text-gray-700 hover:bg-gray-50`}>
                    Create Template
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelectionPage;
