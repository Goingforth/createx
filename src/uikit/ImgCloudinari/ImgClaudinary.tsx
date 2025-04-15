import { FC } from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

interface TypeImgCloudinary {
  image: string;
  width?: number;
  hight?: number;
}

const cld = new Cloudinary({
  cloud: {
    cloudName: "dehd5p9ts",
  },
});

export const ImgCloudinary: FC<TypeImgCloudinary> = ({
  image,
  width,
  hight,
}) => {
  return (
    <>
      {width !== undefined && hight !== undefined ? (
        <AdvancedImage
          cldImg={cld
            .image(`createx/${image}`)
            .resize(scale().width(width).height(hight))}
        />
      ) : (
        <AdvancedImage cldImg={cld.image(`createx/${image}`)} />
      )}
    </>
  );
};
