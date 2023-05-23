/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ChallengeItem from "./ChallengeItem";
import GradientButton from "../base/GradientButton";

const ChallengeList = ({ data }) => {
  return (
    <div css={styles.ChallengeList}>
      {data?.map((item) => (
        <ChallengeItem key={item.id} idNumber={item.id} text={item.body} />
      ))}
      <GradientButton>VIEW MORE</GradientButton>
    </div>
  );
};

export default ChallengeList;
const styles = {
  ChallengeList: css`
    display: flex;
    flex-direction: column;
    gap: 34px 0;
    margin-top: 50px;
  `,
};
