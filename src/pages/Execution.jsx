import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { caseStudyContent } from '../data/caseStudyContent'
import './Execution.css'

function ComingSoon() {
  return (
    <div className="exec__coming">
      <p className="exec__coming-text">Coming soon.</p>
    </div>
  )
}

function ExecTable({ headers, rows }) {
  return (
    <div className="exec__table-wrap">
      <table className="exec__table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function DocSection({ section }) {
  return (
    <div className="exec__doc-section">
      {section.heading && <h3 className="exec__doc-heading">{section.heading}</h3>}
      {section.body && section.body.split('\n\n').map((para, i) => (
        <p key={i} className="exec__doc-body">{para}</p>
      ))}
      {section.table && (
        <ExecTable headers={section.table.headers} rows={section.table.rows} />
      )}
      {section.afterTable && section.afterTable.split('\n\n').map((para, i) => (
        <p key={`at-${i}`} className="exec__doc-body">{para}</p>
      ))}
    </div>
  )
}

function ExecBlock({ doc, id }) {
  return (
    <section className="exec__block" id={id}>
      <h2 className="exec__block-title">{doc.title}</h2>
      {doc.coming ? (
        <ComingSoon />
      ) : (
        <div className="exec__block-content">
          {doc.subtitle && <p className="exec__block-subtitle">{doc.subtitle}</p>}
          {doc.sections.map((s, i) => (
            <DocSection key={i} section={s} />
          ))}
        </div>
      )}
    </section>
  )
}

export default function Execution() {
  const { slug } = useParams()
  const cs = caseStudyContent.find(c => c.slug === slug)

  if (!cs) {
    return (
      <main className="exec exec--notfound">
        <p>Not found.</p>
        <Link to="/">- Back to home</Link>
      </main>
    )
  }

  const { brd, frd, abTest } = cs.execution

  return (
    <main className="exec">
      <div className="exec__back">
        <Link to={`/case-studies/${slug}`} className="exec__back-link">← Back to case study</Link>
      </div>

      <header className="exec__header">
        <span
          className="exec__tag"
          style={{ background: cs.tagColor, color: cs.accentColor }}
        >
          {cs.tag}
        </span>
        <h1 className="exec__title">{cs.title}</h1>
        <p className="exec__subtitle">Requirements & test design</p>
      </header>

      <nav className="exec__nav">
        <a href="#brd" className="exec__nav-link">Business Requirements</a>
        <a href="#frd" className="exec__nav-link">Functional Requirements</a>
        <a href="#ab" className="exec__nav-link">A/B Test Design</a>
      </nav>

      <div className="exec__body">
        <ExecBlock doc={brd} id="brd" />
        <ExecBlock doc={frd} id="frd" />
        <ExecBlock doc={abTest} id="ab" />
      </div>
    </main>
  )
}
