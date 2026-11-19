const shapes = {
  scales: <><path d="M12 3v18M7 21h10M5 7h14M7 7l-4 7h8L7 7Zm10 0-4 7h8l-4-7Z" /></>,
  building: <><path d="M4 21V5l8-2 8 2v16M2 21h20M8 8h1m6 0h1M8 12h1m6 0h1M10 21v-5h4v5" /></>,
  landmark: <><path d="m3 9 9-6 9 6M4 10h16M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M2 18h20" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="1"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
}

export default function PracticeIcon({ name }) {
  return <svg className="practice-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>
}
