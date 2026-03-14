import { useState } from 'react'
import useInView from '../hooks/useInView'
import s from './Testimonial.module.css'

const QUOTES = [
  { text: 'For the first time in three years, I understood where my time actually goes — and what to do about it.', highlight: 'actually', name: 'James R.', role: 'Product Manager, 34 · London' },
  { text: 'I\'ve tried every productivity app. everything is the first one that feels like it knows me.', highlight: 'knows me', name: 'Sora M.', role: 'Designer, 28 · Tokyo' },
  { text: 'Within two weeks I was sleeping better, moving more, and stressing less. It just works.', highlight: 'It just works', name: 'Carlos V.', role: 'Founder, 41 · Buenos Aires' },
]

const STATS = [
  { n: '87%', l: 'report better life balance within 30 days' },
  { n: '2.4×', l: 'more goals reached vs. traditional habit apps' },
  { n: '12 min', l: 'average daily time with the assistant' },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const q = QUOTES[active]

  return (
    <section className={s.section} ref={ref}>
      <div className={`${s.inner} ${inView ? s.visible : ''}`}>
        <div className={s.left}>
          <blockquote className={s.quote} key={active}>
            {q.text.split(q.highlight).map((part, i) => (
              <span key={i}>
                {part}
                {i < 1 && <em>{q.highlight}</em>}
              </span>
            ))}
          </blockquote>
          <div className={s.author}>
            <div className={s.name}>{q.name}</div>
            <div className={s.role}>{q.role}</div>
          </div>
          <div className={s.dots}>
            {QUOTES.map((_, i) => (
              <button
                key={i}
                className={`${s.dot} ${i === active ? s.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={s.right}>
          {STATS.map((st, i) => (
            <div key={i} className={s.stat}>
              <div className={s.statNum}>{st.n}</div>
              <div className={s.statLabel}>{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
