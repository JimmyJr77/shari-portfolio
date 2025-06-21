import React from 'react'
import styles from './Pillars.module.css'

const PILLARS = [
  {
    title: 'Narrative Precision',
    description:
      'Distilling complex, multi-stakeholder initiatives into clear, compelling stories that drive understanding and action.',
    kpi: '42% lift in DHS guideline comprehension'
  },
  {
    title: 'Design-Driven Activation',
    description:
      'Marrying narrative and visual design to create immersive campaigns that boost engagement and brand recall.',
    kpi: '30% engagement spike post–Blue Meridian rebrand'
  },
  {
    title: 'Crisis-Ready Leadership',
    description:
      'Anticipating and navigating high-stakes moments to protect and even enhance reputation under pressure.',
    kpi: 'Zero negative press on $10M education finance launch'
  }
]

export default function Pillars() {
  return (
    <section className={styles.pillars} id="services">
      <div className={styles.inner}>
        {PILLARS.map((p) => (
          <div key={p.title} className={styles.card}>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.description}</p>
            <div className={styles.kpi}>{p.kpi}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
