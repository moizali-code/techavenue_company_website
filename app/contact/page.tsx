import { ContactDetails } from "@/components/features/contact/contact-details";
import { ContactForm } from "@/components/features/contact/contact-form";
import { ContactHeader } from "@/components/features/contact/contact-header";
import { contactForm, contactSection } from "@/mock/contact";

const page = () => {
  return (
    <>
      <ContactHeader {...contactSection.header} />

      <ContactDetails {...contactSection.details} />

      <ContactForm {...contactForm} />
    </>
  );
};

export default page;
