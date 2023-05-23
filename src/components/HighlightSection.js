/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BsArrowRight } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";
import ComputerMonitor from "./ComputerMonitor";
import MonitorOuterImage from "assets/MonitorOuter.png";
import { useState } from "react";
import PhoneScreen from "./PhoneScreen";
import PhoneOuter1 from "assets/PhoneOuter1.png";
import PhoneOuter2 from "assets/PhoneOuter2.png";
import PhoneOuter3 from "assets/PhoneOuter3.png";

const HighlightSection = () => {
  const data = [1, 2, 3];

  const [isMobile, setIsMobile] = useState(false);
  const toggle = () => setIsMobile(!isMobile);

  return (
    <div css={styles.HighlightSection}>
      <div css={styles.graphicSide}>
        {/* Desktop  */}
        <div css={styles.graphic(!isMobile, false)}>
          <img
            src={MonitorOuterImage}
            alt="Second screen view of monitor"
            css={styles.monitorOuter}
          />
          <ComputerMonitor />
        </div>
        {/* Mobile */}
        <div css={styles.graphic(isMobile, true)}>
          <img src={PhoneOuter3} alt="Phone view 3" css={styles.phoneOuter} />
          <img src={PhoneOuter2} alt="Phone view 2" css={styles.phoneOuter} />
          <img src={PhoneOuter1} alt="Phone view 1" css={styles.phoneOuter} />
          <PhoneScreen />
        </div>
      </div>
      <div css={styles.contentSide}>
        <h2 css={styles.contentHeader}>Their Old Website And Problems</h2>
        <div css={styles.contentList}>
          {data.map((item, index) => (
            <div key={index} css={styles.highlightItem}>
              <span className="itemBullet">
                <BsArrowRight size={19} />
              </span>
              <span className="itemText">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </span>
            </div>
          ))}
        </div>
        <div css={styles.arrowButtons}>
          <FaAngleLeft size={28} color="#fff" className="button" />
          <FaAngleRight size={28} color="#fff" className="button" />
        </div>
        <div css={styles.switch}>
          <ToggleSwitch isMobile={isMobile} toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;

const styles = {
  HighlightSection: css`
    margin-top: 59px;
    display: flex;
    gap: 0 80px;
    align-items: stretch;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    min-height: 555px;
    overflow: hidden;

    background: linear-gradient(113deg, #3ae7ab 0%, #2dc4ea 100%);
  `,
  graphicSide: (show) => css`
    min-width: 50%;
    z-index: 900;
    position: relative;
  `,
  contentSide: css`
    padding-right: 170px;
    color: #fff;
  `,
  graphic: (show, isLongBg) => css`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: ${isLongBg ? "20px" : "0"};
    justify-content: flex-end;
    transform: ${show ? "translateX(0%)" : "translateX(-100%)"};
    transition: transform 0.5s ease;
    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${isLongBg ? "90%" : "70%"};
      height: 100%;
      background: #fff;
      z-index: -1;

      @media (max-width: 1460px) {
        background: transparent;
      }
    }
  `,
  monitorOuter: css`
    width: 275px;
    height: 360px;
    object-fit: cover;
    object-position: top right;
    padding-top: 23px;
  `,
  phoneOuter: css`
    width: 240px;
    height: 410px;
    object-fit: cover;
    object-position: top center;
    padding-top: 75px;
  `,
  contentHeader: css`
    margin-top: 83px;
    font-size: 36px;
    font-weight: bold;
  `,
  contentList: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  highlightItem: css`
    display: flex;
    gap: 13px;
    align-items: flex-start;
    justify-content: space-between;
    .itemBullet {
      padding-top: 4px;
      display: inline-flex;
      align-items: baseline;
    }
    .itemText {
      font-size: 18px;
      line-height: 28px;
    }
  `,
  arrowButtons: css`
    margin-top: 43px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

    .button {
      cursor: pointer;
    }
  `,
  switch: css`
    margin: 15px 0px;
  `,
};
