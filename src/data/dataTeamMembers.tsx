interface Social {
  linkedin: string;
  twitter: string;
  facebook: string;
}

export type TypeTeamMember = {
  id: string;
  image: string;
  name: string;
  position: string;
  social: Social;
};
