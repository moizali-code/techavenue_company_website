import { ContactDetails } from "@/components/features/contact/contact-details";
import { ContactForm } from "@/components/features/contact/contact-form";
import { ContactHeader } from "@/components/features/contact/contact-header";
import { getContactPageData } from "@/lib/cms";

export default async function page() {
  const contactSection = await getContactPageData();

  return (
    <>
      <ContactHeader {...contactSection.header} />

      <ContactDetails {...contactSection.details} />

      <ContactForm {...contactSection.form} />
    </>
  );
}
