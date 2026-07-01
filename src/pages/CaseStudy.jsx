import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import './CaseStudy.css'

function NotionIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="currentColor" fillOpacity="0.12" />
      <path d="M3.5 3.5h5.2l3.8 5V3.5h1v9H8.3L4.5 7.4V12.5H3.5V3.5z" fill="currentColor" />
    </svg>
  )
}

function StandardCaseStudy({ cs }) {
  return (
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
  )
}

function OpsEfficiencyDetail({ cs }) {
  return (
    <div className="cs__body">
      <section className="cs__section">
        <h2 className="cs__section-title">Overview</h2>
        <p>{cs.summary}</p>
      </section>

      <p className="cs__context">{cs.context}</p>

      {cs.caseStudies.map((sub, i) => (
        <div key={i} className="cs__sub">
          <div className="cs__sub-header">
            <span className="cs__sub-num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="cs__sub-title">{sub.title}</h2>
              <p className="cs__sub-meta">{sub.meta}</p>
            </div>
          </div>

          <section className="cs__section">
            <h3 className="cs__section-title">The Problem</h3>
            {sub.problem.split('\n\n').map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </section>

          <section className="cs__section">
            <h3 className="cs__section-title">Solution Design</h3>
            <ul className="cs__list">
              {sub.solution.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="cs__section cs__outcome">
            <h3 className="cs__section-title">Expected Impact</h3>
            <p>{sub.outcome}</p>
          </section>
        </div>
      ))}

      <a
        href={cs.notionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cs__notion-link"
        style={{ borderColor: cs.accentColor, color: cs.accentColor }}
      >
        <NotionIcon />
        Read full case study on Notion
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

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

      {cs.caseStudies ? (
        <OpsEfficiencyDetail cs={cs} />
      ) : (
        <StandardCaseStudy cs={cs} />
      )}
    </main>
  )
}
