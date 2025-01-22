interface Social {
  linkedin: string;
  twitter: string;
  facebook: string;
}

export type TypeTeamMember = {
  // _id?: string;
  id: string;
  image: string;
  name: string;
  position: string;
  social: Social;
};
