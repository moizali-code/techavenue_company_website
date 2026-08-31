import { SuccessStoriesGrid } from "@/components/features/success-stories/success-stories-grid";
import { SuccessStoriesHeader } from "@/components/features/success-stories/success-stories-header";
import { SuccessStoriesIntro } from "@/components/features/success-stories/success-stories-intro";
import {
  successStories,
  successStoriesContent,
} from "@/mock/success-stories";

const page = () => {
  const { header, intro, filters } = successStoriesContent;

  return (
    <>
      <SuccessStoriesHeader header={header} />

      <SuccessStoriesIntro intro={intro} />

      <SuccessStoriesGrid stories={successStories} filters={filters} />
    </>
  );
};

export default page;
