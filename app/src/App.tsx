import React, { useEffect, useState } from 'react';
import './App.css';

const skills = [
  'SEO & SEM',
  'Google Ads',
  'Meta Ads',
  'Performance Marketing',
  'Social Media Strategy',
  'Influencer Marketing',
  'Content Marketing',
  'Email & WhatsApp',
  'GA4 & Search Console',
  'SEMrush · Ahrefs · Moz',
  'CRO & Lead Gen',
  'A/B Testing',
  'Canva · Shutterstock',
  'ASO (iOS & Android)',
];

const services = [
  {
    no: '01',
    title: 'SEO & SEM',
    desc: 'On-page, off-page, and technical SEO with keyword research, audits, schema, and SERP-driven content strategy.',
  },
  {
    no: '02',
    title: 'Performance Marketing',
    desc: 'High-budget Google Ads & Meta Ads campaigns engineered for lead generation, app installs, and measurable ROI.',
  },
  {
    no: '03',
    title: 'Social & Influencer',
    desc: 'Organic + paid social strategy across Instagram, YouTube, LinkedIn, and influencer partnerships that scale reach.',
  },
  {
    no: '04',
    title: 'Analytics & CRO',
    desc: 'GA4, Search Console, Meta Suite — translating data into conversion lifts and confident, A/B-tested decisions.',
  },
];

const experience = [
  {
    role: 'SEO Analyst · App Marketing Head',
    company: 'Techmatic Systems Pvt Ltd',
    period: 'Apr 2024 — Present',
    points: [
      'Improved organic traffic 50% and lifted SERP rankings via industry-standard SEO playbooks.',
      'Built paid media engine on Meta Ads & Google Ads — generating high-quality leads at scale.',
      'Led influencer campaigns driving 1M+ reach and measurable brand lift.',
      'Improved PPC ROI by 35% through ongoing optimisation and creative iteration.',
    ],
  },
  {
    role: 'Digital Marketing Associate',
    company: 'Compulease Network Pvt Ltd',
    period: 'Feb 2023 — Feb 2024',
    points: [
      'Executed on-page, off-page & technical SEO that grew organic rankings.',
      'Conducted SEO audits, backlink building, and content optimisation.',
      'Worked deeply with GA4, Search Console, Meta Ads Manager, Google Ads & Trends.',
      'Owned social media pages and content marketing initiatives.',
    ],
  },
];

const projects = [
  {
    tag: 'SEO · Performance',
    name: 'Bottlecapps',
    role: 'SEO Expert — Core Team Member',
    blurb:
      'Drove SEO strategy across 18+ US-based liquor e-commerce websites — keyword research, local SEO, schema, EEAT, ASO and full-funnel ad management.',
    stat: '18+ websites',
  },
  {
    tag: 'Brand · Growth',
    name: 'Cravingly',
    role: 'Head of Brand Marketing & Growth',
    blurb:
      'Built the brand from zero — identity, social, influencers, and paid. Grew Instagram to 10K+, hit 50K+ app downloads and 1L+ orders.',
    stat: '5M+ reel views',
  },
  {
    tag: 'SEO · Ads · Analytics',
    name: 'Compulease Network',
    role: 'Digital Marketing Executive',
    blurb:
      'End-to-end SEO, Google & Meta Ads, audits, and analytics — sharpening lead generation and reporting accuracy across verticals.',
    stat: 'Full-funnel ownership',
  },
  {
    tag: 'App Marketing · SEO',
    name: 'Techmatic Systems',
    role: 'SEO Analyst · App Marketing Head',
    blurb:
      'Owning SEO + app marketing — paid media, influencer programs, email/WhatsApp funnels, and PPC optimisation lifting ROI 35%.',
    stat: '+50% organic traffic',
  },
];

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '1M+', label: 'Influencer reach' },
  { value: '50K+', label: 'App downloads' },
  { value: '35%', label: 'PPC ROI lift' },
];

const marqueeItems = [
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Performance Marketing',
  'GA4',
  'Influencer Marketing',
  'CRO',
  'ASO',
  'Email · WhatsApp',
  'Content Strategy',
];

