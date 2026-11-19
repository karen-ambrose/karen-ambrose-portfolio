
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudy = {
  title: string;
  subtitle: string;
  tools: string[];
  overview: string;
  methodology: string[];
  findings: string[];
  limitations: string;
  github: string;
  dashboard?: string;
};

const studies: Record<string, CaseStudy> = {
  "pixar-analysis": {
    title: "Pixar's 30-Year Legacy",
    subtitle: "Film Performance & Visual Storytelling",
    tools: [
      "Power BI",
      "Data Visualization",
      "Film Analytics",
      "Data Storytelling",
    ],
    overview:
      "Developed as part of the Maven Analytics Challenge, this collaborative project examines Pixar's filmography using interactive Power BI visualizations. The analysis explores box-office performance, budgets, audience ratings, and changes across different eras of the studio's history.",
    methodology: [
      "Organized film data by release timeline and studio era.",
      "Analyzed box-office revenue, budgets, and film ratings.",
      "Built interactive visualizations comparing performance across eras.",
      "Created a movie comparison view for exploring two films side by side.",
    ],
    findings: [
      "Exploration of how box-office revenue and ratings vary across Pixar eras.",
      "Comparisons of film budgets against revenue.",
      "Comparisons of individual films using audience ratings and commercial performance.",
    ],
    limitations:
      "This is a descriptive analysis. The dashboard does not establish that release timing or film budgets caused particular commercial outcomes. The work is a collaborative Maven Analytics Challenge submission.",
    github: "https://github.com/karen-ambrose/Pixar-dashboard",
    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiOTljM2QxMTYtZjg1NC00MTI3LWFjN2UtMzE3NWRkZGJjMTQxIiwidCI6ImRlMTM3ZmFmLTVmMDQtNDI1OC04ZjRmLTdhNDg0NDNiM2JiZCIsImMiOjZ9",
  },

  "hospital-analysis": {
    title: "Hospital Performance & Patient Outcomes",
    subtitle: "SQL Exploratory Data Analysis",
    tools: [
      "SQL",
      "Exploratory Data Analysis",
      "Healthcare Analytics",
    ],
    overview:
      "An SQL-based analysis of synthetic Massachusetts General Hospital records from 2011–2022. The project investigates patient encounters, demographics, costs, insurance coverage, medical procedures, and mortality patterns to identify operational insights.",
    methodology: [
      "Queried patient, encounter, procedure, and payer datasets.",
      "Used SQL joins, aggregations, date functions, and conditional grouping.",
      "Analyzed patient visits, hospital stays, insurance coverage, and claim costs.",
      "Investigated procedure frequencies and reported mortality patterns.",
    ],
    findings: [
      "The repository reports 649 patients visiting in 2021, the highest annual count in its analysis.",
      "Mondays were identified as the busiest day for patient encounters.",
      "Patients aged 65 and over were identified as frequent hospital visitors.",
      "Inpatient encounters had higher average costs than outpatient encounters.",
      "The repository reports that 15.8% of patient records had a recorded death date.",
    ],
    limitations:
      "The dataset is synthetic. These results should not be interpreted as measured performance or health outcomes of the actual hospital. Some reported findings require further validation before informing clinical decisions.",
    github: "https://github.com/karen-ambrose/Hospital-Analysis",
  },
  
    "medicore-sales": {
    title: "MediCore Sales Analysis",
    subtitle: "Pharmaceutical Sales & Commercial Performance Intelligence",

    tools: [
        "Power BI",
        "Data Analytics",
        "Sales Performance",
        "Business Intelligence",
        "Data Visualization",
    ],

    overview:
        "MediCore Health Distribution Ltd is a pharmaceutical distribution company supplying medicines and healthcare products to hospitals, pharmacies, clinics, and retail outlets across different regions. This project uses sales transaction data to investigate revenue drivers, regional performance, customer contributions, distributor effectiveness, and sales team productivity. The goal is to translate sales data into useful business intelligence that supports commercial planning and decision-making.",

    methodology: [
        "Examined pharmaceutical sales transaction records to understand product, customer, region, distributor, and sales team performance.",

        "Analyzed revenue contribution across individual products and drug categories to identify key commercial drivers.",

        "Compared sales performance across geographic regions and different customer segments.",

        "Evaluated contributions from distributors and sales teams to understand differences in sales performance.",

        "Explored sales patterns over time to identify periods of growth, decline, or fluctuation.",

        "Developed an interactive Power BI dashboard to communicate findings and support business decision-making.",
    ],

    findings: [
        "Product performance analysis examines which pharmaceutical products and drug categories contribute most to revenue.",

        "Regional comparisons help identify stronger and weaker markets for targeted commercial strategies.",

        "Customer segmentation explores the revenue contributions of hospitals, pharmacies, clinics, and retail outlets.",

        "Sales team and distributor comparisons support evaluation of commercial performance.",

        "Time-based sales analysis provides visibility into revenue trends and fluctuations.",

        "The dashboard provides a foundation for identifying opportunities in stock planning, sales improvement, and business growth.",
    ],

    limitations:
        "The project describes commercial performance using the supplied sales transaction data. Specific financial results, causal explanations, and business recommendations should be validated against the dashboard and underlying dataset. Sales patterns alone do not establish why performance changed.",

    github: "",

    dashboard:
        "https://app.powerbi.com/view?r=eyJrIjoiYzUzYzY1MDktOTk5YS00ZjNhLTljM2MtZWYzNjc4Y2NhNWUwIiwidCI6ImRlMTM3ZmFmLTVmMDQtNDI1OC04ZjRmLTdhNDg0NDNiM2JiZCIsImMiOjZ9",
    },

};

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studies[slug];

  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[#0b0717] text-[#f6f2ff]">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-purple-900/40 pb-7">
          <Link href="/#projects" className="text-sm text-purple-300 hover:text-white">
            ← All Projects
          </Link>
          <span className="text-sm font-bold">
            KAREN AMBROSE<span className="text-purple-400">.</span>
          </span>
        </header>

        <section className="mb-16">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-purple-400">
            DATA ANALYTICS / CASE STUDY
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            {study.title}
          </h1>

          <p className="mt-5 text-xl text-purple-300">
            {study.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-purple-800/60 px-4 py-2 text-xs"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {study.github && (
                <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
                >
                    View GitHub Repository ↗
                </a>
                )}
            {study.dashboard && (
              <a
                href={study.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-violet-500 px-6 py-3 text-sm font-semibold text-purple-200 transition-transform hover:-translate-y-1"
              >
                Open Dashboard ↗
              </a>
            )}
          </div>
        </section>

        <section className="mb-16 max-w-4xl">
          <h2 className="mb-5 text-3xl font-bold">Project Overview</h2>
          <p className="leading-8 text-purple-100/75">
            {study.overview}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-7 text-3xl font-bold">Methodology</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {study.methodology.map((step, index) => (
              <article
                key={step}
                className="rounded-2xl border border-purple-900/50 bg-[#171027] p-7 transition-transform hover:-translate-y-1"
              >
                <span className="text-sm font-bold text-purple-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 leading-7 text-purple-100/80">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-7 text-3xl font-bold">
            Key Findings & Analysis
          </h2>
          <div className="space-y-3">
            {study.findings.map((finding, index) => (
              <div
                key={finding}
                className="flex gap-5 rounded-xl border border-purple-900/40 bg-[#171027] p-6"
              >
                <span className="font-bold text-purple-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-purple-100/80">
                  {finding}
                </p>
              </div>
            ))}
          </div>
        </section>

        {study.dashboard && (
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold">
              Interactive Power BI Dashboard
            </h2>
            <div className="overflow-hidden rounded-2xl border border-purple-900/50 bg-[#171027]">
              <iframe
                title={`${study.title} Power BI Dashboard`}
                src={study.dashboard}
                className="block h-[450px] w-full md:h-[650px]"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-purple-200/70">
              If the report does not load here, use the Open Dashboard button above.
            </p>
          </section>
        )}

        <section className="mb-16 rounded-2xl border border-purple-900/50 bg-[#171027] p-8">
          <h2 className="mb-5 text-2xl font-bold">
            Limitations & Interpretation
          </h2>
          <p className="leading-8 text-purple-100/75">
            {study.limitations}
          </p>
        </section>

        <footer className="border-t border-purple-900/50 py-8">
          <Link
            href="/#projects"
            className="font-semibold text-purple-400 hover:text-purple-200"
          >
            ← Back to All Projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
