# link-in-bio-v1-gabarbosa

Página **link-in-bio** do `ogabarbosa` (curso **Freela de Elite**), em **Next.js** (App Router + React 19).
Mantém as **duas variações** desenhadas no Claude Design:

| Rota  | Variação        | Tipografia      | Destaque do curso                    |
|-------|-----------------|-----------------|--------------------------------------|
| `/`   | **C — Técnica** *(principal)* | JetBrains Mono | módulo "ticket": imagem + metadados + CTA preto→navy |
| `/b`  | **B — Geométrica** | Space Grotesk  | capa full-bleed com overlay e botão que gira no hover |

Paleta compartilhada: preto e branco absoluto, branco predominante, azul-marinho `#1b2a52`
apenas em micro-acentos. Um alternador discreto no rodapé troca entre as duas.

## Rodar

```bash
cd link-in-bio-v1-gabarbosa
npm install
npm run dev          # http://localhost:3000  (/ = C, /b = B)
```

Build de produção: `npm run build && npm start`.

## Estrutura

```
app/
├── layout.jsx          # fontes (next/font) + metadata
├── globals.css         # reset, variáveis, .shell, slot de imagem, alternador
├── variation-c.css     # estilos da variação C
├── page.jsx            # rota / → variação C (principal)
└── b/
    ├── variation-b.css # estilos da variação B
    └── page.jsx        # rota /b → variação B
components/
├── Icons.jsx           # ícones SVG (instagram, github, whatsapp, seta)
├── SlotImage.jsx       # recriação do <image-slot> com placeholder
└── VariationSwitch.jsx # alternador C / B
lib/
└── data.js             # perfil, redes, curso e links (compartilhados)
public/                 # avatar.jpg + cover.jpg vão aqui
```

## O que falta plugar

Tudo está centralizado em [`lib/data.js`](lib/data.js):

- **Redes** — `instagram.com/ogabarbosa`, `github.com/ogabarbosa`, `wa.me/<numero>` (ajustar).
- **Links** e o card do curso estão com `href: "#"` — troque pelas URLs reais.
- **Imagens** — adicione `public/avatar.jpg` e `public/cover.jpg` (até lá, placeholder hachurado).

Implementado a partir do bundle de handoff do Claude Design
(`Freela de Elite - C (Técnica).html` e `Freela de Elite - B (Geométrica).html`).
# link-in-bio-ogabarbosa-v1
