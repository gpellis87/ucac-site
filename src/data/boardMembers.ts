export interface BoardMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Maya Richardson",
    title: "Board Chair",
    imageUrl: "https://picsum.photos/seed/ucac-board-1/600/600",
  },
  {
    id: 2,
    name: "Elijah Grant",
    title: "Vice Chair",
    imageUrl: "https://picsum.photos/seed/ucac-board-2/600/600",
  },
  {
    id: 3,
    name: "Naomi Clarke",
    title: "Treasurer",
    imageUrl: "https://picsum.photos/seed/ucac-board-3/600/600",
  },
  {
    id: 4,
    name: "Dominic Hale",
    title: "Secretary",
    imageUrl: "https://picsum.photos/seed/ucac-board-4/600/600",
  },
  {
    id: 5,
    name: "Avery Collins",
    title: "Programs Committee Lead",
    imageUrl: "https://picsum.photos/seed/ucac-board-5/600/600",
  },
  {
    id: 6,
    name: "Sofia Bennett",
    title: "Community Partnerships Director",
    imageUrl: "https://picsum.photos/seed/ucac-board-6/600/600",
  },
  {
    id: 7,
    name: "Marcus Taylor",
    title: "Development & Giving Advisor",
    imageUrl: "https://picsum.photos/seed/ucac-board-7/600/600",
  },
  {
    id: 8,
    name: "Leila Morgan",
    title: "Youth Arts Advocate",
    imageUrl: "https://picsum.photos/seed/ucac-board-8/600/600",
  },
];
