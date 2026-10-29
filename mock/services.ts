import type { ServicesPageContent } from "@/types/features/services";

export const allServicesPageContent: ServicesPageContent = {
  allServicesHeader: {
    title: "Future-Ready Enterprise Services",
    description:
      "Precision-engineered solutions designed to scale your operations, secure your assets, and accelerate your digital evolution through advanced institutional innovation.",
    image: "/verticles/verticles-articles/verticles_header.png",
  },
  coreServices: {
    heading: "Our Core Services",
    description:
      "Powering enterprises with intelligent, scalable, and secure digital solutions through institutional reliability and forward-thinking innovation.",
    services: [
      {
        id: 1,
        uuid: "b7e41c92-58af-4d16-9c73-0e5a2d84f6b1",
        articleUuid: "c04f8172-6ad9-4b31-85e0-9f27d1c6350b",
        image: "/icons/industries/construction-smart-infrastructure.svg",
        title: "Construction",
        description:
          "Smart infrastructure, BIM, digital twins, and IoT solutions enabling connected, efficient, and resilient urban development.",
      },
      {
        id: 2,
        uuid: "4a90d3e7-2c68-4b51-8f04-71d6b95ac238",
        articleUuid: "1f4c6448-1545-4539-a4a8-b1a1aa3441ab",
        image: "/icons/industries/education-skill-development.svg",
        title: "Education",
        description:
          "AI-powered learning, talent management, career advisory, and assessment solutions enabling smarter skill development.",
      },
      {
        id: 3,
        uuid: "e2158fb4-6d07-49c3-a5b8-3c94e70d1a65",
        articleUuid: "8b52c0a7-4e61-49d3-92f8-107c5da6b38f",
        image: "/icons/solutions/telecom-intelligence.svg",
        title: "Telecom & Intelligence",
        description:
          "5G, smart networks, AI-driven intelligence, and predictive analytics optimizing connectivity, performance, and service delivery.",
      },
      {
        id: 4,
        uuid: "9c63a084-1e5b-4f27-b9d0-8a24f61c73e5",
        articleUuid: "1f9d4386-c25b-4703-8e64-b0a179f3c852",
        image: "/icons/solutions/human-capital-management.svg",
        title: "Human Capital",
        description:
          "Integrated HR solutions for performance, recruitment, attendance, leave, assets, learning, and workforce development.",
      },
      {
        id: 5,
        uuid: "17d4be59-8a32-4c60-95f7-2b0e8d36c491",
        articleUuid: "3d76e2b9-95f4-4c18-a70d-6b83f0512e94",
        image: "/icons/solutions/e-government-public-systems.svg",
        title: "E-Government",
        description:
          "Digital citizen services, automated workflows, secure payments, and intelligent systems improving public service delivery.",
      },
      {
        id: 6,
        uuid: "42302613-796e-4195-969b-203985ae66e4",
        articleUuid: "0a4e17c8-b36d-4592-8f21-d95c630a7e48",
        image: "/icons/solutions/energy-climate.svg",
        title: "Energy & Climate",
        description:
          "Smart energy, climate intelligence, and resource optimization solutions enabling sustainable and efficient operations.",
      },
    ],
  },
  allServicesArticles: [
    {
      id: 1,
      uuid: "c04f8172-6ad9-4b31-85e0-9f27d1c6350b",
      eyebrow: "Construction",
      title: "Smart Infrastructure",
      description:
        "We enable connected urban development with intelligent infrastructure solutions including BIM, digital twins, smart mobility, IoT monitoring, and AI-driven technologies that improve planning, efficiency, safety, and asset performance.",
      features: [
        {
          image: "/icons/building-information-modeling.svg",
          title: "BIM & Digital Twin Solutions",
        },
        {
          image: "/icons/intelligent-infrastructure.svg",
          title: "Smart Infrastructure & Mobility",
        },
        {
          image: "/icons/asset-management.svg",
          title: "IoT & AI-Driven Asset Management",
        },
      ],
      image: "/verticles/verticles-articles/intelligent_infrastructure.png",
      iconImage: "/icons/intelligent-infrastructure.svg",
    },
    {
      id: 2,
      uuid: "1f4c6448-1545-4539-a4a8-b1a1aa3441ab",
      eyebrow: "Education",
      title: "Learning & Talent Solutions",
      description:
        "We transform education and workforce development with intelligent learning, AI career advisory, talent management, and assessment solutions that build skills, improve outcomes, and connect people with the right opportunities.",
      features: [
        {
          image: "/icons/learning-management.svg",
          title: "Learning Management Systems",
        },
        {
          image: "/icons/ai-recruitment.svg",
          title: "AI Career & Talent Solutions",
        },
        {
          image: "/icons/final-evaluation.svg",
          title: "Assessment & Evaluation Platforms",
        },
      ],
      image: "/verticles/verticles-articles/enterprice_cybersecurity.png",
      iconImage: "/icons/learning-management.svg",
    },
    {
      id: 3,
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
      image: "/verticles/verticles-articles/technology_consulting.png",
      iconImage: "/icons/workforce-solutions.svg",
    },
    {
      id: 4,
      uuid: "0a4e17c8-b36d-4592-8f21-d95c630a7e48",
      eyebrow: "Energy & Climate",
      title: "Sustainable Resource Solutions",
      description:
        "We enable sustainable operations through intelligent energy monitoring, climate intelligence, smart utilities, and resource optimization technologies that reduce consumption, control costs, and support environmental goals.",
      features: [
        {
          image: "/icons/real-time-monitoring.svg",
          title: "Energy Monitoring & Reporting",
        },
        {
          image: "/icons/climate-consulting.svg",
          title: "Climate & Weather Intelligence",
        },
        {
          image: "/icons/esg-carbon.svg",
          title: "Sustainable Resource Optimization",
        },
      ],
      image: "/verticles/verticles-articles/sustainable_energy.png",
      iconImage: "/icons/sustainable-energy.svg",
    },
    {
      id: 5,
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
      image: "/verticles/verticles-articles/telecom_intelligence.png",
      iconImage: "/icons/telecom-intelligence.svg",
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
      image: "/verticles/verticles-articles/e_government_services.png",
      iconImage: "/icons/e-government-services.svg",
    },
  ],
};
