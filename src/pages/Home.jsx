import React from 'react'
import { Link } from 'react-router-dom'
import CardSwap, { Card } from '../components/CardSwap'
import { caseStudies } from '../data/caseStudies'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__text">
          <h1 className="hero__name">Anand V</h1>
          <p className="hero__roles">
            <span>GTM Engineer</span>
            <span className="hero__dot" />
            <span>Strategy</span>
            <span className="hero__dot" />
            <span>AI Workflow</span>
          </p>
          <p className="hero__desc">
            I design structured, data-driven strategies that help businesses grow efficiently and make better decisions.
          </p>
          <p className="hero__desc">
            My work focuses on simplifying complexity, improving systems, and solving real-world business problems.
          </p>
          <div className="hero__actions">
            <Link to="/works" className="btn btn--primary">View Works</Link>
            <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
          </div>
        </div>

        <div className="hero__card-area">
          <CardSwap
            width={340}
            height={260}
            cardDistance={55}
            verticalDistance={60}
            delay={4000}
            pauseOnHover
            skewAmount={5}
            easing="elastic"
          >
            {caseStudies.map((cs) => (
              <Card key={cs.slug} customClass="case-card">
                <Link to={`/works/${cs.slug}`} className="case-card__inner">
                  <span
                    className="case-card__tag"
                    style={{ background: cs.tagColor, color: cs.accentColor }}
                  >
                    {cs.tag}
                  </span>
                  <h3 className="case-card__title">{cs.title}</h3>
                  <p className="case-card__sub">{cs.subtitle}</p>
                  <span className="case-card__cta" style={{ color: cs.accentColor }}>
                    Read case study →
                  </span>
                </Link>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      <section className="case-studies-section">
        <h2 className="section-title">Case Studies</h2>
        <div className="case-grid">
          {caseStudies.map((cs) => (
            <Link to={`/works/${cs.slug}`} key={cs.slug} className="case-tile">
              <span
                className="case-tile__tag"
                style={{ background: cs.tagColor, color: cs.accentColor }}
              >
                {cs.tag}
              </span>
              <h3 className="case-tile__title">{cs.title}</h3>
              <p className="case-tile__sub">{cs.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
