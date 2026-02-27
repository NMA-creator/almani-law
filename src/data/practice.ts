export interface PracticeArea {
  slug: string;
  anchor: string;
  title: string;
  shortTitle: string;
  icon: string; // Lucide icon name
  descriptor: string; // One-line for grid tile
  body: string[]; // Full paragraphs for /practice page
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "tax-litigation",
    anchor: "tax-litigation",
    title: "Tax Litigation",
    shortTitle: "Tax Litigation",
    icon: "Scale",
    descriptor: "Landmark cases before the superior courts of Pakistan",
    body: [
      "Tax litigation is at the heart of our practice. We represent Pakistan's largest domestic conglomerates and leading multinational corporations in precedent-setting cases before the superior courts, including the Federal Constitutional Court, Supreme Court and High Courts of Pakistan. Our work spans the full range of fiscal disputes — income tax, super tax, sales tax, customs duties, tax credits, exemptions, and audit selection matters.",
      "We approach every tax case with close attention to legislative history: our founding partner was directly involved in drafting the Sales Tax on Services legislation enacted in 2011 and participated in the National Finance Commission Award negotiations of 2008, giving the firm rare insight into the intent behind Pakistan's fiscal framework.",
      "We have successfully argued landmark cases that have established binding precedents on questions of tax policy, assessment methodology, and the limits of regulatory authority — securing outcomes that have saved clients billions of rupees in potential liabilities.",
    ],
  },
  {
    slug: "international-arbitration",
    anchor: "international-arbitration",
    title: "International Commercial Arbitration",
    shortTitle: "International Arbitration",
    icon: "Globe",
    descriptor: "Cross-border disputes under DIAC, ICC, ICSID and LCIA rules",
    body: [
      "We represent clients in domestic and international arbitrations across the full spectrum of commercial disputes. Our international arbitration practice spans proceedings under the rules of the Dubai International Arbitration Centre (DIAC), the International Chamber of Commerce (ICC), the International Centre for Settlement of Investment Disputes (ICSID), and the London Court of International Arbitration (LCIA).",
      "Our lawyers have represented multinational petroleum companies, liquefied natural gas suppliers, and independent power producers — parties for whom the stakes are measured in the hundreds of millions of dollars and whose disputes require advocacy of the highest order.",
      "Ali Almani was nominated by the Government of Pakistan to the ICSID Panel of Arbitrators in February 2024. He is the author of published texts on arbitration law for Kluwer Law International and a contributor to the International Handbook on Commercial Arbitration. He has also been appointed as Amicus Curiae by the superior courts to assist in complex matters of international arbitration law.",
    ],
  },
  {
    slug: "constitutional-law",
    anchor: "constitutional-law",
    title: "Constitutional & Public Law",
    shortTitle: "Constitutional Law",
    icon: "Landmark",
    descriptor:
      "High-profile matters concerning fundamental rights and devolution",
    body: [
      "We litigate constitutional matters of genuine national consequence. Our work in this area has addressed some of the most significant public law questions of recent years — including cases concerning the 18th Amendment to the Constitution, the devolution of legislative and executive powers between the federation and the provinces, the distribution of natural resources, the determination of gas tariffs, and the constitutional framework governing elections.",
      "We have also appeared in landmark cases concerning fundamental rights: freedom of expression, protection of property, the right to education, and the right to divorce. In several complex matters, our founding partner has been appointed Amicus Curiae by the superior courts.",
    ],
  },
  {
    slug: "commercial-litigation",
    anchor: "commercial-litigation",
    title: "Commercial Litigation",
    shortTitle: "Commercial Litigation",
    icon: "Briefcase",
    descriptor: "Banking, finance, energy and corporate disputes",
    body: [
      "Our commercial litigation practice covers the full range of disputes that arise in Pakistan's corporate and financial sectors. We appear regularly in cases involving banking and finance, insurance, energy and infrastructure, construction, corporate governance, and contract. We have represented clients in major shareholder disputes, sovereign guarantee enforcement proceedings, and credit derivatives litigation.",
      "We understand that commercial disputes are rarely just legal problems — they affect businesses, relationships, and reputations. We bring the same rigour and preparation to every matter, whether the client is a multinational institution or a domestic enterprise navigating a dispute for the first time.",
    ],
  },
  {
    slug: "regulatory-disputes",
    anchor: "regulatory-disputes",
    title: "Regulatory Disputes",
    shortTitle: "Regulatory Disputes",
    icon: "Building2",
    descriptor:
      "Proceedings before the SECP, NEPRA, Competition Commission",
    body: [
      "Pakistan's regulatory environment has grown significantly in complexity over recent decades, and disputes with regulatory bodies now represent some of the most consequential litigation facing our clients. We appear before and advise clients in relation to the Securities & Exchange Commission of Pakistan (SECP), the National Electric Power Regulatory Authority (NEPRA), the Oil and Gas Regulatory Authority (OGRA), the Competition Commission of Pakistan, and the Election Commission of Pakistan, among others.",
      "Our founding partner has testified before the Senate on financial sector legislation and advised on the restructuring of clearing transactions for the Pakistan Stock Exchange.",
    ],
  },
  {
    slug: "civil-litigation",
    anchor: "civil-litigation",
    title: "Civil Litigation",
    shortTitle: "Civil Litigation",
    icon: "FileText",
    descriptor: "Property, family, defamation and service matters",
    body: [
      "We handle a broad range of civil matters before the superior courts, including property disputes, family law matters, defamation proceedings, and service cases. We bring the same standard of preparation and advocacy to civil matters that we apply across all our practice areas — because for our clients, these cases matter just as much.",
    ],
  },
  {
    slug: "corporate-advisory",
    anchor: "corporate-advisory",
    title: "Corporate Advisory",
    shortTitle: "Corporate Advisory",
    icon: "TrendingUp",
    descriptor:
      "Regulatory compliance, governance and financial sector matters",
    body: [
      "We advise on regulatory compliance, corporate governance, financial sector legislation, and commercial transactions. Our founding partner has advised on the Financial Institutions (Recovery of Finances) Ordinance 2001, testified before the Senate, and advised on the restructuring of clearing transactions for the Pakistan Stock Exchange.",
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
