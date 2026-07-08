import { useState } from "react"
import SectionTitle from "../components/sectionTitle"
import { UilArrowRight, UilAngleRight, UilAngleLeft, UilGithub } from "@iconscout/react-unicons"

const projects = [
  {
    title: "PerpX — Centralized Perpetual Futures Exchange",
    description: "Real-time perps exchange with a custom FIFO matching engine (BST + doubly-linked list), Redis event-driven architecture with Streams & consumer groups, WebSocket orderbook streaming with cumulative depth visualization, crash recovery via periodic snapshots with SHA-256 checksum validation, and a Next.js 16 full-featured trading UI. Ships with 208+ tests and Docker-based infrastructure.",
    imgPath: "/portfolio1.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/MANI-116/Centralized-Exchange-Perpetual-futures-perps-"
  },
  {
    title: "Hospital Management System",
    description: "Electron-based desktop application for hospitals to digitally manage patient records, appointments, billing, and staff schedules with a intuitive interface.",
    imgPath: "/portfolio1.jpg",
    demoUrl: null,
    githubUrl: null
  },
  {
    title: "SMK STONE TECH",
    description: "Platform to regularize construction methods and streamline the entire construction process from planning to execution.",
    imgPath: "/portfolio2.jpg",
    demoUrl: null,
    githubUrl: null
  },
  {
    title: "RAAS PORTAL API",
    description: "End-to-end RESTful APIs built for client onboarding to the RaaS (Recovery as a Service) platform, handling authentication, provisioning, and monitoring.",
    imgPath: "/portfolio3.jpg",
    demoUrl: null,
    githubUrl: null
  }
]

const PortifolioSection = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<number>(0)

  function handleLeftClick() {
    setSelectedPortfolio(prev => prev === 0 ? projects.length - 1 : prev - 1)
  }

  function handleRightClick() {
    setSelectedPortfolio(prev => prev === projects.length - 1 ? 0 : prev + 1)
  }

  return (
    <section className="section portfolio" id="portfolio">
      <SectionTitle title="Portfolio" subtitle="Recent work" />

      <div className="portfolio__container container">
        <div className="portfolio__main grid">
          <UilAngleLeft onClick={handleLeftClick} className="portfolio__swipe-icon portfolio__swiper-prev" size="5rem" />
          <PortfolioItem project={projects[selectedPortfolio]} />
          <UilAngleRight onClick={handleRightClick} className="portfolio__swipe-icon portfolio__swiper-next" />
        </div>
        <div className="portfolio__pgn">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setSelectedPortfolio(i)}
              className={"portfolio__pgn-dot " + (selectedPortfolio === i ? "active" : "")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const PortfolioItem = ({ project }: { project: typeof projects[number] }) => {
  return (
    <div className="portfolio__content grid">
      <img src={project.imgPath} alt={project.title} className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">{project.title}</h3>
        <p className="portfolio__description">{project.description}</p>
        <div className="portfolio__links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button button--flex button--small portfolio__button">
              GitHub <UilGithub className="button__icon" />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button button--flex button--small portfolio__button">
              Demo <UilArrowRight className="button__icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortifolioSection
