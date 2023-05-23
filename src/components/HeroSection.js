/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeroImage from "assets/15740.png";
import HeroTags from "./HeroTags";
import FloatingLaptop from "./FloatingLaptop";

const HeroSection = () => {
  return (
    <div css={styles.HeroSection}>
      <img css={styles.image} src={HeroImage} alt="Person using laptop" />
      <div css={styles.overlay}>
        <p className="overlayHeader">TRIPPRO - AN ECOMMERCE SOLUTION</p>
        <p className="overlayBody">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <HeroTags />
      </div>
      <div css={styles.laptopContainer}>
        <FloatingLaptop />
      </div>
    </div>
  );
};

export default HeroSection;
const styles = {
  HeroSection: css`
    position: relative;
  `,
  image: css`
    filter: brightness(70%) grayscale(0.2);
    width: 100%;
    height: 637px;
    object-fit: cover;
    object-position: top left;
  `,
  overlay: css`
    width: 75%;
    position: absolute;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;

    .overlayHeader {
      font-weight: lighter;
      font-size: 60px;
      margin: 0;
    }
    .overlayBody {
      margin: 25px 0;
    }
  `,
  laptopContainer: css`
    display: inline-block;
    position: relative;
    left: 50%;
    top: -235px;
    transform: translateX(-50%);
  `,
};
