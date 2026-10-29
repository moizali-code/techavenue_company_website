export type TrustedPartnerLogo = {
  id: number;
  uuid: string;
  image: string;
};

export type TrustedPartner = string | TrustedPartnerLogo;

export type TrustedPartnersProps = {
  heading?: string;
  partners: TrustedPartner[];
  marquee?: boolean;
  classNames?: {
    mainWrapper?: string;
    container?: string;
    heading?: string;
    list?: string;
    item?: string;
  };
};
