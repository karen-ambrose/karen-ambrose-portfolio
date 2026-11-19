
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const interests = [
  {
    number: "01",
    title: "Applied Artificial Intelligence",
    description:
      "Exploring practical applications of AI for addressing real-world challenges, supporting decision-making, and building useful intelligent systems.",
  },
  {
    number: "02",
    title: "Data Science & Predictive Analytics",
    description:
      "Using data analysis, statistical techniques, and predictive modeling to uncover patterns and generate actionable knowledge.",
  },
  {
    number: "03",
    title: "Machine Learning",
    description:
      "Understanding how learning algorithms can identify patterns, make predictions, and generalize across different datasets and applications.",
  },
  {
    number: "04",
    title: "Computer Vision",
    description:
      "Exploring how computational systems can interpret, analyze, and extract useful information from images and visual data.",
  },
  {
    number: "05",
    title: "Human–Computer Interaction (HCI)",
    description:
      "Investigating how people interact with technology and how intelligent systems can become more intuitive, accessible, and human-centered.",
  },
  {
    number: "06",
    title: "Evaluation & Responsible Use of AI",
    description:
      "Exploring the reliability, fairness, transparency, usability, and societal implications of AI systems.",
  },
];

export default function ResearchPage() {
  const [dark, setDark] = useState(true);
  const [cvOpen, setCvOpen] = useState(false);  

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const preferred = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDark(preferred);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    localStorage.setItem(
      "portfolio-theme",
      next ? "dark" : "light"
    );
    document.documentElement.style.colorScheme =
      next ? "dark" : "light";
  }

  const bg = dark ? "#0b0717" : "#faf8ff";
  const panel = dark ? "#171027" : "#ffffff";
  const text = dark ? "#f6f2ff" : "#241438";
  const muted = dark ? "#bcb0d0" : "#665b76";
  const border = dark ? "#302044" : "#e9def8";
  const accent = dark ? "#c084fc" : "#7c3aed";

  return (
    <main
      className="research-page"
      style={{
        background: bg,
        color: text,
        minHeight: "100vh",
        transition: "background 0.35s, color 0.35s",
      }}
    >
      <div className="research-container">
        <header
          className="research-header"
          style={{ borderColor: border }}
        >
        
            <a href="/" className="portfolio-logo">
            <span className="logo-container">
              <img
                src="/logo.png"
                alt="Karen Ambrose"
                className="nav-logo"
              />
            </span>
          </a>

          <nav className="research-nav" aria-label="Research navigation">
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/research" aria-current="page">
              Research
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <button
            className="research-theme"
            onClick={toggleTheme}
            style={{
              background: panel,
              color: text,
              borderColor: border,
            }}
            aria-label={
              dark ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {dark ? "☀ Light" : "☾ Dark"}
          </button>
        </header>

        <section className="research-hero">
          <p className="research-eyebrow">
            RESEARCH & ACADEMIC INTERESTS
          </p>

          <h1>
            Exploring intelligent systems
            <span> and their real-world impact.</span>
          </h1>

          <p
            className="research-introduction"
            style={{ color: muted }}
          >
            My research interests span artificial intelligence,
            data science, machine learning, computer vision,
            human–computer interaction, and responsible AI.
            I am particularly interested in understanding how
            intelligent technologies can be developed, evaluated,
            and applied to meaningful real-world problems.
          </p>
        </section>

        <section className="research-interests">
          <div className="research-section-title">
            <p className="research-eyebrow">
              AREAS OF INTEREST
            </p>
            <h2>Research directions</h2>
            <p style={{ color: muted }}>
              Areas I am interested in exploring through
              further study, research, and interdisciplinary
              collaboration.
            </p>
          </div>

          <div className="research-grid">
            {interests.map((interest) => (
              <article
                key={interest.number}
                className="research-card"
                style={{
                  background: panel,
                  borderColor: border,
                }}
              >
                <span
                  className="research-card-number"
                  style={{ color: accent }}
                >
                  {interest.number}
                </span>

                <h3>{interest.title}</h3>

                <p style={{ color: muted }}>
                  {interest.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="research-outlook"
          style={{
            background: panel,
            borderColor: border,
          }}
        >
          <p className="research-eyebrow">
            RESEARCH OUTLOOK
          </p>

          <h2>Looking ahead</h2>

          <p style={{ color: muted }}>
            As I continue developing my technical and research
            skills, I am interested in graduate-level study and
            opportunities to contribute to research that bridges
            theoretical understanding with practical impact.
            I am especially drawn to interdisciplinary work
            connecting AI, data, and human-centered technology.
          </p>

          <div className="research-actions">
            <Link href="/#projects" className="research-primary">
              Explore My Projects ↗
            </Link>
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
            <Link href="/contact" className="research-secondary">
              Get in Touch ↗
            </Link>
          </div>
        </section>

        <footer
          className="research-footer"
          style={{ borderColor: border, color: muted }}
        >
          <span>
            © {new Date().getFullYear()} Karen Ambrose
          </span>
          <Link href="/">Back to Portfolio ↑</Link>
        </footer>
      </div>
    </main>
  );
}
