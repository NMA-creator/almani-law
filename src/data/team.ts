export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  credentialsLine: string;
  admissions: string[];
  education: string[];
  affiliations?: string[];
  languages?: string[];
  bio: string[];
  /** Only present on Ali's profile */
  extendedSidebar?: {
    admissions: string[];
    education: string[];
    affiliations: string[];
    languages: string[];
  };
}

export const team: TeamMember[] = [
  {
    slug: "ali-almani",
    name: "Ali Almani",
    title: "Managing Partner",
    credentialsLine:
      "B.A. (Yale) · J.D. (Harvard) · LL.M. (Cantab) · Advocate, Federal Constitutional Court & Supreme Court",
    admissions: [
      "Advocate of the Federal Constitutional Court",
      "Advocate of the Supreme Court of Pakistan",
    ],
    education: [
      "B.A. (Economics), Yale University, 2004",
      "LL.M., University of Cambridge, 2007",
      "J.D., Harvard Law School, 2008",
    ],
    affiliations: [
      "ICSID Panel of Arbitrators, nominated by Pakistan (2024–2030)",
      "Teaching Center Advisory Committee, SZABIST University",
    ],
    languages: ["English", "Urdu", "Sindhi"],
    bio: [
      "Ali Almani is the Managing Partner of Ali Almani & Partners and one of Pakistan's leading counsel in tax litigation, constitutional law, and international commercial arbitration. He is an Advocate of the Federal Constitutional Court and the Supreme Court of Pakistan.",
      "Ali read economics at Yale University, graduating in 2004. He then read law at the University of Cambridge, where he completed his LLM in 2007, before earning his Juris Doctor from Harvard Law School in 2008. He joined Fazleghani Advocates in April 2008, becoming a Partner in July 2014 and remaining until December 2025, when he founded Ali Almani & Partners.",
      "Over the course of his career, Ali has built a practice of exceptional breadth and depth. In tax litigation, he has appeared for Pakistan's largest conglomerates and multinational corporations in cases that have set binding precedent before the superior courts. He was directly involved in drafting the Sales Tax on Services legislation enacted in 2011 and participated in the National Finance Commission Award negotiations of 2008.",
      "In international arbitration, Ali has represented multinational petroleum companies, LNG suppliers, and independent power producers in proceedings under DIAC, ICC, ICSID and LCIA rules. In February 2024, he was nominated by the Government of Pakistan to the ICSID Panel of Arbitrators — a position he holds until 2030. He is the author of published texts on arbitration law for Kluwer Law International and a contributor to the International Handbook on Commercial Arbitration.",
      "Ali has argued landmark constitutional cases concerning the 18th Amendment, devolution of federal and provincial powers, the distribution of natural resources, and fundamental rights including freedom of expression, protection of property, and the right to education. He has been appointed Amicus Curiae by the superior courts on multiple occasions to assist in complex matters of constitutional and arbitration law.",
      "He has testified before the Senate of Pakistan on financial sector legislation and advised on the restructuring of clearing transactions for the Pakistan Stock Exchange. He is a member of the Teaching Center Advisory Committee at SZABIST University and speaks English, Urdu, and Sindhi.",
    ],
  },
  {
    slug: "furqan-mushtaq",
    name: "Furqan Mushtaq",
    title: "Senior Associate",
    credentialsLine: "LLB (Hons) Nottingham · Called to the Bar, Lincoln's Inn",
    admissions: ["Called to the Bar of England and Wales, Lincoln's Inn"],
    education: [
      "LLB (Hons), University of Nottingham",
      "BPTC, City, University of London",
    ],
    bio: [
      "Furqan Mushtaq is a Senior Associate at Ali Almani & Partners. He holds an LLB (Hons) from the University of Nottingham and completed the Bar Professional Training Course at City, University of London. He was called to the Bar of England and Wales by The Honourable Society of Lincoln's Inn. Furqan joined Fazleghani Advocates in 2021, where he developed his litigation practice over four years before joining Ali Almani & Partners at its founding.",
    ],
  },
  {
    slug: "akber-sohail",
    name: "Akber Sohail",
    title: "Senior Associate",
    credentialsLine:
      "LLB & LLM (UK) · Advocate of the High Court · 10+ years experience",
    admissions: ["Advocate of the High Court"],
    education: ["LLB (UK)", "LLM (UK)"],
    bio: [
      "Akber Sohail is a Senior Associate at Ali Almani & Partners and an Advocate of the High Court with over a decade of professional legal experience. He has represented a diverse range of clients — including corporate entities, businesses, and private individuals — in complex and high-value disputes. Akber regularly appears before the High Courts and subordinate courts in Karachi, Islamabad, and other jurisdictions. His practice covers commercial litigation, property disputes, customs and tax law, competition law, and civil disputes.",
    ],
  },
  {
    slug: "shahzeb-sahito", // TODO: confirm spelling
    name: "Shahzeb Sahito", // TODO: confirm spelling
    title: "Associate",
    credentialsLine: "LLB, University of London / Brunel",
    admissions: [],
    education: [
      "LLB, Brunel University London",
      "LLB, Institute of Legal Studies",
    ],
    bio: [
      "Shahzeb Sahito is an Associate at Ali Almani & Partners. He holds an LLB from Brunel University London and an LLB from the Institute of Legal Studies. Prior to joining Fazleghani Advocates in 2024, he gained experience at Jawad Qureshi Advocates and Sahito Law Chamber.",
    ],
  },
  {
    slug: "fahad-khan",
    name: "Fahad Khan",
    title: "Senior Associate & Office Manager",
    credentialsLine: "LLB, S.M. Law College · High Court practice since 2006",
    admissions: ["Advocate of the High Court"],
    education: ["LLB, S.M. Law College, Karachi"],
    bio: [
      "Fahad Khan brings nearly two decades of experience in court practice and legal administration to Ali Almani & Partners. He holds an LLB from S.M. Law College, Karachi, and has been practising before the High Court since 2006. Fahad manages the firm's day-to-day operations and oversees all court filing and administrative proceedings.",
    ],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
