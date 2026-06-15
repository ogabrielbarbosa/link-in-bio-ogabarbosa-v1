import Link from "next/link";

export default function VariationSwitch({ active }) {
  return (
    <nav className="variation-switch" aria-label="Variação do design">
      <Link href="/" aria-current={active === "c" ? "true" : undefined}>
        C · Técnica
      </Link>
      <Link href="/b" aria-current={active === "b" ? "true" : undefined}>
        B · Geométrica
      </Link>
    </nav>
  );
}
