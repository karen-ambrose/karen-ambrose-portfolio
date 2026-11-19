
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const profile = {
  email: "ambrosekaren123@gmail.com",
  linkedin: "https://linkedin.com/in/karen-ambrose-426b73274",
  github: "https://github.com/karen-ambrose",
};

export default function ContactPage() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");

    if (saved) {
      setDark(saved === "dark");
    } else {
      setDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    document.documentElement.style.colorScheme = next ? "dark" : "light";
  }

  const bg = dark ? "#0b0717" : "#faf8ff";
  const panel = dark ? "#171027" : "#ffffff";
  const text = dark ? "#f6f2ff" : "#241438";
  const muted = dark ? "#bcb0d0" : "#665b76";
  const border = dark ? "#302044" : "#e9def8";

  const socialLinks = [

    {
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      href: profile.linkedin,
      symbol: "in",
      external: true,
    },
    {
      title: "GitHub",
      subtitle: "Explore my code and projects",
      href: profile.github,
      symbol: "</>",
      external: true,
    },
  ];

  return (
    <main
      className="contact-page"
      style={{ background: bg, color: text }}
    >
      <div className="contact-container">
        <header className="contact-header">
          <a href="/" className="portfolio-logo">
            <span className="logo-container">
              <img
                src="/logo.png"
                alt="Karen Ambrose"
                className="nav-logo"
              />
            </span>
          </a>

          <div className="contact-header-actions">
            <Link href="/" className="back-home">
              ← Home
            </Link>

            <button
              className="contact-theme"
              onClick={toggleTheme}
              style={{
                background: panel,
                color: text,
                borderColor: border,
              }}
            >
              {dark ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </header>

        <section className="contact-hero">
          <span className="contact-eyebrow">
            CONTACT / COLLABORATION
          </span>

          <h1>
            Let's build something
            <span> meaningful together.</span>
          </h1>

          <p style={{ color: muted }}>
            Whether you have a data project, a collaboration
            opportunity, or simply want to connect, I'd love
            to hear from you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="contact-primary-button"
          >
            Send Me an Email ↗
          </a>
        </section>

        <section className="contact-social-section">
          <div className="contact-section-heading">
            <div>
              <span className="contact-eyebrow">
                FIND ME ONLINE
              </span>
              <h2>Other ways to connect</h2>
            </div>
          </div>

          <div className="contact-social-grid">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="contact-social-card"
                style={{
                  background: panel,
                  borderColor: border,
                }}
              >
                <span className="social-icon">
                  {link.symbol}
                </span>

                <div>
                  <h3>{link.title}</h3>
                  <p style={{ color: muted }}>
                    {link.subtitle}
                  </p>
                </div>

                <span className="social-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <footer
          className="contact-footer"
          style={{ borderColor: border, color: muted }}
        >
          <p>© {new Date().getFullYear()} Karen Ambrose</p>
          <Link href="/">Back to portfolio ↑</Link>
        </footer>
      </div>
    </main>
  );
}
