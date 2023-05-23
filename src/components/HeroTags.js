/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdDevicesOther } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import VerticalRule from "../base/VerticalRule";

const HeroTags = () => {
  return (
    <div css={styles.HeroTags}>
      <div className="tagItem">
        <span css={styles.bold}>Built for:</span>
        <span>
          <MdDevicesOther size={65} />
        </span>
      </div>
      <VerticalRule length="56px" thickness="2px" color="#fff" />
      <div className="tagItem">
        <div css={styles.multiLine}>
          <span>Technologies: </span>
          <span css={styles.bold}>Wordpress</span>
        </div>
        <span>
          <FaWordpress size={65} />
        </span>
      </div>
      <VerticalRule length="56px" thickness="2px" color="#fff" />
      <div className="tagItem">
        <div css={styles.multiLine}>
          <span>Industry: </span>
          <span css={styles.bold}>Ecommerce</span>
        </div>
        <span>
          <RiShoppingCartLine size={65} />
        </span>
      </div>
    </div>
  );
};

export default HeroTags;
const styles = {
  HeroTags: css`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 25px;
    .tagItem {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 20px;
    }
  `,
  bold: css`
    font-weight: bold;
  `,
  multiLine: css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  `,
};
