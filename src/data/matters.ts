export interface Matter {
  id: string;
  caseName: string;
  subject: string;
  judgmentUrl: string;
  /** Highlighted on home page Selected Matters Preview */
  featured?: boolean;
}

export const matters: Matter[] = [
  {
    id: "fahad-khan-v-rizvi",
    caseName: "Fahad Khan & others v. Syed Asa Hussain Rizvi & others",
    subject: "Criminal defamation",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/Mjg1ODQz",
  },
  {
    id: "lucky-motor-v-federation",
    caseName: "Lucky Motor Corporation v. Federation of Pakistan & others",
    subject: "Customs duties",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MjUwMzU4",
    featured: true,
  },
  {
    id: "hassan-sultan-v-union-council",
    caseName:
      "Muhammad Hassan Sultan v. Chairman, Union Council & another",
    subject: "Divorce",
    judgmentUrl:
      "https://www.supremecourt.gov.pk/downloads_judgements/c.p._5364_2024.pdf",
  },
  {
    id: "masjid-e-saheem-v-dha",
    caseName: "Masjid-e-Saheem & others v. DHA & others",
    subject: "Right to use of property",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MjQ5MjA4",
  },
  {
    id: "hbl-v-pakistan",
    caseName: "Habib Bank Limited & others v. Pakistan & others",
    subject: "Income tax",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MjE3NTAw",
    featured: true,
  },
  {
    id: "ali-baakzaa-v-federation",
    caseName: "Ali Baakzaa v. Federation of Pakistan & others",
    subject: "Import restrictions",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MjE2NDM3",
  },
  {
    id: "federation-v-premium-textiles",
    caseName: "Federation of Pakistan v. Premium Textiles & others",
    subject: "Gas tariff",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MjQxNjgx",
  },
  {
    id: "sheraz-hakeem-v-aku",
    caseName: "Sheraz Hakeem v. Aga Khan University & others",
    subject: "Right to education",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MjIwNzgz",
  },
  {
    id: "paramount-v-ministry",
    caseName:
      "Paramount Communications (Pvt.) Ltd. v. Ministry of Communications & others",
    subject: "Arbitration",
    judgmentUrl:
      "http://caselaw.shc.gov.pk/caselaw/view-file/MTYzNTU0",
    featured: true,
  },
  {
    id: "thal-v-federation",
    caseName: "Thal Limited & another v. Federation of Pakistan & others",
    subject: "Customs duties",
    judgmentUrl: "https://caselaw.shc.gov.pk/caselaw/view-file/MTExMDU2",
  },
];

/** Returns the three featured matters for the home page preview */
export const featuredMatters = matters.filter((m) => m.featured);
