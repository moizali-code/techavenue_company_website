import { SuccessStoriesGrid } from "@/components/features/success-stories/success-stories-grid";
import { SuccessStoriesHeader } from "@/components/features/success-stories/success-stories-header";
import { getSuccessStoriesPageData } from "@/lib/cms";

export default async function page() {
  const { content, stories } = await getSuccessStoriesPageData();

  return (
    <>
      <SuccessStoriesHeader header={content.header} intro={content.intro} />

      <SuccessStoriesGrid stories={stories} />
    </>
  );
}
