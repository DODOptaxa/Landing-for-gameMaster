import PathCard from './PathCard'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.left}>
        <div className={s.eyebrow}>Your personal AI companion</div>
        <h1 className={s.title}>
          Your path —<br />
          <em>in one place.</em>
        </h1>
        <p className={s.sub}>
          everything watches over your life — health, work, relationships, goals —
          and builds a daily path toward the person you want to become.
        </p>
        <div className={s.actions}>
          <a href="#" className={s.btnPrimary}>Start for free →</a>
          <a href="#how" className={s.btnGhost}>See how it works ↓</a>
        </div>
        <div className={s.social}>
          <div className={s.avatars}>
            {['J','M','A','K'].map(l => (
              <div key={l} className={s.avatar}>{l}</div>
            ))}
          </div>
          <span className={s.socialText}><strong>2,400+</strong> people on their path</span>
        </div>
      </div>

      <div className={s.right}>
        <PathCard />
      </div>
    </section>
  )
}
