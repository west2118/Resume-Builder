"use client";

import PersonalSection from "./sections/PersonalSection";
import SummarySection from "./sections/SummarySection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificationsSection from "./sections/CertificationsSection";
import { ResumeData } from "@/utils/types";

type Props = {
  activeSection: string;
  resumeData: ResumeData;
  updateObjectSection: any;
  updateArraySection: any;
  addArrayItem: any;
  removeArrayItem: any;
  setResumeData: any;
};

const FormRenderer = ({
  activeSection,
  resumeData,
  updateObjectSection,
  updateArraySection,
  addArrayItem,
  removeArrayItem,
  setResumeData,
}: Props) => {
  switch (activeSection) {
    case "personal":
      return (
        <PersonalSection
          resumeData={resumeData}
          updateObjectSection={updateObjectSection}
        />
      );

    case "summary":
      return (
        <SummarySection resumeData={resumeData} setResumeData={setResumeData} />
      );

    case "experience":
      return (
        <ExperienceSection
          resumeData={resumeData}
          updateArraySection={updateArraySection}
          addArrayItem={addArrayItem}
          removeArrayItem={removeArrayItem}
        />
      );

    case "education":
      return (
        <EducationSection
          resumeData={resumeData}
          updateArraySection={updateArraySection}
          addArrayItem={addArrayItem}
          removeArrayItem={removeArrayItem}
        />
      );

    case "skills":
      return (
        <SkillsSection resumeData={resumeData} setResumeData={setResumeData} />
      );

    case "projects":
      return (
        <ProjectsSection
          resumeData={resumeData}
          updateArraySection={updateArraySection}
          addArrayItem={addArrayItem}
          removeArrayItem={removeArrayItem}
        />
      );

    case "certifications":
      return (
        <CertificationsSection
          resumeData={resumeData}
          updateArraySection={updateArraySection}
          addArrayItem={addArrayItem}
          removeArrayItem={removeArrayItem}
        />
      );

    default:
      return null;
  }
};

export default FormRenderer;
