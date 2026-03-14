import { useState, useEffect } from 'react'
import s from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.logo}>
        every<em>thing</em>
      </div>
      <ul className={s.links}>
        <li><a href="#how">How it works</a></li>
        <li><a href="#areas">Life areas</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <a href="#" className={s.cta}>Start your path →</a>
    </nav>
  )
}
