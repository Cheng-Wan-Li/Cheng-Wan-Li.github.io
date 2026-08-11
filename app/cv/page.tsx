import type { Metadata } from "next";
import { PageIntro } from "../components";

export const metadata: Metadata = { title: "CV | Wanli Cheng" };

export default function CvPage() {
  return (
    <main className="shell page-main cv-page">
      <PageIntro eyebrow="Curriculum vitae" title="Academic CV">
        <p>A brief, web-readable academic profile.</p>
      </PageIntro>
      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-row">
          <div>
            <h3>Boston University</h3>
            <p>PhD Student, Computing & Data Sciences</p>
          </div>
          <span>Current</span>
        </div>
      </section>
      <section className="cv-section">
        <h2>Research areas</h2>
        <p>
          Quantum computing · Machine learning · AI for Science · Quantum error
          correction · Holographic codes · Hyperbolic geometry · Fracton models
        </p>
      </section>
      <section className="cv-section cv-download">
        <div>
          <h2>PDF curriculum vitae</h2>
          <p>The downloadable PDF will be linked here in the next content update.</p>
        </div>
        <span aria-label="PDF pending">PDF pending</span>
      </section>
    </main>
  );
}

