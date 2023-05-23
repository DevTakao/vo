/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionHeader from "../base/SectionHeader";
import CubeImage from "assets/cube.png";
import ChallengeList from "./ChallengeList";
import withAPI from "../hoc/withAPI";

const ChallengeListWithAPI = withAPI(
  ChallengeList,
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);

const ChallengesSection = () => {
  return (
    <div css={styles.ChallengesSection}>
      <div css={styles.flexContainer}>
        <div css={styles.imageSide}>
          <img css={styles.image} src={CubeImage} alt="cubic design" />
        </div>
        <div css={styles.contentSide}>
          <SectionHeader blackPrefix="OUR" blueSuffix="CHALLENGES" />
          <ChallengeListWithAPI />
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
const styles = {
  flexContainer: css`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 51px;
    align-items: center;
    justify-content: space-between;
  `,
  contentSide: css`
    flex: 1 1;
  `,
  imageSide: css`
    flex: 1 1;
  `,
  image: css`
    width: 100%;
  `,
};
