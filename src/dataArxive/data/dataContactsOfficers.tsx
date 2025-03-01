export type TypeContactsOffices = {
  _id?: string;
  city: string;
  address: string;
  coordinates: string;
  call: string;
  email: string;
  schedule: string;
};
export const dataContactsOffices: TypeContactsOffices[] = [
  {
    city: "New York, USA",
    address: "8502 Preston Rd. Inglewood, New York 98380",
    coordinates: "34.522312139055785, -118.62702791290685",
    call: "(405) 555-0128",
    email: "hello@createx.com",
    schedule: "Mon - Fri 9:00 - 18:00",
  },
  {
    city: "New Jersey, USA",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    coordinates: "40.05843052404969, -74.4057255759067",
    call: "(808) 555-0111",
    email: "hello@createx.com",
    schedule: "Mon - Fri 9:00 - 18:00",
  },
  {
    city: "San Francisco, USA",
    address: "8502 Preston Rd. Inglewood, San Francisco 98380",
    coordinates: "33.96204406820119, -118.35298986040738",
    call: "(505) 555-0125",
    email: "hello@createx.com",
    schedule: "Mon - Fri 10:00 - 19:00",
  },
];
