import s from './Marquee.module.css'

const ITEMS = [
  'Health & sleep','Career & growth','Relationships','Finances',
  'Mental health','Fitness','Goals & habits','Creativity','Learning','Life balance',
]

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS]
  return (
    <div className={s.wrap}>
      <div className={s.track}>
        {items.map((item, i) => (
          <span key={i} className={s.item}>
            <span className={s.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
