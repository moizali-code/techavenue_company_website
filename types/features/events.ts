export type EventItem = {
  id: number;
  uuid: string;
  title: string;
  location: string;
  startsAt: string;
  image: string;
  html: string;
};

export type EventsCarouselProps = {
  events: EventItem[];
  className?: string;
};
