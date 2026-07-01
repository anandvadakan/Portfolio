import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact">
      <div className="contact__header">
        <h1 className="contact__title">Get in touch</h1>
        <p className="contact__subtitle">
          Interested in working together or want to discuss a problem? Send a message.
        </p>
      </div>

      {sent ? (
        <div className="contact__success">
          <p>Thanks for reaching out. I'll get back to you shortly.</p>
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project or question..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="contact__submit">Send message</button>
        </form>
      )}
    </main>
  )
}
