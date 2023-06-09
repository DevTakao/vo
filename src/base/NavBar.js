/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavBarContact from "./NavBarContact";
import NavBarRoutes from "./NavBarRoutes";
import Logo from "assets/logo.png";

const NavBar = () => {
  return (
    <div css={styles.NavBar}>
      <img src={Logo} alt="Visible One" css={styles.logo} />
      <NavBarContact />
      <NavBarRoutes />
    </div>
  );
};

export default NavBar;
const styles = {
  NavBar: css`
    position: relative;
    font-weight: bold;
  `,
  logo: css`
    z-index: 999;
    position: absolute;
    top: 0px;
    left: 250px;
    height: 65px;
    box-shadow: 0px -28px 3px 2px #ababab;

    @media (max-width: 1150px) {
      left: 0;
    }
  `,
};
