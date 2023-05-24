/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SkylineImage from "assets/skyline.jpg";
import FooterLinks from "./FooterLinks";
import FooterBlade from "./FooterBlade";
import FooterSocials from "./FooterSocials";
import { RxDotFilled } from "react-icons/rx";

const Footer = () => {
  return (
    <div css={styles.Footer}>
      <img src={SkylineImage} alt="Shanghai Skyline" css={styles.background} />
      <div css={styles.footerLinksWrapper}>
        <FooterLinks />
      </div>
      <div css={styles.footerLinksWrapper}>
        <FooterBlade />
      </div>
      <FooterSocials />
      <div css={styles.termsAndCopyright}>
        <div className="termsContainer">
          <div className="link">Shopping T&C</div>
          <div className="bigDot">
            <RxDotFilled />
          </div>
          <div className="link">Terms & Conditions</div>
          <div className="bigDot">
            <RxDotFilled />
          </div>
          <div className="link">Privacy Policy</div>
        </div>
        <div className="copyrightContainer">
          &copy; 2018 &middot; Visible One
        </div>
      </div>
    </div>
  );
};

export default Footer;
const styles = {
  Footer: css`
    width: 100%;
    position: relative;
  `,
  background: css`
    position: absolute;
    top: 0;
    z-index: -1;
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: top center;
    filter: grayscale(100%) brightness(25%);
  `,
  footerLinksWrapper: css`
    width: 80%;
    margin: 0 auto;
  `,
  footerBladeWrapper: css`
    width: 80%;
    margin: 0 auto;
  `,
  termsAndCopyright: css`
    color: #ccc;
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 50px;
    padding: 5px 0 10px 0;
    font-size: 14px;

    .termsContainer {
      display: flex;
      align-content: center;
      justify-content: center;
      gap: 5px;

      .link {
        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  `,
};
