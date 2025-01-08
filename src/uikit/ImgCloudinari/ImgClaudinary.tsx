import { FC } from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
// import { scale } from "@cloudinary/url-gen/actions/resize";
// import { Resize } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage, lazyload } from "@cloudinary/react";

//import styles from "./ImgClaudinary.module.scss";
// const BASE_CLOUD_NAME: string = import.meta.env.VITE_CLOUD_NAME;

// interface TypeCld {
//   cloudName: string | undefined;
// }

interface TypeImgCloudinary {
  image: string;
  // width?: number;
  // hight?: number;
}

const cld = new Cloudinary({
  cloud: {
    // cloudName: { BASE_CLOUD_NAME },
    cloudName: "dehd5p9ts",
  },
});

export const ImgCloudinary: FC<TypeImgCloudinary> = ({
  image,
  // width,
  // hight,
}) => {
  return (
    //   <>
    //   if (width !== undefined && hight !== undefined) {
    //     return (
    //       <AdvancedImage
    //         cldImg={cld
    //           .image(`createx/${image}`)
    //           .resize(scale().width(width).height(hight))}
    //         plugins={[lazyload({ rootMargin: "0px", threshold: 0.25 })]}
    //       />
    //     );
    //   } else {
    //     return (
    //       <AdvancedImage
    //         cldImg={cld.image(`createx/${image}`)}
    //         plugins={[lazyload({ rootMargin: "0px", threshold: 0.25 })]}
    //       />
    //     );
    //   }
    // };

    // </>

    // )

    <AdvancedImage
      cldImg={cld.image(`createx/${image}`)}
      plugins={[lazyload({ rootMargin: "0px", threshold: 0.25 })]}
    />
  );
};
