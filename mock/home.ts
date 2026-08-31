import { Award, Globe, Handshake, Users } from "lucide-react";

import type {
  HomeAboutProps,
  HomeFaqsProps,
  HomeIntroProps,
  HomeMissionVisionItem,
  HomeStat,
  HomeTestimonialsProps,
} from "@/types/features/home";

export const homeIntro: Omit<HomeIntroProps, "className"> = {
  headingStart: "Leading",
  headingHighlight: "Intelligent",
  headingEnd: "Digital",
  headingSecondLine: "Industry Experience",
  experienceLabel: "Established",
  experienceValue: "10+ Years",
  description:
    "Delivering enterprise technology solutions that accelerate innovation through intelligence, security, and transformation.",
};

export const homeStats: HomeStat[] = [
  {
    uuid: "global-regions",
    value: "10+",
    label: "Global Regions",
    icon: Globe,
  },
  {
    uuid: "industry-verticals",
    value: "5",
    label: "Industry Verticals",
    icon: Users,
  },
  {
    uuid: "technology-partners",
    value: "80+",
    label: "Technology Partners",
    icon: Handshake,
  },
  {
    uuid: "years-of-expertise",
    value: "30+",
    label: "Years of Expertise",
    icon: Award,
  },
];

export const homeAbout: Omit<HomeAboutProps, "className"> = {
  eyebrow: "About Us",
  title: "Leading the Innovation Drive",
  description:
    "We deliver integrated technology, AI, and digital transformation solutions tailored to enterprise needs. Through innovation, strategic partnerships, and industry expertise, we help organizations build secure, intelligent, and future-ready digital ecosystems.",
  image: "/about_image.png",
  highlights: [
    {
      uuid: "ai-powered-solutions",
      label: "AI-powered enterprise solutions",
      icon: "/icons/ai-enterprise-solutions.svg",
    },
    {
      uuid: "industry-expertise",
      label: "Decades of industry expertise",
      icon: "/icons/industry-expertise.svg",
    },
    {
      uuid: "global-partnerships",
      label: "Regional presence, global partnerships",
      icon: "/icons/global-partnerships.svg",
    },
    {
      uuid: "end-to-end-delivery",
      label: "End-to-end consulting & delivery",
      icon: "/icons/end-to-end-delivery.svg",
    },
  ],
  actionLabel: "Learn More",
  href: "/about",
};

export const homeMissionVision: HomeMissionVisionItem[] = [
  {
    uuid: "our-mission",
    title: "Our Mission",
    description:
      "To empower organizations with integrated technology solutions that accelerate innovation, strengthen security, and enable sustainable digital transformation across industries.",
    icon: "/icons/mission.svg",
  },
  {
    uuid: "our-vision",
    title: "Our Vision",
    description:
      "To become a trusted global technology leader recognized for innovation, engineering excellence, and delivering intelligent solutions across enterprise and public sectors.",
    icon: "/icons/vision.svg",
  },
];

export const homeFaqs: Omit<HomeFaqsProps, "className"> = {
  heading: "Common Questions We Answer",
  faqs: [
    {
      uuid: "industries-served",
      question: "What Industries Does Tech Avenue Serve?",
      answer:
        "Tech Avenue delivers integrated technology solutions across government, telecommunications, construction, education, agriculture, energy, cybersecurity, and enterprise sectors, helping organizations accelerate secure digital transformation.",
    },
    {
      uuid: "services-provided",
      question: "What Services Does Tech Avenue Provide?",
      answer:
        "We provide enterprise IT consulting, smart infrastructure, cloud and data solutions, cybersecurity services, and end-to-end system integration tailored to each organization's operating environment.",
    },
    {
      uuid: "ai-solutions",
      question: "Does Tech Avenue Develop AI Solutions?",
      answer:
        "Yes. We design and deploy AI-powered platforms covering intelligent automation, predictive analytics, and decision support systems built on secure, production-ready architectures.",
    },
    {
      uuid: "digital-transformation-projects",
      question: "Can Tech Avenue Deliver End-To-End Digital Transformation Projects?",
      answer:
        "From strategy and architecture through implementation, migration, and long-term support, our teams manage the full transformation lifecycle as a single accountable partner.",
    },
    {
      uuid: "operating-regions",
      question: "Where Does Tech Avenue Operate?",
      answer:
        "We operate across more than ten global regions, combining regional delivery teams with a network of international technology partners.",
    },
  ],
};

export const homeTestimonials: Omit<HomeTestimonialsProps, "className"> = {
  heading: "Trusted by Visionary Organizations worldwide",
  description:
    "Delivering innovation, security, and measurable transformation through long-term strategic partnerships.",
  testimonials: [
    {
      uuid: "david-reynolds",
      quote:
        "Their cybersecurity frameworks and threat intelligence solutions significantly improved our operational resilience and compliance readiness.",
      name: "David Reynolds",
      role: "Director of Security Operations, Nexa Defense Systems",
      avatar: "/testimonials/david-reynolds.png",
      rating: 5,
    },
    {
      uuid: "ayesha-khan",
      quote:
        "Tech Avenue delivered scalable smart infrastructure solutions that enhanced efficiency and accelerated our innovation initiatives.",
      name: "Ayesha Khan",
      role: "Head of Digital Transformation, SmartCity Connect",
      avatar: "/testimonials/ayesha-khan.png",
      rating: 5,
    },
    {
      uuid: "michael-chen",
      quote:
        "Their engineering team provided outstanding support and delivered high performance systems beyond expectations.",
      name: "Michael Chen",
      role: "Enterprise Solutions Manager, Horizon Telecom",
      avatar: "/testimonials/michael-chen.png",
      rating: 5,
    },
  ],
};
