/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MonitorScreenImage from "assets/MonitorScreen.png";

const ComputerMonitor = () => {
  return (
    <div css={styles.ComputerMonitor}>
      <img
        src={MonitorScreenImage}
        alt="monitor screen"
        css={styles.monitorSquare}
      />
      <div css={styles.buttonBox}>
        <div className="monitorButton"></div>
      </div>
      <div css={styles.monitorTail}></div>
      <div css={styles.monitorFoot}></div>
      <div css={styles.monitorFootShade}></div>
    </div>
  );
};

export default ComputerMonitor;

const styles = {
  ComputerMonitor: css`
    max-width: 680px;
    max-height: 555px;
  `,
  monitorSquare: css`
    border: 23px solid #58595b;
    border-top-left-radius: 23px;
    border-top-right-radius: 23px;
    display: inline-block;
    vertical-align: middle;
  `,
  buttonBox: css`
    background: #c5cdd3;
    width: 100%;
    height: 63px;
    border-bottom-left-radius: 23px;
    border-bottom-right-radius: 23px;
    position: relative;

    .monitorButton {
      width: 25px;
      height: 25px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #58595b;
      border-radius: 50%;
    }
  `,
  monitorTail: css`
    border: 1ox solid red;
    width: 150px;
    height: 0;
    border-bottom: 74px solid #6e7278;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    margin-left: auto;
    margin-right: auto;
  `,
  monitorFoot: css`
    width: 180px;
    height: 0;
    border-bottom: 7px solid #c5cdd3;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    margin-left: auto;
    margin-right: auto;
  `,
  monitorFootShade: css`
    width: 200px;
    height: 7px;
    background-color: #6e7278;
    margin-left: auto;
    margin-right: auto;
  `,
};
