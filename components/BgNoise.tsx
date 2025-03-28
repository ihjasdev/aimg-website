import React from 'react'

const BgNoise = () => {
  return (
    <div>
       <svg
          className="pointer-events-none fixed isolate z-50 opacity-100 mix-blend-soft-light"
          width="100%"
          height="100%"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
    </div>
  )
}

export default BgNoise
