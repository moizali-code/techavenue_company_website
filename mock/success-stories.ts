import type {
  SuccessStoriesContent,
  SuccessStory,
} from "@/types/features/success-stories";

export const successStoriesContent: SuccessStoriesContent = {
  header: {
    title: "Success Stories From Companies Like Yours",
    description:
      "Discover how Tech Avenue empowers enterprises and governments through intelligent technology, innovation, and scalable digital transformation solutions.",
    backgroundImage: "/success-stories/success_stories_header.png",
  },
  intro: {
    titleStart: "Transforming",
    titleHighlight: "Challenges",
    titleEnd: "Into Measurable Success",
    description:
      "From critical national systems to citywide smart infrastructure, our success stories showcase real-world impact across industries and global markets.",
  },
};

export const successStories: SuccessStory[] = [
  {
    id: 1,
    uuid: "3f8c1d24-9b07-4e51-a6d3-72c5e08f9143",
    image: "/industry/netword_security.png",
    solution: {
      id: 1,
      uuid: "a7f3c19e-52b8-4d06-9e41-3c8b7d502f6a",
      title: "Network Security",
    },
    industry: {
      id: 4,
      uuid: "b06f3a48-71d2-4e95-8c37-9f5e2b1a0d64",
      title: "Banking & Financial Services",
    },
    title: "Enterprise Threat Detection Platform",
    description:
      "A multi-layered AI-driven security framework implemented for a global Tier-1 bank to mitigate zero-day vulnerabilities.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Complex enterprise environments often suffer from visibility gaps and specialised friction that slow down response times.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Evolving Threat Landscape",
            description:
              "Attack techniques changed faster than signature-based tooling could be updated.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Fragmented Infrastructure",
            description:
              "Security telemetry scattered across twelve disconnected monitoring products.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Delayed Detection",
            description:
              "Intrusions surfacing days after the initial compromise rather than minutes.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "High Volume of Alerts",
            description:
              "Analysts triaging thousands of low-value alerts and missing genuine incidents.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "An AI-driven platform that bridges the gap between signal and action, providing a unified defensive layer for the modern enterprise.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Real-Time Monitoring",
            description:
              "Continuous observation of every packet and endpoint across the estate.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Centralized Intelligence",
            description:
              "Aggregating threat feeds from global sensors into a single source of truth.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "AI-Based Analysis",
            description:
              "Behavioural models that surface patterns invisible to heuristic rules.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Automated Response",
            description:
              "Instant containment playbooks triggered by verified threat detections.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Proven outcomes delivered across global financial, healthcare, and technology infrastructures.",
        items: [
          {
            id: 1,
            uuid: "b8903590-399f-420c-8bf7-7e5c81b1f7aa",
            value: "65%",
            title: "Faster Detection",
            description: "Reduction in MTTD through automated AI scanning.",
          },
          {
            id: 2,
            uuid: "90304fbb-158f-4430-9284-cb340838e66d",
            value: "80%",
            title: "Reduction in False Alerts",
            description: "Deep noise filtering and contextual verification.",
          },
          {
            id: 3,
            uuid: "46ece8eb-f854-4a58-96e4-fb70edeb694f",
            value: "24/7",
            title: "Real-Time Visibility",
            description: "Total coverage across all infrastructure layers.",
          },
          {
            id: 4,
            uuid: "0c7438ba-aa31-4972-80ac-b29068e48902",
            value: "3x",
            title: "Improvement in Accuracy",
            description: "ML-enhanced signal classification precision.",
          },
          {
            id: 5,
            uuid: "954f9767-8bf5-4960-a8c2-025856dd615a",
            value: "100%",
            title: "Monitoring Coverage",
            description: "Every asset monitored with zero visibility gaps.",
          },
          {
            id: 6,
            uuid: "d0fafd09-28c4-46da-85cf-0e6a0924a4cd",
            value: "42%",
            title: "Improved Efficiency",
            description: "SOC team bandwidth reclaimed through automation.",
          },
        ],
      },
    },
  },
  {
    id: 2,
    uuid: "c1a94e67-5d38-42b0-8f19-6ab30d7c25e8",
    image: "/verticles/intelligent_infrastructure.png",
    solution: {
      id: 3,
      uuid: "e94d0a76-1f52-4b83-8c25-6a710e4bd93f",
      title: "Smart Infrastructure Solutions",
    },
    industry: {
      id: 1,
      uuid: "3f1a6c2e-9b47-4d18-8a52-71c0d5e4b901",
      title: "Government & Public Sector",
    },
    title: "5G Municipal Infrastructure",
    description:
      "Deploying next-gen connectivity across 500+ square kilometers for seamless urban IoT integration.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Extending modern connectivity across a dense urban footprint without disrupting the services residents rely on every day.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Coverage Blackspots",
            description:
              "Dense building stock leaving whole districts without reliable signal.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Permit Complexity",
            description:
              "Street works approvals spread across multiple municipal authorities.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Ageing Duct Networks",
            description:
              "Existing conduit built for copper and unable to carry new fibre routes.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Disconnected Sensors",
            description:
              "IoT devices deployed by departments that could not share a common network.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A phased rollout that layers small-cell coverage, municipal fibre and shared IoT services onto one governed platform.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Small-Cell Densification",
            description:
              "Street-level cells placed to close coverage gaps in the busiest districts.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Shared IoT Platform",
            description:
              "One onboarding path for every department deploying connected devices.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Network Slicing",
            description:
              "Guaranteed capacity reserved for emergency and transport services.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Unified Works Planning",
            description:
              "A single dig schedule coordinating every authority on one timeline.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Measured results from a citywide connectivity programme covering more than 500 square kilometres.",
        items: [
          {
            id: 1,
            uuid: "c40d852f-34a8-4ead-8c5e-6915ce675086",
            value: "500km²",
            title: "Coverage Delivered",
            description:
              "Continuous service across the full municipal footprint.",
          },
          {
            id: 2,
            uuid: "86557a0f-fd41-4c55-b195-7644002bc813",
            value: "98%",
            title: "Signal Availability",
            description:
              "Measured across every district including dense urban cores.",
          },
          {
            id: 3,
            uuid: "30dd5948-ae51-41d2-a76d-ad2f6e8b3c38",
            value: "1,200",
            title: "Small Cells Deployed",
            description:
              "Street-level sites closing historic coverage blackspots.",
          },
          {
            id: 4,
            uuid: "c2535cb2-dc3c-44b3-a555-a1708d66f139",
            value: "4x",
            title: "Faster Sensor Onboarding",
            description:
              "New municipal devices live in days rather than months.",
          },
          {
            id: 5,
            uuid: "d5f09904-6f37-45a8-986c-385811bdfa2b",
            value: "60%",
            title: "Fewer Street Works",
            description: "Coordinated dig schedules across every authority.",
          },
          {
            id: 6,
            uuid: "ba86fac7-f3fa-48f2-8fbe-d1a2dbb0754f",
            value: "24/7",
            title: "Network Operations",
            description: "Continuous oversight of the full city network.",
          },
        ],
      },
    },
  },
  {
    id: 3,
    uuid: "9e26b0f5-7c41-4a83-b52d-18f6c94a7d30",
    image: "/verticles/e_government_services.png",
    solution: {
      id: 7,
      uuid: "71bc4f83-0e26-45d9-8a73-b4c62f019d75",
      title: "E-Government Solutions",
    },
    industry: {
      id: 1,
      uuid: "3f1a6c2e-9b47-4d18-8a52-71c0d5e4b901",
      title: "Government & Public Sector",
    },
    title: "Predictive Governance Model",
    description:
      "Leveraging deep learning to optimize public resource allocation and emergency response times by 30%.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Public bodies holding vast operational history with no practical way to use it for planning the year ahead.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Reactive Planning",
            description:
              "Resources allocated on last year's totals rather than expected demand.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Explainability Duty",
            description:
              "Every automated recommendation required a defensible public rationale.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Archived Records",
            description:
              "Historic case data locked in formats no current system could read.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Interagency Silos",
            description:
              "Departments forecasting independently against conflicting assumptions.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A governed modelling environment that produces auditable forecasts every department can plan against.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Demand Forecasting",
            description:
              "Service volumes projected by district, season and time of day.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Shared Data Foundation",
            description:
              "One curated record set that every department models against.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Explainable Models",
            description:
              "Each prediction paired with the factors that produced it.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Scenario Planning",
            description:
              "Budget and staffing options tested before commitments are made.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Forecasting outcomes measured across emergency response, planning and public service delivery.",
        items: [
          {
            id: 1,
            uuid: "1a7241e4-6581-4ed4-a083-06368245049d",
            value: "30%",
            title: "Faster Response Times",
            description:
              "Emergency units positioned ahead of predicted demand.",
          },
          {
            id: 2,
            uuid: "e3fd906d-bc6c-4363-bc7e-f7aaeb312407",
            value: "12",
            title: "Departments Aligned",
            description: "All planning teams working from one shared forecast.",
          },
          {
            id: 3,
            uuid: "c5a2f054-5f3f-480e-9e86-6b4845315841",
            value: "18mo",
            title: "Planning Horizon",
            description:
              "Service demand projected well beyond the budget cycle.",
          },
          {
            id: 4,
            uuid: "6b23748c-7271-4668-82a3-789e4d53b0f7",
            value: "94%",
            title: "Forecast Accuracy",
            description: "Predicted volumes measured against actual case load.",
          },
          {
            id: 5,
            uuid: "69f53bfb-1c4e-4226-b8b5-52758f47452f",
            value: "100%",
            title: "Explainable Decisions",
            description:
              "Every recommendation paired with its supporting factors.",
          },
          {
            id: 6,
            uuid: "d3981c6e-96b8-431a-9933-7cbd779e3573",
            value: "40%",
            title: "Less Manual Analysis",
            description:
              "Analyst effort redirected from collation to interpretation.",
          },
        ],
      },
    },
  },
  {
    id: 4,
    uuid: "6d70a382-4f19-4c25-9b08-e35a1c72f4b6",
    image: "/verticles/ai_and_machine_learning.png",
    solution: {
      id: 6,
      uuid: "d306a2e8-6b95-4137-a4f0-91e58c7d206b",
      title: "AI & Software Solutions",
    },
    industry: {
      id: 2,
      uuid: "8c74b1d9-2e35-4af6-9d10-6b83f7a2c542",
      title: "Information Technology",
    },
    title: "Unified Operations Intelligence Suite",
    description:
      "Consolidating fragmented reporting tools into a single analytics workspace serving 8,000 daily users.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Years of tool sprawl left leadership arguing about whose figures were correct instead of acting on them.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Conflicting Reports",
            description:
              "The same metric calculated four different ways across four teams.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Manual Consolidation",
            description:
              "Analysts spending days each month stitching spreadsheets together.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Tool Sprawl",
            description:
              "Eleven licensed reporting products with overlapping capabilities.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Stale Dashboards",
            description:
              "Decisions taken against figures already a full week out of date.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A single governed analytics layer with shared definitions, live pipelines and self-service reporting.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Live Data Pipelines",
            description:
              "Operational systems streaming into the workspace continuously.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Shared Metric Catalogue",
            description:
              "One agreed definition per metric, governed and versioned.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Anomaly Detection",
            description:
              "Unusual movements surfaced before they reach monthly review.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Self-Service Reporting",
            description:
              "Teams building their own views without waiting on a backlog.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Reporting outcomes measured across an 8,000-user analytics estate after consolidation.",
        items: [
          {
            id: 1,
            uuid: "e341fb68-be28-4f72-94a1-3499b1b7722c",
            value: "8,000",
            title: "Daily Active Users",
            description: "One workspace serving every reporting team.",
          },
          {
            id: 2,
            uuid: "1306c051-06e9-4065-b0ec-05b7f482e227",
            value: "11→1",
            title: "Tools Consolidated",
            description:
              "A decade of reporting sprawl replaced by one platform.",
          },
          {
            id: 3,
            uuid: "9b5cccd9-6cc5-4988-9026-40e124a0438c",
            value: "90%",
            title: "Faster Month-End",
            description:
              "Manual consolidation removed from the reporting cycle.",
          },
          {
            id: 4,
            uuid: "42ddf360-acd7-438d-b52f-224f8ad24d48",
            value: "100%",
            title: "Metric Alignment",
            description:
              "One governed definition behind every published figure.",
          },
          {
            id: 5,
            uuid: "3b884dde-ccfd-422e-a408-cdf19e9ab1e0",
            value: "Live",
            title: "Data Freshness",
            description: "Operational systems streaming in continuously.",
          },
          {
            id: 6,
            uuid: "f4bb92f5-789c-49c6-aaa3-782b29b157c1",
            value: "3x",
            title: "Self-Service Adoption",
            description: "Teams building their own views without a backlog.",
          },
        ],
      },
    },
  },
  {
    id: 5,
    uuid: "b52f8c19-0a63-4d74-8e21-47c9b6d035fa",
    image: "/verticles/telecom_intelligence.png",
    solution: {
      id: 8,
      uuid: "3e57c810-4d9b-42f6-b085-7a13e9c46082",
      title: "Telecom Intelligence Solutions",
    },
    industry: {
      id: 3,
      uuid: "5d92e0a7-6c81-4b23-97ef-2a14d8b60c73",
      title: "Telecommunications",
    },
    title: "Nationwide Network Modernisation",
    description:
      "Rebuilding a legacy carrier backbone into a software-defined network with 99.99% measured availability.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Replacing the core of a live national network while every customer stayed connected throughout.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Hardware End-of-Life",
            description:
              "Core routing platforms past vendor support with no spare inventory.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Zero-Downtime Mandate",
            description:
              "Service level commitments allowing no planned customer outage.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Manual Provisioning",
            description:
              "Circuit changes handled device by device over several weeks.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Limited Visibility",
            description:
              "Faults located by trial and error rather than measured telemetry.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A software-defined core with automated provisioning and full-path telemetry, cut over region by region.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "End-to-End Telemetry",
            description:
              "Every path measured continuously from access to core.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Software-Defined Core",
            description:
              "Routing policy managed centrally instead of per device.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Capacity Forecasting",
            description:
              "Growth modelled per region so upgrades land before congestion.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Automated Provisioning",
            description:
              "Circuit changes delivered in minutes through a single workflow.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Performance measured across a national backbone throughout and after the migration.",
        items: [
          {
            id: 1,
            uuid: "42e51015-89f0-4408-978f-2f6f0b875f25",
            value: "99.99%",
            title: "Measured Availability",
            description: "Four-nines sustained across the rebuilt core.",
          },
          {
            id: 2,
            uuid: "daea0480-9ec2-4127-bb5f-586ff24bde6e",
            value: "0",
            title: "Customer Outages",
            description: "No planned service interruption during cutover.",
          },
          {
            id: 3,
            uuid: "1c2f13e7-30b9-42d0-bf4b-559d1a86a5de",
            value: "15min",
            title: "Circuit Provisioning",
            description: "Changes delivered in minutes instead of weeks.",
          },
          {
            id: 4,
            uuid: "c23a88dd-df71-48df-ab7a-6405fb0248c4",
            value: "70%",
            title: "Fewer Manual Changes",
            description:
              "Routing policy managed centrally, not device by device.",
          },
          {
            id: 5,
            uuid: "63dbd119-4870-4240-9b2c-638250c70eaa",
            value: "100%",
            title: "Path Telemetry",
            description: "Every route measured end to end from access to core.",
          },
          {
            id: 6,
            uuid: "1ac97125-b240-43b4-908d-1a7c795b012f",
            value: "6",
            title: "Regions Migrated",
            description: "Phased cutover completed region by region.",
          },
        ],
      },
    },
  },
  {
    id: 6,
    uuid: "1a7c3e05-9d84-4b62-8f31-06e5c2a94db7",
    image: "/industry/netword_security.png",
    solution: {
      id: 1,
      uuid: "a7f3c19e-52b8-4d06-9e41-3c8b7d502f6a",
      title: "Network Security",
    },
    industry: {
      id: 1,
      uuid: "3f1a6c2e-9b47-4d18-8a52-71c0d5e4b901",
      title: "Government & Public Sector",
    },
    title: "Secure Command & Control Backbone",
    description:
      "An air-gapped situational awareness platform unifying field telemetry for a national defence agency.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Coordinating dispersed units under strict classification rules where no commercial cloud service could be used.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Contested Environments",
            description:
              "Communications expected to degrade under active interference.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Classification Boundaries",
            description:
              "Information cleared for different tiers held in isolated systems.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Incompatible Field Systems",
            description:
              "Sensor fleets from separate procurement cycles speaking different protocols.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Fragmented Picture",
            description:
              "Commanders assembling situational awareness from separate consoles.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A hardened, air-gapped platform that fuses every sensor feed into one accredited operational view.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Unified Operational Picture",
            description:
              "All field telemetry fused into one live situational display.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Cross-Domain Gateways",
            description:
              "Controlled transfer between classification tiers with full audit.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Sensor Fusion",
            description:
              "Multiple sensor types correlated into single confirmed tracks.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Resilient Communications",
            description:
              "Automatic failover across redundant links when a bearer degrades.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Operational outcomes measured inside an accredited, fully air-gapped environment.",
        items: [
          {
            id: 1,
            uuid: "a8274313-8f23-4b64-aaf0-bb4d4e06ed76",
            value: "100%",
            title: "Air-Gapped Operation",
            description: "No dependency on any commercial cloud service.",
          },
          {
            id: 2,
            uuid: "eb6de20d-becc-4228-8f99-37aa0e59403e",
            value: "1",
            title: "Operational Picture",
            description: "Every sensor feed fused into a single live display.",
          },
          {
            id: 3,
            uuid: "d94104f2-27ea-40a4-94ea-dc5fc57881a0",
            value: "3",
            title: "Classification Tiers",
            description: "Controlled transfer with full audit between domains.",
          },
          {
            id: 4,
            uuid: "a8c0031b-8d71-47bd-984b-cd0255bb343f",
            value: "<2s",
            title: "Telemetry Latency",
            description: "Field updates reaching commanders near instantly.",
          },
          {
            id: 5,
            uuid: "be9d1858-f596-48f0-a10f-4487a1299338",
            value: "99.9%",
            title: "Link Resilience",
            description: "Automatic failover whenever a bearer degrades.",
          },
          {
            id: 6,
            uuid: "84a6c27e-2243-48da-9909-d1e8b260134c",
            value: "40+",
            title: "Sensor Types Unified",
            description: "Legacy and modern fleets speaking one protocol.",
          },
        ],
      },
    },
  },
  {
    id: 7,
    uuid: "e0b46d91-2f57-4a38-95c0-7d13b8a6e425",
    image: "/industry/netword_security.png",
    solution: {
      id: 1,
      uuid: "a7f3c19e-52b8-4d06-9e41-3c8b7d502f6a",
      title: "Network Security",
    },
    industry: {
      id: 9,
      uuid: "6a2d81e4-b703-4f59-9c48-0e35d7b1a962",
      title: "Energy & Utilities",
    },
    title: "Grid Resilience Operations Centre",
    description:
      "A round-the-clock monitoring centre protecting generation and distribution assets across three regions.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Protecting operational technology built for isolated networks that had gradually become reachable from corporate systems.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Exposed Control Systems",
            description:
              "Industrial controllers designed for isolation now indirectly reachable.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Critical Infrastructure Rules",
            description:
              "Regulatory reporting duties measured in hours after an incident.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Unpatchable Assets",
            description:
              "Substation equipment that cannot be taken offline for updates.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Regional Fragmentation",
            description:
              "Three regions monitoring their own assets with no shared view.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A single operations centre combining passive OT monitoring, segmentation and rehearsed response across all three regions.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "24/7 OT Monitoring",
            description:
              "Passive sensing across substations with no impact on control traffic.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Single Regional View",
            description:
              "All three regions monitored from one consolidated centre.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Behavioural Baselines",
            description:
              "Normal process behaviour learned so deviations stand out immediately.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Rehearsed Playbooks",
            description:
              "Containment steps pre-agreed with engineering and practised quarterly.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Protection outcomes measured across generation and distribution assets in three regions.",
        items: [
          {
            id: 1,
            uuid: "47fe1f53-4c38-4721-91f4-fb644e800b83",
            value: "3",
            title: "Regions Consolidated",
            description:
              "One centre replacing three independent monitoring teams.",
          },
          {
            id: 2,
            uuid: "02e99f38-13c7-4612-9203-ef99e0b27fdd",
            value: "24/7",
            title: "OT Monitoring",
            description: "Continuous passive sensing across every substation.",
          },
          {
            id: 3,
            uuid: "66b4e5b6-0f68-4324-958a-1ef9f17485e3",
            value: "0",
            title: "Control Traffic Impact",
            description: "Monitoring added without touching process networks.",
          },
          {
            id: 4,
            uuid: "1ef12bdc-9a23-422c-8cc8-555a43b82422",
            value: "4hr",
            title: "Regulatory Reporting",
            description:
              "Incident notifications filed well inside the deadline.",
          },
          {
            id: 5,
            uuid: "203b6879-1acc-40ba-b273-3c14d5739e34",
            value: "85%",
            title: "Faster Triage",
            description:
              "Behavioural baselines separating noise from real deviation.",
          },
          {
            id: 6,
            uuid: "53240211-b8ce-48ea-ada6-ee5b23ea817a",
            value: "Quarterly",
            title: "Response Rehearsals",
            description: "Playbooks practised with engineering every quarter.",
          },
        ],
      },
    },
  },
  {
    id: 8,
    uuid: "74f8c250-b613-4e09-a72d-9c58e1067b3a",
    image: "/verticles/ai_and_machine_learning.png",
    solution: {
      id: 6,
      uuid: "d306a2e8-6b95-4137-a4f0-91e58c7d206b",
      title: "AI & Software Solutions",
    },
    industry: {
      id: 10,
      uuid: "c85b0937-1a4e-4620-b7d3-2f16c9e08a45",
      title: "Oil & Gas",
    },
    title: "Predictive Maintenance for Refineries",
    description:
      "Sensor-driven failure forecasting that reduced unplanned plant shutdowns by 42% within a single year.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Maintenance carried out on fixed calendars while the failures that actually stopped production went unpredicted.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Unplanned Shutdowns",
            description:
              "Critical rotating equipment failing without any prior warning.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Safety Case Duties",
            description:
              "Every intervention requiring documented justification and sign-off.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Unused Sensor Data",
            description:
              "Years of historian readings collected but never analysed.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Calendar-Based Servicing",
            description:
              "Healthy assets stripped down on schedule while failing ones ran on.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "Condition models built on existing historian data, delivered into the maintenance workflow engineers already use.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Continuous Condition Monitoring",
            description:
              "Live vibration and thermal readings tracked against known limits.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Unified Asset History",
            description:
              "Historian, maintenance and inspection records joined per asset.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Failure Forecasting",
            description:
              "Remaining useful life estimated weeks ahead of breakdown.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Work Order Automation",
            description:
              "Predicted faults raised directly as scheduled maintenance jobs.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Reliability outcomes measured across refinery assets within the first year of operation.",
        items: [
          {
            id: 1,
            uuid: "9305efa6-378e-4003-8fdf-ceb3b66aa335",
            value: "42%",
            title: "Fewer Shutdowns",
            description:
              "Unplanned production stoppages avoided in twelve months.",
          },
          {
            id: 2,
            uuid: "c0c9b58f-e6e1-460b-8b8e-7834cfefaafe",
            value: "6wk",
            title: "Advance Warning",
            description: "Typical lead time between prediction and failure.",
          },
          {
            id: 3,
            uuid: "070df675-02c3-413c-b16c-0a6471e49045",
            value: "12yr",
            title: "History Activated",
            description:
              "Archived historian data put to work on live forecasts.",
          },
          {
            id: 4,
            uuid: "b1818e8d-6dd5-456f-a8e6-39e30403600e",
            value: "30%",
            title: "Lower Maintenance Cost",
            description: "Calendar servicing replaced by condition-led work.",
          },
          {
            id: 5,
            uuid: "052c9255-dc5c-4692-bbf2-39ab3a77383c",
            value: "100%",
            title: "Critical Assets Covered",
            description: "Every priority machine under continuous monitoring.",
          },
          {
            id: 6,
            uuid: "1022c8bf-44a6-4335-9b57-e69d0a7480f0",
            value: "Auto",
            title: "Work Order Creation",
            description: "Predicted faults raised straight into the schedule.",
          },
        ],
      },
    },
  },
  {
    id: 9,
    uuid: "2d905b7e-4c18-46fa-b039-8e17c6d24509",
    image: "/verticles/intelligent_infrastructure.png",
    solution: {
      id: 3,
      uuid: "e94d0a76-1f52-4b83-8c25-6a710e4bd93f",
      title: "Smart Infrastructure Solutions",
    },
    industry: {
      id: 9,
      uuid: "6a2d81e4-b703-4f59-9c48-0e35d7b1a962",
      title: "Energy & Utilities",
    },
    title: "Connected Street Lighting Programme",
    description:
      "Adaptive lighting controls across 120,000 fixtures, cutting municipal energy consumption by a third.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "A lighting estate running at full output every night with faults reported only when residents noticed them.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Constant Full Output",
            description:
              "Every fixture burning at maximum regardless of street activity.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Carbon Reduction Targets",
            description:
              "Binding municipal commitments with limited capital available.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Uncontrolled Fixtures",
            description:
              "Columns wired with no addressing or remote control capability.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Reactive Fault Repair",
            description:
              "Outages found only when a resident reported a dark street.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "Individually addressable nodes on every column, driven by adaptive schedules and self-reporting fault detection.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Per-Fixture Telemetry",
            description:
              "Every column reporting output, consumption and health nightly.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Central Lighting Control",
            description:
              "One console managing the full estate by zone or individual asset.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Adaptive Dimming",
            description:
              "Output tuned to traffic, weather and time without losing safe levels.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Self-Reporting Faults",
            description:
              "Failing lamps raising their own repair jobs before complaints arrive.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Energy and service outcomes measured across a 120,000-fixture municipal lighting estate.",
        items: [
          {
            id: 1,
            uuid: "7f55a397-3b46-4dc5-ae6a-a0a9f4d39080",
            value: "33%",
            title: "Energy Reduction",
            description: "Consumption cut across the full lighting estate.",
          },
          {
            id: 2,
            uuid: "0113e0b5-0df4-47ea-8a5b-453898dcbd06",
            value: "120k",
            title: "Fixtures Connected",
            description: "Every column individually addressable and reporting.",
          },
          {
            id: 3,
            uuid: "2b950ad0-c51e-4da9-a19e-9f309df354b0",
            value: "90%",
            title: "Faults Self-Reported",
            description: "Failures raised before a resident ever calls.",
          },
          {
            id: 4,
            uuid: "6dc4fcc4-ee6f-4368-ae64-66bdbc845634",
            value: "5yr",
            title: "Payback Period",
            description: "Capital recovered from energy savings alone.",
          },
          {
            id: 5,
            uuid: "9912c97d-cb44-4376-b5fb-62e482aa75d4",
            value: "100%",
            title: "Safe Light Levels",
            description:
              "Adaptive dimming applied without dropping below standard.",
          },
          {
            id: 6,
            uuid: "860fe933-b880-4efd-9c55-387db41a6ee2",
            value: "24/7",
            title: "Estate Visibility",
            description: "Live health and consumption data from every asset.",
          },
        ],
      },
    },
  },
  {
    id: 10,
    uuid: "8c31f6a4-0e29-4d75-91b8-53a0d7c26e14",
    image: "/industry/netword_security.png",
    solution: {
      id: 1,
      uuid: "a7f3c19e-52b8-4d06-9e41-3c8b7d502f6a",
      title: "Network Security",
    },
    industry: {
      id: 2,
      uuid: "8c74b1d9-2e35-4af6-9d10-6b83f7a2c542",
      title: "Information Technology",
    },
    title: "Zero Trust Access Rollout",
    description:
      "Replacing perimeter VPN access with identity-aware controls for a 14,000-strong hybrid workforce.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "A workforce that had left the office permanently, still reaching internal systems through controls designed for a building.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Flat Internal Network",
            description:
              "One VPN session granting reach across the entire estate.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Access Audit Gaps",
            description:
              "No reliable record of who reached which system, or when.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Unmanaged Devices",
            description:
              "Contractors connecting from endpoints outside any device policy.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Poor User Experience",
            description:
              "Daily VPN drops driving staff toward unsanctioned workarounds.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "Identity and device posture evaluated on every request, with policy replacing network location as the control point.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Continuous Session Checks",
            description:
              "Trust re-evaluated during a session, not only at sign-in.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Central Policy Engine",
            description:
              "One place defining who reaches what, across every application.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Risk-Based Authentication",
            description:
              "Step-up prompts triggered only by genuinely unusual behaviour.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Automatic Revocation",
            description:
              "Access withdrawn the moment a device falls out of compliance.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Access outcomes measured across a 14,000-strong hybrid workforce after rollout.",
        items: [
          {
            id: 1,
            uuid: "c4bc4c2f-b4e9-4ab9-b0d1-5baf1f2d85b0",
            value: "14,000",
            title: "Users Migrated",
            description: "Full workforce moved off perimeter VPN access.",
          },
          {
            id: 2,
            uuid: "81e5d0ee-2626-4368-845d-526067f2f7be",
            value: "0",
            title: "Standing Network Access",
            description: "No session granting broad reach across the estate.",
          },
          {
            id: 3,
            uuid: "b42b18dc-10ba-4766-a476-9a505e725a7f",
            value: "100%",
            title: "Access Auditability",
            description: "Every request logged against identity and device.",
          },
          {
            id: 4,
            uuid: "a9e324ba-4e07-4bf8-888e-4f483bd080fd",
            value: "75%",
            title: "Fewer Access Tickets",
            description: "Helpdesk volume down despite the change in model.",
          },
          {
            id: 5,
            uuid: "90833274-f1f1-40da-80c7-04d086cac46e",
            value: "<1s",
            title: "Policy Evaluation",
            description: "Trust decisions returned without user-visible delay.",
          },
          {
            id: 6,
            uuid: "c3aec37c-8557-4d71-8d56-822a739ba087",
            value: "Auto",
            title: "Compliance Revocation",
            description: "Access withdrawn the moment a device drifts.",
          },
        ],
      },
    },
  },
  {
    id: 11,
    uuid: "5b027e93-a4d8-4c61-b295-0f38e7a1c6d2",
    image: "/verticles/telecom_intelligence.png",
    solution: {
      id: 8,
      uuid: "3e57c810-4d9b-42f6-b085-7a13e9c46082",
      title: "Telecom Intelligence Solutions",
    },
    industry: {
      id: 4,
      uuid: "b06f3a48-71d2-4e95-8c37-9f5e2b1a0d64",
      title: "Banking & Financial Services",
    },
    title: "Branch Connectivity Consolidation",
    description:
      "Migrating 600 retail branches onto a single managed network with centralised policy enforcement.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "A branch estate assembled through acquisition, where no two regions were connected or configured the same way.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Inconsistent Branch Security",
            description:
              "Firewall policy configured locally and differently in each region.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Payment Compliance Scope",
            description:
              "Card data traversing links that fell outside audited boundaries.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Inherited Circuits",
            description:
              "Contracts from four acquisitions running on incompatible technologies.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Slow Branch Openings",
            description:
              "New sites waiting months for connectivity before they could trade.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "A single managed overlay across all branches, with templated builds and one policy source for the whole estate.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Branch Health Monitoring",
            description:
              "Every site's link quality and device status tracked centrally.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Single Policy Source",
            description:
              "One security and routing template applied to all 600 branches.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Traffic Prioritisation",
            description:
              "Teller and payment traffic protected ahead of general browsing.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Zero-Touch Provisioning",
            description:
              "New branches online the day hardware arrives, without an engineer visit.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Network outcomes measured across 600 retail branches following consolidation.",
        items: [
          {
            id: 1,
            uuid: "4025b90e-5485-49f8-b6be-b7cf170e1e10",
            value: "600",
            title: "Branches Migrated",
            description: "The full estate moved onto one managed network.",
          },
          {
            id: 2,
            uuid: "73fa6695-5386-441a-be06-90973a782bc5",
            value: "4→1",
            title: "Carriers Consolidated",
            description:
              "Inherited acquisition contracts reduced to a single supply.",
          },
          {
            id: 3,
            uuid: "683f64f0-27e2-4ada-b0d4-c07f5b788307",
            value: "1",
            title: "Policy Template",
            description: "One security and routing standard across every site.",
          },
          {
            id: 4,
            uuid: "867b8cfc-bb8f-416d-9438-82210c2daaf8",
            value: "1day",
            title: "New Branch Turn-Up",
            description: "Sites trading the day their hardware arrives.",
          },
          {
            id: 5,
            uuid: "9f96c465-921e-4c12-a095-14e8935e8a55",
            value: "100%",
            title: "In-Scope Payment Traffic",
            description: "Card data confined to audited, monitored paths.",
          },
          {
            id: 6,
            uuid: "b63ad34e-cbd5-4f37-bb52-3b8a51ecce2f",
            value: "45%",
            title: "Lower Connectivity Spend",
            description: "Duplicate regional circuits retired.",
          },
        ],
      },
    },
  },
  {
    id: 12,
    uuid: "f4a610c8-73b2-4d59-8e07-b1c9257ad430",
    image: "/industry/consulting_services.png",
    solution: {
      id: 2,
      uuid: "5b21e8d4-9c73-4a1f-b60e-27d4f9a31c85",
      title: "Business Consulting Services",
    },
    industry: {
      id: 11,
      uuid: "4d19a7f2-6c58-4b31-90ae-8e27b5d3f016",
      title: "Manufacturing",
    },
    title: "Critical Supplier Assurance Platform",
    description:
      "Continuous vetting of defence supply chain partners with automated compliance evidence collection.",
    detail: {
      challenges: {
        title: "The Client Challenge",
        description:
          "Supplier assurance carried out once a year on paper, across a chain where sub-tier partners were largely unknown.",
        items: [
          {
            image: "/icons/evolving-cyber-threats.svg",
            title: "Sub-Tier Blind Spots",
            description:
              "Second and third tier suppliers never formally identified or assessed.",
          },
          {
            image: "/icons/regulatory-compliance.svg",
            title: "Evidence Collection Burden",
            description:
              "Certificates chased by email and stored in unmanaged folders.",
          },
          {
            image: "/icons/legacy-infrastructure.svg",
            title: "Point-in-Time Vetting",
            description:
              "Annual assessments leaving eleven months of unmonitored risk.",
          },
          {
            image: "/icons/customer-expectations.svg",
            title: "Slow Onboarding",
            description:
              "New partners cleared to work only after months of manual review.",
          },
        ],
      },
      providedSolutions: {
        title: "Our Provided Solution",
        description:
          "Continuous supplier assessment with automated evidence gathering and a live view of the full chain.",
        items: [
          {
            image: "/icons/real-time-monitoring.svg",
            title: "Continuous Supplier Scoring",
            description:
              "Risk positions refreshed as new evidence and signals arrive.",
          },
          {
            image: "/icons/centralized-intelligence.svg",
            title: "Full Chain Visibility",
            description:
              "Every tier mapped, from prime contractor to component supplier.",
          },
          {
            image: "/icons/ai-based-analysis.svg",
            title: "Anomaly Screening",
            description:
              "Ownership and financial changes flagged as they are published.",
          },
          {
            image: "/icons/automated-response.svg",
            title: "Automated Evidence Capture",
            description:
              "Certifications requested, validated and filed without manual chasing.",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        description:
          "Assurance outcomes measured across every tier of the defence supply chain.",
        items: [
          {
            id: 1,
            uuid: "1f30e218-f248-45a2-9504-60c65865e96e",
            value: "3",
            title: "Tiers Mapped",
            description:
              "Visibility from prime contractor to component supplier.",
          },
          {
            id: 2,
            uuid: "94d278fb-99c9-4763-8f4d-009a71d56b63",
            value: "1,800",
            title: "Suppliers Assessed",
            description: "The full partner base under continuous scoring.",
          },
          {
            id: 3,
            uuid: "03089498-e452-4b46-9fe8-bd08e02941b6",
            value: "Daily",
            title: "Risk Refresh",
            description:
              "Positions updated as new evidence and signals arrive.",
          },
          {
            id: 4,
            uuid: "bee3705f-1849-4be9-a3ef-e7d7fc9123fe",
            value: "70%",
            title: "Faster Onboarding",
            description: "New partners cleared in weeks rather than months.",
          },
          {
            id: 5,
            uuid: "8cf53407-c88f-4cff-8fab-fc86d1758e27",
            value: "100%",
            title: "Evidence Automated",
            description:
              "Certifications requested, validated and filed without chasing.",
          },
          {
            id: 6,
            uuid: "1735880b-a221-42e5-addd-9ea23f1482cc",
            value: "0",
            title: "Audit Findings",
            description: "Assurance records complete at every inspection.",
          },
        ],
      },
    },
  },
];
