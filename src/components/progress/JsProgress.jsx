import React from 'react'

function JsProgress() {
  return (
    <div className="prog">
    <svg width="200" height="200">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="rotate(+40 100 100)">
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="2rem"
          strokeDasharray="2"
          strokeDashoffset="0"
        ></circle>
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="2rem"
          strokeDasharray="350"
          strokeDashoffset="66"
        ></circle>
      </g>
      <text fill="white" x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
        65%
      </text>
    </svg>
  </div>
  )
}

export default JsProgress