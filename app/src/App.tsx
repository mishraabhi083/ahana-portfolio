import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Search,
  TrendingUp,
  Megaphone,
  BarChart3,
  Phone,
  MapPin,
  AtSign,
  Globe,
  CheckCircle2,
  Award,
  Star,
  Quote,
  Heart,
  Coffee,
  Menu,
  X,
} from 'lucide-react';
import './App.css';
import './themes.css';
import Illustration from './Illustration';

/* ================= DATA ================= */

const PROJECTS = [
  {
    slug: 'bottlecapps',
    n: '01',
    name: 'Bottlecapps',
    role: 'SEO Expert · Core Team',
    tag: 'SEO · Performance',
    year: '2024',
    color: '#ff6a3d',
    illustration: 'bottlecapps' as const,
    blurb: 'SEO strategy across 18+ US-based liquor e-commerce sites — keyword research, schema, EEAT, ASO and full-funnel ad management.',
    stat: '18+ websites',
    services: ['Technical SEO', 'Local SEO', 'ASO', 'Google Ads', 'Meta Ads'],
    impact: [
      { k: 'Sites managed', v: '18+' },
      { k: 'Audits shipped', v: '50+' },
      { k: 'Coverage', v: 'Schema · EEAT · YMYL' },
    ],
    story: [
      'Bottlecapps powers some of the largest online liquor retailers in the US. I joined as a core SEO team member responsible for keeping 18+ client sites discoverable, fast, and conversion-ready.',
      'I owned keyword research, technical SEO, schema rollouts, and local listings. On the paid side, I shipped Meta and Google Ads campaigns and resolved infra issues across GBP, GMC, GTM, GA4 and Search Console.',
    ],
  },
  {
    slug: 'cravingly',
    n: '02',
    name: 'Cravingly',
    role: 'Head of Brand Marketing & Growth',
    tag: 'Brand · Growth',
    year: '2022',
    color: '#c6ff3d',
    illustration: 'cravingly' as const,
    blurb: 'Built brand identity, social, influencer and paid programs from zero — Instagram to 10K+, 50K+ app downloads, 1L+ orders.',
    stat: '5M+ reel views',
    services: ['Brand', 'Social', 'Influencer', 'Paid', 'PR'],
    impact: [
      { k: 'App downloads', v: '50K+' },
      { k: 'Orders', v: '1L+' },
      { k: 'Reel views', v: '5M+' },
    ],
    story: [
      'Cravingly is a community-first homemade food platform. I led brand & growth end-to-end — naming, identity, social calendars, influencers, paid, PR, partnerships, and even investor decks.',
      'We grew Instagram to 10K+, secured Eenadu coverage, partnered with Akshayakalpa Organic, and hit 500+ monthly orders by introducing meal subscriptions to companies like Motherson and PVinsight.',
    ],
  },
  {
    slug: 'techmatic',
    n: '03',
    name: 'Techmatic Systems',
    role: 'SEO Analyst · App Marketing Head',
    tag: 'App Marketing · SEO',
    year: '2024',
    color: '#3dd6ff',
    illustration: 'techmatic' as const,
    blurb: 'Owning SEO + app marketing — paid media, influencer programs, email/WhatsApp funnels, and PPC optimisation lifting ROI 35%.',
    stat: '+50% organic traffic',
    services: ['SEO', 'App Marketing', 'Influencer', 'PPC', 'CRM'],
    impact: [
      { k: 'Organic traffic', v: '+50%' },
      { k: 'PPC ROI', v: '+35%' },
      { k: 'Influencer reach', v: '1M+' },
    ],
    story: [
      'At Techmatic I lead SEO and app marketing across multiple products. I run paid media on Meta and Google, manage social presence across seven platforms, and orchestrate influencer programs that pushed 1M+ reach.',
      'I also own email and WhatsApp marketing funnels and report on PPC performance — tightening creative, audiences and bids to drive a 35% ROI lift.',
    ],
  },
  {
    slug: 'compulease',
    n: '04',
    name: 'Compulease Network',
    role: 'Digital Marketing Executive',
    tag: 'SEO · Ads · Analytics',
    year: '2023',
    color: '#a78bff',
    illustration: 'compulease' as const,
    blurb: 'End-to-end SEO, Google & Meta Ads, audits, and analytics — sharpening lead generation and reporting accuracy.',
    stat: 'Full-funnel ownership',
    services: ['On/Off-page SEO', 'Technical SEO', 'Ads', 'GA4', 'Reporting'],
    impact: [
      { k: 'Channels owned', v: 'SEO + Paid' },
      { k: 'Audits shipped', v: 'Weekly' },
      { k: 'Tools mastered', v: '12+' },
    ],
    story: [
      'My first deep dive into the full digital marketing stack. I executed on-page, off-page and technical SEO — meta tags, internal linking, schema, content structure — alongside campaign management on Google and Meta Ads.',
      'Daily work meant SEMrush, GA4, Search Console, Screaming Frog, Ahrefs, Moz, Meta Pixel Helper, and a lot of careful, data-driven reporting.',
    ],
  },
];

