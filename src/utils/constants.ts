import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Code,
  FolderGit2,
  Award,
} from "lucide-react";

export const previewData = {
  personal: {
    fullName: "John Doe",
    jobTitle: "Senior Software Engineer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
  summary:
    "Experienced software engineer with 8+ years in full-stack development. Passionate about building scalable applications and leading development teams.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Lead development of microservices architecture, improved system performance by 40%",
    },
    {
      title: "Software Engineer",
      company: "StartUp Inc",
      location: "San Jose, CA",
      startDate: "Jun 2018",
      endDate: "Dec 2020",
      description: "Developed full-stack features using React and Node.js",
    },
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University of California",
      location: "Berkeley, CA",
      graduationDate: "May 2018",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description:
        "Built a full-stack e-commerce platform with real-time inventory",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer",
      description: "Amazon Web Services",
      date: "March 2023",
    },
  ],
};

// Form sections configuration
export const sections = [
  { id: "personal", label: "Personal Info", icon: User },
  { id: "summary", label: "Summary", icon: FileText },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "certifications", label: "Certifications", icon: Award },
];
