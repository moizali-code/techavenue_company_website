import { SuccessStoriesGrid } from "@/components/features/success-stories/success-stories-grid";
import { SuccessStoriesHeader } from "@/components/features/success-stories/success-stories-header";
import { getSuccessStoriesPageData, getIndustries, getSolutionPages, getSiteSettings } from "@/lib/cms";
import type { TabGroupItem } from "@/types/shared/tab-group";


export default async function page() {
  const [{ content, stories }, industries, solutionPages, settings] = await Promise.all([
    getSuccessStoriesPageData(),
    getIndustries(),
    getSolutionPages(),
    getSiteSettings(),
  ]);

  const ALL_TAB: TabGroupItem = { id: 0, uuid: "all", title: settings.allFilterLabel };
  const solutionTags = new Map(solutionPages.map(({ id, uuid, title }) => [uuid, { id, uuid, title }]));
  for (const story of stories) {
    if (story.solution.uuid && !solutionTags.has(story.solution.uuid)) solutionTags.set(story.solution.uuid, story.solution);
  }
  const solutionTabs: TabGroupItem[] = [ALL_TAB, ...solutionTags.values()];
  const industryTabs: TabGroupItem[] = [ALL_TAB, ...industries.map(({ id, uuid, title }) => ({ id, uuid, title }))];

  return (
    <>
      <SuccessStoriesHeader header={content.header} intro={content.intro} />

      <SuccessStoriesGrid stories={stories} solutionTabs={solutionTabs} industryTabs={industryTabs} />
    </>
  );
}
