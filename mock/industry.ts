import type {
  IndustryChallengeItems,
  IndustryOverview,
  IndustrySuccessStories,
  IndustryTab,
} from "@/types/features/industry";
import type { ProvidedSolutions } from "@/types/features/provided-solutions";

export const industryTabs: IndustryTab[] = [
  {
    id: 1,
    uuid: "3f1a6c2e-9b47-4d18-8a52-71c0d5e4b901",
    title: "Government & Public Sector",
    description: "Citizen services built for scale, security, and compliance.",
  },
  {
    id: 2,
    uuid: "8c74b1d9-2e35-4af6-9d10-6b83f7a2c542",
    title: "Information Technology",
    description: "Platform and product engineering for technology firms.",
  },
  {
    id: 3,
    uuid: "5d92e0a7-6c81-4b23-97ef-2a14d8b60c73",
    title: "Telecommunications",
    description: "Operator-grade tooling for networks under constant load.",
  },
  {
    id: 4,
    uuid: "b06f3a48-71d2-4e95-8c37-9f5e2b1a0d64",
    title: "Banking & Financial Services",
    description: "Secure systems for regulated financial institutions.",
  },
  {
    id: 5,
    uuid: "e4718b53-0d6a-49c7-b218-3c9f6a5d7e20",
    title: "Healthcare",
    description: "Patient-centred technology that protects sensitive data.",
  },
  {
    id: 6,
    uuid: "27ac95f1-4b60-4d83-a5e9-8d012f7b6c34",
    title: "Education & Skill Development",
    description: "Learning platforms that widen access and track outcomes.",
  },
  {
    id: 7,
    uuid: "9b53d7c0-8e14-42f6-b073-5a6c1e8f4d29",
    title: "Construction & Smart Infrastructure",
    description: "Connected sites and buildings managed from one place.",
  },
  {
    id: 8,
    uuid: "1e60f4b8-53a9-4c07-8d62-7b94e0a3c518",
    title: "Agriculture",
    description: "Sensor-driven insight for higher yield and lower waste.",
  },
  {
    id: 9,
    uuid: "6a2d81e4-b703-4f59-9c48-0e35d7b1a962",
    title: "Energy & Utilities",
    description: "Grid, metering, and distribution visibility in real time.",
  },
  {
    id: 10,
    uuid: "c85b0937-1a4e-4620-b7d3-2f16c9e08a45",
    title: "Oil & Gas",
    description: "Upstream and downstream operations with safer oversight.",
  },
  {
    id: 11,
    uuid: "4d19a7f2-6c58-4b31-90ae-8e27b5d3f016",
    title: "Manufacturing",
    description: "Connected production floors with real-time visibility.",
  },
];

export const industryOverview: IndustryOverview = {
  title: "Securing Critical Digital Infrastructure",
  description:
    "Today's threat landscape demands proactive, intelligent, and resilient cybersecurity strategies. Tech Avenue delivers comprehensive network security solutions that safeguard critical infrastructure, protect sensitive information, and enable organizations to operate confidently while meeting evolving security and compliance requirements.",
  image: "/about_image.png",
  imageAlt:
    "Security analysts monitoring network activity in an operations center",
  highlights: [
    {
      title: "Enterprise Protection",
      description: "Advanced security for enterprise networks.",
    },
    {
      title: "Threat Intelligence",
      description: "Real-time visibility into evolving cyber threats.",
    },
  ],
};

