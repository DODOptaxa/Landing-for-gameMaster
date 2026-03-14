import { useState } from 'react'
import s from './PathCard.module.css'

const LIFE_GOAL = {
  title: 'Be fully present for the people I love, while building work that matters',
  horizon: '5-year vision',
  areas: ['Health', 'Family', 'Work'],
  progress: 34, // overall life progress %
}

const STEPS = [
  { id: 1, label: 'Morning meditation', desc: '10 minutes — done at 7:42 am', tag: 'Mind', tagClass: 'mind', status: 'done' },
  { id: 2, label: '5 km run', desc: 'Completed. New weekly record.', tag: 'Health', tagClass: 'health', status: 'done' },
  { id: 3, label: 'Deep work session', desc: '2 hours, no distractions — right now', tag: 'Work', tagClass: 'work', status: 'active' },
  { id: 4, label: 'Evening with family', desc: 'Put the phone down by 7 pm', tag: 'Relationships', tagClass: 'mind', status: 'next' },
]

const ADVICE = [
  "You slept well last night — peak time for hard thinking. Tackle that report while your energy is high.",
  "You've been consistent this week. Don't break the streak — 3 more days to a new personal best.",
  "Your stress levels tend to peak at 3pm. Schedule a 10-min walk before your afternoon calls.",
  "You haven't called your parents in 12 days. A small thing — big impact on how you feel.",
]

export default function PathCard() {
  const [steps, setSteps] = useState(STEPS)
  const [adviceIdx, setAdviceIdx] = useState(0)
  const [completing, setCompleting] = useState(null)

  const completeStep = (id) => {
    setCompleting(id)
    setTimeout(() => {
      setSteps(prev => {
        const updated = prev.map(st => st.id === id ? { ...st, status: 'done' } : st)
        const nextActive = updated.find(st => st.status === 'next')
        if (nextActive) return updated.map(st => st.id === nextActive.id ? { ...st, status: 'active' } : st)
        return updated
      })
      setCompleting(null)
      setAdviceIdx(i => (i + 1) % ADVICE.length)
    }, 400)
  }

  const doneCount = steps.filter(st => st.status === 'done').length
  const todayProgress = Math.round((doneCount / steps.length) * 100)

  // score label based on today's progress
  const scoreLabel = todayProgress >= 75 ? '🔥 Strong day' : todayProgress >= 50 ? '✦ On track' : '◎ In progress'
  const scoreColor = todayProgress >= 75 ? 'var(--green)' : todayProgress >= 50 ? 'var(--accent)' : 'var(--muted)'

  return (
    <div className={s.card}>

      {/* ── LIFE GOAL ── */}
      <div className={s.goalBlock}>
        <div className={s.goalMeta}>
          <span className={s.goalHorizon}>{LIFE_GOAL.horizon}</span>
          <div className={s.goalBarWrap}>
            <div className={s.goalBar} style={{ width: `${LIFE_GOAL.progress}%` }} />
          </div>
          <span className={s.goalPct}>{LIFE_GOAL.progress}%</span>
        </div>
        <div className={s.goalTitle}>"{LIFE_GOAL.title}"</div>
        <div className={s.goalAreas}>
          {LIFE_GOAL.areas.map(a => (
            <span key={a} className={s.goalArea}>{a}</span>
          ))}
        </div>
      </div>

      {/* ── DIVIDER: today is a step toward the goal ── */}
      <div className={s.stepDivider}>
        <div className={s.stepDividerLine} />
        <span className={s.stepDividerLabel}>Today's step toward it</span>
        <div className={s.stepDividerLine} />
      </div>

      {/* ── TODAY HEADER ── */}
      <div className={s.header}>
        <div>
          <div className={s.headerTitle}>Your path today</div>
          <div className={s.headerDate}>Friday, March 14</div>
        </div>
        <div className={s.todayScore}>
          <div className={s.progressWrap}>
            <svg className={s.progressRing} viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" fill="none" stroke="var(--paper)" strokeWidth="3"/>
              <circle
                cx="20" cy="20" r="16" fill="none"
                stroke="var(--accent)" strokeWidth="3"
                strokeDasharray={`${todayProgress} 100`}
                strokeDashoffset="25"
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <span className={s.progressNum}>{todayProgress}%</span>
          </div>
          <span className={s.scoreLabel} style={{ color: scoreColor }}>{scoreLabel}</span>
        </div>
      </div>

      <div className={s.steps}>
        {steps.map((step, i) => (
          <div key={step.id} className={`${s.step} ${s[step.status]} ${completing === step.id ? s.completing : ''}`}>
            <div className={s.dotWrap}>
              <button
                className={`${s.dot} ${s[step.status]}`}
                onClick={() => step.status === 'active' && completeStep(step.id)}
                disabled={step.status !== 'active'}
                aria-label={step.status === 'active' ? `Complete ${step.label}` : undefined}
              >
                {step.status === 'done' ? '✓' : step.status === 'active' ? '→' : i + 1}
              </button>
              {i < steps.length - 1 && (
                <div className={`${s.line} ${step.status === 'done' ? s.lineDone : ''}`} />
              )}
            </div>
            <div className={s.body}>
              <div className={s.label}>{step.label}</div>
              <div className={s.desc}>{step.desc}</div>
              <span className={`${s.tag} ${s[step.tagClass]}`}>{step.tag}</span>
              {step.status === 'active' && (
                <button className={s.completeBtn} onClick={() => completeStep(step.id)}>
                  Mark complete ✓
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={s.advice}>
        <div className={s.adviceIcon}>e</div>
        <div className={s.adviceText}>
          <strong>Right now: </strong>
          <span className={s.adviceMsg} key={adviceIdx}>{ADVICE[adviceIdx]}</span>
        </div>
      </div>
    </div>
  )
}
