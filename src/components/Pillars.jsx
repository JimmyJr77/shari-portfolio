import React from 'react'
import styles from './Pillars.module.css'

const PILLARS = [
  {
    title: 'Narrative Precision',
    description:
      'Distilling complex, multi-stakeholder initiatives into clear, compelling stories that drive understanding and action.',
    kpi: '42% increase in DHS federal regulation awareness and comprehension'
  },
  {
    title: 'Data & Impact Driven Activation',
    description:
      'Bridging the gap between messaging and visual designs to create immersive campaigns that boost engagement and brand recognition.',
    kpi: '40% increase in stakeholder engagement and 60% increase in campaign efficiency'
  },
  {
    title: 'Crisis-Sheilding Leadership',
    description:
      'Creating strategies that protect C-suite leadership and the organization’s reputation and brand under high-stakes challenges.',
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
