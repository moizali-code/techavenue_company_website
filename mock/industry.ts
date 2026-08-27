import type {
  IndustryChallengeItems,
  IndustryOverview,
} from "@/types/features/industry";

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
