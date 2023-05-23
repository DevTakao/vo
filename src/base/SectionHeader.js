/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionHeader = ({ blackPrefix, blueSuffix, ...props }) => {
  return (
    <h2 css={styles.SectionHeader} {...props}>
      <span css={styles.black}>{blackPrefix}</span>{" "}
      <span css={styles.blue}>{blueSuffix}</span>
    </h2>
  );
};

export default SectionHeader;
const styles = {
  SectionHeader: css`
    font-weight: bold;
  `,
  black: css`
    color: #000;
  `,
  blue: css`
    color: #2dc4ea;
  `,
};
