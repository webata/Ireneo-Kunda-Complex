// High quality SVG portrait representation of Mr. Cleto Ireneo (Managing Director)
export const MR_CLETO_IRENEO_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <!-- Studio Background Gradient with Golden Drapery -->
    <linearGradient id="studioBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3a2f1b" />
      <stop offset="40%" stop-color="#7c6032" />
      <stop offset="80%" stop-color="#4a3b22" />
      <stop offset="100%" stop-color="#1f180d" />
    </linearGradient>

    <!-- Curtain Fold Gradient -->
    <linearGradient id="curtainRed" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7a1c06" />
      <stop offset="30%" stop-color="#d95d18" />
      <stop offset="60%" stop-color="#b03808" />
      <stop offset="100%" stop-color="#450e03" />
    </linearGradient>

    <linearGradient id="goldCurtain" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c49a45" />
      <stop offset="50%" stop-color="#8a6723" />
      <stop offset="100%" stop-color="#4e380f" />
    </linearGradient>

    <!-- Skin Tone Gradient -->
    <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8d5538" />
      <stop offset="50%" stop-color="#6e3e26" />
      <stop offset="100%" stop-color="#542e1a" />
    </linearGradient>

    <!-- Beige Safari Shirt Gradient -->
    <linearGradient id="beigeShirt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e2d4be" />
      <stop offset="50%" stop-color="#cbb89c" />
      <stop offset="100%" stop-color="#a89578" />
    </linearGradient>

    <!-- Shirt Pocket Shadow -->
    <linearGradient id="pocketShadow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b5a387" />
      <stop offset="100%" stop-color="#8f7d63" />
    </linearGradient>
  </defs>

  <!-- Studio Background -->
  <rect width="400" height="500" fill="url(#studioBg)" />

  <!-- Soft Studio Light Glow -->
  <circle cx="280" cy="180" r="180" fill="#f5d796" opacity="0.15" />

  <!-- Left Golden / Orange Curtain Drapery -->
  <path d="M -10 0 C 40 80 80 140 10 240 C 60 180 120 100 110 0 Z" fill="url(#curtainRed)" opacity="0.9" />
  <path d="M 0 0 C 80 100 130 200 0 320 L -10 320 Z" fill="url(#curtainRed)" opacity="0.6" />

  <!-- Background Golden Texture Panel -->
  <path d="M 100 0 C 180 50 220 150 140 300 C 220 200 300 100 280 0 Z" fill="url(#goldCurtain)" opacity="0.35" />

  <!-- Main Body / Torso - Beige Khaki Button-up Shirt -->
  <g id="torso">
    <!-- Shirt Base -->
    <path d="M 50 490 L 90 280 C 110 240 290 240 310 280 L 370 490 Z" fill="url(#beigeShirt)" />

    <!-- Left Shoulder Fold -->
    <path d="M 50 490 L 110 280 L 160 300 L 90 490 Z" fill="#bfae94" opacity="0.6" />

    <!-- Collar -->
    <!-- Left Collar -->
    <polygon points="150,250 190,295 185,320 135,275" fill="#eddcc4" />
    <polygon points="150,250 190,295 185,320 135,275" fill="none" stroke="#a6947b" stroke-width="1.5" />

    <!-- Right Collar -->
    <polygon points="250,250 210,295 215,320 265,275" fill="#e2d1b8" />
    <polygon points="250,250 210,295 215,320 265,275" fill="none" stroke="#a6947b" stroke-width="1.5" />

    <!-- Shirt Placket & Buttons -->
    <path d="M 192 290 L 192 490 L 208 490 L 208 290 Z" fill="#d4c2a8" />
    <line x1="200" y1="290" x2="200" y2="490" stroke="#b09e84" stroke-width="1.5" />

    <!-- Buttons -->
    <circle cx="200" cy="330" r="3.5" fill="#78664e" />
    <circle cx="200" cy="380" r="3.5" fill="#78664e" />
    <circle cx="200" cy="430" r="3.5" fill="#78664e" />

    <!-- Left Shirt Pocket with Flap (Safari Style) -->
    <rect x="235" y="340" width="65" height="75" rx="3" fill="url(#pocketShadow)" stroke="#9c8a70" stroke-width="1.5" />
    <polygon points="230,340 305,340 295,360 240,360" fill="#eddcc4" stroke="#9c8a70" stroke-width="1.5" />
    <circle cx="267.5" cy="352" r="2.5" fill="#5c4c36" />
  </g>

  <!-- Neck -->
  <path d="M 170 220 L 230 220 L 238 275 L 162 275 Z" fill="#5c341e" />
  <!-- Neck shadow under chin -->
  <path d="M 165 220 Q 200 245 235 220 L 232 240 Q 200 260 168 240 Z" fill="#3d2010" opacity="0.6" />

  <!-- Head / Face -->
  <g id="head">
    <!-- Face Contour -->
    <path d="M 140 140 C 140 70 260 70 260 140 C 260 195 240 230 200 230 C 160 230 140 195 140 140 Z" fill="url(#skinTone)" />

    <!-- Forehead Highlights -->
    <ellipse cx="200" cy="115" rx="35" ry="20" fill="#aa6b47" opacity="0.4" />

    <!-- Short Black Hair & Hairline -->
    <path d="M 142 135 C 138 95 160 62 200 62 C 240 62 262 95 258 135 C 255 110 240 75 200 75 C 160 75 145 110 142 135 Z" fill="#141110" />

    <!-- Ears -->
    <ellipse cx="138" cy="148" rx="8" ry="14" fill="#693c24" />
    <ellipse cx="262" cy="148" rx="8" ry="14" fill="#693c24" />

    <!-- Eyebrows -->
    <path d="M 160 126 Q 175 120 186 125" stroke="#1f1814" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <path d="M 214 125 Q 225 120 240 126" stroke="#1f1814" stroke-width="3.5" stroke-linecap="round" fill="none" />

    <!-- Eyes -->
    <!-- Left Eye -->
    <ellipse cx="173" cy="136" rx="9" ry="5.5" fill="#ffffff" opacity="0.9" />
    <circle cx="173" cy="136" r="4" fill="#291a10" />
    <circle cx="174.5" cy="134.5" r="1" fill="#ffffff" />

    <!-- Right Eye -->
    <ellipse cx="227" cy="136" rx="9" ry="5.5" fill="#ffffff" opacity="0.9" />
    <circle cx="227" cy="136" r="4" fill="#291a10" />
    <circle cx="228.5" cy="134.5" r="1" fill="#ffffff" />

    <!-- Eyeglasses (Rimless Spectacles as in photo) -->
    <!-- Left Lens -->
    <rect x="158" y="127" width="30" height="18" rx="4" fill="none" stroke="#d4af37" stroke-width="1.8" opacity="0.85" />
    <!-- Right Lens -->
    <rect x="212" y="127" width="30" height="18" rx="4" fill="none" stroke="#d4af37" stroke-width="1.8" opacity="0.85" />
    <!-- Bridge -->
    <path d="M 188 134 Q 200 131 212 134" fill="none" stroke="#d4af37" stroke-width="2" />
    <!-- Temples / Arms -->
    <line x1="158" y1="133" x2="137" y2="136" stroke="#d4af37" stroke-width="1.8" />
    <line x1="242" y1="133" x2="263" y2="136" stroke="#d4af37" stroke-width="1.8" />

    <!-- Nose -->
    <path d="M 197 132 L 200 168 Q 206 172 208 168" fill="none" stroke="#4a2715" stroke-width="2.2" stroke-linecap="round" />
    <path d="M 190 170 Q 200 176 210 170" fill="none" stroke="#4a2715" stroke-width="2" stroke-linecap="round" />

    <!-- Mustache -->
    <path d="M 182 186 C 192 182 208 182 218 186 C 210 191 190 191 182 186 Z" fill="#1c140e" />

    <!-- Smile / Mouth -->
    <path d="M 175 194 Q 200 212 225 194" fill="none" stroke="#3b1b0e" stroke-width="2.5" stroke-linecap="round" />
    <!-- Teeth / Warm Smile -->
    <path d="M 180 195 Q 200 207 220 195 Q 200 200 180 195 Z" fill="#ffffff" opacity="0.95" />

    <!-- Chin Contour -->
    <path d="M 185 214 Q 200 220 215 214" fill="none" stroke="#4d2916" stroke-width="1.5" />
  </g>

  <!-- Name Badge Overlay at Bottom -->
  <rect x="30" y="445" width="340" height="42" rx="10" fill="#0f172a" opacity="0.9" />
  <rect x="30" y="445" width="340" height="42" rx="10" fill="none" stroke="#f59e0b" stroke-width="1.5" />
  <text x="200" y="464" font-family="sans-serif" font-weight="bold" font-size="15" fill="#ffffff" text-anchor="middle">Mr. Cleto Ireneo</text>
  <text x="200" y="479" font-family="sans-serif" font-weight="600" font-size="11" fill="#fbbf24" text-anchor="middle">Founder &amp; Managing Director</text>
</svg>
`)}`;
