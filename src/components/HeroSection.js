/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeroImage from "assets/15740.png";

const HeroSection = () => {
  return (
    <div css={styles.HeroSection}>
      <img css={styles.image} src={HeroImage} alt="Person using laptop" />
    </div>
  );
};

export default HeroSection;
const styles = {
  image: css`
    filter: brightness(80%);
    width: 100%;
    height: calc(100vh - 50px);
    object-fit: cover;
    object-position: top left;
  `,
};