function App() {
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    document.title = 'Ahana Chowdhury — Digital Marketing Specialist';
  }, []);

  return (
    <div className="page">
      <header className="nav">
        <a href="#top" className="logo">
          ahana<span>.</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn btn-dark">
          Let’s talk <span aria-hidden>↗</span>
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-badge">
          <span className="dot" /> Available for new projects · 2026
        </div>

        <h1 className="hero-title">
          Digital marketing<br />
          that <em>actually</em> moves<br />
          the&nbsp;numbers.
        </h1>

        <div className="hero-row">
          <div className="hero-card">
            <div className="avatar" aria-hidden>
              <span>AC</span>
            </div>
            <div>
              <p className="hero-card-name">Ahana Chowdhury</p>
              <p className="hero-card-role">
                Digital Marketing Specialist · Hyderabad, IN
              </p>
            </div>
          </div>

          <p className="hero-lede">
            3+ years building performance, SEO and social engines for B2B & B2C
            brands. From 18+ US e-commerce sites at Bottlecapps to scaling
            Cravingly to 50K+ downloads — I turn channels into compounding
            growth.
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-dark">
              See my work <span aria-hidden>↗</span>
            </a>
            <a href="mailto:iamahanachowdhury@gmail.com" className="btn btn-ghost">
              Email me
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i} className="marquee-item">
              {m} <em aria-hidden>✦</em>
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="section">
        <div className="section-head">
          <span className="eyebrow">[ 01 ] About</span>
          <h2 className="section-title">
            A specialist who reads the dashboard <em>and</em> the audience.
          </h2>
        </div>
        <div className="about-grid">
          <p className="about-lede">
            I’m Ahana — a Digital Marketing Specialist with 3+ years across
            performance marketing, SEO, social, and influencer programs. I’ve
            managed high-budget campaigns on Meta and Google Ads, led SEO for
            18+ US-based e-commerce sites, and built brand & growth from scratch
            for community-led products.
          </p>
          <ul className="about-list">
            <li>
              <strong>Performance.</strong> Paid media across Google, Meta,
              LinkedIn, and YouTube — optimised for ROAS, not vanity.
            </li>
            <li>
              <strong>SEO & SEM.</strong> Technical, on-page, off-page,
              keyword strategy, schema, EEAT, ASO.
            </li>
            <li>
              <strong>Brand & Social.</strong> Organic + paid strategy,
              influencer programs, content calendars that compound.
            </li>
            <li>
              <strong>Analytics.</strong> GA4, Search Console, SEMrush,
              Ahrefs, Moz — turning data into decisions.
            </li>
          </ul>
        </div>
      </section>

      <section id="services" className="section section-dark">
        <div className="section-head">
          <span className="eyebrow eyebrow-light">[ 02 ] Services</span>
          <h2 className="section-title">
            What I do — and how it shows up in your dashboard.
          </h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.no} className="service-card">
              <div className="service-no">{s.no}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-arrow" aria-hidden>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <span className="eyebrow">[ 03 ] Selected Work</span>
          <h2 className="section-title">Brands I’ve helped grow.</h2>
        </div>
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.name} className="project">
              <div className="project-num">0{i + 1}</div>
              <div className="project-meta">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-role">{p.role}</p>
              </div>
              <p className="project-blurb">{p.blurb}</p>
              <div className="project-stat">{p.stat}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-head">
          <span className="eyebrow">[ 04 ] Toolkit</span>
          <h2 className="section-title">Skills & tools I work with.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-head">
          <span className="eyebrow">[ 05 ] Experience</span>
          <h2 className="section-title">Where I’ve been building.</h2>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <article key={e.company} className="tl-item">
              <div className="tl-period">{e.period}</div>
              <div className="tl-body">
                <h3 className="tl-role">{e.role}</h3>
                <p className="tl-company">{e.company}</p>
                <ul className="tl-points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <span className="eyebrow eyebrow-light">[ 06 ] Contact</span>
        <h2 className="contact-title">
          Have a brand that<br />needs to <em>grow</em>?
        </h2>
        <p className="contact-sub">
          Open to full-time roles, freelance projects, and growth consulting.
        </p>
        <a href="mailto:iamahanachowdhury@gmail.com" className="contact-mail">
          iamahanachowdhury@gmail.com <span aria-hidden>↗</span>
        </a>
        <div className="contact-grid">
          <div>
            <p className="contact-label">Phone</p>
            <p className="contact-value">+91 89728 55757</p>
          </div>
          <div>
            <p className="contact-label">Location</p>
            <p className="contact-value">Hitech City, Hyderabad — 500081</p>
          </div>
          <div>
            <p className="contact-label">LinkedIn</p>
            <a
              className="contact-value link"
              href="https://linkedin.com/in/ahana-chowdhury"
              target="_blank"
              rel="noreferrer"
            >
              /in/ahana-chowdhury
            </a>
          </div>
          <div>
            <p className="contact-label">Languages</p>
            <p className="contact-value">English · Hindi · Bengali</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {year} Ahana Chowdhury</span>
        <span>Designed & built with care.</span>
      </footer>
    </div>
  );
}

export default App;
