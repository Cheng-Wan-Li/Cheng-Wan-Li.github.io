import type { Metadata } from "next";
import { PageIntro } from "../components";
import { researchAreas } from "../site-data";

export const metadata: Metadata = { title: "Research | Wanli Cheng" };

export default function ResearchPage() {
  return (
    <main className="shell page-main">
      <PageIntro eyebrow="Research" title="Research directions">
        <p>
          My work is organized around a shared question: how do geometry,
          information, and computation constrain what complex systems can do?
        </p>
      </PageIntro>
      <div className="research-list">
        {researchAreas.map((area) => (
          <article className="research-item" key={area.index}>
            <div className="research-number">{area.index}</div>
            <div>
              <h2>{area.title}</h2>
              <p>{area.body}</p>
              <ul className="tag-list" aria-label={`Topics in ${area.title}`}>
                {area.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

