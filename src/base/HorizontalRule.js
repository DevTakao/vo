/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HorizontalRule = ({ length, thickness, color }) => {
  return <div css={styles.HorizontalRule(length, thickness, color)}></div>;
};

export default HorizontalRule;
const styles = {
  HorizontalRule: (length, thickness, color) => css`
    height: ${thickness || "2px"};
    width: ${length || "100%"};
    background-color: ${color || "black"};
    margin: 17px 0;
  `,
};
