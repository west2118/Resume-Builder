import { ResumeData } from "@/utils/types";

type HarvardTemplateProps = {
  resumeData: ResumeData;
};

const HarvardTemplate = ({ resumeData }: HarvardTemplateProps) => {
  const { personal, education, experience, skills, certifications } =
    resumeData;

  const hasEducation = education.some((edu) => edu.degree || edu.school);

  const hasExperience = experience.some((exp) => exp.title || exp.company);

  const hasSkills = skills.some((skill) => skill.trim() !== "");

  const hasCertifications = certifications.some((cert) => cert.name);

  return (
    <div className="bg-white p-6 sm:p-12 w-[210mm] h-[297mm] mx-auto">
      <div className="max-w-4xl mx-auto bg-white text-[15px] text-gray-900 leading-relaxed font-['Times_New_Roman']">
        {/* HEADER */}
        {(personal.fullName || personal.phone || personal.email) && (
          <div>
            {personal.fullName && (
              <h1 className="text-4xl font-bold tracking-wide">
                {personal.fullName}
              </h1>
            )}
            <div className="border-b border-gray-800 mt-2 mb-4"></div>

            {personal.phone && <p>{personal.phone}</p>}
            {personal.email && <p>{personal.email}</p>}
          </div>
        )}

        {/* EDUCATION */}
        {hasEducation && (
          <div className="mt-3">
            <h2 className="font-bold text-lg">Education</h2>
            <div className="border-b border-gray-800 mt-1 mb-3"></div>

            {education.map(
              (edu, index) =>
                (edu.degree || edu.school) && (
                  <div key={index} className={index !== 0 ? "mt-4" : ""}>
                    <div className="flex justify-between">
                      <div>
                        {edu.degree && <p className="italic">{edu.degree}</p>}
                        {edu.school && <p>{edu.school}</p>}
                      </div>
                      {edu.graduationDate && (
                        <p className="italic">{edu.graduationDate}</p>
                      )}
                    </div>
                  </div>
                ),
            )}
          </div>
        )}

        {/* TECHNICAL SKILLS */}
        {hasSkills && (
          <div className="mt-3">
            <h2 className="font-bold text-lg">Technical Skills</h2>
            <div className="border-b border-gray-800 mt-1 mb-3"></div>

            <div className="grid grid-cols-2 gap-x-10">
              <ul className="list-disc ml-6 space-y-1">
                {skills
                  .slice(0, Math.ceil(skills.length / 2))
                  .filter((skill) => skill.trim() !== "")
                  .map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>

              <ul className="list-disc ml-6 space-y-1">
                {skills
                  .slice(Math.ceil(skills.length / 2))
                  .filter((skill) => skill.trim() !== "")
                  .map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}

        {/* EXPERIENCE */}
        {hasExperience && (
          <div className="mt-3">
            <h2 className="font-bold text-lg">Professional Experience</h2>
            <div className="border-b border-gray-800 mt-1 mb-3"></div>

            {experience.map(
              (exp, index) =>
                (exp.title || exp.company) && (
                  <div key={index} className={index !== 0 ? "mt-4" : ""}>
                    <div className="flex justify-between">
                      <div>
                        {exp.title && <p className="italic">{exp.title}</p>}
                        {(exp.company || exp.location) && (
                          <p>
                            {exp.company}
                            {exp.company && exp.location && " - "}
                            {exp.location}
                          </p>
                        )}
                      </div>
                      {(exp.startDate || exp.endDate) && (
                        <p className="italic">
                          {exp.startDate}
                          {exp.startDate && exp.endDate && " - "}
                          {exp.endDate}
                        </p>
                      )}
                    </div>

                    {exp.description && (
                      <ul className="list-disc ml-6 mt-3 space-y-1">
                        <li>{exp.description}</li>
                      </ul>
                    )}
                  </div>
                ),
            )}
          </div>
        )}

        {/* CERTIFICATIONS */}
        {hasCertifications && (
          <div className="mt-3">
            <h2 className="font-bold text-lg">Certifications</h2>
            <div className="border-b border-gray-800 mt-1 mb-3"></div>

            <ul className="list-disc ml-6 space-y-1">
              {certifications.map(
                (cert, index) =>
                  cert.name && (
                    <li key={index}>
                      {cert.name}: {cert.description}
                      <strong>{cert.date && ` - ${cert.date}`}</strong>
                    </li>
                  ),
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HarvardTemplate;
