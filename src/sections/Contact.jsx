import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-surface py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's get in touch"
          description="Have a question, an idea, or an opportunity to talk about? Reach out through any of these."
        />
        <SocialLinks variant="cards" />
      </div>
    </section>
  )
}
