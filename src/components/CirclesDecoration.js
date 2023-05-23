/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const CirclesDecoration = ({ rotation, ...props }) => {
  return (
    <svg
      css={styles.CirclesDecoration(rotation)}
      width="534"
      height="534"
      {...props}
    >
      <circle
        cx="267"
        cy="267"
        r="259"
        stroke="#EA1A25"
        strokeWidth="5"
        fill="transparent"
        strokeDasharray="130 65"
        css={styles.rotating(17)}
      />
      <circle
        cx="267"
        cy="267"
        r="232"
        stroke="#EA1A25"
        strokeWidth="5"
        fill="transparent"
        strokeDasharray="140 190"
        css={styles.rotating(14)}
      />
      <circle
        cx="267"
        cy="267"
        r="205"
        stroke="#EA1A25"
        strokeWidth="5"
        fill="transparent"
        strokeDasharray="200 130"
        css={styles.rotating(21)}
      />
    </svg>
  );
};

export default CirclesDecoration;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const styles = {
  CirclesDecoration: (rotation = 90) => css`
    transform: rotate(${rotation + "deg"});
  `,
  rotating: (duration) => css`
    transform-origin: center;
    animation: ${rotateAnimation} ${duration + "s"} linear infinite;
  `,
};
