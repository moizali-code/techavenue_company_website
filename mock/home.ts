import type { HomeData, HomeTestimonial } from "@/types/features/home";

export const testimonials: HomeTestimonial[] = [
  {
    uuid: "a5e2c760-3b18-4d94-9f0a-7c6d1e4b8352",
    quote:
      "Their cybersecurity frameworks and threat intelligence solutions significantly improved our operational resilience and compliance readiness.",
    name: "David Reynolds",
    role: "Director of Security Operations, Nexa Defense Systems",
    avatar: "/testimonials/david-reynolds.png",
    rating: 5,
  },
  {
    uuid: "d63b9142-7a05-4c8e-b371-2f5e0a9c6d84",
    quote:
      "Tech Avenue delivered scalable smart infrastructure solutions that enhanced efficiency and accelerated our innovation initiatives.",
    name: "Ayesha Khan",
    role: "Head of Digital Transformation, SmartCity Connect",
    avatar: "/testimonials/ayesha-khan.png",
    rating: 5,
  },
  {
    uuid: "41f7e0c9-58d3-4a26-9b84-6c2a3d7f1e05",
    quote:
      "Their engineering team provided outstanding support and delivered high performance systems beyond expectations.",
    name: "Michael Chen",
    role: "Enterprise Solutions Manager, Horizon Telecom",
    avatar: "/testimonials/michael-chen.png",
    rating: 5,
  },
];

export const homeData: HomeData = {
  intro: {
    headingStart: "Leading",
    headingHighlight: "Intelligent",
    headingEnd: "Digital",
    headingSecondLine: "Industry Experience",
    experienceLabel: "Established",
    experienceValue: "10+ Years",
    description:
      "Delivering enterprise technology solutions that accelerate innovation through intelligence, security, and transformation.",
  },
  stats: [
    {
      uuid: "6f1c9a24-3b7e-4d85-9c11-2a5f8e0d7431",
      value: "10+",
      label: "Global Regions",
    },
    {
      uuid: "b83d5f10-9c46-42a7-8e39-71d0c4b6a582",
      value: "5",
      label: "Industry Verticals",
    },
    {
      uuid: "1d47e8c3-52ba-4f96-b0d8-3c9a6e21f745",
      value: "80+",
      label: "Technology Partners",
    },
    {
      uuid: "9a2f6b58-7e13-4c0d-a684-5f3b1d9c8e26",
      value: "30+",
      label: "Years of Expertise",
    },
  ],
  partners: [
    {
      id: 1,
      uuid: "d7c40b6e-19a5-4382-b0f7-6e3512a9c847",
      image: "/partners/ibm.svg",
    },
    {
      id: 2,
      uuid: "3b8e51fa-620d-4c97-85b1-0a74e6c23f59",
      image: "/partners/dell.svg",
    },
    {
      id: 3,
      uuid: "a02f7d43-8c16-495e-b738-51d9e0b46c72",
      image: "/partners/lenovo.svg",
    },
    {
      id: 4,
      uuid: "5e91c8b0-4d72-43a6-91e5-70b83c14da96",
      image: "/partners/huawei.svg",
    },
    {
      id: 5,
      uuid: "9146ea75-0b38-4f2c-86d0-2c57b9e41830",
      image: "/partners/forescout.svg",
    },
    {
      id: 6,
      uuid: "c8735b01-6e49-4a2d-93f8-14a0d7c65b23",
      image: "/partners/cisco.svg",
    },
    {
      id: 7,
      uuid: "42d0a986-7f51-4b63-a8c4-903e7b21d5f6",
      image: "/partners/microsoft.svg",
    },
  ],
  about: {
    eyebrow: "About Us",
    title: "Leading the Innovation Drive",
    description:
      "We deliver integrated technology, AI, and digital transformation solutions tailored to enterprise needs. Through innovation, strategic partnerships, and industry expertise, we help organizations build secure, intelligent, and future-ready digital ecosystems.",
    image: "/about_image.png",
    highlights: [
      {
        uuid: "3e6c1a94-8d25-4b71-9f38-0c7a5e2d6b19",
        label: "AI-powered enterprise solutions",
        image: "/icons/ai-enterprise-solutions.svg",
      },
      {
        uuid: "c72b4d80-1f5a-4e63-8a97-2d6f0b3c9e51",
        label: "Decades of industry expertise",
        image: "/icons/industry-expertise.svg",
      },
      {
        uuid: "58a0e7f2-6b39-4c1d-b502-9e8c3a7d4f60",
        label: "Regional presence, global partnerships",
        image: "/icons/global-partnerships.svg",
      },
      {
        uuid: "e419d6b7-2c85-4a30-97f1-6b0d8e5a3c72",
        label: "End-to-end consulting & delivery",
        image: "/icons/end-to-end-delivery.svg",
      },
    ],
  },
  missionVision: [
    {
      uuid: "7b3f2e58-0d61-497c-a4e8-1c5b9d6f0a83",
      title: "Our Mission",
      description:
        "To empower organizations with integrated technology solutions that accelerate innovation, strengthen security, and enable sustainable digital transformation across industries.",
      image: "/icons/mission.svg",
    },
    {
      uuid: "0c8d5a13-4f72-4b96-8e05-3a1b7c2d9f64",
      title: "Our Vision",
      description:
        "To become a trusted global technology leader recognized for innovation, engineering excellence, and delivering intelligent solutions across enterprise and public sectors.",
      image: "/icons/vision.svg",
    },
  ],
  solutions: {
    heading: "Smart Products Powering Digital Transformation",
  },
  testimonials: {
    heading: "Trusted by Visionary Organizations worldwide",
    description:
      "Delivering innovation, security, and measurable transformation through long-term strategic partnerships.",
  },
  faqs: {
    heading: "Common Questions We Answer",
    faqs: [
      {
        uuid: "2b58d0e6-9c41-4738-a5f2-0d7b3e6c1a94",
        question: "What Industries Does Tech Avenue Serve?",
        answer:
          "Tech Avenue delivers integrated technology solutions across government, telecommunications, construction, education, agriculture, energy, cybersecurity, and enterprise sectors, helping organizations accelerate secure digital transformation.",
      },
      {
        uuid: "8f0a6c35-1d72-4e59-b8c6-4a9d2b7e5013",
        question: "What Services Does Tech Avenue Provide?",
        answer:
          "We provide enterprise IT consulting, smart infrastructure, cloud and data solutions, cybersecurity services, and end-to-end system integration tailored to each organization's operating environment.",
      },
      {
        uuid: "5c1e9d47-6a30-4f82-91d5-7e0b8c4a3d26",
        question: "Does Tech Avenue Develop AI Solutions?",
        answer:
          "Yes. We design and deploy AI-powered platforms covering intelligent automation, predictive analytics, and decision support systems built on secure, production-ready architectures.",
      },
      {
        uuid: "9d34b7f1-0e68-4295-8c47-1b5a6d0e3c92",
        question:
          "Can Tech Avenue Deliver End-To-End Digital Transformation Projects?",
        answer:
          "From strategy and architecture through implementation, migration, and long-term support, our teams manage the full transformation lifecycle as a single accountable partner.",
      },
      {
        uuid: "6e70c852-3f19-4b04-a7d6-8c2f5b1e9a37",
        question: "Where Does Tech Avenue Operate?",
        answer:
          "We operate across more than ten global regions, combining regional delivery teams with a network of international technology partners.",
      },
    ],
  },
};
