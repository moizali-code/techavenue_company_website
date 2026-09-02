import type { ReactNode } from "react";

export type TeamMember = {
  id: number;
  uuid: string;
  name: string;
  role: string;
  image: string;
  description: string;
};

export type TeamMemberModalProps = {
  member: TeamMember;
  trigger: ReactNode;
};

export type TeamSection = {
  heading: string;
  description: string;
  members: TeamMember[];
};
