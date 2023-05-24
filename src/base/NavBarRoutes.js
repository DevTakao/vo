/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaAngleDown, FaSearch } from "react-icons/fa";

const NavBarRoutes = () => {
  return (
    <nav css={styles.NavBarRoutes}>
      <div className="navbar-spacer-left"></div>
      <div className="navbar-button no-icon">Home</div>
      <div className="navbar-button">
        Services
        <FaAngleDown size={12} />
      </div>
      <div className="navbar-button">
        Company
        <FaAngleDown size={12} />
      </div>
      <div className="navbar-button no-icon">Blog</div>
      <div className="navbar-button">
        Contact Us
        <FaAngleDown size={12} />
      </div>
      <FaSearch size={18} className="navbar-button search-icon" />
      <div className="navbar-spacer-right"></div>
    </nav>
  );
};

export default NavBarRoutes;
const styles = {
  NavBarRoutes: css`
    font-size: 14px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .navbar-button {
      margin-right: 25px;
      white-space: nowrap;
      flex: 1 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;

      :hover {
        cursor: pointer;
        color: #2dc4ea;
      }
    }
    .navbar-spacer-left {
      flex: 20 1;
      min-width: 220px;
    }
    .navbar-spacer-right {
      width: 250px;
      height: 100%;
      flex-shrink: 2;
    }
    .no-icon {
      flex: 0;
    }
    .search-icon {
      margin-left: 75px;
      margin-right: 0;
      justify-content: flex-end;
      :hover {
        color: #2dc4ea;
        cursor: pointer;
      }
    }
  `,
};
