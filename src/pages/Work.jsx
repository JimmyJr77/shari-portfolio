// src/pages/Work.jsx
import React, { useState } from 'react'
import {
  Target,
  AlertCircle,
  Megaphone,
  Layers,
  Edit2,
  Share2,
  Image as ImageIcon,
  ListChecks,
  CalendarDays,
  UserCheck,
  Video,
} from 'lucide-react'
import styles from './Work.module.css'

const SECTIONS = [
  {
    icon: Target,
    heading: 'Strategic Communications',
    img: 'assets/strategic-communications.jpg',
    desc: `Every impactful campaign starts with a rock‐solid strategy. I define clear objectives, map audience insights, and align messaging with measurable outcomes—whether it’s launching a new initiative, guiding an organizational shift, or amplifying executive voice.`,
    items: [
      { label: 'Blue Meridian FY25 Strategic Plan (.pptx)', file: 'blue-meridian-fy25-strategic-plan.pptx' },
      { label: 'Dept. of Energy Strategic Communications Plan (.pdf)', file: 'doe-strategic-comms-plan.pdf' },
    ],
  },
  {
    icon: AlertCircle,
    heading: 'Crisis Communications',
    img: 'assets/crisis-communications.jpg',
    desc: `In high‐stakes moments, your response is your reputation. I build crisis‐ready playbooks, draft media responses, and coach leadership on transparent, confident messaging—turning potential disruptions into opportunities for trust.`,
    items: [
      { label: 'Blue Meridian Crisis Communications Plan 2024 (.pptx)', file: 'blue-meridian-crisis-plan-2024.pptx' },
    ],
  },
  {
    icon: Megaphone,
    heading: 'Public Relations',
    img: 'assets/public-relations.jpg',
    desc: `PR is more than press releases—it’s about cultivating credibility. I secure top‐tier coverage, craft compelling media materials, and manage narratives that build lasting trust and visibility for your brand.`,
    items: [
      { label: 'Shop.org Keynote Press Release (.pdf)', file: 'shop-org-keynote.pdf' },
      { label: 'Chris Brown Art Collab (.pdf)', file: 'chris-brown-collab.pdf' },
      { label: 'NRF Back to School Press Release (.pdf)', file: 'nrf-back-to-school.pdf' },
    ],
  },
  {
    icon: Layers,
    heading: 'Branding',
    img: 'assets/branding.jpg',
    desc: `A brand is a promise in every touchpoint. I develop cohesive identity systems—crafting voice, visuals, and messaging frameworks that resonate emotionally and support ambitious missions.`,
    items: [
      { label: 'Blue Meridian Branding Guidelines (.pdf)', file: 'blue-meridian-branding-guidelines.pdf' },
      { label: 'Blue Meridian Messaging Guidance (.pdf)', file: 'blue-meridian-messaging-guidance.pdf' },
    ],
  },
  {
    icon: Edit2,
    heading: 'Content Creation',
    img: 'assets/content-creation.jpg',
    desc: `Great content moves people to act. From blog posts and thought‐leadership articles to multi‐channel narratives, I write with clarity and purpose to inform, inspire, and drive results.`,
    items: [
      { label: 'NRF Valentine’s Day Blog (.pdf)', file: 'nrf-valentines-day-blog.pdf' },
      { label: 'Blue Meridian Portfolio Snapshots (.pdf)', file: 'blue-meridian-portfolio-snapshots.pdf' },
      { label: 'Bank Street Newsletter (.pdf)', file: 'bank-street-newsletter.pdf' },
    ],
  },
  {
    icon: Share2,
    heading: 'Social Media Management',
    img: 'assets/social-media.jpg',
    desc: `I turn social platforms into community engines. By crafting platform‐specific strategies, content calendars, and analytics dashboards, I grow engagement and amplify your impact in real time.`,
    items: [
      { label: 'Bank Street Social Media Workshop (.pdf)', file: 'bank-street-social_workshop.pptx.pdf' },
      { label: 'Institute of Play Digital Media Kit (.pdf)', file: 'institute-of-play-media-kit.pdf' },
      { label: 'Institute of Play Social Content Plan (.pdf)', file: 'institute-of-play-social-plan.pdf' },
    ],
  },
  {
    icon: ImageIcon,
    heading: 'Graphic Design & Visual Arts',
    img: 'assets/graphic-design.jpg',
    desc: `Visuals amplify your story. From infographics and event signage to pitch decks and social assets, I ensure each piece of collateral reinforces your organization’s goals and leaves a lasting impression.`,
    items: [
      { label: 'DHS Infographic (.pdf)', file: 'dhs-infographic.pdf' },
      { label: 'Blue Meridian Partners Infographic (.pdf)', file: 'blue-meridian-infographic.pdf' },
    ],
  },
  {
    icon: ListChecks,
    heading: 'Project Management',
    img: 'assets/project-management.jpg',
    desc: `Execution is where strategy meets reality. I orchestrate timelines, budgets, and cross‐functional teams—bringing creative campaigns to life on time and within scope.`,
    items: [
      { label: 'Blue Meridian Video Project Plan (.xlsx)', file: 'blue-meridian-video-plan.xlsx' },
      { label: 'Blue Meridian Media Project Plan (.pptx)', file: 'blue-meridian-media-plan.pptx' },
    ],
  },
  {
    icon: CalendarDays,
    heading: 'Event Marketing',
    img: 'assets/event-marketing.jpg',
    desc: `Events are immersive brand experiences. I develop comprehensive event strategies—from promotion to on‐site execution—for virtual and in‐person gatherings that drive attendance and impact.`,
    items: [
      { label: 'Blue Meridian Event Agenda (.pdf)', file: 'blue-meridian-event-agenda.pdf' },
      { label: 'Blue Meridian Event Invitation (.pdf)', file: 'blue-meridian-event-invitation.pdf' },
    ],
  },
  {
    icon: UserCheck,
    heading: 'Executive Communications',
    img: 'assets/executive-communications.jpg',
    desc: `Leaders need a clear, authentic voice. I craft speeches, memos, and talking points that reflect executive vision and values—building trust with employees, boards, and external stakeholders.`,
    items: [
      { label: 'CEO Talking Points (.docx)', file: 'ceo-talking-points.docx' },
    ],
  },
  {
    icon: Video,
    heading: 'Video Production',
    img: 'assets/video-production.jpg',
    desc: `Video brings your message to life. From concept and storyboarding to filming and editing, I produce videos that engage emotions, simplify complexity, and amplify impact.`,
    items: [],  // Videos excluded from repo (exceed GitHub 100MB limit) - add external URLs when hosted
  },
]

