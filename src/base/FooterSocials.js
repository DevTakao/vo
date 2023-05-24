/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterSocials = () => {
  return (
    <div css={styles.FooterSocials}>
      <FaFacebookF size={40} css={styles.button} />
      <FaTwitter size={40} css={styles.button} />
      <FaInstagram size={40} css={styles.button} />
      <FaLinkedinIn size={40} css={styles.button} />
    </div>
  );
};

export default FooterSocials;
const styles = {
  FooterSocials: css`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: #fff;
    padding: 10px;
    margin-top: 10px;
  `,

  button: css`
    :hover {
      cursor: pointer;
      color: #26a9e0;
    }
  `,
};
