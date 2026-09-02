import type { Industry } from "@/types/features/industry";
import type { SuccessStoriesUnderSection } from "@/types/shared/success-stories-under-section";

export const industries: Industry[] = [
  {
    id: 1,
    uuid: "3f1a6c2e-9b47-4d18-8a52-71c0d5e4b901",
    title: "Government & Public Sector",
    description: "Citizen services built for scale, security, and compliance.",
    header: {
      title: "Government and Public Sector Digital Transformation",
      description:
        "Helping ministries, agencies, and municipalities deliver citizen services that are secure, accessible, and resilient, while meeting the transparency and compliance standards public institutions are held to.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Citizen Services Built for Scale and Trust",
      description:
        "Public institutions carry rising service expectations and shrinking delivery windows at the same time. Tech Avenue modernizes government platforms end to end, from citizen-facing portals to the case management systems behind them, so agencies can serve more people, protect their data, and evidence every decision they make.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Secure Citizen Portals",
          description: "Single verified identity across every department.",
        },
        {
          title: "Auditable by Design",
          description: "Every transaction traceable for oversight reporting.",
        },
      ],
    },
    challenges: {
      title: "Critical Public Sector Challenges",
      description:
        "Modernizing essential services under strict procurement, accessibility, and data sovereignty obligations, without interrupting the programs citizens depend on.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Legacy Case Systems",
          description:
            "Decades-old records platforms that resist integration with modern digital services.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Data Sovereignty Rules",
          description:
            "Citizen data that must remain within national borders and approved facilities.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Accessibility Mandates",
          description:
            "Services required to work for every citizen, on every device and assistive technology.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Interagency Silos",
          description:
            "Departments holding the same citizen record in incompatible, unshared systems.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Procurement Timelines",
          description:
            "Multi-year approval cycles that outlast the technology they were written for.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Public Sector Solutions",
      description:
        "An integrated government delivery stack that unifies citizen identity, departmental data, and service workflows behind accessible interfaces and a fully auditable trail.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Unified Citizen Identity",
          description:
            "One verified identity that carries across every department and service.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Interagency Data Exchange",
          description:
            "Governed sharing between departments without duplicating records.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Accessible Service Design",
          description:
            "Interfaces tested against accessibility standards on every release.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Sovereign Cloud Hosting",
          description:
            "Workloads deployed inside approved national infrastructure.",
        },
      ],
    },
  },
  {
    id: 2,
    uuid: "8c74b1d9-2e35-4af6-9d10-6b83f7a2c542",
    title: "Information Technology",
    description: "Platform and product engineering for technology firms.",
    header: {
      title: "Information Technology and Digital Innovation",
      description:
        "Empowering enterprises, technology companies, and public organizations with intelligent digital solutions that accelerate innovation, strengthen operations, and enable continuous business transformation.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Platform Engineering That Ships Faster",
      description:
        "Technology firms compete on release velocity, and velocity comes from the platform underneath the product. Tech Avenue builds the delivery pipelines, service architectures, and developer tooling that let engineering teams move from idea to production without trading away reliability.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Developer Velocity",
          description: "Tooling that removes friction from every release.",
        },
        {
          title: "Resilient Architecture",
          description: "Services designed to degrade gracefully under load.",
        },
      ],
    },
    challenges: {
      title: "Critical Technology Challenges",
      description:
        "Sustaining release velocity and platform reliability while managing technical debt, cloud spend, and an engineering market that never stops moving.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Accumulated Technical Debt",
          description:
            "Shortcuts taken during early growth now slowing every new feature.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Cloud Cost Sprawl",
          description:
            "Infrastructure spend growing faster than the workloads that justify it.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Release Bottlenecks",
          description:
            "Manual approval gates holding finished work back from production.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Talent Retention",
          description:
            "Competing for experienced engineers against every other firm in the market.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Toolchain Fragmentation",
          description:
            "Teams solving the same problem with incompatible tooling and standards.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Technology Solutions",
      description:
        "A platform engineering practice that standardizes delivery, observability, and infrastructure so product teams spend their time on product rather than plumbing.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Automated Delivery Pipelines",
          description:
            "Every commit tested, built, and released without manual gates.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Unified Observability",
          description:
            "Logs, metrics, and traces from every service in a single view.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Infrastructure as Code",
          description:
            "Environments reproduced identically from one versioned source.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Cloud Cost Governance",
          description:
            "Spend attributed to teams and reviewed before it compounds.",
        },
      ],
    },
  },
  {
    id: 3,
    uuid: "5d92e0a7-6c81-4b23-97ef-2a14d8b60c73",
    title: "Telecommunications",
    description: "Operator-grade tooling for networks under constant load.",
    header: {
      title: "Telecommunications and Network Modernization",
      description:
        "Supporting operators and service providers with network, operations, and customer platforms engineered for constant load, rapid rollout, and the reliability subscribers expect.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Operator-Grade Systems Under Constant Load",
      description:
        "Networks are judged in milliseconds and measured by the outages that never happened. Tech Avenue modernizes the operational and business support systems around the network, covering provisioning, assurance, billing, and customer care, so operators can launch services quickly and keep them running at carrier scale.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Carrier-Scale Reliability",
          description: "Systems built for sustained peak traffic.",
        },
        {
          title: "Rapid Service Rollout",
          description: "New offers live in days rather than quarters.",
        },
      ],
    },
    challenges: {
      title: "Critical Telecom Challenges",
      description:
        "Rolling out next-generation services across aging infrastructure while defending margins, subscriber loyalty, and the uptime commitments written into contracts.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Legacy Support Systems",
          description:
            "Provisioning and billing platforms that predate the services they now carry.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Network Spend Pressure",
          description:
            "Infrastructure investment rising faster than revenue per subscriber.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Subscriber Churn",
          description:
            "Customers switching on price and a single poor service experience.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Rollout Complexity",
          description:
            "New network generations layered on top of everything already deployed.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Assurance Blind Spots",
          description:
            "Faults reaching customers before they ever surface in monitoring.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Telecom Solutions",
      description:
        "A modernized operations layer connecting network telemetry, service provisioning, and customer experience, so faults are found and fixed before subscribers notice them.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Real-Time Network Assurance",
          description:
            "Live telemetry from every node correlated into one fault view.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Automated Provisioning",
          description:
            "Services activated end to end without manual handoffs between teams.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Converged Billing",
          description:
            "One rating and charging engine across every product line.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Predictive Maintenance",
          description:
            "Degradation scheduled out before it becomes a reportable outage.",
        },
      ],
    },
  },
  {
    id: 4,
    uuid: "b06f3a48-71d2-4e95-8c37-9f5e2b1a0d64",
    title: "Banking & Financial Services",
    description: "Secure systems for regulated financial institutions.",
    header: {
      title: "Banking and Financial Services Technology",
      description:
        "Building secure, regulated, always-available systems for banks, insurers, and payment providers, from core modernization through to real-time fraud defense.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Secure Systems for Regulated Institutions",
      description:
        "Financial institutions operate under scrutiny few other industries face: every transaction auditable, every outage reportable, every control evidenced. Tech Avenue modernizes core banking and payments infrastructure without loosening a single one of those obligations.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Regulatory Assurance",
          description: "Controls evidenced continuously, not at audit time.",
        },
        {
          title: "Real-Time Fraud Defense",
          description: "Suspicious activity stopped before settlement.",
        },
      ],
    },
    challenges: {
      title: "Critical Financial Services Challenges",
      description:
        "Modernizing core systems and payment rails while satisfying regulators, defending against automated fraud, and meeting expectations set by digital-native competitors.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Aging Core Systems",
          description:
            "Mainframe cores that every new digital channel must still be wired into.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Regulatory Reporting Load",
          description:
            "Evidence demands that grow with every new compliance framework.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Automated Fraud Attacks",
          description:
            "Attempts running at machine speed across every customer channel.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Real-Time Payment Demands",
          description:
            "Settlement expectations measured in seconds, around the clock.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Fragmented Customer Data",
          description:
            "Records scattered across decades of acquisitions and product silos.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Financial Services Solutions",
      description:
        "A regulated-grade platform combining real-time risk scoring, resilient payment processing, and continuous control evidence across every channel a customer can reach.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Real-Time Fraud Scoring",
          description:
            "Every transaction risk-scored before it reaches settlement.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Core Integration Layer",
          description:
            "Modern channels connected to the core without replacing it.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Continuous Compliance Evidence",
          description:
            "Controls captured as they run, ready for inspection at any time.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Resilient Payment Processing",
          description:
            "Failover paths that keep settlement moving through infrastructure outages.",
        },
      ],
    },
  },
  {
    id: 5,
    uuid: "e4718b53-0d6a-49c7-b218-3c9f6a5d7e20",
    title: "Healthcare",
    description: "Patient-centred technology that protects sensitive data.",
    header: {
      title: "Healthcare Technology and Patient Data Security",
      description:
        "Connecting hospitals, clinics, and health authorities with clinical systems that protect patient data, support clinicians at the point of care, and hold up under regulatory inspection.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Patient-Centred Technology That Protects Data",
      description:
        "Clinical software is used under time pressure by people whose attention belongs with the patient. Tech Avenue builds and integrates health systems that surface the right record at the right moment, keep protected health information encrypted end to end, and leave a complete trail of who accessed what.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Protected Health Data",
          description:
            "Patient records encrypted and access-logged throughout.",
        },
        {
          title: "Clinician-First Workflows",
          description: "Interfaces shaped around how care is actually given.",
        },
      ],
    },
    challenges: {
      title: "Critical Healthcare Challenges",
      description:
        "Delivering connected, safe care across fragmented clinical systems while protecting patient privacy and keeping services running through every hour of demand.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Fragmented Patient Records",
          description:
            "One patient held as several incomplete records across separate systems.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Privacy Regulation",
          description:
            "Strict rules governing how health data is stored, shared, and retained.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Clinical System Downtime",
          description:
            "Outages that reach directly into the delivery of patient care.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Interoperability Gaps",
          description:
            "Devices and systems unable to exchange a usable clinical record.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Administrative Load",
          description:
            "Documentation demands taking clinician time away from patients.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Healthcare Solutions",
      description:
        "An integrated clinical platform that unifies the patient record, secures every access to it, and gives care teams what they need without adding to their administrative load.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Unified Patient Record",
          description:
            "One longitudinal record assembled from every source system.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Standards-Based Interoperability",
          description:
            "Clinical exchange between systems and devices on open standards.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Access Auditing",
          description:
            "Every record view attributed, logged, and available for review.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Resilient Clinical Hosting",
          description:
            "Care systems that stay available through infrastructure failure.",
        },
      ],
    },
  },
  {
    id: 6,
    uuid: "27ac95f1-4b60-4d83-a5e9-8d012f7b6c34",
    title: "Education & Skill Development",
    description: "Learning platforms that widen access and track outcomes.",
    header: {
      title: "Education and Skill Development Platforms",
      description:
        "Helping institutions, training providers, and education ministries widen access to learning and prove the outcomes their programs actually deliver.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Learning Platforms That Widen Access",
      description:
        "Education technology succeeds when it reaches the learners who are hardest to reach. Tech Avenue builds platforms that work on modest devices and unreliable connections, keep learner data safe, and give institutions honest evidence of what their programs achieve.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Inclusive Access",
          description: "Learning that works on shared devices and weak links.",
        },
        {
          title: "Measurable Outcomes",
          description: "Progress tracked from enrollment through completion.",
        },
      ],
    },
    challenges: {
      title: "Critical Education Challenges",
      description:
        "Widening participation and demonstrating learning outcomes while working within fixed institutional budgets and safeguarding the data of a largely young user base.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Uneven Digital Access",
          description:
            "Learners working from shared devices and unreliable connections.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Learner Data Protection",
          description:
            "Safeguarding obligations that come with a largely young user base.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Disconnected Systems",
          description:
            "Enrollment, delivery, and assessment held in separate tools.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Completion Rates",
          description:
            "Learners starting programs far more often than they finish them.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Constrained Budgets",
          description:
            "Platform decisions made against fixed and scrutinized public funding.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Education Solutions",
      description:
        "A connected learning platform that carries a learner from enrollment to credential, keeps working when connections fail, and reports outcomes institutions can stand behind.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Low-Bandwidth Delivery",
          description:
            "Course content that loads and works over weak connections.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Unified Learner Journey",
          description:
            "Enrollment, delivery, and assessment held in one learner record.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Outcome Analytics",
          description:
            "Completion and attainment measured across every cohort.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Verifiable Credentials",
          description:
            "Qualifications employers can check without contacting the institution.",
        },
      ],
    },
  },
  {
    id: 7,
    uuid: "9b53d7c0-8e14-42f6-b073-5a6c1e8f4d29",
    title: "Construction & Smart Infrastructure",
    description: "Connected sites and buildings managed from one place.",
    header: {
      title: "Construction and Smart Infrastructure",
      description:
        "Connecting sites, assets, and building systems so projects are delivered on program and the infrastructure that results is operated from a single place.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Connected Sites and Buildings, Managed Centrally",
      description:
        "Construction runs on information that usually arrives late: a delay noticed at the weekly meeting, a clash found on site. Tech Avenue connects site telemetry, project data, and building management systems so decisions are made against what is happening now rather than what was reported last week.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Live Site Visibility",
          description: "Progress and plant status reported as it happens.",
        },
        {
          title: "Whole-Life Asset Data",
          description: "One record from design through to daily operation.",
        },
      ],
    },
    challenges: {
      title: "Critical Infrastructure Challenges",
      description:
        "Delivering complex projects on program and on budget while coordinating dispersed contractors, connected building systems, and the safety obligations that sit over all of it.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Fragmented Project Data",
          description:
            "Drawings, schedules, and costs held separately by each contractor.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Program Overruns",
          description:
            "Delays identified long after they became unavoidable on site.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Site Safety Oversight",
          description:
            "Compliance evidenced on paper, after the work has been done.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Disconnected Building Systems",
          description:
            "Plant and controls that each report only to their own console.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Asset Handover Gaps",
          description:
            "Operations teams inheriting finished buildings without usable data.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Infrastructure Solutions",
      description:
        "A connected delivery and operations platform bringing site telemetry, project records, and building systems together from groundworks through to facilities management.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Live Site Telemetry",
          description:
            "Plant, materials, and progress reported from the site itself.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Single Project Record",
          description:
            "One source of truth shared across every contractor on the job.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Integrated Building Management",
          description:
            "Every building system monitored and controlled from one console.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Digital Asset Handover",
          description:
            "Complete, structured asset data passed to operations on day one.",
        },
      ],
    },
  },
  {
    id: 8,
    uuid: "1e60f4b8-53a9-4c07-8d62-7b94e0a3c518",
    title: "Agriculture",
    description: "Sensor-driven insight for higher yield and lower waste.",
    header: {
      title: "Agriculture and Precision Farming Technology",
      description:
        "Bringing sensor data, field operations, and supply chain records together so growers can raise yield, reduce waste, and prove the provenance buyers now ask for.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Sensor-Driven Insight for Higher Yield",
      description:
        "Agricultural decisions are made against weather, soil, and market conditions that all change faster than the reporting around them. Tech Avenue connects field sensors, machinery, and supply chain systems so growers can act on current conditions and evidence exactly how their produce was grown.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Field-Level Insight",
          description: "Soil, moisture, and crop data at plot resolution.",
        },
        {
          title: "Traceable Provenance",
          description: "Produce tracked from the field through to the buyer.",
        },
      ],
    },
    challenges: {
      title: "Critical Agriculture Challenges",
      description:
        "Raising yield against volatile weather and input costs while meeting the traceability and sustainability evidence that buyers and regulators increasingly require.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Weather Volatility",
          description:
            "Growing conditions shifting faster than planting plans allow for.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Input Cost Pressure",
          description:
            "Fertilizer, fuel, and water applied without precise field feedback.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Connectivity Gaps",
          description:
            "Fields sitting well outside reliable mobile network coverage.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Traceability Requirements",
          description:
            "Buyers asking for provenance the existing paperwork cannot prove.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Post-Harvest Loss",
          description:
            "Yield lost in storage and transit between the field and the buyer.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Agriculture Solutions",
      description:
        "A precision agriculture platform that gathers field data even without connectivity, turns it into irrigation and input decisions, and carries provenance through to the buyer.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Field Sensor Networks",
          description:
            "Soil and moisture readings collected across every managed plot.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Offline-First Collection",
          description:
            "Data captured in the field and synced when coverage returns.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Input Optimization",
          description:
            "Water and fertilizer applied to measured need rather than schedule.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Farm-to-Buyer Traceability",
          description:
            "Every batch traceable back to the plot and season it came from.",
        },
      ],
    },
  },
  {
    id: 9,
    uuid: "6a2d81e4-b703-4f59-9c48-0e35d7b1a962",
    title: "Energy & Utilities",
    description: "Grid, metering, and distribution visibility in real time.",
    header: {
      title: "Energy and Utilities Digital Operations",
      description:
        "Giving generators, network operators, and utilities real-time visibility of grid, metering, and distribution operations as supply becomes steadily more distributed.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Grid and Distribution Visibility in Real Time",
      description:
        "Distributed generation has turned a predictable one-way grid into a network that changes direction through the day. Tech Avenue delivers the metering, forecasting, and control systems utilities need to balance that supply, keep outages short, and bill accurately at scale.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Live Grid Telemetry",
          description: "Load and generation visible across the whole network.",
        },
        {
          title: "Faster Outage Response",
          description: "Faults located and crews dispatched automatically.",
        },
      ],
    },
    challenges: {
      title: "Critical Energy Challenges",
      description:
        "Balancing increasingly distributed generation and demand while maintaining supply reliability, meeting regulatory obligations, and protecting critical national infrastructure.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Distributed Generation",
          description:
            "Supply entering the grid from thousands of small, variable sources.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Aging Grid Assets",
          description:
            "Infrastructure still operating well beyond its original design life.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Demand Volatility",
          description:
            "Consumption peaks that shift with weather, tariffs, and behaviour.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Infrastructure Threats",
          description:
            "Operational technology exposed to targeted and persistent attack.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Metering Data Volume",
          description:
            "Interval readings arriving faster than billing systems can settle them.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Energy Solutions",
      description:
        "An operational platform that ingests grid and meter telemetry at volume, forecasts demand against it, and gets crews to faults before customers pick up the phone.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Smart Metering at Scale",
          description:
            "Interval readings ingested and settled without a growing backlog.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Demand Forecasting",
          description:
            "Load predicted against weather, tariff, and historical usage.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Automated Fault Location",
          description:
            "Outages pinpointed on the network and dispatched immediately.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Operational Security Monitoring",
          description:
            "Control networks watched separately from corporate systems.",
        },
      ],
    },
  },
  {
    id: 10,
    uuid: "c85b0937-1a4e-4620-b7d3-2f16c9e08a45",
    title: "Oil & Gas",
    description: "Upstream and downstream operations with safer oversight.",
    header: {
      title: "Oil and Gas Operations Technology",
      description:
        "Supporting upstream and downstream operators with the monitoring, integrity, and safety systems that keep remote, hazardous operations under reliable oversight.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Upstream and Downstream Oversight, Safely",
      description:
        "Assets sit offshore, in the desert, and along pipelines crossing borders, all needing oversight from control rooms hundreds of kilometers away. Tech Avenue delivers the telemetry, integrity monitoring, and safety systems that make remote operations visible, predictable, and auditable.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Remote Asset Monitoring",
          description: "Wells, pipelines, and plant watched from one room.",
        },
        {
          title: "Integrity Assurance",
          description: "Equipment tracked against safe operating limits.",
        },
      ],
    },
    challenges: {
      title: "Critical Oil and Gas Challenges",
      description:
        "Running remote, hazardous, capital-intensive operations safely while meeting environmental obligations and holding down cost through volatile commodity cycles.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Remote Asset Isolation",
          description:
            "Critical equipment sited far from any engineer who can inspect it.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Equipment Integrity",
          description:
            "Corrosion and wear developing between scheduled inspection intervals.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Safety Compliance Evidence",
          description:
            "Permits and checks recorded manually and inconsistently across shifts.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Emissions Reporting",
          description:
            "Environmental obligations measured across widely dispersed sites.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Price Volatility",
          description:
            "Operating cost decisions made against unstable commodity revenue.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Oil and Gas Solutions",
      description:
        "A remote operations platform streaming asset telemetry to the control room, flagging integrity risk before it becomes failure, and capturing safety evidence as work happens.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Remote Telemetry",
          description:
            "Wells, pipelines, and plant streaming into one control room.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Predictive Integrity",
          description:
            "Corrosion and wear trends flagged well ahead of equipment failure.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "Digital Permit to Work",
          description:
            "Safety approvals captured, enforced, and evidenced on site.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Emissions Monitoring",
          description:
            "Environmental data measured and reported per site and asset.",
        },
      ],
    },
  },
  {
    id: 11,
    uuid: "4d19a7f2-6c58-4b31-90ae-8e27b5d3f016",
    title: "Manufacturing",
    description: "Connected production floors with real-time visibility.",
    header: {
      title: "Manufacturing and Industrial Automation",
      description:
        "Connecting production floors, supply chains, and quality systems so manufacturers can see output as it happens and intervene before a line comes to a stop.",
      backgroundImage: "/about_image.png",
    },
    overview: {
      title: "Connected Production Floors, in Real Time",
      description:
        "Most production problems are visible in the data long before they stop a line. Tech Avenue connects machines, quality checks, and supply chain systems into one operational view, so manufacturers can plan against real capacity and act while there is still time to act.",
      image: "/about_image.png",
      highlights: [
        {
          title: "Live Line Visibility",
          description: "Output, downtime, and quality reported per machine.",
        },
        {
          title: "Fewer Unplanned Stops",
          description: "Maintenance scheduled from real machine condition.",
        },
      ],
    },
    challenges: {
      title: "Critical Manufacturing Challenges",
      description:
        "Holding output and quality steady against unplanned downtime, supply chain disruption, and production data locked inside machines never designed to share it.",
      items: [
        {
          icon: "/icons/evolving-cyber-threats.svg",
          title: "Unplanned Downtime",
          description:
            "Machines failing between scheduled maintenance windows.",
        },
        {
          icon: "/icons/regulatory-compliance.svg",
          title: "Disconnected Machinery",
          description:
            "Equipment from different eras and vendors that cannot report together.",
        },
        {
          icon: "/icons/legacy-infrastructure.svg",
          title: "Supply Chain Disruption",
          description:
            "Component shortages surfacing only once the line has stopped.",
        },
        {
          icon: "/icons/customer-expectations.svg",
          title: "Quality Variance",
          description:
            "Defects identified after a batch has already been completed.",
        },
        {
          icon: "/icons/data-management.svg",
          title: "Manual Production Reporting",
          description:
            "Output recorded on paper and keyed into systems a shift later.",
        },
      ],
    },
    providedSolutions: {
      title: "Our Manufacturing Solutions",
      description:
        "An industrial data platform that connects machinery of any vintage, turns its telemetry into maintenance and quality decisions, and keeps production planned against real capacity.",
      items: [
        {
          icon: "/icons/real-time-monitoring.svg",
          title: "Machine Connectivity",
          description:
            "Legacy and modern equipment reporting into one platform.",
        },
        {
          icon: "/icons/centralized-intelligence.svg",
          title: "Predictive Maintenance",
          description:
            "Interventions scheduled from machine condition, not the calendar.",
        },
        {
          icon: "/icons/ai-based-analysis.svg",
          title: "In-Line Quality Analytics",
          description:
            "Defect trends caught during the run rather than after it.",
        },
        {
          icon: "/icons/automated-response.svg",
          title: "Supply Chain Visibility",
          description:
            "Component availability tracked against live production plans.",
        },
      ],
    },
  },
];

export const industrySuccessStories: SuccessStoriesUnderSection = {
  title: "Success Stories in this Industry",
  description:
    "Proven outcomes delivered across global financial, healthcare, and technology infrastructures.",
  items: [
    {
      id: 1,
      uuid: "3f8c1d24-9b07-4e51-a6d3-72c5e08f9143",
      image: "/about_image.png",
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
      image: "/about_image.png",
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
      image: "/about_image.png",
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
