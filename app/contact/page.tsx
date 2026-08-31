import { ContactDetails } from "@/components/features/contact/contact-details";
import { ContactForm } from "@/components/features/contact/contact-form";
import { ContactHeader } from "@/components/features/contact/contact-header";
import { contactDetails, contactForm, contactHeader } from "@/mock/contact";

const page = () => {
  return (
    <>
      <ContactHeader {...contactHeader} />

      <ContactDetails {...contactDetails} />

      <ContactForm {...contactForm} />
    </>
  );
};

export default page;
