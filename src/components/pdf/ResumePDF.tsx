import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "@/utils/types";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },

  /* Header */
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 12,
    marginBottom: 18,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 13,
    color: "#4b5563",
    marginTop: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    fontSize: 10,
    color: "#4b5563",
    gap: 10,
  },

  /* Sections */
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },

  /* Items */
  item: {
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 10,
    color: "#4b5563",
  },
  description: {
    fontSize: 10,
    marginTop: 4,
  },

  /* Skills Pills */
  skillsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillPill: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    fontSize: 9,
  },
});

const ResumePDF = ({ data }: { data: ResumeData }) => {
  const hasContact =
    data.personal.email || data.personal.phone || data.personal.location;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ================= HEADER ================= */}
        {(data.personal.fullName || data.personal.jobTitle || hasContact) && (
          <View style={styles.header}>
            {data.personal.fullName && (
              <Text style={styles.name}>{data.personal.fullName}</Text>
            )}

            {data.personal.jobTitle && (
              <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>
            )}

            {hasContact && (
              <View style={styles.contactRow}>
                {data.personal.email && <Text>{data.personal.email}</Text>}
                {data.personal.phone && <Text>{data.personal.phone}</Text>}
                {data.personal.location && (
                  <Text>{data.personal.location}</Text>
                )}
              </View>
            )}
          </View>
        )}

        {/* ================= SUMMARY ================= */}
        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text>{data.summary}</Text>
          </View>
        )}

        {/* ================= EXPERIENCE ================= */}
        {data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            {data.experience.map((exp, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.rowBetween}>
                  <View>
                    {exp.title && (
                      <Text style={styles.itemTitle}>{exp.title}</Text>
                    )}

                    {(exp.company || exp.location) && (
                      <Text style={styles.subText}>
                        {exp.company}
                        {exp.company && exp.location && " · "}
                        {exp.location}
                      </Text>
                    )}
                  </View>

                  {(exp.startDate || exp.endDate) && (
                    <Text style={styles.subText}>
                      {exp.startDate}
                      {exp.startDate && exp.endDate && " - "}
                      {exp.endDate}
                    </Text>
                  )}
                </View>

                {exp.description && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ================= EDUCATION ================= */}
        {data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>

            {data.education.map((edu, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.rowBetween}>
                  <View>
                    {edu.degree && (
                      <Text style={styles.itemTitle}>{edu.degree}</Text>
                    )}

                    {(edu.school || edu.location) && (
                      <Text style={styles.subText}>
                        {edu.school}
                        {edu.school && edu.location && " · "}
                        {edu.location}
                      </Text>
                    )}
                  </View>

                  {edu.graduationDate && (
                    <Text style={styles.subText}>{edu.graduationDate}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ================= SKILLS ================= */}
        {data.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>

            <View style={styles.skillsWrapper}>
              {data.skills.map((skill, i) => (
                <Text key={i} style={styles.skillPill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* ================= PROJECTS ================= */}
        {data.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>

            {data.projects.map((project, i) => (
              <View key={i} style={styles.item}>
                {project.name && (
                  <Text style={styles.itemTitle}>{project.name}</Text>
                )}

                {project.description && (
                  <Text style={styles.description}>{project.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {data.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>

            {data.certifications.map((cert, i) => (
              <View key={i} style={styles.rowBetween}>
                <View>
                  {cert.name && (
                    <Text style={styles.itemTitle}>{cert.name}</Text>
                  )}
                  {cert.description && (
                    <Text style={styles.subText}>{cert.description}</Text>
                  )}
                </View>

                {cert.date && <Text style={styles.subText}>{cert.date}</Text>}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF;
