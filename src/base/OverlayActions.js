/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TbMessages } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const OverlayActions = () => {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={styles.OverlayActions(show)}>
      <div css={styles.scrollTop} onClick={scrollToTop}>
        <FaAngleUp color="#fff" size={15} />
      </div>
      <div css={styles.sendMessage}>
        <TbMessages color="#fff" size={45} />
      </div>
    </div>
  );
};

export default OverlayActions;
const styles = {
  OverlayActions: (show) => css`
    position: fixed;
    bottom: 20px;
    right: 15px;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    display: ${show ? "flex" : "none"};
  `,
  scrollTop: css`
    cursor: pointer;
    background-color: #555;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.5);
  `,
  sendMessage: css`
    cursor: pointer;
    background-color: #2fc665;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 15px;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.5);
  `,
};
