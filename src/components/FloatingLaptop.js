/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LaptopImage from "assets/Laptop.png";
import LaptopScreenImage from "assets/LaptopScreen.png";

const FloatingLaptop = () => {
  return (
    <div css={styles.FloatingLaptop}>
      <img
        src={LaptopImage}
        alt="laptop showing a website"
        css={styles.laptop}
      />
      <img
        src={LaptopScreenImage}
        alt="laptop screen"
        css={styles.laptopScreen}
      />
    </div>
  );
};

export default FloatingLaptop;
const styles = {
  FloatingLaptop: css`
    width: 850px;
    height: 485px;
    position: relative;
  `,

  laptop: css`
    position: absolute;
    top: 0;
  `,

  laptopScreen: css`
    width: 644px;
    position: absolute;
    left: 104px;
    top: 30px;
  `,
};
