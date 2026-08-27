import type { CoreService, ServiceSolution } from "@/types/features/services";

export const coreServicesHeading = "Our Core Services";

export const coreServicesDescription =
  "Powering enterprises with intelligent, scalable, and secure digital solutions through institutional reliability and forward-thinking innovation.";

export const coreServices: CoreService[] = [
  {
    id: 1,
    icon: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "AI-powered automation, predictive analytics, and intelligent business solutions.",
  },
  {
    id: 2,
    icon: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Enterprise security protecting networks, identities, applications, and critical infrastructure.",
  },
  {
    id: 3,
    icon: "technology-consulting",
    title: "Technology Consulting",
    description:
      "Strategic consulting accelerating innovation, transformation, and sustainable business growth.",
  },
  {
    id: 4,
    icon: "cloud-services",
    title: "Cloud Services",
    description:
      "Secure cloud infrastructure enabling scalable enterprise applications and operations.",
  },
  {
    id: 5,
    icon: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modernizing organizations through innovative technologies and intelligent digital strategies.",
  },
  {
    id: 6,
    icon: "system-integration",
    title: "System Integration",
    description:
      "Connecting enterprise systems for seamless workflows and operational efficiency.",
  },
  {
    id: 7,
    icon: "data-analytics",
    title: "Data Analytics",
    description:
      "Turning complex business data into actionable intelligence and insights.",
  },
  {
    id: 8,
    icon: "software-development",
    title: "Software Development",
    description:
      "Building secure, scalable software tailored to enterprise business requirements.",
  },
  {
    id: 9,
    icon: "managed-services",
    title: "Managed Services",
    description:
      "Proactive technology management ensuring reliability, performance, and continuous support.",
  },
];

