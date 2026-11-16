
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const metrics = [
  { value: "100", label: "Simulated customers" },
  { value: "27,416 ms", label: "Highest mean response time" },
  { value: "4.42 req/s", label: "Average throughput across labels" },
  { value: "0.90%", label: "Reported error rate" },
];

const findings = [
  {
    number: "01",
    title: "Response-time bottlenecks",
    description:
      "The highest observed average response time was 27,416 ms, indicating potential performance bottlenecks that warrant investigation.",
  },
  {
    number: "02",
    title: "Minimum response time",
    description:
      "The lowest recorded response time was 94 ms, demonstrating substantially faster responses for some simulated transactions.",
  },
  {
    number: "03",
    title: "Throughput and reliability",
    description:
      "Average throughput across service labels was 4.42 requests per second, with a reported error rate of 0.90%.",
  },
  {
    number: "04",
    title: "Throughput-error relationship",
    description:
      "The scatter plot analysis suggested an association between higher throughput and lower error percentages in the simulated dataset.",
  },
  {
    number: "05",
    title: "Outlier detection",
    description:
      "Two Customer-Loan-Information observations were identified as outliers and flagged for further investigation.",
  },
];

const methodology = [
  {
    step: "01",
    title: "Simulate",
    text: "Use Apache JMeter to simulate 100 customers interacting with banking services concurrently.",
  },
  {
    step: "02",
    title: "Prepare",
    text: "Collect the generated performance metrics and organize the collated CSV dataset.",
  },
  {
    step: "03",
    title: "Analyze",
    text: "Use Python and Jupyter Notebook to examine response times, throughput, errors, and outliers.",
  },
  {
    step: "04",
    title: "Visualize",
    text: "Create a Power BI dashboard to communicate performance patterns and key findings.",
  },
];