const STATS = [
  { value: '03+', label: 'Years experience' },
  { value: '20+', label: 'Brands & products' },
  { value: '50K+', label: 'App downloads driven' },
  { value: '35%', label: 'Avg PPC ROI lift' },
];

const SERVICES = [
  { no: '01', title: 'SEO & SEM', icon: Search,
    desc: 'On-page, off-page, and technical SEO with keyword research, audits, schema, and SERP-driven content.',
    points: ['Technical audits', 'Schema · EEAT · YMYL', 'Local SEO', 'ASO'] },
  { no: '02', title: 'Performance Marketing', icon: TrendingUp,
    desc: 'High-budget Google & Meta Ads engineered for lead generation, app installs, and measurable ROI.',
    points: ['Google · Meta · LinkedIn', 'Lead gen funnels', 'Creative A/B tests', 'Bid strategy'] },
  { no: '03', title: 'Social & Influencer', icon: Megaphone,
    desc: 'Organic + paid social strategy across IG, YouTube, LinkedIn — and influencer programs that scale reach.',
    points: ['Content calendars', 'Influencer outreach', 'Community building', 'Brand voice'] },
  { no: '04', title: 'Analytics & CRO', icon: BarChart3,
    desc: 'GA4, Search Console, Meta Suite — translating data into conversion lifts and confident, A/B-tested decisions.',
    points: ['GA4 setup', 'Funnel analysis', 'A/B testing', 'Attribution'] },
];

const EXPERIENCE = [
  { role: 'SEO Analyst · App Marketing Head', company: 'Techmatic Systems Pvt Ltd',
    period: 'Apr 2024 — Present', location: 'Hyderabad',
    points: [
      'Improved organic traffic 50% and lifted SERP rankings.',
      'Built paid media engine on Meta Ads & Google Ads at scale.',
      'Led influencer campaigns driving 1M+ reach.',
      'Improved PPC ROI 35% through optimisation and creative iteration.',
    ] },
  { role: 'Head of Brand Marketing & Growth', company: 'Cravingly',
    period: '2022 — 2023', location: 'Hyderabad',
    points: [
      'Built brand identity, social, influencer and paid programs from zero.',
      'Scaled Instagram to 10K+ and reels to 5M+ views.',
      'Drove 50K+ app downloads and 1L+ orders.',
      'Led investor conversations across US, UAE & London.',
    ] },
  { role: 'Digital Marketing Associate', company: 'Compulease Network Pvt Ltd',
    period: 'Feb 2023 — Feb 2024', location: 'Hyderabad',
    points: [
      'Executed on-page, off-page & technical SEO that grew rankings.',
      'Conducted SEO audits, backlink building, and content optimisation.',
      'Mastered GA4, Search Console, Meta Ads Manager, Google Ads & Trends.',
      'Owned social media pages and content marketing initiatives.',
    ] },
];

const SKILLS = [
  'SEO & SEM', 'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads',
  'Performance Marketing', 'Social Strategy', 'Influencer Marketing',
  'Content Marketing', 'Email Marketing', 'WhatsApp Marketing',
  'GA4', 'Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog',
  'CRO', 'A/B Testing', 'Schema · EEAT', 'ASO', 'Canva', 'Hootsuite', 'ORM',
];

