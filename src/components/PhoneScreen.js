/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PhoneScreenImage from "assets/PhoneScreen.png";

const PhoneScreen = () => {
  return (
    <div css={styles.PhoneScreen}>
      <div className="mobile">
        <div className="screen active"></div>
        <div className="home"></div>
        <div className="inner"></div>
        <ul className="volume">
          <li></li>
          <li></li>
        </ul>
        <ul className="silent">
          <li></li>
        </ul>
        <ul className="sleep">
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default PhoneScreen;
const styles = {
  PhoneScreen: css`
    position: relative;
    .mobile {
      width: 265px;
      height: 555px;
      background: #f5f5f5;
      border-radius: 50px;
      border: 3px solid #bcbec0;
      box-sizing: border-box;
    }
    .screen {
      position: relative;
      background: #262626;
      width: 240.8px;
      height: 425.77px;
      margin: 58px auto;
      overflow: hidden;
      background: url(${PhoneScreenImage});
      background-size: cover;
    }

    .screen:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.1);
      width: 100%;
      height: 100%;
      transform: skewX(-5deg) translateX(-50%);
    }
    .home {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid #000100;
      box-sizing: border-box;
      cursor: pointer;
    }
    .inner {
      position: absolute;
      top: 32px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      border-radius: 2px;
      background: #262626;
      box-sizing: border-box;
    }
    .inner:before {
      content: "";
      position: absolute;
      top: -2px;
      left: -22px;
      background: #262626;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .inner:after {
      content: "";
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      background: #262626;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .volume {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 90px;
      left: -2px;
    }
    .volume li {
      list-style: none;
      width: 2px;
      height: 30px;
      background: linear-gradient(
        180deg,
        #b4b5b6 0%,
        #b8b9ba 5%,
        #c5c5c6 9%,
        #dadadb 14%,
        #e8e8e9 17%,
        #eaeaeb 24%,
        #ededee 26%,
        #ebebec 28%,
        #e4e4e5 29%,
        #d8d9da 29%,
        #c7c9cb 30%,
        #bcbec0 30%,
        #919294 50%,
        #858687 56%,
        #898a8b 61%,
        #959697 66%,
        #aaaaab 71%,
        #c6c7c8 77%,
        #e2e2e3 81%,
        #e4e4e5 81%,
        #f2f2f2 82%,
        #f9f9f9 84%,
        #fcfcfc 88%,
        #ededed 89%,
        #dbdbdc 90%,
        #cecfd0 92%,
        #c7c8c9 95%,
        #c5c6c7 100%
      );
      margin: 10px 0;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
    .silent {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 50px;
      left: -2px;
    }
    .silent li {
      list-style: none;
      width: 2px;
      height: 20px;
      background: linear-gradient(
        180deg,
        #b4b5b6 0%,
        #b8b9ba 5%,
        #c5c5c6 9%,
        #dadadb 14%,
        #e8e8e9 17%,
        #eaeaeb 24%,
        #ededee 26%,
        #ebebec 28%,
        #e4e4e5 29%,
        #d8d9da 29%,
        #c7c9cb 30%,
        #bcbec0 30%,
        #919294 50%,
        #858687 56%,
        #898a8b 61%,
        #959697 66%,
        #aaaaab 71%,
        #c6c7c8 77%,
        #e2e2e3 81%,
        #e4e4e5 81%,
        #f2f2f2 82%,
        #f9f9f9 84%,
        #fcfcfc 88%,
        #ededed 89%,
        #dbdbdc 90%,
        #cecfd0 92%,
        #c7c8c9 95%,
        #c5c6c7 100%
      );
      margin: 10px 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .sleep {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 90px;
      right: -2px;
    }
    .sleep li {
      list-style: none;
      width: 2px;
      height: 30px;
      background: linear-gradient(
        180deg,
        #b4b5b6 0%,
        #b8b9ba 5%,
        #c5c5c6 9%,
        #dadadb 14%,
        #e8e8e9 17%,
        #eaeaeb 24%,
        #ededee 26%,
        #ebebec 28%,
        #e4e4e5 29%,
        #d8d9da 29%,
        #c7c9cb 30%,
        #bcbec0 30%,
        #919294 50%,
        #858687 56%,
        #898a8b 61%,
        #959697 66%,
        #aaaaab 71%,
        #c6c7c8 77%,
        #e2e2e3 81%,
        #e4e4e5 81%,
        #f2f2f2 82%,
        #f9f9f9 84%,
        #fcfcfc 88%,
        #ededed 89%,
        #dbdbdc 90%,
        #cecfd0 92%,
        #c7c8c9 95%,
        #c5c6c7 100%
      );
      margin: 10px 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `,
};
