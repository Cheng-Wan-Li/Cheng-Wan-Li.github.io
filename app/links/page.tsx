import type { Metadata } from "next";
import { PageIntro } from "../components";

export const metadata: Metadata = { title: "Links | Wanli Cheng" };

export default function LinksPage() {
  return (
    <main className="shell page-main">
      <PageIntro eyebrow="Links" title="Academic links">
        <p>Institutional and research profiles, kept intentionally concise.</p>
      </PageIntro>
      <div className="link-list">
        <a href="https://www.bu.edu/cds-faculty/" target="_blank" rel="noreferrer">
          <span><b>Boston University</b><small>Computing & Data Sciences</small></span>
          <span aria-hidden="true">↗</span>
        </a>
        <div className="link-placeholder">
          <span><b>Academic profiles</b><small>Verified profile links will be added here.</small></span>
          <span>Forthcoming</span>
        </div>
        <div className="link-placeholder">
          <span><b>Contact</b><small>Verified email details will be added here.</small></span>
          <span>Forthcoming</span>
        </div>
      </div>
    </main>
  );
}

