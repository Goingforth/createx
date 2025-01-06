import { FC } from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage, lazyload } from "@cloudinary/react";

//import styles from "./ImgClaudinary.module.scss";
// const BASE_CLOUD_NAME: string = import.meta.env.VITE_CLOUD_NAME;

// interface TypeCld {
//   cloudName: string | undefined;
// }

interface TypeImgCloudinary {
  image: string;
}

const cld = new Cloudinary({
  cloud: {
    // cloudName: { BASE_CLOUD_NAME },
    cloudName: "dehd5p9ts",
  },
});

export const ImgCloudinary: FC<TypeImgCloudinary> = ({ image }) => {
  return (
    <AdvancedImage
      cldImg={cld.image(`createx/${image}`)}
      plugins={[lazyload({ rootMargin: "0px", threshold: 0.25 })]}
    />
  );
};
