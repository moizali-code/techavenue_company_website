import type {
  ServiceDetail,
  ServicesPageContent,
} from "@/types/features/services";

export const servicesPageContent: ServicesPageContent = {
  servicesHeader: {
    title: "Future-Ready Enterprise Services",
    description:
      "Precision-engineered solutions designed to scale your operations, secure your assets, and accelerate your digital evolution through advanced institutional innovation.",
    image: "/about_image.png",
  },
  coreServices: {
    heading: "Our Core Services",
    description:
      "Powering enterprises with intelligent, scalable, and secure digital solutions through institutional reliability and forward-thinking innovation.",
    services: [
      {
        id: 1,
        uuid: "b7e41c92-58af-4d16-9c73-0e5a2d84f6b1",
        image: "/icons/artificial-intelligence.svg",
        title: "Artificial Intelligence",
        description:
          "AI-powered automation, predictive analytics, and intelligent business solutions.",
      },
      {
        id: 2,
        uuid: "4a90d3e7-2c68-4b51-8f04-71d6b95ac238",
        image: "/icons/cybersecurity.svg",
        title: "Cybersecurity",
        description:
          "Enterprise security protecting networks, identities, applications, and critical infrastructure.",
      },
      {
        id: 3,
        uuid: "e2158fb4-6d07-49c3-a5b8-3c94e70d1a65",
        image: "/icons/technology-consulting.svg",
        title: "Technology Consulting",
        description:
          "Strategic consulting accelerating innovation, transformation, and sustainable business growth.",
      },
      {
        id: 4,
        uuid: "9c63a084-1e5b-4f27-b9d0-8a24f61c73e5",
        image: "/icons/cloud-services.svg",
        title: "Cloud Services",
        description:
          "Secure cloud infrastructure enabling scalable enterprise applications and operations.",
      },
      {
        id: 5,
        uuid: "17d4be59-8a32-4c60-95f7-2b0e8d36c491",
        image: "/icons/digital-transformation.svg",
        title: "Digital Transformation",
        description:
          "Modernizing organizations through innovative technologies and intelligent digital strategies.",
      },
      {
        id: 6,
        uuid: "5f80c327-94d1-4a68-b3e2-6c17a950df84",
        image: "/icons/system-integration.svg",
        title: "System Integration",
        description:
          "Connecting enterprise systems for seamless workflows and operational efficiency.",
      },
      {
        id: 7,
        uuid: "a3c26e15-70b9-4d84-8215-cf9e30b7a6d2",
        image: "/icons/data-analytics.svg",
        title: "Data Analytics",
        description:
          "Turning complex business data into actionable intelligence and insights.",
      },
      {
        id: 8,
        uuid: "68b1f947-c503-42ea-971d-04a8c25e6b30",
        image: "/icons/software-development.svg",
        title: "Software Development",
        description:
          "Building secure, scalable software tailored to enterprise business requirements.",
      },
      {
        id: 9,
        uuid: "d0946a83-3fb7-4159-8ce6-72b5140da9c7",
        image: "/icons/managed-services.svg",
        title: "Managed Services",
        description:
          "Proactive technology management ensuring reliability, performance, and continuous support.",
      },
    ],
  },
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: 1,
    uuid: "5c1a7e08-3d94-4b62-8f17-a0d5e93c2416",
    eyebrow: "Artificial Intelligence",
    title: "AI & Machine Learning",
    description:
      "We design and deploy intelligent AI solutions that help organizations automate operations, improve decision-making, and accelerate innovation. Our expertise includes Generative AI, custom AI models, intelligent assistants, computer vision, predictive analytics, and enterprise automation, enabling businesses and governments to transform complex processes into scalable, data-driven solutions.",
    features: [
      {
        image: "/icons/generative-ai.svg",
        title: "Generative AI & Custom AI Models",
      },
      {
        image: "/icons/process-automation.svg",
        title: "Intelligent Process Automation",
      },
      {
        image: "/icons/predictive-analytics.svg",
        title: "Predictive Analytics & Computer Vision",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/artificial-intelligence.svg",
  },
  {
    id: 2,
    uuid: "9f3b6d21-70c5-4e83-b149-2a6f8c05d7e3",
    eyebrow: "Security & Compliance",
    title: "Enterprise Cybersecurity",
    description:
      "We protect critical digital infrastructure through comprehensive cybersecurity solutions designed for modern enterprises and government organizations. Our services include network security, endpoint protection, identity management, governance, risk assessment, and security operations to strengthen resilience against evolving cyber threats.",
    features: [
      {
        image: "/icons/network-security.svg",
        title: "Advanced Network Security",
      },
      {
        image: "/icons/identity-access.svg",
        title: "Identity & Access Management",
      },
      {
        image: "/icons/governance-risk.svg",
        title: "Governance, Risk & Compliance",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/cybersecurity.svg",
  },
  {
    id: 3,
    uuid: "2e84c05f-1b37-49da-8c60-73f1b9e4a528",
    eyebrow: "Consulting Services",
    title: "Technology Consulting",
    description:
      "We help organizations develop effective technology strategies that support digital transformation and long-term business growth. From technology assessments and IT planning to enterprise architecture and innovation consulting, our experts guide every stage of transformation.",
    features: [
      {
        image: "/icons/transformation-strategy.svg",
        title: "Digital Transformation Strategy",
      },
      {
        image: "/icons/technology-planning.svg",
        title: "Enterprise Technology Planning",
      },
      {
        image: "/icons/business-advisory.svg",
        title: "Innovation & Business Advisory",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/technology-consulting.svg",
  },
  {
    id: 4,
    uuid: "7a19d3b6-8c42-4f05-91e7-c5028b6d4f31",
    eyebrow: "Digital Engineering",
    title: "Enterprise Software",
    description:
      "We develop secure, scalable, and high-performance enterprise software tailored to complex business requirements. Our team delivers web platforms, AI-enabled applications, system integrations, and digital solutions designed to improve operational efficiency and organizational performance.",
    features: [
      {
        image: "/icons/software-development.svg",
        title: "Enterprise Software Development",
      },
      {
        image: "/icons/system-integration.svg",
        title: "Secure System Integration",
      },
      {
        image: "/icons/digital-applications.svg",
        title: "Scalable Digital Applications",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/enterprise-software.svg",
  },
  {
    id: 5,
    uuid: "c04f8172-6ad9-4b31-85e0-9f27d1c6350b",
    eyebrow: "Smart Infrastructure",
    title: "Intelligent Infrastructure",
    description:
      "We build connected infrastructure using Building Information Modeling (BIM), digital twin technologies, IoT platforms, and intelligent asset management systems. Our solutions improve operational visibility, sustainability, and infrastructure lifecycle management.",
    features: [
      {
        image: "/icons/building-information-modeling.svg",
        title: "Building Information Modeling",
      },
      {
        image: "/icons/digital-twin.svg",
        title: "Digital Twin Technologies",
      },
      {
        image: "/icons/asset-management.svg",
        title: "Intelligent Asset Management",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/intelligent-infrastructure.svg",
  },
  {
    id: 6,
    uuid: "3d76e2b9-95f4-4c18-a70d-6b83f0512e94",
    eyebrow: "Digital Government",
    title: "E-Government Services",
    description:
      "We deliver secure digital government platforms that improve citizen engagement, streamline public services, and enable transparent digital governance. Our solutions include e-payments, complaint management, case tracking, and citizen self-service portals.",
    features: [
      {
        image: "/icons/citizen-portals.svg",
        title: "Citizen Self-Service Portals",
      },
      {
        image: "/icons/public-services.svg",
        title: "Digital Public Services",
      },
      {
        image: "/icons/e-government-platforms.svg",
        title: "Secure E-Government Platforms",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/e-government-services.svg",
  },
  {
    id: 7,
    uuid: "8b52c0a7-4e61-49d3-92f8-107c5da6b38f",
    eyebrow: "Telecom & Networks",
    title: "Telecom Intelligence",
    description:
      "We support telecommunications providers with intelligent network solutions, OSS/BSS platforms, AI-powered analytics, and next-generation connectivity. Our services help improve network performance, operational efficiency, and customer experience.",
    features: [
      {
        image: "/icons/oss-bss-integration.svg",
        title: "OSS/BSS Integration",
      },
      {
        image: "/icons/network-analytics.svg",
        title: "AI Network Analytics",
      },
      {
        image: "/icons/next-generation-connectivity.svg",
        title: "Next-Generation Connectivity",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/telecom-intelligence.svg",
  },
  {
    id: 8,
    uuid: "1f9d4386-c25b-4703-8e64-b0a179f3c852",
    eyebrow: "Human Capital",
    title: "Workforce Solutions",
    description:
      "We empower organizations with intelligent workforce management solutions including AI recruitment, performance management, attendance systems, learning platforms, and employee development technologies that enhance productivity.",
    features: [
      {
        image: "/icons/ai-recruitment.svg",
        title: "AI Recruitment Solutions",
      },
      {
        image: "/icons/learning-management.svg",
        title: "Learning Management Systems",
      },
      {
        image: "/icons/performance-management.svg",
        title: "Performance Management Platforms",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/workforce-solutions.svg",
  },
  {
    id: 9,
    uuid: "6c30b8f5-a749-4d21-95b3-4e8d72c0f169",
    eyebrow: "Agriculture Technology",
    title: "Smart Agriculture",
    description:
      "We modernize agriculture through AI, IoT, GIS, drone technologies, and precision farming solutions. Our services help organizations increase productivity, improve sustainability, and make informed agricultural decisions using real-time intelligence.",
    features: [
      {
        image: "/icons/precision-farming.svg",
        title: "Precision Farming Solutions",
      },
      {
        image: "/icons/drone-gis-analytics.svg",
        title: "Drone & GIS Analytics",
      },
      {
        image: "/icons/agricultural-monitoring.svg",
        title: "IoT Agricultural Monitoring",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/smart-agriculture.svg",
  },
  {
    id: 10,
    uuid: "0a4e17c8-b36d-4592-8f21-d95c630a7e48",
    eyebrow: "Energy & Climate",
    title: "Sustainable Energy",
    description:
      "We support organizations with renewable energy technologies, ESG initiatives, carbon management, drilling services, and climate-focused solutions that promote operational efficiency and long-term environmental sustainability.",
    features: [
      {
        image: "/icons/esg-carbon.svg",
        title: "ESG & Carbon Solutions",
      },
      {
        image: "/icons/renewable-energy.svg",
        title: "Renewable Energy Services",
      },
      {
        image: "/icons/climate-consulting.svg",
        title: "Climate Technology Consulting",
      },
    ],
    image: "/about_image.png",
    iconImage: "/icons/sustainable-energy.svg",
  },
];