export const serviceSolutions: ServiceSolution[] = [
  {
    id: 1,
    eyebrow: "Artificial Intelligence",
    title: "AI & Machine Learning",
    description:
      "We design and deploy intelligent AI solutions that help organizations automate operations, improve decision-making, and accelerate innovation. Our expertise includes Generative AI, custom AI models, intelligent assistants, computer vision, predictive analytics, and enterprise automation, enabling businesses and governments to transform complex processes into scalable, data-driven solutions.",
    features: [
      {
        icon: "/icons/generative-ai.svg",
        title: "Generative AI & Custom AI Models",
      },
      {
        icon: "/icons/process-automation.svg",
        title: "Intelligent Process Automation",
      },
      {
        icon: "/icons/predictive-analytics.svg",
        title: "Predictive Analytics & Computer Vision",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Analytics dashboard displayed above an open hand",
  },
  {
    id: 2,
    eyebrow: "Security & Compliance",
    title: "Enterprise Cybersecurity",
    description:
      "We protect critical digital infrastructure through comprehensive cybersecurity solutions designed for modern enterprises and government organizations. Our services include network security, endpoint protection, identity management, governance, risk assessment, and security operations to strengthen resilience against evolving cyber threats.",
    features: [
      {
        icon: "/icons/network-security.svg",
        title: "Advanced Network Security",
      },
      {
        icon: "/icons/identity-access.svg",
        title: "Identity & Access Management",
      },
      {
        icon: "/icons/governance-risk.svg",
        title: "Governance, Risk & Compliance",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Digital padlock representing enterprise cybersecurity",
  },
  {
    id: 3,
    eyebrow: "Consulting Services",
    title: "Technology Consulting",
    description:
      "We help organizations develop effective technology strategies that support digital transformation and long-term business growth. From technology assessments and IT planning to enterprise architecture and innovation consulting, our experts guide every stage of transformation.",
    features: [
      {
        icon: "/icons/transformation-strategy.svg",
        title: "Digital Transformation Strategy",
      },
      {
        icon: "/icons/technology-planning.svg",
        title: "Enterprise Technology Planning",
      },
      {
        icon: "/icons/business-advisory.svg",
        title: "Innovation & Business Advisory",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Consultants reviewing a technology roadmap together",
  },
  {
    id: 4,
    eyebrow: "Digital Engineering",
    title: "Enterprise Software",
    description:
      "We develop secure, scalable, and high-performance enterprise software tailored to complex business requirements. Our team delivers web platforms, AI-enabled applications, system integrations, and digital solutions designed to improve operational efficiency and organizational performance.",
    features: [
      {
        icon: "/icons/software-development.svg",
        title: "Enterprise Software Development",
      },
      {
        icon: "/icons/system-integration.svg",
        title: "Secure System Integration",
      },
      {
        icon: "/icons/digital-applications.svg",
        title: "Scalable Digital Applications",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Engineering team working on enterprise software",
  },
  {
    id: 5,
    eyebrow: "Smart Infrastructure",
    title: "Intelligent Infrastructure",
    description:
      "We build connected infrastructure using Building Information Modeling (BIM), digital twin technologies, IoT platforms, and intelligent asset management systems. Our solutions improve operational visibility, sustainability, and infrastructure lifecycle management.",
    features: [
      {
        icon: "/icons/building-information-modeling.svg",
        title: "Building Information Modeling",
      },
      {
        icon: "/icons/digital-twin.svg",
        title: "Digital Twin Technologies",
      },
      {
        icon: "/icons/asset-management.svg",
        title: "Intelligent Asset Management",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Connected city skyline representing smart infrastructure",
  },
  {
    id: 6,
    eyebrow: "Digital Government",
    title: "E-Government Services",
    description:
      "We deliver secure digital government platforms that improve citizen engagement, streamline public services, and enable transparent digital governance. Our solutions include e-payments, complaint management, case tracking, and citizen self-service portals.",
    features: [
      {
        icon: "/icons/citizen-portals.svg",
        title: "Citizen Self-Service Portals",
      },
      {
        icon: "/icons/public-services.svg",
        title: "Digital Public Services",
      },
      {
        icon: "/icons/e-government-platforms.svg",
        title: "Secure E-Government Platforms",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Hand interacting with a digital government interface",
  },
  {
    id: 7,
    eyebrow: "Telecom & Networks",
    title: "Telecom Intelligence",
    description:
      "We support telecommunications providers with intelligent network solutions, OSS/BSS platforms, AI-powered analytics, and next-generation connectivity. Our services help improve network performance, operational efficiency, and customer experience.",
    features: [
      {
        icon: "/icons/oss-bss-integration.svg",
        title: "OSS/BSS Integration",
      },
      {
        icon: "/icons/network-analytics.svg",
        title: "AI Network Analytics",
      },
      {
        icon: "/icons/next-generation-connectivity.svg",
        title: "Next-Generation Connectivity",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Technician working on telecom network equipment",
  },
  {
    id: 8,
    eyebrow: "Human Capital",
    title: "Workforce Solutions",
    description:
      "We empower organizations with intelligent workforce management solutions including AI recruitment, performance management, attendance systems, learning platforms, and employee development technologies that enhance productivity.",
    features: [
      {
        icon: "/icons/ai-recruitment.svg",
        title: "AI Recruitment Solutions",
      },
      {
        icon: "/icons/learning-management.svg",
        title: "Learning Management Systems",
      },
      {
        icon: "/icons/performance-management.svg",
        title: "Performance Management Platforms",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Team collaborating around a workforce planning board",
  },
  {
    id: 9,
    eyebrow: "Agriculture Technology",
    title: "Smart Agriculture",
    description:
      "We modernize agriculture through AI, IoT, GIS, drone technologies, and precision farming solutions. Our services help organizations increase productivity, improve sustainability, and make informed agricultural decisions using real-time intelligence.",
    features: [
      {
        icon: "/icons/precision-farming.svg",
        title: "Precision Farming Solutions",
      },
      {
        icon: "/icons/drone-gis-analytics.svg",
        title: "Drone & GIS Analytics",
      },
      {
        icon: "/icons/agricultural-monitoring.svg",
        title: "IoT Agricultural Monitoring",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Farmer using a tablet in a crop field",
  },
  {
    id: 10,
    eyebrow: "Energy & Climate",
    title: "Sustainable Energy",
    description:
      "We support organizations with renewable energy technologies, ESG initiatives, carbon management, drilling services, and climate-focused solutions that promote operational efficiency and long-term environmental sustainability.",
    features: [
      {
        icon: "/icons/esg-carbon.svg",
        title: "ESG & Carbon Solutions",
      },
      {
        icon: "/icons/renewable-energy.svg",
        title: "Renewable Energy Services",
      },
      {
        icon: "/icons/climate-consulting.svg",
        title: "Climate Technology Consulting",
      },
    ],
    image: "/about_image.png",
    imageAlt: "Wind turbines and solar panels in an energy field",
  },
];
