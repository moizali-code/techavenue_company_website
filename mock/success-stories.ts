import type { SuccessStoriesContent, SuccessStory } from "@/types/features/success-stories";

export const successStoriesContent: SuccessStoriesContent = {
  header: {
    title: "Success Stories From Companies Like Yours",
    description:
      "Discover how Tech Avenue empowers enterprises and governments through intelligent technology, innovation, and scalable digital transformation solutions.",
    backgroundImage: "/about_image.png",
  },
  intro: {
    titleStart: "Transforming",
    titleHighlight: "Challenges",
    titleEnd: "Into Measurable Success",
    description:
      "From critical national systems to citywide smart infrastructure, our success stories showcase real-world impact across industries and global markets.",
  },
  filters: {
    solutions: [
      {
        id: 1,
        uuid: "0b7d4e29-5c31-4a86-9f02-6d84c1b73e50",
        title: "Software & AI",
      },
      {
        id: 2,
        uuid: "7b30c592-6a14-4f80-9d23-e85c4b17f036",
        title: "Cybersecurity",
      },
      {
        id: 3,
        uuid: "c94a1e08-6b72-4f35-80d9-27e5a3b16c40",
        title: "Defence",
      },
      {
        id: 4,
        uuid: "5c81f4a6-0d29-473b-96e8-b247a1c30f95",
        title: "Smart Cities",
      },
      {
        id: 5,
        uuid: "d21b7f34-08e6-4c95-a70d-3f5e9c246b81",
        title: "Telecom",
      },
    ],
    industries: [
      {
        id: 1,
        uuid: "2f57b9d4-3c80-46e1-8a95-7d16c0e4b382",
        title: "Government",
      },
      {
        id: 2,
        uuid: "a41d8f70-2e63-4b95-8c07-53f1e9a6d284",
        title: "Banking",
      },
      {
        id: 3,
        uuid: "6e35c7a9-1d48-4b02-95f7-c04a8b21e763",
        title: "Energy",
      },
      {
        id: 4,
        uuid: "b8f2091c-7a56-4d34-8e60-15c37d9ab420",
        title: "Enterprise",
      },
    ],
  },
};

