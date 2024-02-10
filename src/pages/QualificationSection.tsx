import SectionTitle from "../components/sectionTitle";
import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import Qualification from "../components/Qualification/Qualification";
import { useState } from "react";
const QualificationSection = () => {
  const [show, setShow] = useState("education");
  console.log("showQualifications->", show);

  const handleTabClick = (tab: "education" | "work") => {
    console.log("clicked->", tab);
    setShow(tab);
  };
  return (
    <section className="qulaification section">
      <SectionTitle title="Qualification" subtitle="My personal journey" />

      <div className="qualification_container container">
        <div className="qualification-tabs">
          <div
            className="qualification-button button--flex"
            onClick={() => {
              handleTabClick("education");
            }}
            style={{ color: show === "education" ? `var(--first-color)` : `` }}
          >
            <UilGraduationCap className="qualification-icon" />
            Education
          </div>
          <div
            className="qualification-button button--flex"
            style={{ color: show === "work" ? `var(--first-color)` : `` }}
            onClick={() => {
              handleTabClick("work");
            }}
          >
            <UilBriefcaseAlt className="qualification-icon" />
            Work
          </div>
        </div>

        <div className="qualifications-sections">
          {/* Qualification content */}
          <div className="qualifications-content">
            {/* Qualification Data 1 */}

            <div
              className="qualification-data"
              style={{ display: show === "education" ? "grid" : "none" }}
            >
              <Qualification
                title="Electronics & Communications Engineering"
                subtitle="NIT Hamirpur"
                timeline="2019 - 2023"
                position="right"
                status={true}
                end={false}
              />
              <Qualification
                title="Frontend Development"
                subtitle="smartKnowlwdge"
                timeline="2020 - 2021"
                position="left"
                status={true}
                end={false}
              />
              <Qualification
                title="Backend Developoment"
                subtitle="Udemy"
                timeline="2021 - 2023"
                position="right"
                status={true}
                end={false}
              />
              <Qualification
                title="FullStack Development"
                subtitle="100xDevs"
                timeline="2023 - 2024"
                position="left"
                status={true}
                end={true}
              />
            </div>

            <div className="qualifications-content">
              {/* Qualification Data 1 */}

              <div
                className="qualification-data"
                style={{ display: show === "work" ? "grid" : "none" }}
              >
                {/* Qualification Data 2 */}
                <Qualification
                  title="Frontend Developer"
                  subtitle="SmartKnower"
                  timeline="2020 - 2021"
                  position="right"
                  status={true}
                  end={false}
                />
                <Qualification
                  title="Backend Developer"
                  subtitle="NIT Hamirpur"
                  timeline="2022 - 2023"
                  position="left"
                  status={true}
                  end={false}
                />
                <Qualification
                  title="Full Stack Developer"
                  subtitle="Jio"
                  timeline="2023 - 2024"
                  position="right"
                  status={true}
                  end={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