const TOOLS = [
  { name: 'Google Ads', cat: 'Paid' }, { name: 'Meta Ads', cat: 'Paid' },
  { name: 'GA4', cat: 'Analytics' }, { name: 'Search Console', cat: 'Analytics' },
  { name: 'SEMrush', cat: 'SEO' }, { name: 'Ahrefs', cat: 'SEO' },
  { name: 'Moz', cat: 'SEO' }, { name: 'Screaming Frog', cat: 'SEO' },
  { name: 'Canva', cat: 'Design' }, { name: 'Hootsuite', cat: 'Social' },
  { name: 'Buffer', cat: 'Social' }, { name: 'Jasper AI', cat: 'Content' },
];

const TESTIMONIALS = [
  { quote: "Ahana brings rare clarity — she reads the dashboard, the audience and the brand in the same breath. Our funnel finally felt intentional.", author: 'Founder · Cravingly' },
  { quote: "Our paid spend stopped feeling like a guess. Within a quarter, ROI was up 35% and the creative actually felt on-brand.", author: 'Marketing Lead · Techmatic' },
  { quote: 'Reliable, structured, and genuinely curious about the numbers. Exactly the kind of operator you want owning growth.', author: 'Team Lead · Compulease' },
];

const CERTS = [
  { year: '2023', name: 'From Leads to Likes' },
  { year: '2023', name: 'Attract & Engage Customers' },
  { year: '2023', name: 'Foundation of Digital Marketing — Coursera' },
];

/* ================= MOTION HELPERS ================= */

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Split heading into spans for word-by-word reveal */
function SplitText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={`split ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="split-w" aria-hidden>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.05 + i * 0.06 }}
            style={{ display: 'inline-block' }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ================= GLOBAL UI ================= */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function CursorBlob() {
  const ref = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<'default' | 'link' | 'view'>('default');
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      const t = e.target as HTMLElement;
      if (t.closest('[data-cursor="view"]')) {
        setVariant('view');
        if (labelRef.current) labelRef.current.textContent = 'View';
      } else if (t.closest('a, button, .interactive')) {
        setVariant('link');
        if (labelRef.current) labelRef.current.textContent = '';
      } else {
        setVariant('default');
        if (labelRef.current) labelRef.current.textContent = '';
      }
    };
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`cursor-blob is-${variant}`} aria-hidden>
      <span ref={labelRef} className="cursor-label" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

function PageTitle({ title }: { title: string }) {
  useEffect(() => { document.title = `${title} — Ahana Chowdhury`; }, [title]);
  return null;
}

/* ================= NAV / FOOTER ================= */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
      setTime(`IST ${h}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="nav">
      <Link to="/" className="logo interactive" aria-label="Ahana — home" onClick={() => setOpen(false)}>
        <span className="logo-text">
          <span className="logo-name">Ahana</span><span className="logo-dot-char">.</span><span className="logo-tld">live</span>
        </span>
      </Link>
      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) => `nav-link interactive ${isActive ? 'is-active' : ''}`}
          >
            <span className="nav-link-num">●</span>
            <span className="nav-link-text">{l.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="nav-side">
        <span className="nav-time">{time}</span>
        <Link to="/contact" className="nav-cta interactive">
          <span className="dot dot-pulse" /> Available
        </Link>
        <button className="nav-toggle interactive" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <p className="footer-eyebrow">Get in touch</p>
          <a href="mailto:iamahanachowdhury@gmail.com" className="footer-mail interactive">
            <span className="footer-mail-text">iamahanachowdhury<span className="accent">@gmail.com</span></span>
            <ArrowUpRight size={28} className="footer-mail-arrow" />
          </a>
        </div>
        <div className="footer-col">
          <p className="footer-eyebrow">Sitemap</p>
          <ul className="footer-links">
            <li><Link to="/" className="interactive">Home</Link></li>
            <li><Link to="/about" className="interactive">About</Link></li>
            <li><Link to="/work" className="interactive">Work</Link></li>
            <li><Link to="/services" className="interactive">Services</Link></li>
            <li><Link to="/contact" className="interactive">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-eyebrow">Socials</p>
          <ul className="footer-links">
            <li><a href="https://linkedin.com/in/ahana-chowdhury" target="_blank" rel="noreferrer" className="interactive">LinkedIn <ArrowUpRight size={12} /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="interactive">Instagram <ArrowUpRight size={12} /></a></li>
            <li><a href="mailto:iamahanachowdhury@gmail.com" className="interactive">Email <ArrowUpRight size={12} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Ahana Chowdhury — Digital Marketing Specialist</span>
        <span className="footer-made">
          Made with <Heart size={12} /> & <Coffee size={12} /> in Hyderabad
        </span>
      </div>
    </footer>
  );
}

