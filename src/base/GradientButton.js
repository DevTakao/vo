/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const GradientButton = ({ children, ...props }) => {
  return (
    <button css={styles.GradientButton} {...props}>
      {children}
    </button>
  );
};

export default GradientButton;
const styles = {
  GradientButton: css`
    width: 280px;
    height: 74px;
    background: transparent linear-gradient(270deg, #3ae7ab 0%, #2dc4ea 100%) 0%
      0% no-repeat padding-box;
    border-radius: 50px;
    border-width: 0;
    text-align: center;
    font: normal normal bold 20px/27px Open Sans;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
  `,
};
