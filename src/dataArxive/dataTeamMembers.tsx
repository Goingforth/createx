export type TypeTeamMember = {
  // _id?: string;
  id: string;
  image: string;
  name: string;
  position: string;
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
};

export const dataTeamMembers: TypeTeamMember[] = [
  {
    id: "teamMember0",
    image: "team/teamMember0.jpg",
    name: "Courtney Alexander",
    position: "CEO, Co-Founder",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember1",
    image: "team/teamMember1.jpg",
    name: "Calvin Fox",
    position: "CTO, Co-Founder",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember2",
    image: "team/teamMember2.jpg",
    name: "Johnny Lane",
    position: "Commercial Manager",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember3",
    image: "team/teamMember3.jpg",
    name: "Diane Mccoy",
    position: "Director of Human Resources",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember4",
    image: "team/teamMember4.jpg",
    name: "Judith Warren",
    position: "Lead Accountant",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember5",
    image: "team/teamMember5.jpg",
    name: "Floyd Simmmons",
    position: "Finacial Director",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember6",
    image: "team/teamMember6.jpg",
    name: "Serenity Edwards",
    position: "Director of Marketing",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  {
    id: "teamMember7",
    image: "team/teamMember7.jpg",
    name: "Shawn Edwards",
    position: "Tech Lead",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
];
