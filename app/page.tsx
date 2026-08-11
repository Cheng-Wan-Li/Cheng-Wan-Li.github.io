import type { Metadata } from "next";
import { ArrowLink, GeometryMark } from "./components";
import { researchAreas, site } from "./site-data";

export const metadata: Metadata = {
  title: `${site.name} | Academic Home`,
  description: site.description,
};

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Quantum · Learning · Science</p>
          <h1>{site.name}<span>{site.chineseName}</span></h1>
          <p className="hero-role">{site.role}<br />{site.institution}</p>
          <p className="hero-bio">
            I work at the intersection of quantum computing, machine learning,
            and AI for Science. My current interests include quantum error
            correction, hyperbolic and fracton-inspired models, and the
            foundations of quantum computational advantage.
          </p>
          <div className="hero-actions">
            <ArrowLink href="/research">View research</ArrowLink>
            <ArrowLink href="/cv">Academic CV</ArrowLink>
          </div>
        </div>
        <div className="hero-visual">
          <GeometryMark />
          <p>Structure<br />Information<br />Computation</p>
        </div>
      </section>

      <section className="focus-section shell" aria-labelledby="focus-heading">
        <div className="section-heading">
          <p className="eyebrow">Research focus</p>
          <h2 id="focus-heading">Questions shaped by structure.</h2>
        </div>
        <div className="focus-grid">
          {researchAreas.map((area) => (
            <article className="focus-card" key={area.index}>
              <span className="card-index">{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.short}</p>
            </article>
          ))}
        </div>
        <div className="section-action">
          <ArrowLink href="/research">Research overview</ArrowLink>
        </div>
      </section>

      <section className="statement shell">
        <p className="eyebrow">Current position</p>
        <div>
          <h2>PhD student at Boston University</h2>
          <p>
            Computing & Data Sciences, with research interests spanning quantum
            information, machine learning, and scientific discovery.
          </p>
        </div>
      </section>
    </main>
  );
}

