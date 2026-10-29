import { getAboutPageData } from "@/lib/cms";
import { AboutClient } from "./page.client";

export default async function page() {
  const aboutPageContent = await getAboutPageData();
  return <AboutClient data={aboutPageContent} />;
}
