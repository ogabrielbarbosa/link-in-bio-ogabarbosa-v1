import { notFound } from "next/navigation";
import "./variation-b.css";
import SlotImage from "@/components/SlotImage";
import { ArrowUpRight, SOCIAL_ICON } from "@/components/Icons";
import { profile, socials, course, links } from "@/lib/data";

export default function VariationB() {
  // Página mantida apenas no repositório como referência de design.
  // Não é acessível publicamente: qualquer acesso a /b retorna 404.
  notFound();

  return (
    <div className="page-b">
      <div className="shell">
        <main className="gk">
          <div className="gk-cols">
            <aside className="gk-aside">
              <div className="gk-head">
                <SlotImage className="gk-avatar" src={profile.avatar} alt={profile.name} placeholder="foto" />
                <div>
                  <h1 className="gk-name">{profile.name}</h1>
                  <div className="gk-handle">{profile.handle}</div>
                </div>
              </div>
              <p className="gk-bio">Freelancer &amp; mentor. Construo carreiras que vivem de freela.</p>

              <nav className="gk-soc">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICON[s.key];
                  return (
                    <a key={s.key} className="gk-soc-i" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      {Icon ? <Icon size={18} /> : null}
                    </a>
                  );
                })}
              </nav>
            </aside>

            <div className="gk-body">
              <a className="gk-feat" href={course.href}>
                <SlotImage src={course.cover} alt={course.title} placeholder="capa do curso" />
                <div className="gk-feat-scrim" />
                {course.badge ? (
                  <div className="gk-feat-tag">
                    <span className="gk-dot" />
                    {course.badge}
                  </div>
                ) : null}
                <div className="gk-feat-foot">
                  <div>
                    <div className="gk-feat-eye">CURSO COMPLETO</div>
                    <div className="gk-feat-title">{course.title}</div>
                  </div>
                  <span className="gk-feat-go">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </a>

              <nav className="gk-links">
                {links.map((link) => {
                  const Tag = link.soon ? "div" : "a";
                  return (
                    <Tag
                      key={link.l}
                      className={`gk-link${link.soon ? " is-soon" : ""}`}
                      href={link.soon ? undefined : link.href}
                      aria-disabled={link.soon ? "true" : undefined}
                    >
                      <span className="gk-link-txt">
                        <span className="gk-link-l">{link.l}</span>
                        <span className="gk-link-s">{link.s}</span>
                      </span>
                      {link.soon ? (
                        <span className="gk-link-soon">em breve</span>
                      ) : (
                        <span className="gk-link-arrow">
                          <ArrowUpRight size={15} />
                        </span>
                      )}
                    </Tag>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="gk-foot">{profile.name} · 2026</div>
        </main>
      </div>
    </div>
  );
}
