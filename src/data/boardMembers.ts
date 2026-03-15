export interface BoardMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

export interface ExOfficioBoardMember {
  id: number;
  name: string;
  title: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Derek Skinner",
    title: "President · Huntington National Bank",
    imageUrl: "https://picsum.photos/seed/ucac-board-1/600/600",
  },
  {
    id: 2,
    name: "Dr. Carrie Hoefferle",
    title: "President-Elect · Wingate University",
    imageUrl: "https://picsum.photos/seed/ucac-board-2/600/600",
  },
  {
    id: 3,
    name: "Matthew Stewart",
    title: "Treasurer · J.P. Morgan Chase",
    imageUrl: "https://picsum.photos/seed/ucac-board-3/600/600",
  },
  {
    id: 4,
    name: "Ron Hinson",
    title: "Secretary · Hinson Electric",
    imageUrl: "https://picsum.photos/seed/ucac-board-4/600/600",
  },
  {
    id: 5,
    name: "Michelle Lancaster",
    title: "Past President · Wingate University",
    imageUrl: "https://picsum.photos/seed/ucac-board-5/600/600",
  },
  {
    id: 6,
    name: "Dr. Paul D'Amico",
    title: "Director · Atrium Health",
    imageUrl: "https://picsum.photos/seed/ucac-board-6/600/600",
  },
  {
    id: 7,
    name: "Ernest Collins",
    title: "Director · Community Volunteer",
    imageUrl: "https://picsum.photos/seed/ucac-board-7/600/600",
  },
  {
    id: 8,
    name: "Phillip Faust",
    title: "Director · Union County Chamber of Commerce",
    imageUrl: "https://picsum.photos/seed/ucac-board-8/600/600",
  },
  {
    id: 9,
    name: "John Huneycutt",
    title: "Director · Union Power Cooperative",
    imageUrl: "https://picsum.photos/seed/ucac-board-9/600/600",
  },
  {
    id: 10,
    name: "Tracy Price",
    title: "Director · Artist",
    imageUrl: "https://picsum.photos/seed/ucac-board-10/600/600",
  },
  {
    id: 11,
    name: "Candice Sturdivant",
    title: "Director · Community Volunteer",
    imageUrl: "https://picsum.photos/seed/ucac-board-11/600/600",
  },
  {
    id: 12,
    name: "Martha Wegner",
    title: "Director · Duke Energy",
    imageUrl: "https://picsum.photos/seed/ucac-board-12/600/600",
  },
  {
    id: 13,
    name: "Jenna Westbrook, CFRE",
    title: "Director · Make-A-Wish America",
    imageUrl: "https://picsum.photos/seed/ucac-board-13/600/600",
  },
];

export const exOfficioBoardMembers: ExOfficioBoardMember[] = [
  {
    id: 1,
    name: "Patrick Niland",
    title: "Union County Government",
  },
  {
    id: 2,
    name: "Dr. Travis Teague",
    title: "South Piedmont Community College",
  },
  {
    id: 3,
    name: "Mark Watson",
    title: "City of Monroe",
  },
];
