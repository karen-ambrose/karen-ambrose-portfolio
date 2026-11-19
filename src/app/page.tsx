
"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "FirstBank Mobile App Performance Analysis",
    category: "Data Analytics",
    description:
      "Analyzed simulated high-traffic banking transactions using JMeter, Python, and Power BI to investigate response times, throughput, errors, and performance outliers.",
    tools: ["JMeter", "Python", "Power BI"],
    status: "Completed",
  },
  {
    title: "Customer Segmentation",
    category: "Data Science",
    description:
      "Exploring customer behavior and identifying meaningful segments.",
    tools: ["Python", "Pandas", "Clustering"],
    status: "Planned",
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Building predictive models to understand customer retention.",
    tools: ["Python", "Scikit-learn", "ML"],
    status: "Planned",
  },
];

const categories = [
  {
    number: "01",
    title: "Data Analytics",
    description:
      "Transforming raw data into dashboards, reports, and actionable business insights.",
    tools: "SQL / Power BI / Excel / Python",
  },
  {
    number: "02",
    title: "Data Science",
    description:
      "Exploring datasets, discovering patterns, and applying statistical methods.",
    tools: "Python / Pandas / Statistics",
  },
  {
    number: "03",
    title: "Machine Learning",
    description:
      "Developing predictive solutions and data-driven intelligent systems.",
    tools: "Scikit-learn / Model Evaluation / ML",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);  
  const [filter, setFilter] = useState("All Projects");
const [menuOpen, setMenuOpen] = useState(false);

const filters = [
  "All Projects",
  "Data Analytics",
  "Data Science",
  "Machine Learning",
];

const filteredProjects =
  filter === "All Projects"
    ? projects
    : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const root = document.querySelector(".portfolio-root");
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
    root?.classList.add("motion-ready");

    return () => observer.disconnect();
  }, [filter]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    setDark(
      saved
        ? saved === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const bg = dark ? "#0b1120" : "#f8fafc";
  const panel = dark ? "#141e30" : "#ffffff";
  const text = dark ? "#f8fafc" : "#152238";
  const muted = dark ? "#a8b6cc" : "#64748b";
  const border = dark ? "#2a3950" : "#e2e8f0";
  const accent = "#8b5cf6";

  const cardStyle = {
    background: panel,
    border: `1px solid ${border}`,
    borderRadius: 18,
    padding: 26,
  };

  return (
    <main
      className="portfolio-root"
      style={{
        background: bg,
        color: text,
        minHeight: "100vh",
        transition: "background 0.25s, color 0.25s",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "auto", padding: "0 24px" }}>
        <header className="portfolio-header">
          <a href="#about" className="portfolio-logo">
            <span className="logo-container">
              <img
                src="/logo.png"
                alt="Karen Ambrose"
                className="nav-logo"
              />
            </span>
          </a>

          <nav
            className={`portfolio-nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="/research" onClick={() => setMenuOpen(false)}>
              Research
            </a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              style={{
                background: panel,
                color: text,
                borderColor: border,
              }}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? "☀ Light" : "☾ Dark"}
            </button>

            <button
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              style={{ color: text }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        <section id="about" className="reveal" style={{ paddingBottom: 90 }}>
          
          <div className="about-profile">
            <div className="about-photo">
              <img
                src="/profile.jpeg"
                alt="Portrait of Your Name"
              />
            </div>

            <div className="about-intro">
              <p className="about-eyebrow">A LITTLE ABOUT ME</p>

              <h2>Hi, I'm Karen Ambrose.</h2>

              <p>
                I'm a data enthusiast specializing in Data Analytics,
                Data Science, and Machine Learning.
              </p>

              <p>
                I enjoy turning complex datasets into meaningful
                insights, building intuitive visualizations, and
                exploring predictive solutions to real-world problems.
              </p>

              
<div className="about-actions">
  <a href="#projects" className="about-link">
    Explore My Work ↗
  </a>

  <div className="cv-dropdown">
    <button
      type="button"
      className="cv-dropdown-trigger"
      onClick={() => setCvOpen(!cvOpen)}
      aria-expanded={cvOpen}
      aria-controls="cv-options"
    >
      <span>↓ Download CV</span>
      <span>{cvOpen ? "⌃" : "⌄"}</span>
    </button>

    {cvOpen && (
      <div id="cv-options" className="cv-dropdown-menu">
        <a
          href="/Karen_Ambrose_Professional_CV.pdf"
          download
          className="cv-dropdown-option"
          onClick={() => setCvOpen(false)}
        >
          <span className="cv-option-icon">▣</span>
          <span className="cv-option-text">
            <strong>Professional CV</strong>
            <small>Industry & recruitment</small>
          </span>
        </a>

        <a
          href="/Karen_Ambrose_Research_CV.pdf"
          download
          className="cv-dropdown-option"
          onClick={() => setCvOpen(false)}
        >
          <span className="cv-option-icon">◇</span>
          <span className="cv-option-text">
            <strong>Academic / Research CV</strong>
            <small>Graduate studies & research</small>
          </span>
        </a>
      </div>
    )}
  </div>

  <a href="/contact" className="about-link-secondary">
    Contact Me ↗
  </a>
</div>

            </div>
          </div>

          <SectionHeading
            label="WHAT I DO"
            title="Three disciplines. One goal."
            muted={muted}
          />

          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((category) => (
              <button
                key={category}
                className={`filter-button ${
                  filter === category ? "active" : ""
                }`}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                style={{
                  color: filter === category ? "#ffffff" : text,
                  borderColor:
                    filter === category ? "#8b5cf6" : border,
                  background:
                    filter === category ? "#7c3aed" : panel,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {categories.map((item) => (
              <article key={item.number} className="motion-card reveal" style={cardStyle}>
                <p style={{ color: accent, fontWeight: 700 }}>
                  {item.number}
                </p>
                <h3 style={{ fontSize: 24, margin: "16px 0" }}>
                  {item.title}
                </h3>
                <p style={{ color: muted, lineHeight: 1.7 }}>
                  {item.description}
                </p>
                <p style={{ fontSize: 12, marginTop: 26, color: accent }}>
                  {item.tools}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="reveal" style={{ paddingBottom: 100 }}>
          <SectionHeading
            label="SELECTED WORK"
            title="Projects & case studies"
            muted={muted}
          />
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <article key={project.title} className="motion-card reveal" style={cardStyle}>
                <div
                  style={{
                    height: 145,
                    borderRadius: 12,
                    background: dark
                      ? "linear-gradient(135deg,#27134a,#6333a6)"
                      : "linear-gradient(135deg,#ede9fe,#faf5ff)",
                    display: "grid",
                    placeItems: "center",
                    color: dark ? "#ddd6fe" : "#7c3aed",
                    marginBottom: 24,
                    fontSize: 40,
                    fontWeight: 700,
                  }}
                >
                  {project.category === "Machine Learning"
                    ? "ML"
                    : project.category === "Data Science"
                    ? "DS"
                    : "DA"}
                </div>

                <p style={{ color: accent, fontSize: 13 }}>
                  {project.category} · {project.status}
                </p>

                <h3 style={{ margin: "14px 0", fontSize: 21 }}>
                  {project.title}
                </h3>

                <p style={{ color: muted, lineHeight: 1.7 }}>
                  {project.description}
                </p>

                <p style={{ fontSize: 12, marginTop: 25, color: muted }}>
                  {project.tools.join(" · ")}
                </p>

                {project.title ===
                  "FirstBank Mobile App Performance Analysis" && (
                  <a
                    href="/projects/firstbank-performance"
                    style={{
                      display: "inline-block",
                      marginTop: 20,
                      color: accent,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Explore Case Study →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="reveal"
          style={{
            ...cardStyle,
            textAlign: "center",
            marginBottom: 60,
            padding: "70px 24px",
          }}
        >
          <p style={{ color: accent, fontWeight: 700 }}>LET&apos;S CONNECT</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>
            Have a data problem worth solving?
          </h2>
          <p style={{ color: muted, margin: "20px auto 32px" }}>
            Open to analytics opportunities, collaborations, and
            data-driven projects.
          </p>
          <a
            href="/contact" className="about-link-secondary"
            style={buttonStyle(accent, "white")}
          >
            Get in Touch
          </a>
        </section>

        <footer
          style={{
            borderTop: `1px solid ${border}`,
            padding: "28px 0",
            color: muted,
            fontSize: 13,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Karen Ambrose. Built with Next.js.
        </footer>
      </div>

      <style jsx>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        @media (max-width: 800px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
    </main>
  );
}

function SectionHeading({
  label,
  title,
  muted,
}: {
  label: string;
  title: string;
  muted: string;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p
        style={{
          color: "#8b5cf6",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: 2,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          color: muted,
          fontSize: "clamp(30px, 4vw, 43px)",
          marginTop: 10,
          letterSpacing: -1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function buttonStyle(
  background: string,
  color: string,
  border?: string
) {
  return {
    display: "inline-block",
    padding: "14px 23px",
    borderRadius: 9,
    background,
    color,
    border: border ? `1px solid ${border}` : "none",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
  };
}
