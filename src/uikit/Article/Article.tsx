import { FC } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import { TypeIdIcons } from "../SvgSprite/SvgSprite";
import styles from "./Article.module.scss";

const bulletedList = [
  "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
  "Vulputate placerat amet pulvinar lorem nisl.",
  "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
  "Etiam duis lobortis in fames ultrices commodo nibh.",
];
const share: TypeIdIcons[] = ["facebook", "linkedin", "twitter"];
export const Article: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Vulputate vitae pellentesque scelerisque luctus consequat mattis
        pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida
        rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.
      </div>
      <div className={styles.articleItem1}>
        <div>
          At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
          senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing
          eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
          neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat
          leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
        </div>
        <div>
          Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci
          interdum feugiat lectus libero duis. Nisl massa, elementum varius sit.
          Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed
          duis diam vehicula rhoncus. In dictum nullam tincidunt semper
          pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc,
          non.
        </div>
      </div>
      <div className={styles.articleItem2}>
        <div>
          <SvgSprite id='braces' />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
          lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
          purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue
          tortor in tot euismod vulputate etiam eros. Vel accumsan at elit
          neque, ipsum.
        </div>
      </div>
      <div className={styles.articleItem3}>
        Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat
        mattis. Vitae mus blandit in neque amet non fringilla blandit:
      </div>
      <div className={styles.bulletedList}>
        {bulletedList.map((list, index) => (
          <div className={styles.listItem} key={`bulletedList${index}`}>
            <div>
              <SvgSprite id='check' />
            </div>
            <div>{list}</div>
          </div>
        ))}
      </div>
      <div className={styles.articleItem4}>
        Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id
        nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur
        volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
        neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames
        augue mattis tortor est justo, pharetra nibh risus. Facilisi at
        porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis
        sagittis curabitur tellus convallis eget netus vitae.
      </div>
      <div className={styles.sharing}>
        <div className={styles.share}>Share:</div>
        {share.map((id, index) => (
          <div className={styles.iconWrapper} key={`share${index}`}>
            <SvgSprite id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
