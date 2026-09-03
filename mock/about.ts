import type { AboutPageContent } from "@/types/features/about";

export const aboutPageContent: AboutPageContent = {
  header: {
    eyebrow: "Company",
    title: "ABOUT US",
    description:
      "We combine innovation, engineering excellence, and global partnerships to deliver intelligent, secure, and future-ready technology solutions across industries.",
    image: "/about/about_header.png",
  },
  companyValues: {
    heading: "The Values Behind Our Innovation, Driving Impact Through Purpose",
    image: "/about/about_values.png",
    values: [
      {
        id: 1,
        uuid: "c48a1f37-5b90-4e62-8d15-7a3c60e29b84",
        title: "Why Choose Us",
        description:
          "Organizations choose Tech Avenue for our expertise in AI, cybersecurity, digital transformation, and intelligent technology solutions. Backed by strategic partnerships and decades of industry knowledge, we deliver secure, scalable, and future-ready solutions that empower enterprises and governments to achieve lasting success.",
      },
      {
        id: 2,
        uuid: "0e5d7c62-83b1-4a09-9f47-25b6e1c8073a",
        title: "Our Mission",
        description:
          "Our mission is to empower organizations with integrated technology solutions that accelerate innovation, strengthen security, and enable sustainable digital transformation. Through engineering excellence, strategic partnerships, and industry expertise, we create measurable value.",
      },
      {
        id: 3,
        uuid: "7b92e0a4-1c68-4d35-b70f-98d4a3562ce1",
        title: "Our Vision",
        description:
          "Our vision is to become a trusted global technology leader recognized for innovation, engineering excellence, and delivering intelligent solutions across enterprise and government sectors. We strive to help organizations confidently embrace emerging technologies and build a smarter, more connected future.",
      },
    ],
  },
  partners: {
    heading: "Trusted Partners",
    partners: ["Microsoft", "Cisco", "NVIDIA", "Palo Alto", "AWS", "Oracle"],
  },
  team: {
    heading: "Meet Our Team",
    description:
      "Behind every successful transformation is a team of visionary leaders committed to innovation, engineering excellence, and delivering intelligent technology solutions that create lasting impact for enterprises and governments worldwide.",
    members: [
      {
        id: 1,
        uuid: "8d17c3b5-4f02-4a96-b7e1-52c908d436af",
        name: "Obaid Ul Haq",
        role: "Chief Executive Officer (CEO)",
        image: "/about/obaid.png",
        description:
          "Over 20 years leading enterprise technology transformation, Scaled Tech Avenue into a regional AI and cybersecurity partner, Built strategic alliances with global technology vendors, Advises government and enterprise leaders on digital strategy",
      },
      {
        id: 2,
        uuid: "41e6b0d9-73a5-4c18-9f20-6b85e2c7134d",
        name: "Khuram Rahat",
        role: "Chief Strategy Officer (CSO)",
        image: "/about/khuram_rahat.png",
        description:
          "Shaped long-term growth strategy across enterprise and government sectors, Led expansion into three new regional markets, Architected the company's partner and channel strategy, Frequent speaker on emerging technology adoption",
      },
      {
        id: 3,
        uuid: "b70f2c84-1d59-4e63-a805-93e17b4c0d26",
        name: "Lalarukh Saud",
        role: "Director & Chief Financial Officer (CFO)",
        image: "/about/lalarukh.png",
        description:
          "Directs financial planning and governance across all business units, Delivered sustained double-digit revenue growth, Established enterprise-grade compliance and risk frameworks, Champions transparent and sustainable business practices",
      },
      {
        id: 4,
        uuid: "2a95d7e0-6c31-48b7-9d04-7f83a1c5e692",
        name: "Ali Abbas Hussain",
        role: "Head of Product",
        image: "/about/ali_abbas.png",
        description:
          "Leads product vision across AI and cloud platform offerings, Launched multiple enterprise products from concept to scale, Built and mentors a cross-functional product and design team, Drives customer-centric roadmap and delivery practices",
      },
      {
        id: 5,
        uuid: "2a95d7e0-6c31-48b7-9d04-7f83a1c5e908",
        name: "Bilal Shams",
        role: "Financial Controller",
        image: "/about/bilal_shams.png",
        description:
          "Oversees accounting operations and monthly financial reporting, Strengthened internal controls and audit readiness across business units, Manages cash flow and vendor payment cycles, Partners with delivery teams on project costing and margin analysis",
      },
    ],
  },
  cta: {
    title: "Let's Build the Future Together",
    description:
      "Ready to transform your organizational challenges into strategic technological advantages?",
  },
};
