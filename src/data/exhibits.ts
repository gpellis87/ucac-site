export type ExhibitStatus = "now-on-view" | "opening-soon" | "call-for-artists" | "archived";

export interface Exhibit {
  id: string;
  slug: string;
  title: string;
  status: ExhibitStatus;
  description: string;
  details: string[];
  location: string;
  address: string;
  receptionDate?: string;
  receptionTime?: string;
  submissionDeadline?: string;
  submissionUrl?: string;
  imageUrl: string;
  flyerPath?: string;
  videoPath?: string;
  videoPoster?: string;
  images?: string[];
  tags: string[];
  presentedBy: string[];
  callToAction?: { label: string; href: string };
}

export const statusLabel: Record<string, string> = {
  "now-on-view": "Now On View",
  "opening-soon": "Opening Soon",
  "call-for-artists": "Call for Artists",
};
