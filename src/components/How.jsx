import { useState } from 'react'
import useInView from '../hooks/useInView'
import s from './How.module.css'

const STEPS = [
  {
    num: '01',
    title: 'You share your life',
    desc: 'Goals, habits, routines, worries. everything listens and remembers — like a best friend who never forgets a detail.',
    detail: 'During onboarding you spend 5 minutes answering a few thoughtful questions. No forms, no checkboxes — just a conversation. The AI learns your schedule, your energy patterns, what you care about most, and what keeps tripping you up.',
  },
  {
    num: '02',
    title: 'We build your path',
    desc: 'From your patterns and priorities, the AI maps a personal route — small, consistent steps toward real change.',
    detail: 'Every morning, everything generates your day\'s path: 3–6 micro-actions timed to your energy and calendar. Not a to-do list — a curated sequence designed to move you forward without overwhelm.',
  },
  {
    num: '03',
    title: 'Guidance when it matters',
    desc: 'Not when it\'s convenient for us — when you need it. Morning, midday, evening. Always at the right moment.',
    detail: 'Context-aware nudges arrive exactly when you\'re most likely to act. Finished your meeting? Time for a 5-min walk. About to open Instagram? Here\'s what you said you wanted to do instead.',
  },
]

export default function How() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="how" className={s.section} ref={ref}>
      <div className={`${s.inner} ${inView ? s.visible : ''}`}>
        <div className={s.label}>How it works</div>
        <div className={s.grid}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`${s.step} ${open === i ? s.open : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={s.num}>{step.num}</div>
              <button className={s.titleBtn} onClick={() => setOpen(open === i ? null : i)}>
                <span className={s.title}>{step.title}</span>
                <span className={s.toggle}>{open === i ? '−' : '+'}</span>
              </button>
              <p className={s.desc}>{step.desc}</p>
              <div className={s.detail}>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
