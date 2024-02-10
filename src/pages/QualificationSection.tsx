import SectionTitle from "../components/sectionTitle";
import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import Qualification from "../components/Qualification/Qualification";

const QualificationSection = () => {
  return (
    <section className="qulaification section">
      <SectionTitle title="Qualification" subtitle="My personal journey" />

      <div className="qualification_container container">
        <div className="qualification-tabs">
          <div className="qualification-button button--flex">
            <UilGraduationCap className="qualification-icon" />
            Education
          </div>
          <div className="qualification-button button--flex">
            <UilBriefcaseAlt className="qualification-icon" />
            Work
          </div>
        </div>

        <div className="qualifications-sections">
          {/* Qualification content */}
          <div className="qualifications-content">
            {/* Qualification Data 1 */}
            <div className="qualification-data">
              <Qualification
                title="Electronics & Communications Engineering"
                subtitle="NIT Hamirpur"
                timeline="2019 - 2023"
                position="right"
                status={true}
              />
              <Qualification
                title="Frontend Development"
                subtitle="smartKnowlwdge"
                timeline="2020 - 2021"
                position="left"
                status={true}
              />
              <Qualification
                title="Backend Developoment"
                subtitle="Udemy"
                timeline="2021 - 2023"
                position="right"
                status={true}
              />
              <Qualification
                title="FullStack Development"
                subtitle="100xDevs"
                timeline="2023 - 2024"
                position="left"
                status={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
