export type TypeSliderFullImage = {
  id: string;
  image: string;
  title?: string;
  content?: string;
};

export type TypeStateSlider = {
  offset: number;
  index: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const dataSlidersHero: TypeSliderFullImage[] = [
  {
    id: "imageSlider0",
    image: "/images/heroImages/heroImage1.jpg",
    title: "CREATE<span>X</span> CONSTRUCTION",
    content:
      "Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br/>consequat, dignissim vitae proin ipsum sed. Pellentesque nec<br/> turpis purus eget pellentesque integer ipsum elementum felis. ",
  },
  {
    id: "imageSlider1",
    image: "/images/heroImages/heroImage2.jpg",
    title: "CREATE <span>NEW</span> IDEAS",
    content:
      "Lorem ipsum dolor sit beatae voluptates est laboriosam illo laborum, quasi cumque debitis facere inventore fugit at.<br/> Recusandae, excepturi? Nesciunt",
  },
  {
    id: "imageSlider2",
    image: "/images/heroImages/heroImage3.jpg",
    title: "MAKE <span>PLANS</span>",
    content:
      "Amet consectetur adipisicing elit. <br/>Consequatur rerum exercitationem iusto modi maxime",
  },
  {
    id: "imageSlider3",
    image: "/images/heroImages/heroImage4.jpg",
    title: "LOOK IN THE <span>FUTURE</span>",
    content:
      "Dolor sit amet consectetur adipisicing elit. Molestias reiciendis sint, provident laborum rem dignissimos beatae suscipit dolorum sapiente nihil nostrum, ea ratione voluptatibus aspernatur magnam deserunt? Eius, vitae quod?",
  },
];