export const industryChallenges: IndustryChallengeItems = {
  title: "Critical Industry Challenges",
  description:
    "Protecting organizations against sophisticated cyber threats while ensuring business continuity, regulatory compliance, and secure digital transformation.",
  items: [
    {
      icon: "/icons/evolving-cyber-threats.svg",
      title: "Evolving Cyber Threats",
      description:
        "Aligning business strategies with rapidly evolving digital technologies and innovation.",
    },
    {
      icon: "/icons/regulatory-compliance.svg",
      title: "Regulatory Compliance",
      description:
        "Improving operational efficiency through streamlined workflows and intelligent business processes.",
    },
    {
      icon: "/icons/legacy-infrastructure.svg",
      title: "Legacy Infrastructure",
      description:
        "Developing technology roadmaps that support long-term organizational objectives and growth.",
    },
    {
      icon: "/icons/customer-expectations.svg",
      title: "Customer Expectations",
      description:
        "Strengthening governance frameworks while effectively managing enterprise risks and compliance.",
    },
    {
      icon: "/icons/data-management.svg",
      title: "Data Management",
      description:
        "Supporting organizations through change with strategic planning and expert advisory services.",
    },
  ],
};

export const industryProvidedSolutions: ProvidedSolutions = {
  title: "Our Provided Solution",
  description:
    "Our integrated cybersecurity platform combines intelligent threat detection, proactive monitoring, and advanced security controls to deliver comprehensive protection across modern enterprise environments.",
  items: [
    {
      icon: "/icons/real-time-monitoring.svg",
      title: "Real-Time Monitoring",
      description:
        "Continuous observation of every packet and endpoint across the globe.",
    },
    {
      icon: "/icons/centralized-intelligence.svg",
      title: "Centralized Intelligence",
      description:
        "Aggregating threat feeds from global sensors into a single source of truth.",
    },
    {
      icon: "/icons/ai-based-analysis.svg",
      title: "AI-Based Analysis",
      description:
        "Neural networks identifying patterns invisible to traditional heuristic systems.",
    },
    {
      icon: "/icons/automated-response.svg",
      title: "Automated Response",
      description:
        "Instant containment protocols triggered by verified threat detection.",
    },
  ],
};

export const industrySuccessStories: IndustrySuccessStories = {
  title: "Success Stories in this Industry",
  description:
    "Proven outcomes delivered across global financial, healthcare, and technology infrastructures.",
  actionLabel: "View all Succes Stories",
  actionHref: "/case-studies",
  items: [
    {
      image: "/about_image.png",
      imageAlt: "Security analyst monitoring a wall of threat dashboards",
      tags: ["Cybersecurity", "Banking"],
      title: "Enterprise Threat Detection Platform",
      description:
        "A multi-layered AI-driven security framework implemented for a global Tier-1 bank to mitigate zero-day vulnerabilities.",
      href: "/case-studies/enterprise-threat-detection-platform",
    },
    {
      image: "/about_image.png",
      imageAlt: "Fibre optic cabling powering a city-wide network",
      tags: ["Telecom", "Smart Cities"],
      title: "5G Municipal Infrastructure",
      description:
        "Deploying next-gen connectivity across 500+ square kilometers for seamless urban IoT integration.",
      href: "/case-studies/5g-municipal-infrastructure",
    },
    {
      image: "/about_image.png",
      imageAlt: "Tablet displaying predictive analytics dashboards",
      tags: ["AI & Analytics", "Government"],
      title: "Predictive Governance Model",
      description:
        "Leveraging deep learning to optimize public resource allocation and emergency response times by 30%.",
      href: "/case-studies/predictive-governance-model",
    },
    {
      image: "/about_image.png",
      imageAlt: "Engineers reviewing cloud migration architecture",
      tags: ["Cloud", "Healthcare"],
      title: "Regional Health Cloud Migration",
      description:
        "Migrating patient-critical workloads to a compliant hybrid cloud with zero downtime across 12 hospitals.",
      href: "/case-studies/regional-health-cloud-migration",
    },
    {
      image: "/about_image.png",
      imageAlt: "Automated production line monitored by control software",
      tags: ["Automation", "Manufacturing"],
      title: "Smart Factory Control Suite",
      description:
        "Unifying plant floor telemetry into a single control suite that cut unplanned downtime by 42%.",
      href: "/case-studies/smart-factory-control-suite",
    },
  ],
};
