export type ContactHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  className?: string;
};

export type ContactDetailsProps = {
  eyebrow: string;
  title: string;
  description: string;
  officeAddress: string;
  phone: string;
  email: string;
  website: string;
  businessHours: string;
  weekendHours: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  className?: string;
};

export type ContactFormProps = {
  title: string;
  description: string;
  className?: string;
};
