import type { Solution } from "@/types/features/solutions";
import type { SuccessStoriesUnderSection } from "@/types/shared/success-stories-under-section";

export const solutions: Solution[] = [
  {
    id: 1,
    uuid: "a7f3c19e-52b8-4d06-9e41-3c8b7d502f6a",
    title: "Network Security",
    image: "/icons/solutions/network-security.svg",
    description: "Comprehensive protection for perimeter, endpoint, and cloud.",
    highlights: [
      {
        uuid: "f1d8a35c-0b76-4e29-9a41-63c07e2b5d84",
        label: "Zero-Trust Access & Identity Control",
        image: "/icons/check.svg",
      },
      {
        uuid: "4a92c7e0-5d13-48b6-b70f-91e4a836c25d",
        label: "24/7 Threat Monitoring & Detection",
        image: "/icons/check.svg",
      },
      {
        uuid: "8c05f6b3-7e41-4290-85da-2f6b9c0d374e",
        label: "Endpoint & Cloud Workload Protection",
        image: "/icons/check.svg",
      },
      {
        uuid: "b63e0947-1c58-4a3d-92f0-7d81e5a4c063",
        label: "Automated Incident Containment & Response",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 1,
      uuid: "0b4e7c25-9f18-4a63-8d07-2e51b93c4a70",
      title: "Network Security Platform",
      description:
        "Defending distributed enterprise networks through layered detection, zero-trust access, and continuous monitoring built for organizations that cannot afford an open door.",
      image: "/industry/netword_security.png",
      items: [
        { title: "24/7", description: "Monitoring" },
        { title: "99.9%", description: "Threat Coverage" },
        { title: "85%", description: "Faster Response" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a multinational financial group, operated a perimeter security model that no longer matched how their people actually worked. Remote staff, third-party contractors, and cloud workloads had all grown well beyond the boundary the original architecture was designed to defend.\n\nWe replaced that boundary with a zero-trust architecture in which every request is authenticated and authorized on its own merits. Detection, response, and access control now run from a single console, and the security team sees the whole estate rather than one segment of it.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Financial Services",
        Solution: "Cybersecurity",
        Deployment: "Hybrid (On-Prem + Cloud)",
        Platform: "Web & Desktop",
        Duration: "8 Months",
        "Tech Stack": "Go, Python, Kubernetes, Elastic",
      },
    },
    experience: {
      title: "Defense in Depth",
      description:
        "Security controls layered so that no single failure exposes the network, with visibility at every tier.",
      image: "/industry/netword_security.png",
      items: [
        {
          title: "Zero-Trust Access",
          description:
            "Every request authenticated and authorized regardless of where it originates.",
        },
        {
          title: "Continuous Threat Detection",
          description:
            "Behavioural analytics that surface intrusions the signature rules miss.",
        },
        {
          title: "Automated Containment",
          description:
            "Compromised endpoints isolated from the network within seconds of detection.",
        },
      ],
    },
    testimonial: {
      quote:
        "Tech Avenue didn't just build us a portal; they transformed our entire educational philosophy into a digital experience. The AI recommendations alone have increased student engagement by nearly 50%.",
      name: "Amina Hassan",
      role: "Chief Information Security Officer, Meridian Financial",
      avatar: "/about_image.png",
    },
  },
  {
    id: 2,
    uuid: "5b21e8d4-9c73-4a1f-b60e-27d4f9a31c85",
    title: "Business Consulting Services",
    image: "/icons/solutions/business-consulting-services.svg",
    description: "Strategic advisory to align operations with growth targets.",
    highlights: [
      {
        uuid: "27b4d9f1-3a60-4c85-b19e-5f70c286a4d3",
        label: "Technology Assessments & Estate Reviews",
        image: "/icons/check.svg",
      },
      {
        uuid: "9e10c5a8-72b6-4f03-91d4-8a35e0c7b26f",
        label: "Enterprise Architecture Design",
        image: "/icons/check.svg",
      },
      {
        uuid: "6d3f81a5-4e07-42b9-8c16-0b95e7d3f2c8",
        label: "Transformation Roadmaps & Sequencing",
        image: "/icons/check.svg",
      },
      {
        uuid: "c58a2607-9b34-4df1-a075-3e62b8c1904f",
        label: "Operating Model & Change Enablement",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 2,
      uuid: "f83a0d67-4b12-49e5-a370-6c94e2b1d508",
      title: "Business Consulting Services",
      description:
        "Turning strategy into an operating model that holds, through technology assessments, enterprise architecture, and transformation roadmaps organizations can actually execute.",
      image: "/industry/consulting_services.png",
      items: [
        { title: "200+", description: "Engagements" },
        { title: "94%", description: "Client Retention" },
        { title: "30%", description: "Cost Reduction" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a regional conglomerate spanning five business units, had ambitious growth targets and no shared view of the technology needed to reach them. Each unit was buying its own systems, and the duplication was expensive and invisible.\n\nWe ran a full estate assessment, built a common enterprise architecture, and produced a three-year roadmap sequenced by business value rather than by vendor renewal date. The group now makes technology decisions once, centrally, against a plan everyone has signed.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Diversified Holdings",
        Solution: "Technology Consulting",
        Deployment: "Advisory Engagement",
        Platform: "Enterprise-Wide",
        Duration: "5 Months",
        "Tech Stack": "ServiceNow, Power BI, Jira, Confluence",
      },
    },
    experience: {
      title: "Advisory That Sticks",
      description:
        "Recommendations delivered with the sequencing, ownership, and measurement needed to survive contact with the business.",
      image: "/industry/consulting_services.png",
      items: [
        {
          title: "Evidence-Based Assessment",
          description:
            "Current-state findings grounded in system data, not stakeholder impressions.",
        },
        {
          title: "Sequenced Roadmaps",
          description:
            "Initiatives ordered by dependency and value so early wins fund later phases.",
        },
        {
          title: "Embedded Handover",
          description:
            "Internal teams trained to own the plan before the engagement closes.",
        },
      ],
    },
    testimonial: {
      quote:
        "Most consultants hand you a deck and leave. Tech Avenue handed us a roadmap our own teams could run, and stayed until they were running it.",
      name: "Daniel Okafor",
      role: "Group Chief Operating Officer, Harbour Industries",
      avatar: "/about_image.png",
    },
  },
  {
    id: 3,
    uuid: "e94d0a76-1f52-4b83-8c25-6a710e4bd93f",
    title: "Smart Infrastructure Solutions",
    image: "/icons/solutions/smart-infrastructure-solutions.svg",
    description: "Intelligent building and campus systems built to scale.",
    highlights: [
      {
        uuid: "3f7c0b92-8d45-41e6-a2b7-59e04c8d1736",
        label: "Unified Building Management Console",
        image: "/icons/check.svg",
      },
      {
        uuid: "a04e6d18-2f93-45c7-b830-7c15e9a26d40",
        label: "Digital Twin Modelling & Simulation",
        image: "/icons/check.svg",
      },
      {
        uuid: "5b81f4c7-6a20-49d3-8e15-0f37b6c24e9a",
        label: "IoT Sensor Networks & Energy Monitoring",
        image: "/icons/check.svg",
      },
      {
        uuid: "e2960c5b-4d78-4103-97af-6b48d105e372",
        label: "Predictive Maintenance & Asset Lifecycle",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 3,
      uuid: "c1750fe8-2a94-4b36-90d7-4e83b6205c1a",
      title: "Smart Infrastructure Platform",
      description:
        "Connecting building systems, digital twins, and asset records into one operating picture, so campuses are run from live conditions rather than last month's report.",
      image: "/verticles/intelligent_infrastructure.png",
      items: [
        { title: "40+", description: "Connected Sites" },
        { title: "35%", description: "Energy Saved" },
        { title: "60%", description: "Fewer Callouts" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a property group operating a mixed portfolio of offices and retail sites, had building management systems from four different eras. Each console reported only to itself, and facilities staff were physically walking sites to establish what was running.\n\nWe integrated every plant and control system behind a common data layer, added a digital twin of each property, and built the dashboards that let one team operate the whole portfolio. Faults are now detected centrally and dispatched with the asset history already attached.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Real Estate",
        Solution: "Smart Infrastructure",
        Deployment: "Cloud (AWS)",
        Platform: "Web & Mobile",
        Duration: "10 Months",
        "Tech Stack": "React, .NET, InfluxDB, IoT Hub",
      },
    },
    experience: {
      title: "Buildings That Report Themselves",
      description:
        "Operational data surfaced where decisions are made, with the context needed to act on it immediately.",
      image: "/verticles/intelligent_infrastructure.png",
      items: [
        {
          title: "Unified Building Console",
          description:
            "Every plant and control system monitored from a single portfolio view.",
        },
        {
          title: "Digital Twin Modelling",
          description:
            "Live models that let teams test changes before touching the real asset.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Interventions scheduled from equipment condition rather than the calendar.",
        },
      ],
    },
    testimonial: {
      quote:
        "We used to send engineers across the city to find out whether a chiller was running. Now we know before they leave the office, and usually before it fails.",
      name: "Claire Devereux",
      role: "Director of Facilities, Northgate Properties",
      avatar: "/about_image.png",
    },
  },
  {
    id: 4,
    uuid: "2c68b3f0-7d41-49ea-95b7-08f3c6d21a54",
    title: "Learning Management System",
    image: "/icons/solutions/learning-management-system.svg",
    description: "Deliver, track, and measure training across your workforce.",
    highlights: [
      {
        uuid: "7c3b95e0-1a64-4d28-b0f9-46e28c517b3d",
        label: "Online Learning & Course Management",
        image: "/icons/check.svg",
      },
      {
        uuid: "1e58d0a4-9c37-4b61-85e2-30f7b9c6d148",
        label: "Progress Tracking & Certifications",
        image: "/icons/check.svg",
      },
      {
        uuid: "b90427fc-5e18-4a73-96d0-2c81f4e7053b",
        label: "Virtual Classrooms & Mobile Learning",
        image: "/icons/check.svg",
      },
      {
        uuid: "48f1c6a2-0d95-4e37-81b6-5a70e3d92c48",
        label: "AI-Powered Skills Assessment & Analytics",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 4,
      uuid: "9d4b1a03-6e57-42c8-b019-7f36a5c94e2d",
      title: "Learning Management System (LMS)",
      description:
        "Empowering the next generation of digital education through a scalable, AI-driven platform designed for enterprise workforce development and global academic excellence.",
      image: "/industry/education.png",
      items: [
        { title: "100k+", description: "Learners" },
        { title: "99.9%", description: "Availability" },
        { title: "70%", description: "Admin Reduction" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a leading multinational education provider, faced significant hurdles with their legacy learning infrastructure. We were tasked with building a modern, cloud-native LMS that could scale globally while providing a personalized experience through artificial intelligence.\n\nThe objective was to replace fragmented systems with a unified ecosystem that automates administrative tasks, provides real-time analytics for stakeholders, and delivers a seamless learning journey across all devices.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "EdTech",
        Solution: "Software Development",
        Deployment: "Cloud (Azure)",
        Platform: "Web & Mobile",
        Duration: "6 Months",
        "Tech Stack": "React, Node.js, PostgreSQL, AI/ML",
      },
    },
    experience: {
      title: "Human-Centric Experience",
      description:
        "Designing intuitive experiences that prioritize clarity, accessibility, usability, and user engagement.",
      image: "/industry/education.png",
      items: [
        {
          title: "Simplified Navigation",
          description:
            "Reduced cognitive load by limiting top-level menu items and using a contextual sidebar.",
        },
        {
          title: "WCAG 2.1 Compliance",
          description:
            "Ensuring learning is accessible to all students, including those with visual or motor impairments.",
        },
        {
          title: "Personalized Journeys",
          description:
            "Adaptive interfaces that change based on user roles—admin, instructor, or learner.",
        },
      ],
    },
    testimonial: {
      quote:
        "Tech Avenue didn't just build us a portal; they transformed our entire educational philosophy into a digital experience. The AI recommendations alone have increased student engagement by nearly 50%.",
      name: "Dr. Robert Chen",
      role: "Chief Learning Officer, Global EduCorp",
      avatar: "/about_image.png",
    },
  },
  {
    id: 5,
    uuid: "84f1d5c9-3a07-4e62-b18d-5c92074fe3b6",
    title: "Smart Agriculture Platform",
    image: "/icons/solutions/smart-agriculture-platform.svg",
    description: "Sensor-driven insight for higher yield and lower waste.",
    highlights: [
      {
        uuid: "0a67e3d5-8b14-42f9-a3c7-61d95b027e4a",
        label: "Field Sensor Networks & Offline Capture",
        image: "/icons/check.svg",
      },
      {
        uuid: "d5c81f43-2079-4b6e-95a0-8e13c7f4062b",
        label: "Plot-Level Soil & Moisture Insight",
        image: "/icons/check.svg",
      },
      {
        uuid: "62e094a7-b358-41cd-807f-4a29d6b13e50",
        label: "Irrigation & Input Optimization",
        image: "/icons/check.svg",
      },
      {
        uuid: "9f4a72b6-0e51-4837-b6d2-73c08e5a1f96",
        label: "Farm-to-Buyer Traceability",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 5,
      uuid: "7e206c48-b3d9-4157-8a62-19f4e0b73c85",
      title: "Smart Agriculture Platform",
      description:
        "Bringing field sensors, machinery, and supply chain records into one system so growers act on current conditions and can prove exactly how their produce was grown.",
      image: "/verticles/smart_africulture.png",
      items: [
        { title: "25%", description: "Yield Increase" },
        { title: "40%", description: "Water Saved" },
        { title: "12k", description: "Hectares Managed" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, an agricultural cooperative representing several hundred growers, was making irrigation and input decisions from weekly paper reports. By the time the data reached anyone who could act on it, the growing conditions it described had already changed.\n\nWe deployed a field sensor network with offline-first collection, so readings are captured even where there is no mobile coverage and synced when it returns. Growers now receive irrigation and fertilizer guidance based on measured need, and every batch is traceable back to the plot and season it came from.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Agriculture",
        Solution: "IoT & Analytics",
        Deployment: "Cloud (AWS) + Edge",
        Platform: "Mobile & Web",
        Duration: "7 Months",
        "Tech Stack": "React Native, Python, TimescaleDB, LoRaWAN",
      },
    },
    experience: {
      title: "Built for the Field",
      description:
        "Tools designed for the conditions farms actually work in, not the conditions software is usually demonstrated in.",
      image: "/verticles/smart_africulture.png",
      items: [
        {
          title: "Offline-First Capture",
          description:
            "Readings recorded without coverage and synced automatically when it returns.",
        },
        {
          title: "Plot-Level Insight",
          description:
            "Soil, moisture, and crop data resolved to individual plots rather than whole farms.",
        },
        {
          title: "Farm-to-Buyer Traceability",
          description:
            "Provenance carried through the supply chain without additional paperwork.",
        },
      ],
    },
    testimonial: {
      quote:
        "Our growers were sceptical of anything that needed a signal. Tech Avenue built something that works in the field first and syncs later, and that is why they actually use it.",
      name: "Mateo Alvarez",
      role: "Operations Director, Valle Verde Cooperative",
      avatar: "/about_image.png",
    },
  },
  {
    id: 6,
    uuid: "d306a2e8-6b95-4137-a4f0-91e58c7d206b",
    title: "AI & Software Solutions",
    image: "/icons/solutions/ai-software-solutions.svg",
    description: "Custom platforms and models tailored to your workflows.",
    highlights: [
      {
        uuid: "3d90b5e7-4c26-4f18-a97b-05e14c8d267a",
        label: "Generative AI & Intelligent Assistants",
        image: "/icons/check.svg",
      },
      {
        uuid: "c47e81a0-9b52-4d36-80f1-6a93e5c74b28",
        label: "Predictive Models & Computer Vision",
        image: "/icons/check.svg",
      },
      {
        uuid: "80b26f34-1e07-49a5-b6c8-2d54a9e03f61",
        label: "Human-in-the-Loop Review Workflows",
        image: "/icons/check.svg",
      },
      {
        uuid: "e51c3a89-7d40-42b6-95e3-1f68b0c4a75d",
        label: "Continuous Evaluation & Explainability",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 6,
      uuid: "b52ce794-08a1-463f-9d84-3a67e1c05b29",
      title: "AI & Software Solutions",
      description:
        "Designing and shipping intelligent systems that automate the work worth automating, from generative assistants and predictive models to the platforms that keep them running in production.",
      image: "/verticles/ai_and_machine_learning.png",
      items: [
        { title: "150+", description: "Models Deployed" },
        { title: "60%", description: "Process Automated" },
        { title: "4x", description: "Faster Delivery" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a logistics operator handling millions of shipments a year, had a document-heavy exceptions process that consumed an entire back-office team. Every delayed or mismatched consignment was resolved by a human reading scanned paperwork.\n\nWe built a document understanding pipeline that classifies and extracts the relevant fields, routes clear cases automatically, and escalates only genuine ambiguity to a person. The back-office team now handles the exceptions that need judgement and nothing else.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Logistics",
        Solution: "Artificial Intelligence",
        Deployment: "Cloud (GCP)",
        Platform: "Web & API",
        Duration: "9 Months",
        "Tech Stack": "Python, PyTorch, FastAPI, BigQuery",
      },
    },
    experience: {
      title: "Intelligence in Production",
      description:
        "Models built to be operated, monitored, and corrected, not just demonstrated once and handed over.",
      image: "/verticles/ai_and_machine_learning.png",
      items: [
        {
          title: "Human-in-the-Loop Review",
          description:
            "Low-confidence predictions routed to people instead of guessed at.",
        },
        {
          title: "Continuous Evaluation",
          description:
            "Model accuracy tracked against live outcomes and retrained on drift.",
        },
        {
          title: "Explainable Decisions",
          description:
            "Every automated outcome traceable to the evidence that produced it.",
        },
      ],
    },
    testimonial: {
      quote:
        "They were the first partner who talked to us about what happens when the model is wrong. That is the reason it is still running two years later.",
      name: "Priya Raghunathan",
      role: "VP of Operations, Continental Freight",
      avatar: "/about_image.png",
    },
  },
  {
    id: 7,
    uuid: "71bc4f83-0e26-45d9-8a73-b4c62f019d75",
    title: "E-Government Solutions",
    image: "/icons/solutions/e-government-solutions.svg",
    description: "Digital citizen services that are secure and accessible.",
    highlights: [
      {
        uuid: "16f8c073-5a29-4e84-b1d6-70a35e9c2b41",
        label: "Single Verified Citizen Identity",
        image: "/icons/check.svg",
      },
      {
        uuid: "72d05b9e-3c61-478f-a0b4-59e17c8d3620",
        label: "Cross-Department Case Management",
        image: "/icons/check.svg",
      },
      {
        uuid: "af31e6c8-0d75-4923-86b1-4c60f9a25e73",
        label: "WCAG-Compliant Accessible Services",
        image: "/icons/check.svg",
      },
      {
        uuid: "5c907e21-8b46-4d0a-93f7-2e68b1c05a94",
        label: "Complete Audit Trail & Oversight Reporting",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 7,
      uuid: "3af8b160-5c27-4e93-b70a-8d21f4c6903e",
      title: "E-Government Solutions",
      description:
        "Delivering citizen services that are secure, accessible, and auditable, from single-identity portals through to the case management systems working behind them.",
      image: "/verticles/e_government_services.png",
      items: [
        { title: "2M+", description: "Citizens Served" },
        { title: "AA", description: "WCAG Rating" },
        { title: "75%", description: "Less Paperwork" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a national ministry responsible for several public-facing services, required citizens to register separately with each department. The same person existed as four unconnected records, and each service had its own queue, form, and evidence requirements.\n\nWe delivered a single verified identity that carries across departments, along with a shared case management layer behind it. Citizens complete one registration, departments exchange records under governed rules, and every access is logged for oversight reporting.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Public Sector",
        Solution: "Digital Government",
        Deployment: "Sovereign Cloud",
        Platform: "Web & Mobile",
        Duration: "14 Months",
        "Tech Stack": "Angular, Java, PostgreSQL, Keycloak",
      },
    },
    experience: {
      title: "Services for Every Citizen",
      description:
        "Public services designed to work for the whole population, on the devices and connections people actually have.",
      image: "/verticles/e_government_services.png",
      items: [
        {
          title: "One Verified Identity",
          description:
            "A single citizen record recognised across every participating department.",
        },
        {
          title: "Accessibility by Default",
          description:
            "Every release tested against assistive technology before it ships.",
        },
        {
          title: "Complete Audit Trail",
          description:
            "Each transaction and record access attributed and retained for oversight.",
        },
      ],
    },
    testimonial: {
      quote:
        "The measure of this project is that citizens stopped calling us to ask which department they needed. The platform simply knows.",
      name: "Hana Al-Rashid",
      role: "Director of Digital Services, Ministry of Public Administration",
      avatar: "/about_image.png",
    },
  },
  {
    id: 8,
    uuid: "3e57c810-4d9b-42f6-b085-7a13e9c46082",
    title: "Telecom Intelligence Solutions",
    image: "/icons/solutions/telecom-intelligence-solutions.svg",
    description: "Network analytics that turn traffic data into decisions.",
    highlights: [
      {
        uuid: "24b8e0f6-7c31-45a9-b073-8e51d6c92a30",
        label: "Correlated Network Fault View",
        image: "/icons/check.svg",
      },
      {
        uuid: "9013a7cd-5e28-4b64-82f1-6c04b9e73d15",
        label: "Subscriber Impact Mapping",
        image: "/icons/check.svg",
      },
      {
        uuid: "6ea45c02-1b97-483d-95c6-0f72a8d31b64",
        label: "Real-Time Service Quality Analytics",
        image: "/icons/check.svg",
      },
      {
        uuid: "b7d31e58-4a06-42f7-8b09-3e64c1a05f27",
        label: "Predictive Maintenance & Outage Prevention",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 8,
      uuid: "6c0d94a7-1b38-4e5e-8a26-05e73b1cf942",
      title: "Telecom Intelligence Solutions",
      description:
        "Giving operators a live picture of network, service, and subscriber health, so faults are found and fixed before customers ever pick up the phone.",
      image: "/verticles/telecom_intelligence.png",
      items: [
        { title: "50M+", description: "Events Per Hour" },
        { title: "45%", description: "Fewer Outages" },
        { title: "3min", description: "Fault Detection" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a national mobile operator, ran network assurance and customer care as separate disciplines with separate tooling. Faults were routinely reported by subscribers before they appeared in monitoring, which meant every incident began with a complaint.\n\nWe correlated telemetry from every node into a single fault view and connected it to the care platform. Degradation is now identified from the network itself, linked to the customers it affects, and dispatched with that context already attached.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Telecommunications",
        Solution: "Network Analytics",
        Deployment: "Hybrid (On-Prem + Cloud)",
        Platform: "Web & API",
        Duration: "11 Months",
        "Tech Stack": "Kafka, Flink, ClickHouse, Grafana",
      },
    },
    experience: {
      title: "Assurance Before Complaint",
      description:
        "Network conditions surfaced early enough that the operator acts first and the subscriber never has to.",
      image: "/verticles/telecom_intelligence.png",
      items: [
        {
          title: "Correlated Fault View",
          description:
            "Telemetry from every node resolved into one incident rather than hundreds of alarms.",
        },
        {
          title: "Subscriber Impact Mapping",
          description:
            "Each fault linked to the customers and services it actually degrades.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Degradation scheduled out before it becomes a reportable outage.",
        },
      ],
    },
    testimonial: {
      quote:
        "Our care team used to learn about outages from Twitter. Now they get a briefing from the network before the first call lands.",
      name: "Tomas Lindqvist",
      role: "Head of Network Operations, Nordvik Telecom",
      avatar: "/about_image.png",
    },
  },
  {
    id: 9,
    uuid: "c0942b6f-8e15-4370-91da-6b48f2071e93",
    title: "Human Capital Management",
    image: "/icons/solutions/human-capital-management.svg",
    description: "Hiring, payroll, and performance in a single system.",
    highlights: [
      {
        uuid: "0f52c81b-6d34-4907-a2e5-84b17c60d3f9",
        label: "Unified Employee Record",
        image: "/icons/check.svg",
      },
      {
        uuid: "83a6d094-2f71-4e58-b06c-5917e3a84d20",
        label: "Recruitment & Onboarding Workflows",
        image: "/icons/check.svg",
      },
      {
        uuid: "d419b7e3-8c05-42a6-91f7-60d38b5c27ae",
        label: "Payroll & Manager Self-Service",
        image: "/icons/check.svg",
      },
      {
        uuid: "5e08f3a7-1b96-4c40-87d2-3a71e0c69b58",
        label: "Performance Reviews & Development Tracking",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 9,
      uuid: "d17e3fb5-9042-4a68-b3c1-7e50e92d648f",
      title: "Human Capital Management",
      description:
        "Bringing recruitment, payroll, performance, and development into one record, so people teams spend their time on people rather than on reconciling systems.",
      image: "/industry/human_capital_management.png",
      items: [
        { title: "30k+", description: "Employees Managed" },
        { title: "50%", description: "Faster Hiring" },
        { title: "90%", description: "Adoption Rate" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a fast-growing services group, was running recruitment in one tool, payroll in another, and performance reviews in spreadsheets. Every reporting cycle required someone to reconcile three versions of the same headcount by hand.\n\nWe consolidated the full employee lifecycle into a single record, from application through to development plan. Payroll draws from the same source as headcount reporting, and managers see one accurate picture of their team instead of three approximate ones.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Professional Services",
        Solution: "Workforce Technology",
        Deployment: "Cloud (Azure)",
        Platform: "Web & Mobile",
        Duration: "8 Months",
        "Tech Stack": "React, .NET, SQL Server, Azure AD",
      },
    },
    experience: {
      title: "One Record Per Person",
      description:
        "An employee lifecycle held in a single system, so every team is working from the same facts.",
      image: "/industry/human_capital_management.png",
      items: [
        {
          title: "Unified Employee Record",
          description:
            "Hiring, payroll, and performance drawn from one authoritative source.",
        },
        {
          title: "Manager Self-Service",
          description:
            "Approvals and team data handled directly rather than routed through HR.",
        },
        {
          title: "Development Tracking",
          description:
            "Skills and progression measured continuously instead of at review time.",
        },
      ],
    },
    testimonial: {
      quote:
        "Our monthly headcount reconciliation used to take three days. It now takes nobody any time at all, because there is only one number.",
      name: "Grace Muteki",
      role: "Group HR Director, Ardent Services",
      avatar: "/about_image.png",
    },
  },
  {
    id: 10,
    uuid: "6fa85d31-b207-4c94-8e63-0d29a7f51c48",
    title: "Energy & Climate Solutions",
    image: "/icons/solutions/energy-climate-solutions.svg",
    description: "Monitor consumption and meet sustainability commitments.",
    highlights: [
      {
        uuid: "7ab30945-c218-4de6-90b3-2f57e6c14a80",
        label: "Interval Meter Data Ingestion at Scale",
        image: "/icons/check.svg",
      },
      {
        uuid: "c2e75b18-0946-43af-85d0-7e31b9c4602f",
        label: "Asset-Level Consumption Attribution",
        image: "/icons/check.svg",
      },
      {
        uuid: "48910de5-7b62-4c03-9a17-5d0e26b83f74",
        label: "Emissions Tracking & Target Management",
        image: "/icons/check.svg",
      },
      {
        uuid: "e6053ca9-3d17-482b-b64f-90a71c58d326",
        label: "Continuous ESG & Regulatory Disclosure",
        image: "/icons/check.svg",
      },
    ],
    header: {
      id: 10,
      uuid: "2b96e0c4-7d13-458a-9e02-6c41e83b7d50",
      title: "Energy & Climate Solutions",
      description:
        "Measuring consumption, emissions, and generation across dispersed operations, so sustainability commitments are managed with the same rigour as financial ones.",
      image: "/verticles/sustainable_energy.png",
      items: [
        { title: "1.2M", description: "Meters Ingested" },
        { title: "28%", description: "Emissions Cut" },
        { title: "Daily", description: "ESG Reporting" },
      ],
    },
    overview: {
      title: "Solution Overview",
      description:
        "Our client, a utility operating across generation and distribution, was reporting emissions annually from data assembled manually across dozens of sites. The figures were defensible but always months out of date, which made them useless for actually reducing anything.\n\nWe built an ingestion layer that takes meter and sensor data at interval resolution, attributes it to sites and assets, and reports continuously. Sustainability targets are now tracked against live consumption, and the annual disclosure is an export rather than a project.",
    },
    keyInfo: {
      title: "Key Info",
      items: {
        Industry: "Energy & Utilities",
        Solution: "Sustainability Technology",
        Deployment: "Cloud (AWS)",
        Platform: "Web & API",
        Duration: "9 Months",
        "Tech Stack": "Python, Spark, Snowflake, React",
      },
    },
    experience: {
      title: "Measured, Not Estimated",
      description:
        "Environmental performance tracked from metered reality rather than reconstructed once a year.",
      image: "/verticles/sustainable_energy.png",
      items: [
        {
          title: "Interval Data at Scale",
          description:
            "Meter readings ingested and settled without a growing backlog.",
        },
        {
          title: "Asset-Level Attribution",
          description:
            "Consumption and emissions assigned to the site and asset producing them.",
        },
        {
          title: "Continuous Disclosure",
          description:
            "Regulatory and ESG reporting generated from live data on demand.",
        },
      ],
    },
    testimonial: {
      quote:
        "We stopped arguing about whose estimate was right. The platform measures it, and the conversation moved on to what we were going to do about it.",
      name: "Eleanor Whitfield",
      role: "Head of Sustainability, Cascade Energy Group",
      avatar: "/about_image.png",
    },
  },
];

export const solutionSuccessStories: SuccessStoriesUnderSection = {
  title: "Success Stories under this Solution",
  description:
    "Proven outcomes delivered across global financial, healthcare, and technology infrastructures.",
  items: [
    {
      id: 1,
      uuid: "3f8c1d24-9b07-4e51-a6d3-72c5e08f9143",
      image: "/industry/netword_security.png",
      industry: {
        id: 1,
        uuid: "a41d8f70-2e63-4b95-8c07-53f1e9a6d284",
        title: "Banking",
      },
      solution: {
        id: 1,
        uuid: "7b30c592-6a14-4f80-9d23-e85c4b17f036",
        title: "Cybersecurity",
      },
      title: "Enterprise Threat Detection Platform",
      description:
        "A multi-layered AI-driven security framework implemented for a global Tier-1 bank to mitigate zero-day vulnerabilities.",
    },
    {
      id: 2,
      uuid: "c1a94e67-5d38-42b0-8f19-6ab30d7c25e8",
      image: "/industry/telecommunications.png",
      industry: {
        id: 2,
        uuid: "e6924c31-8b57-4d02-a719-3c0f5d86b471",
        title: "Telecom",
      },
      solution: {
        id: 2,
        uuid: "5c81f4a6-0d29-473b-96e8-b247a1c30f95",
        title: "Smart Cities",
      },
      title: "5G Municipal Infrastructure",
      description:
        "Deploying next-gen connectivity across 500+ square kilometers for seamless urban IoT integration.",
    },
    {
      id: 3,
      uuid: "9e26b0f5-7c41-4a83-b52d-18f6c94a7d30",
      image: "/industry/e_government.png",
      industry: {
        id: 3,
        uuid: "2f57b9d4-3c80-46e1-8a95-7d16c0e4b382",
        title: "Government",
      },
      solution: {
        id: 3,
        uuid: "9a4e0c76-1b38-45d9-b072-8f63e2a5147c",
        title: "AI & Analytics",
      },
      title: "Predictive Governance Model",
      description:
        "Leveraging deep learning to optimize public resource allocation and emergency response times by 30%.",
    },
    {
      id: 4,
      uuid: "6d70a382-4f19-4c25-9b08-e35a1c72f4b6",
      image: "/about_image.png",
      industry: {
        id: 4,
        uuid: "c0f83a15-7d46-49b2-85e0-1a29b7c46d38",
        title: "Healthcare",
      },
      solution: {
        id: 4,
        uuid: "48b1d907-5e62-4c37-90af-6d35c821e094",
        title: "Cloud",
      },
      title: "Regional Health Cloud Migration",
      description:
        "Migrating patient-critical workloads to a compliant hybrid cloud with zero downtime across 12 hospitals.",
    },
    {
      id: 5,
      uuid: "b52f8c19-0a63-4d74-8e21-47c9b6d035fa",
      image: "/about_image.png",
      industry: {
        id: 5,
        uuid: "d739e2b8-4a10-4f65-b83c-05e7a1946cd2",
        title: "Manufacturing",
      },
      solution: {
        id: 5,
        uuid: "16ac5f83-9027-4e41-a5d6-83b0c7524fe1",
        title: "Automation",
      },
      title: "Smart Factory Control Suite",
      description:
        "Unifying plant floor telemetry into a single control suite that cut unplanned downtime by 42%.",
    },
  ],
};
