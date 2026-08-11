import type { Metadata } from "next";
import { PageIntro } from "../components";

export const metadata: Metadata = { title: "Publications | Wanli Cheng" };

export default function PublicationsPage() {
  return (
    <main className="shell page-main">
      <PageIntro eyebrow="Publications" title="Publications & preprints">
        <p>
          A concise record of published and ongoing research. Full citation
          details will be added here as they become available.
        </p>
      </PageIntro>
      <section className="empty-record" aria-labelledby="publication-status">
        <p className="eyebrow">Selected work</p>
        <h2 id="publication-status">Publication list forthcoming.</h2>
        <p>
          This first version intentionally includes only research information
          that has been verified. It does not infer titles, venues, authorship,
          or publication status.
        </p>
      </section>
    </main>
  );
}

