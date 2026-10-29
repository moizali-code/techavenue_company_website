import { ContactDetails } from "@/components/features/contact/contact-details";
import { ContactForm } from "@/components/features/contact/contact-form";
import { ContactHeader } from "@/components/features/contact/contact-header";
import { getContactPageData, getIndustries, getServicesPageData } from "@/lib/cms";

export default async function page() {
  const [contactSection, industries, servicesData] = await Promise.all([
    getContactPageData(),
    getIndustries(),
    getServicesPageData(),
  ]);

  const industryOptions = industries.map((i) => i.title);
  const verticleOptions = servicesData.allServicesArticles.map((a) => a.title);

  return (
    <>
      <ContactHeader {...contactSection.header} />

      <ContactDetails {...contactSection.details} />

      <ContactForm {...contactSection.form} industryOptions={industryOptions} verticleOptions={verticleOptions} />
    </>
  );
}
