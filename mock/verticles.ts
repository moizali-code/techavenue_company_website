import type {
  VerticlePage,
  VerticlesPageContent,
} from "@/types/features/verticles";

export const allVerticlesPageContent: VerticlesPageContent = {
  allVerticlesHeader: {
    title: "Future-Ready Enterprise Verticles",
    description:
      "Precision-engineered solutions designed to scale your operations, secure your assets, and accelerate your digital evolution through advanced institutional innovation.",
    image: "/verticles/verticles-articles/verticles_header.png",
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
      {
        id: 8,
        uuid: "c9481a06-3e72-4b95-8d17-5f60b2e97c43",
        image: "/icons/industries/information-technology.svg",
        title: "Information Technology",
        description:
          "AI, machine learning, data intelligence, system integration, and DevOps solutions powering modern digital operations.",
      },
      {
        id: 9,
        uuid: "7e35d29b-018c-4af6-93b4-2c81f5d0a76e",
        image: "/icons/solutions/network-security.svg",
        title: "Cyber Security",
        description:
          "Network, endpoint, identity, and application security with real-time intelligence protecting critical digital environments.",
      },
      {
        id: 10,
        uuid: "24b7f851-9d63-40e2-a5c8-6b03e79184df",
        image: "/icons/industries/agriculture.svg",
        title: "Agriculture",
        description:
          "Precision farming, crop monitoring, smart irrigation, and AI-driven insights improving productivity and sustainability.",
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
      image: "/verticles/verticles-articles/ai_and_machine_learning.png",
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
      image: "/verticles/verticles-articles/enterprice_cybersecurity.png",
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
      image: "/verticles/verticles-articles/technology_consulting.png",
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
      image: "/verticles/verticles-articles/enterprise_software.png",
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
      image: "/verticles/verticles-articles/intelligent_infrastructure.png",
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
      image: "/verticles/verticles-articles/e_government_services.png",
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
      image: "/verticles/verticles-articles/telecom_intelligence.png",
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
      image: "/verticles/verticles-articles/workforce_solutions.png",
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
      image: "/verticles/verticles-articles/smart_africulture.png",
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
      image: "/verticles/verticles-articles/sustainable_energy.png",
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
    image: "/verticles/verticle/constuction.png",
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
  {
    id: 2,
    uuid: "4a90d3e7-2c68-4b51-8f04-71d6b95ac238",
    title: "Education",
    verticleHeader: {
      heading: "Building Smarter, Connected Learning",
      description:
        "Technology-driven solutions that help organizations deliver, manage, personalize, and improve learning through digital platforms, AI, and analytics.",
    },
    image: "/verticles/verticle/education.png",
    solutions: {
      heading: "Learning & Development Solutions",
      description:
        "Our education solutions combine digital learning, intelligent career guidance, connected platforms, and real-time assessment to improve engagement, outcomes, and skill development.",
      items: [
        {
          id: 1,
          uuid: "e5a19c74-30d8-4b62-9f17-6c04a83be215",
          title: "Learn Anywhere",
          description:
            "Flexible learning environments supporting blended, self-paced, and gamified course delivery across learners and organizations.",
        },
        {
          id: 2,
          uuid: "7b26d0f3-84ca-4e19-b350-1f9d7c60a48e",
          title: "Develop Talent",
          description:
            "Intelligent talent solutions for identifying skills, supporting career development, and connecting people with relevant opportunities.",
        },
        {
          id: 3,
          uuid: "c30f8b57-6291-4da4-8e6b-95a02f14d763",
          title: "Guide Careers",
          description:
            "AI-powered career advisory for candidate screening, resume shortlisting, talent matching, and personalized career pathways.",
        },
        {
          id: 4,
          uuid: "96d5e128-4b70-42fc-a917-3d80c65ef421",
          title: "Manage Learning",
          description:
            "Learning management platforms for structured courses, learner engagement, progress tracking, and centralized educational delivery.",
        },
        {
          id: 5,
          uuid: "2f4a7c90-d135-48eb-b6c2-07e91d5a83b6",
          title: "Measure Progress",
          description:
            "Assessment and evaluation solutions for behavioural testing, performance measurement, and data-driven learning insights.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "8d0b3e46-1a97-4c25-93f8-b25e6740ca19",
        title: "Learn Smarter",
        focus: "Digital Learning",
        description:
          "Personalized learning environments with structured courses, self-paced content, gamification, and learner progress tracking.",
      },
      {
        id: 2,
        uuid: "45c9f271-6e03-4a8d-81b6-9f37d0e52c84",
        title: "Grow Smarter",
        focus: "Career & Talent",
        description:
          "AI-powered candidate screening, resume matching, talent identification, and data-driven career development across organizations.",
      },
      {
        id: 3,
        uuid: "b17e46d3-92c5-40fa-a72e-58d0361bf9e7",
        title: "Measure Smarter",
        focus: "Assessment & Insights",
        description:
          "Behavioural assessments, performance analytics, and real-time learning insights designed to improve outcomes and identify development opportunities.",
      },
    ],
  },
  {
    id: 3,
    uuid: "e2158fb4-6d07-49c3-a5b8-3c94e70d1a65",
    title: "Telecom & Intelligence",
    verticleHeader: {
      heading: "Building Smarter, Connected Networks",
      description:
        "Technology-driven solutions that help organizations connect, monitor, analyze, and manage smarter networks through 5G, AI, IoT, and edge computing.",
    },
    image: "/verticles/verticle/telecom.png",
    solutions: {
      heading: "Telecom Solutions",
      description:
        "Our telecom solutions combine smart networks, intelligent connectivity, predictive analytics, and real-time monitoring to improve performance, security, and service delivery.",
      items: [
        {
          id: 1,
          uuid: "3a72e9c1-5d84-4f60-b13e-c705d928f461",
          title: "Smart Networks",
          description:
            "Advanced 5G and network infrastructure solutions designed for scalable, connected, and efficient communication systems.",
        },
        {
          id: 2,
          uuid: "d84f0b53-27ae-4691-8c05-3b16e7d40a92",
          title: "Network Intelligence",
          description:
            "AI-powered intelligence solutions for predictive analytics, network optimization, and data-driven operational decisions.",
        },
        {
          id: 3,
          uuid: "60e1c9a7-4b38-42d5-97f1-8e26b0453cd7",
          title: "Connected Operations",
          description:
            "IoT connectivity and edge computing solutions supporting distributed systems, real-time communication, and intelligent services.",
        },
        {
          id: 4,
          uuid: "f592d0a8-6c17-4e39-b048-25a7913ce6b4",
          title: "Network Performance",
          description:
            "Real-time monitoring solutions that provide visibility into network health, performance, capacity, and service availability.",
        },
        {
          id: 5,
          uuid: "17b64e0d-83f2-4a56-9d71-c40e582ba793",
          title: "Service Assurance",
          description:
            "Integrated OSS/BSS and service assurance solutions for secure connectivity and reliable network operations.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "9c05a73f-2b61-48de-84a9-6e13d70f5c28",
        title: "Connect Smarter",
        focus: "5G & Smart Networks",
        description:
          "Advanced network infrastructure with scalable connectivity, intelligent communication, and next-generation technologies designed for connected operations.",
      },
      {
        id: 2,
        uuid: "4e83b1d6-70fa-4295-a3c7-159e6b04d872",
        title: "Monitor Smarter",
        focus: "Network Intelligence",
        description:
          "AI-powered predictive analytics, performance monitoring, and network insights designed to identify issues and optimize network operations.",
      },
      {
        id: 3,
        uuid: "b2609f4a-c583-471e-90d6-8a4713ef6205",
        title: "Operate Smarter",
        focus: "Service Assurance",
        description:
          "Secure connectivity, OSS/BSS integration, and real-time service monitoring designed to maintain reliable network performance.",
      },
    ],
  },
  {
    id: 4,
    uuid: "9c63a084-1e5b-4f27-b9d0-8a24f61c73e5",
    title: "Human Capital",
    verticleHeader: {
      heading: "Building Smarter, Connected Workforce",
      description:
        "Technology-driven solutions that help organizations manage, develop, monitor, and optimize their workforce through digital platforms, AI, and data.",
    },
    image: "/verticles/verticle/human capital managment.png",
    solutions: {
      heading: "Human Capital Solutions",
      description:
        "Our workforce solutions combine performance management, intelligent recruitment, connected HR platforms, and real-time analytics to improve productivity, engagement, and talent development.",
      items: [
        {
          id: 1,
          uuid: "5d19b8e2-7f34-4c06-a951-2e70c38df164",
          title: "Performance Management",
          description:
            "Digital performance solutions for setting goals, tracking progress, evaluating employees, and improving workforce performance.",
        },
        {
          id: 2,
          uuid: "a06f37c5-1d92-4b8e-8340-7c15b9e026fa",
          title: "Intelligent Recruitment",
          description:
            "AI-powered hiring solutions for candidate screening, recruitment workflows, talent matching, and efficient workforce planning.",
        },
        {
          id: 3,
          uuid: "38e5c704-9b16-4fd3-a2e8-06947c15b3d0",
          title: "Workforce Management",
          description:
            "Connected systems for managing attendance, leave, employee activities, assets, and everyday workforce operations.",
        },
        {
          id: 4,
          uuid: "c714a952-0e63-4d87-b1f5-4930e678ac25",
          title: "Learning & Development",
          description:
            "Integrated learning platforms for delivering courses, developing skills, tracking progress, and supporting employee growth.",
        },
        {
          id: 5,
          uuid: "6bf203d9-58c4-41a7-93e0-b158d24f70c6",
          title: "Talent Management",
          description:
            "Data-driven talent solutions for identifying capabilities, planning career progression, and developing high-performing teams.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "e390c716-4a58-42bd-8f03-71d6e04a9c53",
        title: "Manage Smarter",
        focus: "Workforce Operations",
        description:
          "Connected platforms for attendance, leave, assets, and employee operations, providing centralized visibility across the workforce.",
      },
      {
        id: 2,
        uuid: "7154db08-3e96-4c2a-b7d5-08f31a6e59b4",
        title: "Hire Smarter",
        focus: "Recruitment & Talent",
        description:
          "AI-powered recruitment, candidate matching, talent identification, and data-driven workforce planning designed to build stronger teams.",
      },
      {
        id: 3,
        uuid: "0a68f5c3-b271-49e6-84d1-3e9057c6ba28",
        title: "Grow Smarter",
        focus: "Learning & Performance",
        description:
          "Learning platforms, performance analytics, and career development tools designed to improve employee capabilities and organizational outcomes.",
      },
    ],
  },
  {
    id: 5,
    uuid: "17d4be59-8a32-4c60-95f7-2b0e8d36c491",
    title: "E Government",
    verticleHeader: {
      heading: "Building Smarter, Connected Public Services",
      description:
        "Technology-driven solutions that help governments deliver, manage, monitor, and improve public services through digital platforms, automation, and secure systems.",
    },
    image: "/verticles/verticle/e government.png",
    solutions: {
      heading: "Government Solutions",
      description:
        "Our government solutions combine digital services, intelligent workflows, citizen platforms, and real-time monitoring to improve accessibility, transparency, efficiency, and service delivery.",
      items: [
        {
          id: 1,
          uuid: "b58e0721-96d4-43ca-8e17-5f20c39b7d64",
          title: "Citizen Services",
          description:
            "Digital self-service platforms for online requests, applications, registrations, and convenient access to public services.",
        },
        {
          id: 2,
          uuid: "2c917f4e-05b3-4869-a1d7-e6408b537c92",
          title: "Case Management",
          description:
            "Connected systems for registering complaints, tracking cases, managing workflows, and monitoring resolution progress.",
        },
        {
          id: 3,
          uuid: "84d3e6a0-7c15-4b92-9f68-31e07d5ca4b6",
          title: "Digital Applications",
          description:
            "Online platforms that simplify applications, requests, submissions, and service interactions for citizens and organizations.",
        },
        {
          id: 4,
          uuid: "f0629b5d-4e87-41c3-b05a-9d7134e6082f",
          title: "Service Tracking",
          description:
            "Real-time tracking solutions providing visibility into requests, applications, cases, and government service progress.",
        },
        {
          id: 5,
          uuid: "3e75c194-a860-42fd-97b2-6c05e831da47",
          title: "Secure Government",
          description:
            "Integrated solutions for e-payments, asset management, track and trace, and cybersecurity across public systems.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "c8410de6-32b7-4f95-8a03-71e5d69cb420",
        title: "Serve Smarter",
        focus: "Citizen Services",
        description:
          "Digital self-service platforms with online requests, applications, service access, and real-time tracking designed to improve citizen experiences.",
      },
      {
        id: 2,
        uuid: "961bf5a3-0d47-4e28-b6c9-3812e70da5f4",
        title: "Process Smarter",
        focus: "Case & Workflow Management",
        description:
          "Automated workflows, complaint registration, case tracking, and resolution monitoring designed to improve government operational efficiency.",
      },
      {
        id: 3,
        uuid: "57e2039c-8b64-41da-a3f7-0e96d15b8c37",
        title: "Govern Smarter",
        focus: "Secure Public Systems",
        description:
          "E-payments, asset management, track and trace, and cybersecurity solutions designed to support secure and reliable public services.",
      },
    ],
  },
  {
    id: 6,
    uuid: "a3c26e15-70b9-4d84-8215-cf9e30b7a6d2",
    title: "Energy & Climate",
    verticleHeader: {
      heading: "Building Smarter, Connected Resources",
      description:
        "Technology-driven solutions that help organizations monitor, manage, optimize, and sustain energy and natural resources through digital platforms, IoT, and analytics.",
    },
    image: "/verticles/verticle/energy & climate.png",
    solutions: {
      heading: "Energy & Climate Solutions",
      description:
        "Our energy solutions combine smart utilities, climate intelligence, connected monitoring, and real-time analytics to improve efficiency, sustainability, resource management, and environmental performance.",
      items: [
        {
          id: 1,
          uuid: "d1074b9e-6532-48ac-b790-1f6e83c02d45",
          title: "Smart Utilities",
          description:
            "Connected utility solutions for monitoring consumption, managing resources, and improving operational efficiency across energy systems.",
        },
        {
          id: 2,
          uuid: "492ea7c0-b158-4d63-8e21-70f594a3bd6c",
          title: "Climate Intelligence",
          description:
            "Data-driven climate and weather solutions for forecasting conditions, identifying trends, and supporting informed operational decisions.",
        },
        {
          id: 3,
          uuid: "0f36d81b-59e4-42a7-95c8-6d13b70ae824",
          title: "Resource Optimization",
          description:
            "Intelligent solutions for optimizing energy and resource consumption while reducing waste, operational costs, and environmental impact.",
        },
        {
          id: 4,
          uuid: "a7c58e30-14b6-4f92-8d05-e36174b9052a",
          title: "Energy Monitoring",
          description:
            "Real-time monitoring solutions providing visibility into energy consumption, operational performance, and resource usage.",
        },
        {
          id: 5,
          uuid: "68b90f2d-c743-4e15-a6b8-27051d94e63f",
          title: "Sustainability Reporting",
          description:
            "Data-driven reporting solutions for tracking consumption, emissions, costs, and sustainability performance across operations.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "35da70c8-9e16-4b43-87f2-c0d61e548b39",
        title: "Monitor Smarter",
        focus: "Energy & Utilities",
        description:
          "Connected monitoring systems provide real-time visibility into energy consumption, utility performance, resource usage, and operational conditions.",
      },
      {
        id: 2,
        uuid: "e6417b52-08fa-49d6-b3c1-7a2059e4c86d",
        title: "Predict Smarter",
        focus: "Climate Intelligence",
        description:
          "IoT monitoring, climate data, and forecasting models provide actionable insights into weather conditions, environmental trends, and potential risks.",
      },
      {
        id: 3,
        uuid: "1c8305fe-b492-4a7d-96e0-583d1c7f0a64",
        title: "Optimize Smarter",
        focus: "Sustainable Resources",
        description:
          "Intelligent analytics optimize energy and resource consumption while providing reporting on costs, efficiency, emissions, and sustainability outcomes.",
      },
    ],
  },
  {
    id: 7,
    uuid: "c9481a06-3e72-4b95-8d17-5f60b2e97c43",
    title: "Information Technology",
    verticleHeader: {
      heading: "Building Smarter, Connected Technology",
      description:
        "Technology-driven solutions that help organizations develop, integrate, automate, and optimize digital systems through AI, data, cloud, and modern software technologies.",
    },
    image: "/verticles/verticle/information technology.png",
    solutions: {
      heading: "Technology Solutions",
      description:
        "Our technology solutions combine artificial intelligence, advanced analytics, system integration, DevOps, and automation to improve efficiency, scalability, performance, and digital operations.",
      items: [
        {
          id: 1,
          uuid: "7f13c840-2d95-4e6b-a870-95c2e061db38",
          title: "Artificial Intelligence",
          description:
            "Intelligent AI solutions for automation, decision-making, predictive insights, and transforming complex business processes.",
        },
        {
          id: 2,
          uuid: "b64027ea-71c3-4d58-92f6-0e83a5104c7d",
          title: "Machine Learning",
          description:
            "Custom machine learning models designed to analyze data, identify patterns, generate predictions, and support intelligent decisions.",
        },
        {
          id: 3,
          uuid: "05e9d3b7-4682-41af-83c5-e17962b0a34c",
          title: "Data Intelligence",
          description:
            "Advanced analytics solutions that transform organizational data into actionable insights for better planning and operational decisions.",
        },
        {
          id: 4,
          uuid: "ca38150f-9b72-4e04-a61d-37b52c8e096a",
          title: "System Integration",
          description:
            "Integrated technology solutions connecting applications, platforms, systems, and data across complex digital environments.",
        },
        {
          id: 5,
          uuid: "2810bf6c-d549-4a37-b0e9-6f14738cad25",
          title: "Digital Operations",
          description:
            "DevOps, automation, and virtualization solutions designed to improve software delivery, scalability, infrastructure, and operational efficiency.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "93b5e01a-7c26-48fd-b542-0d78e136ca09",
        title: "Build Smarter",
        focus: "AI & Machine Learning",
        description:
          "Custom AI and machine learning models trained on organizational data to automate processes, generate insights, and support intelligent decision-making.",
      },
      {
        id: 2,
        uuid: "4de7028b-15f9-4c63-a8d0-b62e5710f9c4",
        title: "Connect Smarter",
        focus: "System Integration",
        description:
          "Integrated digital systems connect applications, platforms, and data while enabling scalable and efficient technology operations.",
      },
      {
        id: 3,
        uuid: "6f92a4d1-03e8-45b7-9c16-82d047be5163",
        title: "Operate Smarter",
        focus: "DevOps & Automation",
        description:
          "Modern DevOps, automation, and virtualization technologies streamline software delivery, infrastructure management, scalability, and operational performance.",
      },
    ],
  },
  {
    id: 8,
    uuid: "7e35d29b-018c-4af6-93b4-2c81f5d0a76e",
    title: "Cyber Security",
    verticleHeader: {
      heading: "Building Smarter, Connected Security",
      description:
        "Technology-driven solutions that help organizations protect, monitor, detect, and manage digital environments through advanced security technologies, intelligence, and monitoring.",
    },
    image: "/verticles/verticle/cyber security.png",
    solutions: {
      heading: "Cyber Security Solutions",
      description:
        "Our cybersecurity solutions combine network protection, endpoint security, identity management, application security, and real-time monitoring to strengthen resilience, visibility, and organizational security.",
      items: [
        {
          id: 1,
          uuid: "a92c6013-58fd-4e74-b1a0-6d39e074b258",
          title: "Network Security",
          description:
            "Advanced protection for networks and connected environments against threats, unauthorized access, vulnerabilities, and security risks.",
        },
        {
          id: 2,
          uuid: "0b47e39d-c621-4805-97fa-3e18d6520bc7",
          title: "Endpoint Security",
          description:
            "Security solutions that protect devices, systems, and endpoints from malware, unauthorized activity, and evolving cyber threats.",
        },
        {
          id: 3,
          uuid: "d5308c7f-4a96-42e1-80b3-c740e69b135a",
          title: "Identity Security",
          description:
            "Identity and access solutions designed to protect users, accounts, privileged access, and sensitive organizational resources.",
        },
        {
          id: 4,
          uuid: "31ea9f68-b075-4d2c-a8e4-905f16c7302b",
          title: "Application Security",
          description:
            "Security measures for applications and digital platforms that help identify vulnerabilities and protect critical systems.",
        },
        {
          id: 5,
          uuid: "8c61b04a-2e93-4f57-96d8-4a07d3e5169f",
          title: "Security Intelligence",
          description:
            "SIEM-based monitoring, cybersecurity training, and security intelligence designed to improve threat detection and organizational awareness.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "f47d1c50-8b39-46ea-a072-5e618b039d4c",
        title: "Protect Smarter",
        focus: "Network & Endpoint Security",
        description:
          "Integrated security technologies protect networks, devices, and connected systems while reducing exposure to evolving cyber threats.",
      },
      {
        id: 2,
        uuid: "20a6e59b-7f14-4038-bd5c-93e0621a7f84",
        title: "Monitor Smarter",
        focus: "Security Intelligence",
        description:
          "SIEM-led monitoring and security analytics provide greater visibility into threats, suspicious activity, vulnerabilities, and potential security incidents.",
      },
      {
        id: 3,
        uuid: "b8534fd2-06c7-491b-8a3e-f0261d95e73a",
        title: "Respond Smarter",
        focus: "Identity & Application Security",
        description:
          "Identity protection, privileged access, application security, and cybersecurity awareness strengthen organizational resilience against digital threats.",
      },
    ],
  },
  {
    id: 9,
    uuid: "24b7f851-9d63-40e2-a5c8-6b03e79184df",
    title: "Agriculture",
    verticleHeader: {
      heading: "Building Smarter, Connected Farming",
      description:
        "Technology-driven solutions that help organizations monitor, manage, optimize, and improve agricultural operations through digital technologies, AI, IoT, and analytics.",
    },
    image: "/verticles/verticle/agriculture.png",
    solutions: {
      heading: "Agriculture Solutions",
      description:
        "Our agriculture solutions combine precision farming, intelligent monitoring, connected sensors, and real-time analytics to improve productivity, resource efficiency, crop health, and farm management.",
      items: [
        {
          id: 1,
          uuid: "6e05a1b8-37d4-42f9-b6c1-89f5203de764",
          title: "Precision Agriculture",
          description:
            "Smart solutions for optimizing crop applications, field operations, resources, and agricultural productivity through data-driven insights.",
        },
        {
          id: 2,
          uuid: "cd7392e4-1058-4b6a-93f7-e2b14085936c",
          title: "Farm Intelligence",
          description:
            "AI-powered solutions for crop analysis, yield forecasting, pest detection, and informed agricultural decision-making.",
        },
        {
          id: 3,
          uuid: "43f8c095-6ae2-4713-82db-5c709e1a4b86",
          title: "Crop Monitoring",
          description:
            "Drone, satellite, GIS, and IoT technologies for monitoring crop health, soil conditions, and field environments in real time.",
        },
        {
          id: 4,
          uuid: "9105bd73-e84f-4c26-a5b9-206d3fe74c18",
          title: "Smart Irrigation",
          description:
            "Intelligent irrigation solutions for managing water usage, monitoring field conditions, and improving agricultural resource efficiency.",
        },
        {
          id: 5,
          uuid: "b2c46e97-5013-4d8a-8e7f-41a0d6285b39",
          title: "Sustainable Farming",
          description:
            "Data-driven solutions for optimizing fertilizers, seeds, water, and resources while supporting sustainable agricultural practices.",
        },
      ],
    },
    phases: [
      {
        id: 1,
        uuid: "7ab3510e-9c68-4f25-b134-d08e6a72015b",
        title: "Grow Smarter",
        focus: "Precision Agriculture",
        description:
          "Drone, GIS, satellite, and sensor technologies provide detailed field insights for precision applications, crop monitoring, and optimized agricultural operations.",
      },
      {
        id: 2,
        uuid: "e14026cf-b573-48d9-a0e6-359d7b41028c",
        title: "Monitor Smarter",
        focus: "Farm Intelligence",
        description:
          "AI-powered analytics, image processing, and IoT monitoring provide insights into crop health, soil conditions, pests, diseases, and field performance.",
      },
      {
        id: 3,
        uuid: "58d9f062-4e31-47ba-96c0-1b74a3e60d92",
        title: "Optimize Smarter",
        focus: "Sustainable Resources",
        description:
          "Yield forecasting, smart irrigation, fertilizer optimization, and resource analytics improve productivity while reducing waste and supporting sustainable farming.",
      },
    ],
  },
];
