import React from 'react'
import { Link } from 'react-router-dom'
import PixelSnow from '../components/PixelSnow'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__bg">
        <PixelSnow
          color="#f97316"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={180}
          speed={1.0}
          density={0.22}
          direction={125}
          brightness={1}
          variant="square"
        />
      </div>

      <div className="nf__overlay" />

      <div className="nf__content">
        <p className="nf__code">404</p>
        <h1 className="nf__title">Page not found</h1>
        <p className="nf__desc">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="nf__home">
          Go back home
        </Link>
      </div>
    </main>
  )
}