/* ================= REUSABLE BLOCKS ================= */

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        {[...items, ...items].map((m, i) => (
          <span key={i} className="marquee-item">
            {m} <em aria-hidden>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ idx, label, title }: { idx: string; label: string; title: React.ReactNode }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="eyebrow">[ {idx} ] {label}</span>
      </Reveal>
      <Reveal>
        <h2 className="section-title">{title}</h2>
      </Reveal>
    </div>
  );
}

/* Project list with hover-image preview that follows cursor */
function ProjectList({ items }: { items: typeof PROJECTS }) {
  const [hover, setHover] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25 });
  const sy = useSpring(y, { stiffness: 200, damping: 25 });

  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <div className="proj-list" onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      {items.map((p, i) => (
        <Link
          to={`/work/${p.slug}`}
          key={p.slug}
          className="proj-row interactive"
          data-cursor="view"
          onMouseEnter={() => setHover(i)}
        >
          <span className="proj-row-n">{p.n}</span>
          <span className="proj-row-name">{p.name}</span>
          <span className="proj-row-tag">{p.tag}</span>
          <span className="proj-row-year">{p.year}</span>
          <span className="proj-row-arrow"><ArrowUpRight size={20} /></span>
        </Link>
      ))}

      <motion.div
        className="proj-preview"
        style={{ x: sx, y: sy, opacity: hover !== null ? 1 : 0 }}
      >
        {hover !== null && (
          <Illustration variant={items[hover].illustration} ariaLabel={items[hover].name} />
        )}
      </motion.div>
    </div>
  );
}

