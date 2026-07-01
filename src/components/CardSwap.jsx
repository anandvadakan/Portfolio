import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import './CardSwap.css'

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
))
Card.displayName = 'Card'

const HOVER_LIFT = 95

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
})

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  })

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        }

  const childArr = useMemo(() => Children.toArray(children), [children])
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  )

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i))
  const tlRef = useRef(null)
  const intervalRef = useRef()
  const container = useRef(null)
  const isJumping = useRef(false)
  const hoverStates = useRef({})

  useEffect(() => {
    const total = refs.length
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount))

    // GSAP-driven hover lift per card
    const cleanupHovers = refs.map((r, i) => {
      const el = r.current

      const onEnter = () => {
        if (isJumping.current) return
        hoverStates.current[i] = true
        gsap.killTweensOf(el, 'y')
        gsap.to(el, { y: `-=${HOVER_LIFT}`, duration: 0.38, ease: 'power3.out', overwrite: 'auto' })
      }

      const onLeave = () => {
        if (!hoverStates.current[i]) return
        hoverStates.current[i] = false
        gsap.killTweensOf(el, 'y')
        gsap.to(el, { y: `+=${HOVER_LIFT}`, duration: 0.32, ease: 'power2.inOut', overwrite: 'auto' })
      }

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      }
    })

    const swap = () => {
      if (order.current.length < 2) return

      const [front, ...rest] = order.current
      // Clear any hover lift on the card being swapped
      hoverStates.current[front] = false

      const elFront = refs[front].current
      const tl = gsap.timeline()
      tlRef.current = tl

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      })

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`)
      rest.forEach((idx, i) => {
        const el = refs[idx].current
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length)
        tl.set(el, { zIndex: slot.zIndex }, 'promote')
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        )
      })

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length)
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`)
      tl.call(() => gsap.set(elFront, { zIndex: backSlot.zIndex }), undefined, 'return')
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      )

      tl.call(() => { order.current = [...rest, front] })
    }

    swap()
    intervalRef.current = window.setInterval(swap, delay)

    if (pauseOnHover) {
      const node = container.current
      const pause = () => {
        if (isJumping.current) return
        tlRef.current?.pause()
        clearInterval(intervalRef.current)
      }
      const resume = () => {
        if (isJumping.current) return
        tlRef.current?.play()
        intervalRef.current = window.setInterval(swap, delay)
      }
      node.addEventListener('mouseenter', pause)
      node.addEventListener('mouseleave', resume)
      return () => {
        node.removeEventListener('mouseenter', pause)
        node.removeEventListener('mouseleave', resume)
        clearInterval(intervalRef.current)
        cleanupHovers.forEach(fn => fn())
      }
    }

    return () => {
      clearInterval(intervalRef.current)
      cleanupHovers.forEach(fn => fn())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing])

  const handleCardClickCapture = (e, i) => {
    e.stopPropagation()
    e.preventDefault()
    if (isJumping.current) return
    isJumping.current = true
    hoverStates.current[i] = false

    tlRef.current?.kill()
    clearInterval(intervalRef.current)

    const el = refs[i].current
    const cx = Number(gsap.getProperty(el, 'x'))
    const cy = Number(gsap.getProperty(el, 'y'))

    // Compute how far left the card must travel to reach the left edge of viewport
    const rect = container.current.getBoundingClientRect()
    const cardCenterViewportX = rect.left + rect.width / 2 + cx
    const targetViewportX = width / 2 + 20
    const deltaX = targetViewportX - cardCenterViewportX // large negative number

    gsap.set(el, { zIndex: 9999 })

    const tl = gsap.timeline({
      onComplete: () => {
        isJumping.current = false
        onCardClick?.(i)
      }
    })

    // Three progressively smaller hops leftward - rise with power2.out, land with bounce.out
    const hops = [
      { frac: 0.36, peak: 155, riseDur: 0.26, fallDur: 0.34 },
      { frac: 0.68, peak: 88,  riseDur: 0.21, fallDur: 0.28 },
      { frac: 1.00, peak: 42,  riseDur: 0.17, fallDur: 0.23 },
    ]

    let prevFrac = 0
    hops.forEach(({ frac, peak, riseDur, fallDur }) => {
      const midFrac = (prevFrac + frac) / 2
      tl.to(el, { x: cx + deltaX * midFrac, y: cy - peak, duration: riseDur, ease: 'power2.out' })
      tl.to(el, { x: cx + deltaX * frac,    y: cy,        duration: fallDur, ease: 'bounce.out' })
      prevFrac = frac
    })
  }

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClickCapture: e => handleCardClickCapture(e, i)
        })
      : child
  )

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  )
}

export default CardSwap
