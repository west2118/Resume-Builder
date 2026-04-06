import { ResumeData } from "@/utils/types";
import { Mail, Phone, MapPin } from "lucide-react";

type PlainTemplateProps = {
  resumeData: ResumeData;
};

const PlainTemplate = ({ resumeData }: PlainTemplateProps) => {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    projects,
    certifications,
  } = resumeData;

  // Filter Empty Data
  const filteredExperience = experience.filter(
    (exp) => exp.title || exp.company || exp.description,
  );

  const filteredEducation = education.filter((edu) => edu.degree || edu.school);

  const filteredProjects = projects.filter(
    (project) => project.name || project.description,
  );

  const filteredCertifications = certifications.filter(
    (cert) => cert.name || cert.description,
  );

  const filteredSkills = skills.filter((skill) => skill.trim() !== "");

  const hasContact = personal.email || personal.phone || personal.location;

  return (
    <div className="bg-white p-6 sm:p-8 w-[210mm] h-[297mm] mx-auto">
      {/* Header */}
      {(personal.fullName || personal.jobTitle || hasContact) && (
        <div className="border-b border-gray-200 pb-6 mb-6">
          {personal.fullName && (
            <h2 className="text-3xl font-bold text-gray-900">
              {personal.fullName}
            </h2>
          )}

          {personal.jobTitle && (
            <p className="text-lg text-gray-600 mt-1">{personal.jobTitle}</p>
          )}

          {hasContact && (
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
              {personal.email && (
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {personal.email}
                </div>
              )}

              {personal.phone && (
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {personal.phone}
                </div>
              )}

              {personal.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {personal.location}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Summary</h3>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {filteredExperience.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Experience
          </h3>

          {filteredExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  {exp.title && (
                    <h4 className="font-medium text-gray-800">{exp.title}</h4>
                  )}

                  {(exp.company || exp.location) && (
                    <p className="text-gray-600">
                      {exp.company}
                      {exp.company && exp.location && " · "}
                      {exp.location}
                    </p>
                  )}
                </div>

                {(exp.startDate || exp.endDate) && (
                  <p className="text-sm text-gray-500">
                    {exp.startDate}
                    {exp.startDate && exp.endDate && " - "}
                    {exp.endDate}
                  </p>
                )}
              </div>

              {exp.description && (
                <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {filteredEducation.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Education
          </h3>

          {filteredEducation.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  {edu.degree && (
                    <h4 className="font-medium text-gray-800">{edu.degree}</h4>
                  )}

                  {(edu.school || edu.location) && (
                    <p className="text-gray-600">
                      {edu.school}
                      {edu.school && edu.location && " · "}
                      {edu.location}
                    </p>
                  )}
                </div>

                {edu.graduationDate && (
                  <p className="text-sm text-gray-500">{edu.graduationDate}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {filteredSkills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>

          <div className="flex flex-wrap gap-2">
            {filteredSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {filteredProjects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Projects</h3>

          {filteredProjects.map((project, index) => (
            <div key={index} className="mb-4">
              {project.name && (
                <h4 className="font-medium text-gray-800">{project.name}</h4>
              )}

              {project.description && (
                <p className="text-sm text-gray-700 mt-2">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {filteredCertifications.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Certifications
          </h3>

          {filteredCertifications.map((cert, index) => (
            <div key={index} className="flex justify-between items-start mb-4">
              <div>
                {cert.name && (
                  <h4 className="font-medium text-gray-800">{cert.name}</h4>
                )}

                {cert.description && (
                  <p className="text-sm text-gray-600">{cert.description}</p>
                )}
              </div>

              {cert.date && (
                <p className="text-sm text-gray-500">{cert.date}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlainTemplate;
