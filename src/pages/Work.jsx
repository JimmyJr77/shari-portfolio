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
      { label: 'Blue Meridian FY25 Strategic Plan', href: '/assets/blue-meridian-fy25-strategic-plan.pdf' },
      { label: 'Dept. of Energy Strategic Communications Plan', href: '/assets/doe-strategic-comms-plan.pdf' },
    ],
  },
  {
    icon: AlertCircle,
    heading: 'Crisis Communications',
    img: 'assets/crisis-communications.jpg',
    desc: `In high‐stakes moments, your response is your reputation. I build crisis‐ready playbooks, draft media responses, and coach leadership on transparent, confident messaging—turning potential disruptions into opportunities for trust.`,
    items: [
      { label: 'Blue Meridian Crisis Communications Plan 2024', href: '/assets/blue-meridian-crisis-plan-2024.pdf' },
    ],
  },
  {
    icon: Megaphone,
    heading: 'Public Relations',
    img: 'assets/public-relations.jpg',
    desc: `PR is more than press releases—it’s about cultivating credibility. I secure top‐tier coverage, craft compelling media materials, and manage narratives that build lasting trust and visibility for your brand.`,
    items: [
      { label: 'Shop.org Keynote Press Release', href: '/assets/shop-org-keynote.pdf' },
      { label: 'Chris Brown Art Collab', href: '/assets/chris-brown-collab.pdf' },
      { label: 'NRF Back to School Press Release', href: '/assets/nrf-back-to-school.pdf' },
    ],
  },
  {
    icon: Layers,
    heading: 'Branding',
    img: 'assets/branding.jpg',
    desc: `A brand is a promise in every touchpoint. I develop cohesive identity systems—crafting voice, visuals, and messaging frameworks that resonate emotionally and support ambitious missions.`,
    items: [
      { label: 'Blue Meridian Branding Guidelines', href: '/assets/blue-meridian-branding-guidelines.pdf' },
      { label: 'Blue Meridian Messaging Guidance', href: '/assets/blue-meridian-messaging-guidance.pdf' },
    ],
  },
  {
    icon: Edit2,
    heading: 'Content Creation',
    img: 'assets/content-creation.jpg',
    desc: `Great content moves people to act. From blog posts and thought‐leadership articles to multi‐channel narratives, I write with clarity and purpose to inform, inspire, and drive results.`,
    items: [
      { label: 'NRF Valentine’s Day Blog', href: '/assets/nrf-valentines-day-blog.pdf' },
      { label: 'Blue Meridian Portfolio Snapshots', href: '/assets/blue-meridian-portfolio-snapshots.pdf' },
      { label: 'Bank Street Newsletter', href: '/assets/bank-street-newsletter.pdf' },
    ],
  },
  {
    icon: Share2,
    heading: 'Social Media Management',
    img: 'assets/social-media.jpg',
    desc: `I turn social platforms into community engines. By crafting platform‐specific strategies, content calendars, and analytics dashboards, I grow engagement and amplify your impact in real time.`,
    items: [
      { label: 'Bank Street Social Media Workshop', href: '/assets/bank-street-social-workshop.pdf' },
      { label: 'Institute of Play Digital Media Kit', href: '/assets/institute-of-play-media-kit.pdf' },
      { label: 'Institute of Play Social Content Plan', href: '/assets/institute-of-play-social-plan.pdf' },
    ],
  },
  {
    icon: ImageIcon,
    heading: 'Graphic Design & Visual Arts',
    img: 'assets/graphic-design.jpg',
    desc: `Visuals amplify your story. From infographics and event signage to pitch decks and social assets, I ensure each piece of collateral reinforces your organization’s goals and leaves a lasting impression.`,
    items: [
      { label: 'DHS Infographic', href: '/assets/dhs-infographic.pdf' },
      { label: 'Blue Meridian Partners Infographic', href: '/assets/blue-meridian-infographic.pdf' },
    ],
  },
  {
    icon: ListChecks,
    heading: 'Project Management',
    img: 'assets/project-management.jpg',
    desc: `Execution is where strategy meets reality. I orchestrate timelines, budgets, and cross‐functional teams—bringing creative campaigns to life on time and within scope.`,
    items: [
      { label: 'Blue Meridian Video Project Plan', href: '/assets/blue-meridian-video-plan.pdf' },
      { label: 'Blue Meridian Media Project Plan', href: '/assets/blue-meridian-media-plan.pdf' },
    ],
  },
  {
    icon: CalendarDays,
    heading: 'Event Marketing',
    img: 'assets/event-marketing.jpg',
    desc: `Events are immersive brand experiences. I develop comprehensive event strategies—from promotion to on‐site execution—for virtual and in‐person gatherings that drive attendance and impact.`,
    items: [
      { label: 'Blue Meridian Event Agenda', href: '/assets/blue-meridian-event-agenda.pdf' },
      { label: 'Blue Meridian Event Invitation', href: '/assets/blue-meridian-event-invitation.pdf' },
    ],
  },
  {
    icon: UserCheck,
    heading: 'Executive Communications',
    img: 'assets/executive-communications.jpg',
    desc: `Leaders need a clear, authentic voice. I craft speeches, memos, and talking points that reflect executive vision and values—building trust with employees, boards, and external stakeholders.`,
    items: [
      { label: 'CEO Talking Points', href: '/assets/ceo-talking-points.pdf' },
    ],
  },
  {
    icon: Video,
    heading: 'Video Production',
    img: 'assets/video-production.jpg',
    desc: `Video brings your message to life. From concept and storyboarding to filming and editing, I produce videos that engage emotions, simplify complexity, and amplify impact.`,
    items: [
      { label: 'Blue Meridian Branded Video', href: '/assets/blue-meridian-video1.mp4' },
      { label: 'Blue Meridian Executive Profile Video', href: '/assets/blue-meridian-video2.mp4' },
    ],
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
                <a href={it.href} target="_blank" rel="noopener">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar navigation */}
      <nav className={styles.sidebar}>
        {SECTIONS.map((sec, i) => (
          <button
            key={sec.heading}
            className={`${styles.navItem} ${
              i === selectedIdx ? styles.active : ''
            }`}
            onClick={() => setSelectedIdx(i)}
          >
            <sec.icon className={styles.icon} />
            <span className={styles.label}>{sec.heading}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
