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
        <span css={styles.icon}>
          <MdDevicesOther size={65} />
        </span>
      </div>
      <VerticalRule
        length="56px"
        thickness="3px"
        color="#fff"
        css={styles.vRule}
      />
      <div className="tagItem">
        <div css={styles.multiLine}>
          <span>Technologies: </span>
          <span css={styles.bold}>Wordpress</span>
        </div>
        <span css={styles.icon}>
          <FaWordpress size={65} />
        </span>
      </div>
      <VerticalRule
        length="56px"
        thickness="3px"
        color="#fff"
        css={styles.vRule}
      />
      <div className="tagItem">
        <div css={styles.multiLine}>
          <span>Industry: </span>
          <span css={styles.bold}>Ecommerce</span>
        </div>
        <span css={styles.icon}>
          <RiShoppingCartLine size={65} />
        </span>
      </div>
    </div>
  );
};

export default HeroTags;
const styles = {
  HeroTags: css`
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    gap: 0 25px;
    flex-wrap: wrap;
    @media (max-width: 1344px) {
      width: 100%;
    }

    .tagItem {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 20px;

      @media (max-width: 1344px) {
        font-size: 0.8rem;
      }
    }
  `,
  vRule: css`
    @media (max-width: 1050px) {
      display: none;
    }
  `,
  icon: css`
    @media (max-width: 1050px) {
      transform: scale(0.5);
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
