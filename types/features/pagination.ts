export type PaginatorProps = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  siblingCount?: number;
  className?: string;
};
