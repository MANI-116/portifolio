import SectionTitle from "../components/sectionTitle"
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilServerNetworkAlt } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
const SkillsSection = () => {
  return (
    <section className="skills section" id="skills">
      <SectionTitle title="Skills" subtitle="My technical level"></SectionTitle>
          <div className="container grid skills-container">
            <div>
              {/* ----------------------skill-1-------------------------- */}
              <div className="skills-content">
                <div className="skills-header">
                   <UilBracketsCurly className="skills-icon"></UilBracketsCurly>
                   <div>
                    <h1 className="skills-title">Frontend developer</h1>
                    <span className="skills-subtitle">More than 4 years</span>
                   </div>
                   <UilAngleDown skills-arrow/>
                </div>
                <div className="skills-list">


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">HTML</h3>
                      <span className="skills-number">90%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-html"></span>
                    </div>
                  </div>


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">CSS</h3>
                      <span className="skills-number">70%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-css"></span>
                    </div>
                  </div>


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">JavaScript</h3>
                      <span className="skills-number">95%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-javascript"></span>
                    </div>
                  </div>


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">REACT</h3>
                      <span className="skills-number">50%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-react"></span>
                    </div>
                  </div>

                </div>
              </div>

              {/* ----------------------skill->2-------------------------- */}
              <div className="skills-content">
                <div className="skills-header">
                   <UilServerNetworkAlt className="skills-icon"></UilServerNetworkAlt>
                   <div>
                    <h1 className="skills-title">Backend developer</h1>
                    <span className="skills-subtitle">More than 3 years</span>
                   </div>
                   <UilAngleDown skills-arrow/>
                </div>
                <div className="skills-list">


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">NODEJS</h3>
                      <span className="skills-number">90%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-nodejs"></span>
                    </div>
                  </div>


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">Express</h3>
                      <span className="skills-number">70%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-exress"></span>
                    </div>
                  </div>


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">TypeScript</h3>
                      <span className="skills-number">95%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-typescript"></span>
                    </div>
                  </div>


                  <div className="skills-data">
                    <div className="skills-title">
                      <h3 className="skills-name">MongoDB</h3>
                      <span className="skills-number">50%</span>
                    </div>
                    <div className="skills_bar">
                      <span className="skills-percentage skill-mongodb"></span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          </section>
  )
}

export default SkillsSection