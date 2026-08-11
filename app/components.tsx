import Link from "next/link";
import { navigation, site } from "./site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Wanli Cheng, home">
          <span>WC</span>
          <b>{site.name}</b>
        </Link>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {site.name}</p>
      <p>Research in quantum computing, machine learning, and AI for Science.</p>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="lede">{children}</div>
    </div>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="arrow-link" href={href}>
      {children}<span aria-hidden="true">↗</span>
    </Link>
  );
}

export function GeometryMark() {
  return (
    <div className="geometry-mark" aria-hidden="true">
      <span className="orbit orbit-one" />
      <span className="orbit orbit-two" />
      <span className="orbit orbit-three" />
      <span className="axis axis-one" />
      <span className="axis axis-two" />
      <span className="center-dot" />
    </div>
  );
}

