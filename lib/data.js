// Dados compartilhados entre as duas variações (C e B).
// Troque os href "#" e as URLs das redes pelos links reais.

export const profile = {
  name: "ogabarbosa",
  handle: "@ogabarbosa",
  avatar: "/avatar.png", // coloque o arquivo em /public/avatar.jpg
};

// Janela "hustle mode": bolinha verde / online entre start e end (hora local 0-23).
// Fora disso, mostra o estado descontraído de offline.
export const status = {
  startHour: 7, // 7h da manhã
  endHour: 21, // 21h (9pm)
  onlineLabel: "online",
  offlineLabel: "off · modo soneca",
  tooltip: "hustle mode: 7am – 9pm",
};

export const socials = [
  { key: "instagram", label: "instagram", href: "https://instagram.com/ogabarbosa" },
  { key: "github", label: "github", href: "https://github.com/ogabrielbarbosa" },
  { key: "whatsapp", label: "whatsapp", href: "http://wa.me/5512996859020" },
];

export const course = {
  eyebrow: "[ curso ]",
  title: "Freela de Elite",
  meta: "Aprenda a fazer + R$ 2.000/mês como renda extra sendo freelancer de maneira descomplicada com IA.",
  cover: "/cover.png", // coloque o arquivo em /public/cover.jpg
  href: "http://ogabarbosa.com/",
  badge: "lista de espera", // selo do card; deixe "" para esconder
};

// Para mostrar o botão sem nenhuma ação (não clicável), adicione `soon: true`.
// Ele aparece com o selo "em breve" e ignora o href.
export const links = [
  { l: "Faça parte da LíderHub 🚀", s: "Trabalhe comigo", href: "https://link.liderhub.ai/vagas" },
  { l: "Mentoria individual", s: "Vagas limitadas", href: "#", soon: true },
  { l: "Newsletter", s: "Bastidores toda terça", href: "#", soon: true },
  { l: "Portfólio", s: "Projetos selecionados", href: "#", soon: true },
];
