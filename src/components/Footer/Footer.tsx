import { FC } from "react";
import BloсkLinkFooter from "../../uikit/BlockLinkFooter/BloсkLinkFooter";
import { dataBlockLinkFooter, dataSocialLinks } from "../../data";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import { NavLink } from "react-router-dom";
import InputSubscribe from "../../uikit/InputSubscribe/InputSubscribe";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blockOwn}>
        <div>
          <div className={styles.logoSocialLink}>
            <div>
              <SvgSprite id='logo_footer' />
            </div>
            <div className={styles.socialLinks}>
              {dataSocialLinks.map(({ id, icon, to }) => (
                <div key={id} className={styles.socialLink}>
                  <NavLink to={to}>
                    <SvgSprite id={icon} />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mission}>
            Createx Construction Bureau has been successfully operating in the
            USA construction market since 2000. We are proud to offer you
            quality construction and exemplary service. Our mission is to set
            the highest standards for construction sphere.
          </div>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.titleSubscribe}>
            <h4>Let’s stay in touch</h4>
          </div>
          <div>
            <InputSubscribe />
            <div className={styles.note}>
              * Subscribe to our newsletter to receive communications and early
              updates from Createx Construction Bureau.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blockTwo}>
        {dataBlockLinkFooter.map(({ id, title, links }) => (
          <div key={id}>
            <BloсkLinkFooter title={title} links={links} />
          </div>
        ))}
      </div>
      <div className={styles.blockOwn}>
        <div className={styles.copyright}>
          <div className={styles.copyrightText}>
            © All rights reserved. Made with
          </div>
          <div className={styles.copyrightText}>
            <SvgSprite id='heart' />
          </div>
          <div className={styles.copyrightText}>by Createx Studio </div>
        </div>

        <div className={styles.gotop}>
          <div className={styles.gototop}>GO TO TOP</div>
          <div
            className={styles.iconTop}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <SvgSprite id='up-btn' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
