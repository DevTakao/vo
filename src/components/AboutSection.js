/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionHeader from "../base/SectionHeader";
import TabletImage from "assets/Tablet.png";
import HorizontalRule from "../base/HorizontalRule";
import GradientButton from "../base/GradientButton";

const AboutSection = () => {
  return (
    <div css={styles.AboutSection}>
      <div css={styles.textSide}>
        <SectionHeader blackPrefix="ABOUT" blueSuffix="TRIPPRO" />
        <HorizontalRule length="152px" thickness="3px" color="#2DC4EA" />
        <p css={styles.sectionBody}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita
        </p>
        <GradientButton style={{ marginTop: "15px" }}>
          TOUR THE WEBSITE
        </GradientButton>
      </div>
      <div css={styles.imageSide}>
        <img css={styles.image} src={TabletImage} alt="tablet" />
      </div>
    </div>
  );
};

export default AboutSection;
const styles = {
  AboutSection: css`
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 161px;
    align-items: center;
    justify-content: space-between;
  `,
  sectionBody: css`
    font-size: 18px;
    line-height: 28px;
  `,
  image: css`
    width: 368px;
  `,
};
