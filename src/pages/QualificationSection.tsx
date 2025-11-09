import SectionTitle from "../components/sectionTitle"
import QualificationCard from "../components/Qualification/QualificationCard"
import QualificationJourney from "../components/Qualification/QualificationJourney"
const QualificationSection = () => {
  return (
    <section className="grid container" id="qualification">
     
     <SectionTitle title="Qualification" subtitle="My Personal Journey"/>
     <QualificationJourney title="Education">
      <QualificationCard title="ECE" subtitle="NIT Hamirpur" timeLine="2019-2023"></QualificationCard>

      <QualificationCard title="WEB DEVELOPMENT" subtitle="100xDevs" timeLine="2023-2024"></QualificationCard>

      <QualificationCard title="MERN STACK DEVELOPMENT" subtitle="100xDevs" timeLine="2023-2024"></QualificationCard>
     </QualificationJourney>

    </section>
  )
}

export default QualificationSection