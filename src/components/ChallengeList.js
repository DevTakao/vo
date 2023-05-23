/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ChallengeItem from "./ChallengeItem";
import GradientButton from "../base/GradientButton";

const ChallengeList = ({ data }) => {
  const items = [
    "Hi",
    "How are you",
    "I'm fine",
    "Thank you",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  ];
  return (
    <div css={styles.ChallengeList}>
      {items.map((item, index) => (
        <ChallengeItem
          key={index}
          idNumber={index}
          text={item}
          active={index === 0}
        />
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
