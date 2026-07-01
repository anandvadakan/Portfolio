import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import './CaseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    return (
      <main className="cs-not-found">
        <p>Case study not found.</p>
        <Link to="/works">← Back to Works</Link>
      </main>
    )
  }

  return (
    <main className="cs">
      <div className="cs__back">
        <Link to="/works" className="cs__back-link">← Works</Link>
      </div>

      <header className="cs__header">
        <span
          className="cs__tag"
          style={{ background: cs.tagColor, color: cs.accentColor }}
        >
          {cs.tag}
        </span>
        <h1 className="cs__title">{cs.title}</h1>
        <p className="cs__subtitle">{cs.subtitle}</p>
      </header>

      <div className="cs__body">
        <section className="cs__section">
          <h2 className="cs__section-title">Overview</h2>
          <p>{cs.summary}</p>
        </section>

        <section className="cs__section">
          <h2 className="cs__section-title">The Problem</h2>
          <p>{cs.problem}</p>
        </section>

        <section className="cs__section">
          <h2 className="cs__section-title">Approach</h2>
          <ul className="cs__list">
            {cs.approach.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cs__section cs__outcome">
          <h2 className="cs__section-title">Outcome</h2>
          <p>{cs.outcome}</p>
        </section>
      </div>
    </main>
  )
}
