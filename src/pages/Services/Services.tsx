import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import BlockServicePage from "../../components/BlockServicepage/BlockServicePage";
import styles from "./Services.module.scss";

const dataServicesPage = [
  {
    src: "/servicesPage/servicesConstruction.jpg",
    title: "Construction",
    info: "Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. ",
  },
  {
    src: "/servicesPage/servicesDevelopment.jpg",
    title: "Project Development",
    info: "Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est</br> nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum</br> blandit massa vitae amet felis eget. ",
  },
  {
    src: "/servicesPage/servicesDesign.jpg",
    title: "Interior Design",
    info: "Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. ",
  },
];

const Services: FC = () => {
  return (
    <>
      <div>
        <HeroPage />
      </div>
      <div className={styles.container}>
        {dataServicesPage.map(({ src, title, info }, index) => (
          <BlockServicePage index={index} src={src} title={title} info={info} />
        ))}
      </div>
    </>
  );
};

export default Services;