export default function FirstBankProject() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      setDark(saved === "dark");
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  const background = dark ? "#0b0717" : "#faf8ff";
  const surface = dark ? "#171027" : "#ffffff";
  const primary = dark ? "#f6f2ff" : "#241438";
  const secondary = dark ? "#bcb0d0" : "#665b76";
  const border = dark ? "#302044" : "#e9def8";
  const purple = dark ? "#c084fc" : "#7c3aed";

  return (
    <main
      style={{
        minHeight: "100vh",
        background,
        color: primary,
        transition: "background 0.35s, color 0.35s",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header
          className="flex items-center justify-between gap-4 py-7"
          style={{ borderBottom: `1px solid ${border}` }}
        >
          <Link
            href="/#projects"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
          >
            ← All Projects
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border px-5 py-2 text-sm"
            style={{ borderColor: border, background: surface }}
          >
            {dark ? "☀ Light mode" : "☾ Dark mode"}
          </button>
        </header>

        <section className="py-16 sm:py-24">
          <div
            className="mb-7 inline-flex rounded-full border px-4 py-2 text-xs font-semibold"
            style={{ borderColor: border, color: purple }}
          >
            DATA ANALYTICS / PERFORMANCE ENGINEERING
          </div>

          <h1 className="max-w-4xl text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
            FirstBank Mobile App
            <span
              className="mt-2 block"
              style={{ color: purple }}
            >
              Performance Metrics Analysis
            </span>
          </h1>

          <p
            className="mt-8 max-w-3xl text-lg leading-8"
            style={{ color: secondary }}
          >
            Evaluating banking-service response times, throughput,
            reliability, and outliers through a simulated
            high-traffic environment involving 100 concurrent
            customers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {["JMeter", "Python", "Jupyter", "Power BI"].map(
              (tool) => (
                <span
                  key={tool}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{ borderColor: border, background: surface }}
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </section>

        <section className="pb-20">
          <h2 className="mb-6 text-2xl font-bold">
            Performance at a glance
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border p-5 sm:p-7"
                style={{ background: surface, borderColor: border }}
              >
                <p
                  className="text-2xl font-bold sm:text-3xl"
                  style={{ color: purple }}
                >
                  {metric.value}
                </p>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: secondary }}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 pb-20 lg:grid-cols-2">
          <div>
            <p
              className="mb-4 text-xs font-bold tracking-[0.2em]"
              style={{ color: purple }}
            >
              THE CHALLENGE
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Understanding performance under load
            </h2>
            <p className="leading-8" style={{ color: secondary }}>
              Digital banking services depend on responsive and
              reliable transactions. This project investigated
              simulated customer interactions to identify unusual
              response times, service variability, processing
              throughput, and potential reliability concerns.
            </p>
          </div>

          <div
            className="rounded-2xl border p-7"
            style={{ background: surface, borderColor: border }}
          >
            <h3 className="mb-5 text-xl font-bold">
              Dataset characteristics
            </h3>
            <div
              className="space-y-4 text-sm leading-7"
              style={{ color: secondary }}
            >
              <p>Source: Apache JMeter simulation</p>
              <p>Dataset: collated.csv</p>
              <p>
                Service categories: Login, Airtime,
                Customer-Loan-Information, and others
              </p>
              <p>
                Metrics: Response times, standard deviation,
                error percentage, throughput, transfer rates,
                and average bytes
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <p
            className="mb-4 text-xs font-bold tracking-[0.2em]"
            style={{ color: purple }}
          >
            THE PROCESS
          </p>
          <h2 className="mb-8 text-3xl font-bold">
            From simulation to insights
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-2"
                style={{ background: surface, borderColor: border }}
              >
                <p
                  className="mb-8 text-sm font-bold"
                  style={{ color: purple }}
                >
                  {item.step}
                </p>
                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-7"
                  style={{ color: secondary }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <p
            className="mb-4 text-xs font-bold tracking-[0.2em]"
            style={{ color: purple }}
          >
            ANALYSIS RESULTS
          </p>
          <h2 className="mb-8 text-3xl font-bold">
            Key findings
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {findings.map((finding) => (
              <article
                key={finding.number}
                className="rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: surface, borderColor: border }}
              >
                <p
                  className="mb-4 text-sm font-semibold"
                  style={{ color: purple }}
                >
                  INSIGHT {finding.number}
                </p>
                <h3 className="mb-3 text-xl font-bold">
                  {finding.title}
                </h3>
                <p
                  className="text-sm leading-7"
                  style={{ color: secondary }}
                >
                  {finding.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mb-20 rounded-3xl border p-8 sm:p-12"
          style={{ background: surface, borderColor: border }}
        >
          <p
            className="mb-4 text-xs font-bold tracking-[0.2em]"
            style={{ color: purple }}
          >
            VISUAL EXPLORATION
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Power BI Performance Dashboard
          </h2>

          <p
            className="max-w-2xl leading-8"
            style={{ color: secondary }}
          >
            This dashboard visualizes performance
            measures and patterns across simulated banking
            services.
          </p>

          <div
            className="mt-8 flex min-h-64 items-center justify-center rounded-2xl border border-dashed p-8 text-center"
            style={{
              borderColor: border,
              background: dark ? "#100a1c" : "#f5efff",
              color: secondary,
            }}
          >
            
            <div className="mt-8">
            <div
                className="overflow-hidden rounded-2xl border"
                style={{
                borderColor: border,
                boxShadow: dark
                    ? "0 18px 55px rgba(124, 58, 237, 0.14)"
                    : "0 18px 55px rgba(124, 58, 237, 0.08)",
                }}
            >
                <iframe
                title="FirstBank Mobile App Performance Dashboard"
                src="https://app.powerbi.com/view?r=eyJrIjoiMmYzMmVhNTYtYjQ1Ny00YzE4LThlOTktY2FmZTg5MmRhNjUzIiwidCI6ImRlMTM3ZmFmLTVmMDQtNDI1OC04ZjRmLTdhNDg0NDNiM2JiZCIsImMiOjZ9"
                className="block w-full"
                style={{
                    height: "min(72vw, 680px)",
                    minHeight: "360px",
                    border: "none",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p
                className="text-sm"
                style={{ color: secondary }}
                >
                Explore the interactive performance analysis dashboard.
                </p>

                <a
                href="https://app.powerbi.com/view?r=eyJrIjoiMmYzMmVhNTYtYjQ1Ny00YzE4LThlOTktY2FmZTg5MmRhNjUzIiwidCI6ImRlMTM3ZmFmLTVmMDQtNDI1OC04ZjRmLTdhNDg0NDNiM2JiZCIsImMiOjZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
                style={{
                    background: "#7c3aed",
                    boxShadow: "0 8px 25px rgba(124,58,237,0.2)",
                }}
                >
                Open Full Dashboard ↗
                </a>
            </div>
            </div>

          </div>
        </section>

        <section className="pb-20">
          <h2 className="mb-5 text-3xl font-bold">
            Conclusion
          </h2>

          <p
            className="max-w-3xl leading-8"
            style={{ color: secondary }}
          >
            The analysis highlighted performance variation
            across simulated banking services, including
            potential response-time bottlenecks and unusual
            Customer-Loan-Information observations.
            These findings provide areas for further load
            testing, investigation, and performance monitoring.
          </p>

          <p
            className="mt-5 max-w-3xl text-sm leading-7"
            style={{ color: secondary }}
          >
            Note: This is an independent analysis of simulated
            performance data. It does not establish the
            production performance of FirstBank's mobile
            banking infrastructure.
          </p>
        </section>

        <footer
          className="flex flex-wrap items-center justify-between gap-4 py-8 text-sm"
          style={{
            borderTop: `1px solid ${border}`,
            color: secondary,
          }}
        >
          <span>Data Analytics · Project Case Study</span>
          <Link href="/#projects" style={{ color: purple }}>
            Explore more projects →
          </Link>
        </footer>
      </div>
    </main>
  );
}
