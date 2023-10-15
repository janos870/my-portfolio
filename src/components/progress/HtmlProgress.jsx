import React from 'react'

function HtmlProgress() {
  return (
    <div className="prog">
    <svg width="200" height="200">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#aa367c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4a2fbd', stopOpacity: 1 }} />
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
          strokeDasharray="400"
          strokeDashoffset="20"
        ></circle>
      </g>
      <text fill="white" x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
        80%
      </text>
    </svg>
  </div>
  )
}

export default HtmlProgress