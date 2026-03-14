import { useState } from 'react'
import useInView from '../hooks/useInView'
import s from './Areas.module.css'

const AREAS = [
  {
    icon: '🌿',
    bg: '#e8f0eb',
    name: 'Health',
    desc: 'Sleep, nutrition, movement — daily patterns and personalised advice',
    detail: 'Tracks your energy, sleep quality and physical activity to build a sustainable health rhythm that fits your real life — not an ideal one.',
    stats: [{ n: '73%', l: 'better sleep quality' }, { n: '2×', l: 'workout consistency' }],
  },
  {
    icon: '💼',
    bg: '#f5ead8',
    name: 'Career',
    desc: 'Goals, priorities and deep focus — without burning out',
    detail: 'Helps you separate urgent from important, protect deep work time and make steady progress on the work that actually moves the needle.',
    stats: [{ n: '40%', l: 'less decision fatigue' }, { n: '3×', l: 'goals achieved' }],
  },
  {
    icon: '🧠',
    bg: '#eef0f8',
    name: 'Mind',
    desc: 'Emotions, stress, inner dialogue — awareness every single day',
    detail: 'Light daily check-ins surface your emotional patterns over time. everything notices when you\'re slipping and suggests small resets before burnout sets in.',
    stats: [{ n: '61%', l: 'stress reduction' }, { n: '5 min', l: 'average check-in' }],
  },
  {
    icon: '💛',
    bg: '#fdf0e8',
    name: 'Relationships',
    desc: 'The people who matter, connection, and the balance between you and others',
    detail: 'Gently reminds you to reach out, celebrates the relationships you invest in, and helps you stay present with people — not your screen.',
    stats: [{ n: '89%', l: 'feel more connected' }, { n: '4×', l: 'quality conversations' }],
  },
]

export default function Areas() {
  const [hovered, setHovered] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="areas" className={s.section} ref={ref}>
      <div className={`${s.inner} ${inView ? s.visible : ''}`}>
        <div className={s.intro}>
          <h2 className={s.title}>
            Your whole life —<br />
            <em>at a glance</em>
          </h2>
          <p className={s.text}>
            everything covers every area that matters. Not just a reminder app — a
            companion that sees the full picture and knows how it all connects.
          </p>
        </div>

        <div className={s.grid}>
          {AREAS.map((area, i) => (
            <div
              key={area.name}
              className={`${s.card} ${hovered === i ? s.active : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={s.icon} style={{ background: area.bg }}>{area.icon}</div>
              <div className={s.name}>{area.name}</div>
              <div className={s.desc}>{area.desc}</div>

              <div className={s.hover}>
                <p className={s.detail}>{area.detail}</p>
                <div className={s.stats}>
                  {area.stats.map(st => (
                    <div key={st.l} className={s.stat}>
                      <div className={s.statNum}>{st.n}</div>
                      <div className={s.statLabel}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
