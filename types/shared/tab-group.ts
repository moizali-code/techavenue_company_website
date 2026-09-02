export type TabGroupItem = {
  id: number;
  uuid: string;
  title: string;
};

export type TabGroupProps = {
  id?: string;
  tabs: TabGroupItem[];
  activeUuid?: string;
  hrefPrefix?: string;
  variant?: "pill" | "default" | "line";
  classNames?: {
    mainWrapper?: string;
    list?: string;
    trigger?: string;
  };
};