export const successStories: SuccessStory[] = [
  {
    id: 1,
    uuid: "3f8c1d24-9b07-4e51-a6d3-72c5e08f9143",
    image: "/about_image.png",
    solution: {
      id: 2,
      uuid: "7b30c592-6a14-4f80-9d23-e85c4b17f036",
      title: "Cybersecurity",
    },
    industry: {
      id: 2,
      uuid: "a41d8f70-2e63-4b95-8c07-53f1e9a6d284",
      title: "Banking",
    },
    title: "Enterprise Threat Detection Platform",
    description:
      "A multi-layered AI-driven security framework implemented for a global Tier-1 bank to mitigate zero-day vulnerabilities.",
  },
  {
    id: 2,
    uuid: "c1a94e67-5d38-42b0-8f19-6ab30d7c25e8",
    image: "/about_image.png",
    solution: {
      id: 4,
      uuid: "5c81f4a6-0d29-473b-96e8-b247a1c30f95",
      title: "Smart Cities",
    },
    industry: {
      id: 1,
      uuid: "2f57b9d4-3c80-46e1-8a95-7d16c0e4b382",
      title: "Government",
    },
    title: "5G Municipal Infrastructure",
    description:
      "Deploying next-gen connectivity across 500+ square kilometers for seamless urban IoT integration.",
  },
  {
    id: 3,
    uuid: "9e26b0f5-7c41-4a83-b52d-18f6c94a7d30",
    image: "/about_image.png",
    solution: {
      id: 1,
      uuid: "0b7d4e29-5c31-4a86-9f02-6d84c1b73e50",
      title: "Software & AI",
    },
    industry: {
      id: 1,
      uuid: "2f57b9d4-3c80-46e1-8a95-7d16c0e4b382",
      title: "Government",
    },
    title: "Predictive Governance Model",
    description:
      "Leveraging deep learning to optimize public resource allocation and emergency response times by 30%.",
  },
  {
    id: 4,
    uuid: "6d70a382-4f19-4c25-9b08-e35a1c72f4b6",
    image: "/about_image.png",
    solution: {
      id: 1,
      uuid: "0b7d4e29-5c31-4a86-9f02-6d84c1b73e50",
      title: "Software & AI",
    },
    industry: {
      id: 4,
      uuid: "b8f2091c-7a56-4d34-8e60-15c37d9ab420",
      title: "Enterprise",
    },
    title: "Unified Operations Intelligence Suite",
    description:
      "Consolidating fragmented reporting tools into a single analytics workspace serving 8,000 daily users.",
  },
  {
    id: 5,
    uuid: "b52f8c19-0a63-4d74-8e21-47c9b6d035fa",
    image: "/about_image.png",
    solution: {
      id: 5,
      uuid: "d21b7f34-08e6-4c95-a70d-3f5e9c246b81",
      title: "Telecom",
    },
    industry: {
      id: 4,
      uuid: "b8f2091c-7a56-4d34-8e60-15c37d9ab420",
      title: "Enterprise",
    },
    title: "Nationwide Network Modernisation",
    description:
      "Rebuilding a legacy carrier backbone into a software-defined network with 99.99% measured availability.",
  },
  {
    id: 6,
    uuid: "1a7c3e05-9d84-4b62-8f31-06e5c2a94db7",
    image: "/about_image.png",
    solution: {
      id: 3,
      uuid: "c94a1e08-6b72-4f35-80d9-27e5a3b16c40",
      title: "Defence",
    },
    industry: {
      id: 1,
      uuid: "2f57b9d4-3c80-46e1-8a95-7d16c0e4b382",
      title: "Government",
    },
    title: "Secure Command & Control Backbone",
    description:
      "An air-gapped situational awareness platform unifying field telemetry for a national defence agency.",
  },
  {
    id: 7,
    uuid: "e0b46d91-2f57-4a38-95c0-7d13b8a6e425",
    image: "/about_image.png",
    solution: {
      id: 2,
      uuid: "7b30c592-6a14-4f80-9d23-e85c4b17f036",
      title: "Cybersecurity",
    },
    industry: {
      id: 3,
      uuid: "6e35c7a9-1d48-4b02-95f7-c04a8b21e763",
      title: "Energy",
    },
    title: "Grid Resilience Operations Centre",
    description:
      "A round-the-clock monitoring centre protecting generation and distribution assets across three regions.",
  },
  {
    id: 8,
    uuid: "74f8c250-b613-4e09-a72d-9c58e1067b3a",
    image: "/about_image.png",
    solution: {
      id: 1,
      uuid: "0b7d4e29-5c31-4a86-9f02-6d84c1b73e50",
      title: "Software & AI",
    },
    industry: {
      id: 3,
      uuid: "6e35c7a9-1d48-4b02-95f7-c04a8b21e763",
      title: "Energy",
    },
    title: "Predictive Maintenance for Refineries",
    description:
      "Sensor-driven failure forecasting that reduced unplanned plant shutdowns by 42% within a single year.",
  },
  {
    id: 9,
    uuid: "2d905b7e-4c18-46fa-b039-8e17c6d24509",
    image: "/about_image.png",
    solution: {
      id: 4,
      uuid: "5c81f4a6-0d29-473b-96e8-b247a1c30f95",
      title: "Smart Cities",
    },
    industry: {
      id: 3,
      uuid: "6e35c7a9-1d48-4b02-95f7-c04a8b21e763",
      title: "Energy",
    },
    title: "Connected Street Lighting Programme",
    description:
      "Adaptive lighting controls across 120,000 fixtures, cutting municipal energy consumption by a third.",
  },
  {
    id: 10,
    uuid: "8c31f6a4-0e29-4d75-91b8-53a0d7c26e14",
    image: "/about_image.png",
    solution: {
      id: 2,
      uuid: "7b30c592-6a14-4f80-9d23-e85c4b17f036",
      title: "Cybersecurity",
    },
    industry: {
      id: 4,
      uuid: "b8f2091c-7a56-4d34-8e60-15c37d9ab420",
      title: "Enterprise",
    },
    title: "Zero Trust Access Rollout",
    description:
      "Replacing perimeter VPN access with identity-aware controls for a 14,000-strong hybrid workforce.",
  },
  {
    id: 11,
    uuid: "5b027e93-a4d8-4c61-b295-0f38e7a1c6d2",
    image: "/about_image.png",
    solution: {
      id: 5,
      uuid: "d21b7f34-08e6-4c95-a70d-3f5e9c246b81",
      title: "Telecom",
    },
    industry: {
      id: 2,
      uuid: "a41d8f70-2e63-4b95-8c07-53f1e9a6d284",
      title: "Banking",
    },
    title: "Branch Connectivity Consolidation",
    description:
      "Migrating 600 retail branches onto a single managed network with centralised policy enforcement.",
  },
  {
    id: 12,
    uuid: "f4a610c8-73b2-4d59-8e07-b1c9257ad430",
    image: "/about_image.png",
    solution: {
      id: 3,
      uuid: "c94a1e08-6b72-4f35-80d9-27e5a3b16c40",
      title: "Defence",
    },
    industry: {
      id: 4,
      uuid: "b8f2091c-7a56-4d34-8e60-15c37d9ab420",
      title: "Enterprise",
    },
    title: "Critical Supplier Assurance Platform",
    description:
      "Continuous vetting of defence supply chain partners with automated compliance evidence collection.",
  },
];
