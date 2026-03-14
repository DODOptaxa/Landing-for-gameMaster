import { useState } from 'react'
import useInView from '../hooks/useInView'
import s from './Pricing.module.css'

const PLANS = [
  {
    plan: 'Free',
    monthly: 0, annual: 0,
    desc: 'One area of life, a basic daily path — try it out',
    features: ['1 life area', 'Daily path', '10 nudges per week'],
    cta: 'Get started',
  },
  {
    plan: 'Path',
    monthly: 14, annual: 10,
    desc: 'All life areas, deep personalisation, real-time guidance',
    features: ['All life areas', 'Personalised daily path', 'Real-time advice', 'Behaviour pattern analysis', 'Weekly insights'],
    cta: 'Start your path',
    featured: true,
  },
  {
    plan: 'Family',
    monthly: 28, annual: 22,
    desc: 'Up to 4 people, shared goals and synced paths',
    features: ['Up to 4 profiles', 'Shared family goals', 'Everything in Path', 'Collective analytics'],
    cta: 'Start together',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [ref, inView] = useInView()

  return (
    <section id="pricing" className={s.section} ref={ref}>
      <div className={`${s.inner} ${inView ? s.visible : ''}`}>
        <div className={s.topRow}>
          <div className={s.label}>Pricing</div>
          <div className={s.toggle}>
            <span className={!annual ? s.toggleActive : ''}>Monthly</span>
            <button
              className={`${s.toggleBtn} ${annual ? s.toggleBtnOn : ''}`}
              onClick={() => setAnnual(a => !a)}
              aria-label="Toggle annual billing"
            >
              <span className={s.toggleThumb} />
            </button>
            <span className={annual ? s.toggleActive : ''}>
              Annual <em className={s.save}>Save 30%</em>
            </span>
          </div>
        </div>

        <div className={s.grid}>
          {PLANS.map(p => (
            <div key={p.plan} className={`${s.card} ${p.featured ? s.featured : ''}`}>
              {p.featured && <div className={s.badge}>Most popular</div>}
              <div className={s.plan}>{p.plan}</div>
              <div className={s.price}>
                ${annual ? p.annual : p.monthly}
                <span>/mo</span>
              </div>
              {annual && p.monthly > 0 && (
                <div className={s.savings}>
                  Billed ${(annual ? p.annual : p.monthly) * 12}/yr — saves ${(p.monthly - p.annual) * 12}
                </div>
              )}
              <p className={s.desc}>{p.desc}</p>
              <div className={s.divider} />
              <ul className={s.features}>
                {p.features.map(f => (
                  <li key={f} className={s.feature}>
                    <span className={s.check}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`${s.cta} ${p.featured ? s.ctaFeatured : ''}`}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
