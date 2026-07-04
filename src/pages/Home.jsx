import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText'
import Silk from '../components/Silk'
import MagicBento from '../components/MagicBento'
import ContactModal from '../components/ContactModal'
import { caseStudies } from '../data/caseStudies'
import './Home.css'

const ROLES = ['GTM Engineer', 'Strategy', 'AI Workflow']

function AnimatedRoles() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length)
        setVisible(true)
      }, 300)
    }, 2400)
    return () => clearInterval(cycle)
  }, [])

  return (
    <span className={`hero__role-pill ${visible ? 'hero__role-pill--in' : 'hero__role-pill--out'}`}>
      {ROLES[idx]}
    </span>
  )
}

function useReveal() {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, revealed]
}

const ILLUSTRATIONS = {
  'gst-saas-strategy': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Line chart - GTM growth trend */}
      <polyline points="20,95 60,80 100,70 130,50 165,35 200,18 240,10" stroke="rgba(122,163,200,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="20,95 60,80 100,70 130,50 165,35 200,18 240,10 240,110 20,110 Z" fill="rgba(61,90,128,0.25)"/>
      {/* Grid lines */}
      <line x1="20" y1="30" x2="240" y2="30" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <line x1="20" y1="60" x2="240" y2="60" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <line x1="20" y1="90" x2="240" y2="90" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      {/* Highlight dots */}
      <circle cx="100" cy="70" r="5" fill="rgba(122,163,200,0.85)" stroke="rgba(168,198,225,0.9)" strokeWidth="1.5"/>
      <circle cx="200" cy="18" r="5" fill="rgba(122,163,200,0.95)" stroke="rgba(168,198,225,1)" strokeWidth="1.5"/>
      {/* Label */}
      <text x="207" y="14" fill="rgba(168,198,225,0.95)" fontSize="10" fontFamily="sans-serif" fontWeight="600">GTM</text>
    </svg>
  ),
  'delay-accountability': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Clock face */}
      <circle cx="130" cy="60" r="48" fill="rgba(61,90,128,0.2)" stroke="rgba(122,163,200,0.55)" strokeWidth="1.5"/>
      {/* Restaurant slice - warm red, top-right */}
      <path d="M130 60 L130 14 A46 46 0 0 1 169 83 Z" fill="rgba(180,80,80,0.3)" stroke="rgba(200,100,100,0.5)" strokeWidth="1"/>
      {/* Platform slice - blue, top-left */}
      <path d="M130 60 L130 14 A46 46 0 0 0 91 83 Z" fill="rgba(61,90,128,0.45)" stroke="rgba(122,163,200,0.6)" strokeWidth="1"/>
      {/* External slice - grey, bottom */}
      <path d="M130 60 L91 83 A46 46 0 0 0 169 83 Z" fill="rgba(80,80,100,0.3)" stroke="rgba(140,140,170,0.45)" strokeWidth="1"/>
      {/* Clock hands */}
      <line x1="130" y1="60" x2="130" y2="25" stroke="rgba(200,220,240,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="130" y1="60" x2="155" y2="72" stroke="rgba(200,220,240,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="130" cy="60" r="3.5" fill="rgba(200,220,240,0.95)"/>
      {/* Labels */}
      <text x="148" y="38" fill="rgba(220,130,130,0.9)" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">REST</text>
      <text x="98" y="38" fill="rgba(122,163,200,0.9)" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">PLAT</text>
      <text x="116" y="108" fill="rgba(160,160,190,0.8)" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">EXT</text>
    </svg>
  ),
  'organic-food-gtm': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Leaf / organic growth */}
      <path d="M130 100 Q80 80 70 40 Q100 20 140 30 Q170 40 160 80 Q150 95 130 100Z" fill="rgba(58,125,68,0.35)" stroke="rgba(100,180,100,0.8)" strokeWidth="1.5"/>
      <path d="M130 100 Q120 70 125 35" stroke="rgba(100,180,100,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M125 55 Q105 50 95 38" stroke="rgba(100,180,100,0.55)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M127 72 Q110 68 100 58" stroke="rgba(100,180,100,0.45)" strokeWidth="1" strokeLinecap="round"/>
      {/* Growth arrow */}
      <polyline points="30,95 65,78 100,68 130,100" stroke="rgba(58,125,68,0)" strokeWidth="0"/>
      <polyline points="168,85 190,60 215,38 235,20" stroke="rgba(100,180,100,0.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M225 18 L235 20 L233 30" stroke="rgba(100,180,100,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Dots */}
      <circle cx="168" cy="85" r="3.5" fill="rgba(100,180,100,0.7)"/>
      <circle cx="215" cy="38" r="3.5" fill="rgba(100,180,100,0.85)"/>
      <circle cx="235" cy="20" r="3.5" fill="rgba(100,180,100,0.95)"/>
    </svg>
  ),
  'ops-efficiency-model': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* System nodes - delivery ops network */}
      <circle cx="50" cy="60" r="20" fill="rgba(61,90,128,0.5)" stroke="rgba(122,163,200,0.8)" strokeWidth="1.5"/>
      <circle cx="130" cy="28" r="16" fill="rgba(61,90,128,0.45)" stroke="rgba(122,163,200,0.7)" strokeWidth="1.5"/>
      <circle cx="130" cy="92" r="16" fill="rgba(61,90,128,0.45)" stroke="rgba(122,163,200,0.7)" strokeWidth="1.5"/>
      <circle cx="210" cy="60" r="20" fill="rgba(61,90,128,0.5)" stroke="rgba(122,163,200,0.8)" strokeWidth="1.5"/>
      {/* Connections */}
      <line x1="70" y1="52" x2="114" y2="34" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="70" y1="68" x2="114" y2="86" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="146" y1="34" x2="190" y2="52" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="146" y1="86" x2="190" y2="68" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      {/* Icons inside nodes */}
      <text x="39" y="65" fill="rgba(255,255,255,0.9)" fontSize="16" fontFamily="sans-serif">🏪</text>
      <text x="121" y="33" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="sans-serif">🛵</text>
      <text x="121" y="97" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="sans-serif">📦</text>
      <text x="199" y="65" fill="rgba(255,255,255,0.9)" fontSize="16" fontFamily="sans-serif">🧑</text>
    </svg>
  ),
}

