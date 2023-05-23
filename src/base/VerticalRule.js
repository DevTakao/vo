/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const VerticalRule = ({ length, thickness, color }) => {
  return <div css={styles.VerticalRule(length, thickness, color)}></div>;
};

export default VerticalRule;
const styles = {
  VerticalRule: (length, thickness, color) => css`
    width: ${thickness || "2px"};
    height: ${length || "100%"};
    background-color: ${color || "black"};
    margin: 0 10px;
  `,
};