export default function Work() {
  const [pw, setPw] = useState('')
  const [auth, setAuth] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pw === 'shariab1') {
      setAuth(true)
    } else {
      alert('Incorrect password')
    }
  }

  if (!auth) {
    return (
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Enter Password:
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    )
  }

  const { icon: Icon, heading, desc, items, img } = SECTIONS[selectedIdx]
  const bgUrl = import.meta.env.BASE_URL + img

  return (
    <div className={styles.container}>
      {/* Main detail pane */}
      <div
        className={styles.detailPane}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className={styles.overlay} />
        <div className={styles.detailContent}>
          <h2>{heading}</h2>
          <p>{desc}</p>
          <ul className={styles.list}>
            {items.map((it) => (
              <li key={it.label}>
                <a href={`${import.meta.env.BASE_URL}assets/${it.file}`} target="_blank" rel="noopener">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar navigation */}
      <nav className={styles.sidebar}>
        {SECTIONS.map((sec, i) => {
          const Icon = sec.icon
          return (
          <button
            key={sec.heading}
            className={`${styles.navItem} ${
              i === selectedIdx ? styles.active : ''
            }`}
            onClick={() => setSelectedIdx(i)}
          >
            <Icon className={styles.icon} />
            <span className={styles.label}>{sec.heading}</span>
          </button>
          )
        })}
      </nav>
    </div>
  )
}
