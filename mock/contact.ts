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
    image: "/contact/contact_header.jpg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.056230091494!2d73.08594127418624!3d33.733362073278684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1ebcf0378e9%3A0xd55e427cc0603839!2sTech%20Avenue%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1788522597063!5m2!1sen!2s",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Evacuee+Trust+Complex,+F-5/1,+Islamabad",
  },
  form: {
    title: "Send Us a Message",
    description:
      "Have a question or want to discuss your project? Fill out the form below and our team will get back to you as soon as possible.",
  },
};
