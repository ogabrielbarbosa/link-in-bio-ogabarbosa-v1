import "./variation-c.css";
import SlotImage from "@/components/SlotImage";
import StatusIndicator from "@/components/StatusIndicator";
import { ArrowUpRight, SOCIAL_ICON } from "@/components/Icons";
import { profile, socials, course, links } from "@/lib/data";

export default function VariationC() {
  return (
    <div className="page-c">
      <div className="shell">
        <main className="mn">
          <div className="mn-top">
            <span>/ link-in-bio</span>
            <StatusIndicator />
          </div>

          <div className="mn-cols">
            <aside className="mn-aside">
              <div className="mn-head">
                <SlotImage className="mn-avatar" src={profile.avatar} alt={profile.name} placeholder="foto" />
                <div>
                  <h1 className="mn-name">
                    {profile.name}
                    <span className="mn-caret">_</span>
                  </h1>
                  <div className="mn-handle">{profile.handle}</div>
                </div>
              </div>
              <p className="mn-bio">// ajudo devs iniciantes.</p>

              <nav className="mn-soc">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICON[s.key];
                  return (
                    <a key={s.key} className="mn-soc-i" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      {Icon ? <Icon size={16} /> : null}
                      <span>{s.label}</span>
                      <span className="mn-soc-arrow">
                        <ArrowUpRight size={13} />
                      </span>
                    </a>
                  );
                })}
              </nav>
            </aside>

            <div className="mn-body">
              <a className="mn-feat" href={course.href}>
                <div className="mn-feat-img">
                  <SlotImage src={course.cover} alt={course.title} placeholder="capa do curso" />
                  {course.badge ? (
                    <span className="mn-feat-status">
                      <span className="mn-dot" />
                      {course.badge}
                    </span>
                  ) : null}
                </div>
                <div className="mn-feat-body">
                  <div className="mn-feat-eye">{course.eyebrow}</div>
                  <div className="mn-feat-title">{course.title}</div>
                  <div className="mn-feat-meta">{course.meta}</div>
                  <span className="mn-feat-cta">
                    acessar <ArrowUpRight size={13} />
                  </span>
                </div>
              </a>

              <div className="mn-links-h">// links</div>
              <nav className="mn-links">
                {links.map((link, i) => {
                  const Tag = link.soon ? "div" : "a";
                  return (
                    <Tag
                      key={link.l}
                      className={`mn-link${link.soon ? " is-soon" : ""}`}
                      href={link.soon ? undefined : link.href}
                      aria-disabled={link.soon ? "true" : undefined}
                    >
                      <span className="mn-link-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mn-link-txt">
                        <span className="mn-link-l">{link.l}</span>
                        <span className="mn-link-s">{link.s}</span>
                      </span>
                      {link.soon ? (
                        <span className="mn-link-soon">em breve</span>
                      ) : (
                        <span className="mn-link-arrow">
                          <ArrowUpRight size={14} />
                        </span>
                      )}
                    </Tag>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="mn-foot">EOF · {profile.name}</div>
        </main>
      </div>
    </div>
  );
}
