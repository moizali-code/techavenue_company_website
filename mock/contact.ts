import type {
  ContactDetailsProps,
  ContactFormProps,
  ContactHeaderProps,
} from "@/types/features/contact";

export const contactSection: {
  header: ContactHeaderProps;
  details: ContactDetailsProps;
  form: ContactFormProps;
} = {
  header: {
    eyebrow: "Contact Us",
    title: "Connect with Our Team",
    description:
      "Whether you're planning a new initiative, seeking expert guidance, or exploring partnership opportunities, we're here to help you find the right solution.",
    image: "/contact/contact_header.png",
  },
  details: {
    eyebrow: "Get In Touch",
    title: "Let's Start the Conversation",
    description:
      "Whether you're exploring digital transformation initiatives, seeking technology solutions, or looking for a strategic partner, our team is ready to help. Reach out to us and we'll connect you with the right experts.",
    officeAddress:
      "Office #409, Fourth Floor, Evacuee Trust Complex, F-5/1, Islamabad, 44000, Pakistan",
    phone: "(051) 8844080",
    email: "info@techavenue.biz",
    website: "www.techavenue.biz",
    businessHours: "Monday – Friday 9:00 AM – 6:00 PM",
    weekendHours: "Saturday / Sunday: Closed",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Evacuee+Trust+Complex,+F-5/1,+Islamabad&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Evacuee+Trust+Complex,+F-5/1,+Islamabad",
  },
  form: {
    title: "Send Us a Message",
    description:
      "Have a question or want to discuss your project? Fill out the form below and our team will get back to you as soon as possible.",
  },
};
