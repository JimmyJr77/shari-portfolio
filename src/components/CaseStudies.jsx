// src/components/CaseStudies.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/caseStudies.json'
import styles from './CaseStudies.module.css'

export default function CaseStudies() {
  return (
    <section className={styles.section} id="cases">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Case Studies</h2>
        <div className={styles.grid}>
          {data.map((cs) => (
            <div key={cs.id} className={styles.card}>
              <img src={cs.img} alt={cs.title} className={styles.image} />
              <div className={styles.body}>
                <h3 className={styles.title}>{cs.title}</h3>
                <p className={styles.desc}>{cs.description}</p>
                <div className={styles.kpi}>{cs.kpi}</div>
              </div>
            </div>
          ))}

          {/* Expanded, password-protected card */}
          <Link to="/work" className={styles.detailCard}>
            <div className={styles.card}>
              <div className={styles.body}>
                <h3 className={styles.title}>
                  <span className={styles.icon}>🔒</span>
                  Explore All Deliverables
                </h3>
                <p className={styles.desc}>
                  Dive into detailed case studies, deliverables, and strategic plans.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
