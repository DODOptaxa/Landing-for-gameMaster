import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.brand}>
        <div className={s.logo}>every<em>thing</em></div>
        <p className={s.tagline}>Your personal AI companion<br />that builds your path.</p>
      </div>
      <div className={s.col}>
        <p className={s.colTitle}>Product</p>
        <a href="#how">How it works</a>
        <a href="#areas">Life areas</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className={s.col}>
        <p className={s.colTitle}>Company</p>
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
      <div className={s.bottom}>
        <p>© 2026 everything. All rights reserved.</p>
      </div>
    </footer>
  )
}
