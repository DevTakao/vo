/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ChallengeItem = ({ idNumber, text, active = false }) => {
  return (
    <div css={styles.ChallengeItem(active)}>
      <div css={styles.idNumber(active)} className="textContent">
        {"0" + idNumber}
      </div>
      <div css={styles.text(active)} className="textContent">
        {text}
      </div>
    </div>
  );
};

export default ChallengeItem;
const styles = {
  ChallengeItem: (active) => css`
    display: flex;
    box-shadow: 0px 3px 10px #0000004d;
    padding: 12px 22px;
    gap: 0 19px;
    align-items: center;

    :hover {
      cursor: pointer;
      background: linear-gradient(90deg, #2dc4ea 0%, #3ae7ab 100%);

      .textContent {
        color: #fff;
        opacity: 0.5;
      }
    }
  `,
  idNumber: (active) => css`
    color: #2dc4ea;
    font-size: 40px;
    font-weight: bold;
  `,
  text: (active) => css`
    font-size: 18px;
  `,
};