/* ================= PAGES ================= */

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <>
      <PageTitle title="Digital Marketing Specialist" />

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <motion.div style={{ opacity: heroOpacity }} className="hero-inner">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="hero-meta-top">
              <span className="hero-loc"><span className="dot dot-pulse" /> Hyderabad — IN</span>
              <span className="hero-role-top">Digital Marketing Specialist</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="hero-row-line">
                <SplitText text="Marketing" />
              </span>
              <span className="hero-row-line">
                <span className="hero-img">
                  <Illustration variant="hero" ariaLabel="Marketing orbit" />
                </span>
                <em><SplitText text="that" /></em>
                <SplitText text="moves" />
              </span>
              <span className="hero-row-line">
                <SplitText text="the numbers." />
                <span className="hero-arrow" aria-hidden>
                  <ArrowUpRight strokeWidth={1.4} />
                </span>
              </span>
            </h1>

            <motion.div variants={fadeUp} className="hero-foot">
              <p className="hero-lede">
                3+ years building performance, SEO and social engines.
                From 18+ US e-commerce sites at Bottlecapps to scaling Cravingly to 50K+ downloads — I turn channels into compounding growth.
              </p>
              <div className="hero-cta">
                <Link to="/work" className="btn btn-light interactive">
                  See selected work <ArrowUpRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-ghost interactive">
                  Book a call
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="kpi-grid" aria-label="Impact at a glance">
              {[
                { v: '50K+', l: 'App downloads', I: TrendingUp },
                { v: '5M+',  l: 'Reel views',    I: Megaphone },
                { v: '+35%', l: 'PPC ROI lift',  I: BarChart3 },
                { v: '18+',  l: 'US sites · SEO', I: Search },
              ].map(({ v, l, I }) => (
                <div key={l} className="kpi interactive">
                  <span className="kpi-i"><I size={14} /></span>
                  <div className="kpi-v">{v}</div>
                  <div className="kpi-l">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="hero-scroll">
          {/* <span>Scroll</span>
          <motion.span
            className="hero-scroll-line"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          /> */}
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={['SEO', 'Performance Ads', 'Influencer', 'GA4', 'CRO', 'Brand Growth', 'ASO', 'Email · WhatsApp']} />

      {/* STATS BAND */}
      <section className="stats-band">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ABOUT TEASER */}
      <section className="section about-teaser">
        <SectionHead
          idx="01"
          label="About"
          title={<>A specialist who reads the<br />dashboard <em>and</em> the audience.</>}
        />
        <Reveal>
          <p className="about-teaser-text">
            I’m Ahana — a Digital Marketing Specialist with 3+ years across performance marketing, SEO, social, and influencer programs. I’ve managed high-budget campaigns on Meta and Google Ads, led SEO for 18+ US-based e-commerce sites, and built brand & growth from scratch for community-led products.
          </p>
        </Reveal>
        <Reveal>
          <Link to="/about" className="big-link interactive">
            More about me <ArrowUpRight size={28} />
          </Link>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="section section-soft">
        <SectionHead
          idx="02"
          label="Services"
          title={<>What I do — and how it shows<br />up in your <em>dashboard</em>.</>}
        />
        <div className="services-grid">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.no}>
                <article className="service-card interactive">
                  <div className="service-top">
                    <span className="service-no">{s.no}</span>
                    <span className="service-icon"><Icon size={20} /></span>
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <ul className="service-points">
                    {s.points.map((p) => (<li key={p}><CheckCircle2 size={14} /> {p}</li>))}
                  </ul>
                  <span className="service-arrow"><ArrowUpRight size={18} /></span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WORK */}
      <section className="section">
        <SectionHead
          idx="03"
          label="Selected Work"
          title={<>Brands I’ve helped <em>grow</em>.</>}
        />
        <ProjectList items={PROJECTS} />
        <Reveal>
          <div className="section-cta">
            <Link to="/work" className="btn btn-light interactive">All work <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-soft">
        <SectionHead
          idx="04"
          label="Kind words"
          title={<>What people say <em>after</em><br />the campaign goes live.</>}
        />
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i}>
              <article className="testimonial">
                <Quote className="testimonial-q" />
                <p className="testimonial-text">{t.quote}</p>
                <p className="testimonial-author">— {t.author}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <section className="page-hero">
        <Reveal><span className="eyebrow">[ About ]</span></Reveal>
        <h1 className="page-title">
          <SplitText text="A specialist who reads the" />
          <br /><SplitText text="dashboard" /> <em><SplitText text="and" /></em> <SplitText text="the audience." />
        </h1>
      </section>

      <section className="section about-split">
        <div className="about-text">
          <Reveal>
            <p className="about-lede">
              3+ years across performance marketing, SEO, social, and influencer programs. I’ve managed high-budget campaigns on Meta and Google Ads, led SEO for 18+ US-based e-commerce sites, and built brand & growth from scratch for community-led products.
            </p>
          </Reveal>
          <Reveal>
            <ul className="about-list">
              <li><strong>Performance.</strong> Paid media across Google, Meta, LinkedIn, YouTube — optimised for ROAS.</li>
              <li><strong>SEO & SEM.</strong> Technical, on-page, off-page, keyword strategy, schema, EEAT, ASO.</li>
              <li><strong>Brand & Social.</strong> Organic + paid strategy, influencer programs, content that compounds.</li>
              <li><strong>Analytics.</strong> GA4, Search Console, SEMrush, Ahrefs, Moz — turning data into decisions.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <Marquee items={SKILLS.slice(0, 12)} />

      {/* TIMELINE */}
      <section className="section">
        <SectionHead idx="01" label="Experience" title={<>Where I’ve been <em>building</em>.</>} />
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <Reveal key={e.company}>
              <article className="tl-item">
                <div className="tl-side">
                  <div className="tl-period">{e.period}</div>
                  <div className="tl-loc"><MapPin size={12} /> {e.location}</div>
                </div>
                <div className="tl-body">
                  <h3 className="tl-role">{e.role}</h3>
                  <p className="tl-company">{e.company}</p>
                  <ul className="tl-points">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS + TOOLS */}
      <section className="section section-soft">
        <SectionHead idx="02" label="Toolkit" title={<>Skills & tools I work with.</>} />
        <Reveal>
          <div className="skill-cloud">
            {SKILLS.map((s) => (<span key={s} className="chip interactive">{s}</span>))}
          </div>
        </Reveal>
        <Reveal>
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <div key={t.name} className="tool interactive">
                <span className="tool-cat">{t.cat}</span>
                <span className="tool-name">{t.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CERTS + EDU */}
      <section className="section certs-grid">
        <Reveal>
          <div className="cert-block">
            <span className="eyebrow">[ Education ]</span>
            <ul className="cert-list">
              <li><span>2020 — 2023</span> BSCHM</li>
              <li><span>2018 — 2020</span> H.S.C (Humanities)</li>
              <li><span>2018</span> S.S.C</li>
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className="cert-block">
            <span className="eyebrow">[ Certifications ]</span>
            <ul className="cert-list">
              {CERTS.map((c) => (
                <li key={c.name}><span>{c.year}</span> <Award size={14} /> {c.name}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CtaStrip />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageTitle title="Services" />
      <section className="page-hero">
        <Reveal><span className="eyebrow">[ Services ]</span></Reveal>
        <h1 className="page-title">
          <SplitText text="Channels, campaigns," /><br />
          <SplitText text="and" /> <em><SplitText text="compounding" /></em> <SplitText text="growth." />
        </h1>
      </section>

      <section className="section">
        <div className="services-deep">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.no}>
                <article className="service-deep interactive">
                  <div className="service-deep-no">{s.no}</div>
                  <div className="service-deep-body">
                    <div className="service-deep-head">
                      <span className="service-icon"><Icon size={20} /></span>
                      <h3>{s.title}</h3>
                    </div>
                    <p>{s.desc}</p>
                    <ul>
                      {s.points.map((p) => (<li key={p}><CheckCircle2 size={14} /> {p}</li>))}
                    </ul>
                  </div>
                  <ArrowUpRight className="service-deep-arrow" size={28} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section section-soft">
        <SectionHead idx="02" label="Process" title={<>A process built for <em>momentum</em>.</>} />
        <div className="process-steps">
          {[
            { n: '01', t: 'Audit', d: 'Channels, funnels, dashboards. We start with truth.' },
            { n: '02', t: 'Strategy', d: 'A focused plan with measurable bets, not wishlists.' },
            { n: '03', t: 'Launch', d: 'Ship campaigns, content and tests with discipline.' },
            { n: '04', t: 'Iterate', d: 'Read the data weekly. Double-down on what compounds.' },
          ].map((p) => (
            <Reveal key={p.n}>
              <div className="process-step interactive">
                <div className="process-n">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function WorkPage() {
  return (
    <>
      <PageTitle title="Work" />
      <section className="page-hero">
        <Reveal><span className="eyebrow">[ Work ]</span></Reveal>
        <h1 className="page-title">
          <SplitText text="Selected projects across" /><br />
          <em><SplitText text="brand" /></em>, <SplitText text="search and paid." />
        </h1>
      </section>

      <section className="section">
        <ProjectList items={PROJECTS} />
      </section>

      <section className="section section-soft">
        <SectionHead idx="02" label="Gallery" title={<>A peek behind the campaigns.</>} />
        <div className="gallery">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug}>
              <Link to={`/work/${p.slug}`} className={`gal-card gal-${i % 3} interactive`} data-cursor="view">
                <Illustration variant={(`gallery-${(i % 4) + 1}`) as any} ariaLabel={p.name} />
                <div className="gal-meta">
                  <span>{p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <h4>{p.name}</h4>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  if (!project) {
    return (
      <section className="section not-found">
        <h1 className="page-title">Project not found.</h1>
        <Link to="/work" className="btn btn-light interactive">Back to work</Link>
      </section>
    );
  }

  return (
    <>
      <PageTitle title={project.name} />
      <section className="project-hero" style={{ background: project.color }}>
        <div className="project-hero-inner">
          <Reveal>
            <Link to="/work" className="back-link interactive"><ArrowLeft size={14} /> All work</Link>
          </Reveal>
          <Reveal>
            <span className="project-hero-tag">[ {project.year} · {project.tag} ]</span>
          </Reveal>
          <Reveal>
            <h1 className="project-hero-title"><SplitText text={project.name} /></h1>
          </Reveal>
          <div className="project-hero-meta">
            <Reveal>
              <p className="project-hero-role">{project.role}</p>
            </Reveal>
            <Reveal>
              <p className="project-hero-blurb">{project.blurb}</p>
            </Reveal>
            <Reveal>
              <span className="project-hero-stat">{project.stat}</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section project-detail">
        <Reveal className="project-cover">
          <Illustration variant={project.illustration} ariaLabel={project.name} />
        </Reveal>
        <div className="project-grid">
          <Reveal>
            <div className="project-story">
              {project.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal>
            <aside className="project-side">
              <div className="ps-block">
                <span className="eyebrow">Services</span>
                <div className="ps-chips">
                  {project.services.map((s) => (<span key={s} className="chip">{s}</span>))}
                </div>
              </div>
              <div className="ps-block">
                <span className="eyebrow">Impact</span>
                <ul className="ps-impact">
                  {project.impact.map((i) => (
                    <li key={i.k}>
                      <span className="ps-k">{i.k}</span>
                      <span className="ps-v">{i.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section next-project">
        <Reveal><span className="eyebrow">[ Next project ]</span></Reveal>
        <Reveal>
          <Link to={`/work/${next.slug}`} className="next-link interactive" data-cursor="view">
            <span>{next.name}</span>
            <ArrowUpRight size={48} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Hi Ahana,\n\n${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:iamahanachowdhury@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageTitle title="Contact" />
      <section className="contact-page">
        <Reveal><span className="eyebrow">[ Contact ]</span></Reveal>
        <h1 className="contact-title">
          <SplitText text="Let’s build" /><br />
          <SplitText text="something" /> <em><SplitText text="great." /></em>
        </h1>
        <Reveal>
          <p className="contact-sub">
            Open to full-time roles, freelance projects, and growth consulting.
          </p>
        </Reveal>

        <div className="contact-grid-2">
          <Reveal>
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                <span>Name</span>
                <input name="name" required placeholder="Your name" className="interactive" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" required placeholder="you@brand.com" className="interactive" />
              </label>
              <label>
                <span>Project</span>
                <select name="project" defaultValue="SEO & SEM" className="interactive">
                  <option>SEO & SEM</option>
                  <option>Performance Marketing</option>
                  <option>Social & Influencer</option>
                  <option>Analytics & CRO</option>
                  <option>Full-funnel growth</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={5} required placeholder="Tell me about your goals…" className="interactive" />
              </label>
              <button type="submit" className="btn btn-light interactive">
                {sent ? 'Opening your mail app…' : 'Send enquiry'} <ArrowUpRight size={16} />
              </button>
            </form>
          </Reveal>

          <Reveal>
            <div className="contact-aside">
              <a href="mailto:iamahanachowdhury@gmail.com" className="contact-mail interactive">
                iamahanachowdhury@gmail.com <ArrowUpRight size={16} />
              </a>
              <ul className="contact-list">
                <li><Phone size={14} /> +91 89728 55757</li>
                <li><MapPin size={14} /> Hitech City, Hyderabad — 500081</li>
                <li><Globe size={14} /> <a href="https://linkedin.com/in/ahana-chowdhury" target="_blank" rel="noreferrer" className="interactive">linkedin.com/in/ahana-chowdhury</a></li>
                <li><AtSign size={14} /> <a href="https://instagram.com" target="_blank" rel="noreferrer" className="interactive">instagram/@_cravingly</a></li>
              </ul>
              <div className="contact-trust">
                <div className="trust-stars">
                  {[0,1,2,3,4].map((i) => (<Star key={i} size={14} fill="#f5f1e8" stroke="none" />))}
                </div>
                <span>Trusted by 20+ brands</span>
              </div>
              <div className="contact-langs">
                <span className="eyebrow">Languages</span>
                <div className="lang-chips">
                  <span>English</span><span>Hindi</span><span>Bengali</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="section not-found">
      <PageTitle title="404" />
      <h1 className="page-title">404.</h1>
      <p>This page wandered off the funnel.</p>
      <Link to="/" className="btn btn-light interactive">Back home <ArrowUpRight size={16} /></Link>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="cta-strip">
      <Reveal>
        <span className="eyebrow">[ Let’s talk ]</span>
      </Reveal>
      <Reveal>
        <h2 className="cta-title">
          <SplitText text="Have a brand that" /><br />
          <SplitText text="needs to" /> <em><SplitText text="grow?" /></em>
        </h2>
      </Reveal>
      <Reveal>
        <Link to="/contact" className="big-link interactive">
          Start a project <ArrowUpRight size={32} />
        </Link>
      </Reveal>
    </section>
  );
}

/* ================= LAYOUT + ROOT ================= */

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="page">
      <ScrollProgress />
      <CursorBlob />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
