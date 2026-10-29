import { SuccessStoriesGrid } from "@/components/features/success-stories/success-stories-grid";
import { SuccessStoriesHeader } from "@/components/features/success-stories/success-stories-header";
import { getSuccessStoriesPageData, getIndustries, getSolutionPages } from "@/lib/cms";
import type { TabGroupItem } from "@/types/shared/tab-group";

const ALL_TAB: TabGroupItem = { id: 0, uuid: "all", title: "All" };

export default async function page() {
  const [{ content, stories }, industries, solutionPages] = await Promise.all([
    getSuccessStoriesPageData(),
    getIndustries(),
    getSolutionPages(),
  ]);

  const solutionTabs: TabGroupItem[] = [ALL_TAB, ...solutionPages.map(({ id, uuid, title }) => ({ id, uuid, title }))];
  const industryTabs: TabGroupItem[] = [ALL_TAB, ...industries.map(({ id, uuid, title }) => ({ id, uuid, title }))];

  return (
    <>
      <SuccessStoriesHeader header={content.header} intro={content.intro} />

      <SuccessStoriesGrid stories={stories} solutionTabs={solutionTabs} industryTabs={industryTabs} />
    </>
  );
}
