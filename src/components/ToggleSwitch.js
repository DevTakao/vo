/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ImMobile2 } from "react-icons/im";
import { HiDesktopComputer } from "react-icons/hi";

const ToggleSwitch = ({ isMobile, toggle }) => {
  return (
    <div css={styles.ToggleSwitch}>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          id="switch"
          defaultChecked={isMobile}
          onChange={toggle}
        />
        <label className="label" htmlFor="switch">
          <span className="labelText">
            {isMobile ? (
              <div css={styles.iconPair}>
                <ImMobile2 size={18} />
                Mobile
              </div>
            ) : (
              <div css={styles.iconPair}>
                <HiDesktopComputer size={24} />
                Desktop
              </div>
            )}
          </span>
          <span className="ball"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
const styles = {
  ToggleSwitch: css`
    width: 230px;

    .toggle-switch {
      user-select: none;
      background: linear-gradient(270deg, #3ae7ab 0%, #2dc4ea 100%);
      position: relative;
      display: inline-block;
      width: 100%;
      height: 47px;
      border-radius: 34px;
      border: 1px solid #fff;
    }

    .checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .label {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .ball {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 41px;
      height: 41px;
      background-color: #fff;
      transform: translateX(0px);
      transition: transform 0.5s ease;
      border-radius: 50%;
    }

    .checkbox:checked + .label .ball {
      transform: translateX(183px);
    }

    .labelText {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  `,

  iconPair: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
