import type {
  VerticlePage,
  VerticlesPageContent,
} from "@/types/features/verticles";

export const allVerticlesPageContent: VerticlesPageContent = {
  allVerticlesHeader: {
    title: "Future-Ready Enterprise Verticles",
    description:
      "Precision-engineered solutions designed to scale your operations, secure your assets, and accelerate your digital evolution through advanced institutional innovation.",
    image: "/verticles/verticles_header.png",
  },
  coreVerticles: {
    heading: "Our Core Verticles",
    description:
      "Powering enterprises with intelligent, scalable, and secure digital solutions through institutional reliability and forward-thinking innovation.",
    verticles: [
      {
        id: 1,
        uuid: "b7e41c92-58af-4d16-9c73-0e5a2d84f6b1",
        image: "/icons/industries/construction-smart-infrastructure.svg",
        title: "Construction",
        description:
          "Smart infrastructure, BIM, digital twins, and IoT solutions enabling connected, efficient, and resilient urban development.",
      },
      {
        id: 2,
        uuid: "4a90d3e7-2c68-4b51-8f04-71d6b95ac238",
        image: "/icons/industries/education-skill-development.svg",
        title: "Education",
        description:
          "AI-powered learning, talent management, career advisory, and assessment solutions enabling smarter skill development.",
      },
      {
        id: 3,
        uuid: "e2158fb4-6d07-49c3-a5b8-3c94e70d1a65",
        image: "/icons/solutions/telecom-intelligence-solutions.svg",
        title: "Telecom & Intelligence",
        description:
          "5G, smart networks, AI-driven intelligence, and predictive analytics optimizing connectivity, performance, and service delivery.",
      },
      {
        id: 4,
        uuid: "9c63a084-1e5b-4f27-b9d0-8a24f61c73e5",
        image: "/icons/solutions/human-capital-management.svg",
        title: "Human Capital",
        description:
          "Integrated HR solutions for performance, recruitment, attendance, leave, assets, learning, and workforce development.",
      },
      {
        id: 5,
        uuid: "17d4be59-8a32-4c60-95f7-2b0e8d36c491",
        image: "/icons/solutions/e-government-solutions.svg",
        title: "E Government",
        description:
          "Digital citizen services, automated workflows, secure payments, and intelligent systems improving public service delivery.",
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
        image: "/icons/solutions/energy-climate-solutions.svg",
        title: "Energy & Climate",
        description:
          "Smart energy, climate intelligence, and resource optimization solutions enabling sustainable and efficient operations.",
      },
    ],
  },
  allVerticlesArticles: [
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
      image: "/verticles/ai_and_machine_learning.png",
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
      image: "/verticles/enterprice_cybersecurity.png",
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
      image: "/verticles/technology_consulting.png",
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
      image: "/verticles/enterprise_software.png",
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
      image: "/verticles/intelligent_infrastructure.png",
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
      image: "/verticles/e_government_services.png",
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
      image: "/verticles/telecom_intelligence.png",
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
      image: "/verticles/workforce_solutions.png",
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
      image: "/verticles/smart_africulture.png",
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
      image: "/verticles/sustainable_energy.png",
      iconImage: "/icons/sustainable-energy.svg",
    },
  ],
};

export const verticlePages: VerticlePage[] = [
  {
    id: 1,
    uuid: "b7e41c92-58af-4d16-9c73-0e5a2d84f6b1",
    title: "Construction",
    verticleHeader: {
      heading: "Building Smarter, Connected Infrastructure",
      description:
        "Technology-driven solutions that help organizations plan, build, monitor, and manage smarter infrastructure through digital technologies, AI, and IoT.",
    },
    image: "/verticles/intelligent_infrastructure.png",
    solutions: {
      heading: "Construction Solutions",
      description:
        "Our construction solutions combine digital modelling, intelligent infrastructure, connected systems, and real-time monitoring to improve efficiency, safety, and asset performance.",
      items: [
        {
          id: 1,
          uuid: "d1f6a930-5c27-4e88-b043-91a7e5c26d10",
          title: "Smart Infrastructure",
          description:
            "Connected infrastructure solutions for smarter urban development and efficient operations.",
        },
        {
          id: 2,
          uuid: "8c30b5e4-27fa-4d91-a6c8-30bf147e29d5",
          title: "Smart Mobility",
          description:
            "Intelligent mobility technologies for connected and efficient transportation systems.",
        },
        {
          id: 3,
          uuid: "6b47d182-a5e9-4370-bc16-2d94f7051ea3",
          title: "Smart Utilities",
          description:
            "Digital solutions for monitoring and managing essential urban utilities.",
        },
        {
          id: 4,
          uuid: "0e59c374-8ab1-42d6-95f0-7c3e18b6a49d",
          title: "Public Safety",
          description:
            "Technology-enabled systems that improve safety, monitoring, and emergency response.",
        },
        {
          id: 5,
          uuid: "b28f6013-d54c-49a7-83e1-6f0d92a45c37",
          title: "BIM",
          description:
            "Building Information Modelling for better planning, design, and project management.",
        },
        {
          id: 6,
          uuid: "4d0a7e91-3f68-4c25-90bd-e17c58236fa4",
          title: "Digital Twin",
          description:
            "Digital representations of physical assets for real-time monitoring and analysis.",
        },
        {
          id: 7,
          uuid: "97e1c485-6b23-4a70-8d59-f2036ca7b1e8",
          title: "Asset Management",
          description:
            "Tools for tracking, monitoring, and optimizing infrastructure and physical assets.",
        },
        {
          id: 8,
          uuid: "1a63f827-90de-4b54-a2c7-58e30dbf174c",
          title: "Facility Monitoring",
          description:
            "IoT-enabled monitoring of facilities, equipment, and operational conditions.",
        },
        {
          id: 9,
          uuid: "5f92d0b6-71c4-4a83-b59e-04f7c8a1d326",
          title: "AI-Driven Construction",
          description:
            "AI-powered insights for better decision-making, risk reduction, and construction efficiency.",
        },
        {
          id: 10,
          uuid: "3c81b7a5-4629-4de0-91f8-06ad25c93b7e",
          title: "IoT",
          description:
            "Connected sensors and devices for real-time data collection and infrastructure monitoring.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "e70a15c3-8d42-4b96-a3f1-2c85d09b647a",
        title: "Plan Smarter",
        focus: "BIM & Digital Twin",
        description:
          "Multi-layered parametric modeling and simulated asset behavior to preempt field discrepancies before ground break.",
      },
      {
        id: 2,
        uuid: "2b95f7d0-4c63-41ea-9b28-73d015af6c94",
        title: "Monitor Smarter",
        focus: "IoT & Facility Monitoring",
        description:
          "Distributed environmental sensors, load diagnostics, and telemetry continuously streamed to edge nodes.",
      },
      {
        id: 3,
        uuid: "af38c261-90b7-4e15-82d4-5c70b1f9a638",
        title: "Build Smarter",
        focus: "AI & Smart Infrastructure",
        description:
          "Predictive sequencing, automated resource scheduling, and real-time risk mitigation algorithms on-site.",
      },
    ],
  },
];