const bentoCards = caseStudies.map(cs => ({
  slug: cs.slug,
  label: cs.tag,
  title: cs.title,
  description: cs.subtitle,
  tagColor: cs.tagColor,
  accentColor: cs.accentColor,
  color: '#0d1117',
  illustration: ILLUSTRATIONS[cs.slug] ?? null,
}))

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [csRef, csRevealed] = useReveal()
  const navigate = useNavigate()

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__silk-bg" aria-hidden="true">
          <Silk
            speed={3}
            scale={1.2}
            color="#3d5a80"
            noiseIntensity={1.2}
            rotation={0.3}
          />
        </div>

        <div className="hero__content">
          <div className="hero__text">
            <SplitText
              tag="h1"
              text="Anand V"
              className="hero__name"
              splitType="chars"
              delay={55}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 48, rotationX: -30 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="center"
            />

            <p className="hero__roles">
              <AnimatedRoles />
            </p>

            <p className="hero__desc">
              Turning complex go-to-market challenges into clean, scalable systems.
            </p>
            <p className="hero__desc">
              GTM strategy, AI workflows, ops efficiency - built from first principles.
            </p>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">B2B</span>
                <span className="hero__stat-label">Focused</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">GTM</span>
                <span className="hero__stat-label">Strategy</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">AI</span>
                <span className="hero__stat-label">Workflows</span>
              </div>
            </div>

            <div className="hero__actions">
              <Link to="/works" className="btn btn--primary">View Works</Link>
              <button className="btn btn--ghost" onClick={() => setShowContact(true)}>
                Get in touch
              </button>
            </div>
          </div>

        </div>
      </section>

      <section ref={csRef} className={`case-studies-section ${csRevealed ? 'cs--revealed' : ''}`}>
        <div className="cs-section__meta">
          <p className="cs-section__label">Selected Work</p>
          <SplitText
            tag="h2"
            text="Case Studies"
            className="cs-section__title"
            splitType="words"
            delay={120}
            duration={0.65}
            ease="power3.out"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-60px"
            textAlign="center"
          />
          <p className="cs-section__desc">
            Real engagements. Measurable outcomes. Each project tackles a specific growth or operations challenge from first principles.
          </p>
          <Link to="/works" className="cs-section__link">
            View all works <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="cs-section__bento">
          <MagicBento
            cards={bentoCards}
            onCardClick={slug => {
              const cs = caseStudies.find(c => c.slug === slug)
              if (cs?.externalUrl) window.open(cs.externalUrl, '_blank', 'noopener,noreferrer')
              else navigate(`/works/${slug}`)
            }}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="61, 90, 128"
            particleCount={10}
            spotlightRadius={280}
          />
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  )
}
