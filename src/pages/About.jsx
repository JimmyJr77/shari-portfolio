import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>About Me</h1>
        <p>
          I’m a senior communications and brand strategist with more than a decade
          of experience leading and supporting mission-driven organizations and
          companies bring their stories to life. I lead with clarity, creativity,
          and strategy—crafting executive voice, shaping narratives, and designing
          campaigns that connect with audiences and drive impact.
        </p>
        <br></br>
        <p>
          Throughout my career, I’ve led high-impact campaigns, built executive
          communications platforms, and driven messaging strategy across sectors
          including philanthropy, tech, finance, and social impact. I specialize in
          crafting clear, authentic narratives that resonate—from boardrooms to
          media headlines to internal town halls.
        </p>
        <br></br>
        <p>
          Whether I’m scripting remarks for C-suite leaders, launching internal
          engagement strategies, or amplifying a brand’s presence across digital
          and earned channels, I bring a sharp eye for detail, a deep understanding
          of audience dynamics, and a steady hand in fast-moving environments.
        </p>
        <br></br>
        <p>
          I’m passionate about partnering with purpose-driven teams to clarify their
          message, strengthen their brand, and make their work matter to the people
          who need to hear it most.
        </p>
        {/* New CV download link */}
        <div className={styles.cvContainer}>
          <a
            href="/assets/Shari-CV.pdf"
            download
            className={styles.cvButton}
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
)
}
