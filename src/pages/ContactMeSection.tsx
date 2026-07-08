import { useState, FormEvent } from "react"
import { UilMessage } from "@iconscout/react-unicons"
import SectionTitle from "../components/sectionTitle"
import ContactMeContact from "../components/Contact/ContactMeContact"

const ContactMeSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [project, setProject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    if (!name || !email || !message) {
      setStatus("error")
      setErrorMsg("Please fill in Name, Email, and Message.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      setErrorMsg("Please enter a valid email address.")
      return
    }

    // Ready for backend integration — replace the URL below with your endpoint
    try {
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project, message }),
      })
      if (!res.ok) throw new Error("Send failed")
      setStatus("success")
      setName("")
      setEmail("")
      setProject("")
      setMessage("")
    } catch {
      setStatus("error")
      setErrorMsg("Could not send message. Please try again later.")
    }
  }

  return (
    <section className="contact section" id="contact">
      <SectionTitle title="Contact Me" subtitle="Get in touch" />
      <div className="contact__container container grid">
        <ContactMeContact />
        <form onSubmit={handleSubmit} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">Name</label>
              <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="contact__input" required />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">Email</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="contact__input" required />
            </div>
            <div className="contact__content item3">
              <label htmlFor="project" className="contact__label">Project</label>
              <input id="project" type="text" value={project} onChange={e => setProject(e.target.value)} className="contact__input" />
            </div>
            <div className="contact__content item4">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea id="message" rows={7} value={message} onChange={e => setMessage(e.target.value)} className="contact__input" required />
            </div>
          </div>

          {status === "error" && <p className="contact__error">{errorMsg}</p>}
          {status === "success" && <p className="contact__success">Message sent! I'll get back to you soon.</p>}

          <button type="submit" disabled={status === "sending"} className="button button--flex contact__btn">
            {status === "sending" ? "Sending..." : "Send Message"}
            <UilMessage className="button__icon" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMeSection
