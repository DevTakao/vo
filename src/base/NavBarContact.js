/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { BsFillCaretDownFill } from "react-icons/bs";

const NavBarContact = () => {
  return (
    <nav css={styles.NavBarContact}>
      <div className="navbar-spacer-left"></div>
      <div className="navbar-button">
        <FaPhoneAlt size={16} css={styles.icon} />
        <div>6248 0838</div>
      </div>
      <div className="navbar-button">
        <FaWhatsapp size={16} css={styles.icon} />
        <div>8484 9948</div>
      </div>
      <div className="navbar-button">
        <FaEnvelope size={16} css={styles.icon} />
        <div>info@visibleone.com</div>
      </div>
      <div className="navbar-button actions">
        <div css={styles.quoteBtn}>
          <HiDocumentText size={18} />
          QUOTE
        </div>
        <div css={styles.localeBtn}>
          SG EN
          <BsFillCaretDownFill size={18} />
        </div>
      </div>
      {/* <div className="navbar-button">
        
      </div> */}
      <div className="navbar-spacer-right"></div>
    </nav>
  );
};

export default NavBarContact;
const styles = {
  NavBarContact: css`
    height: 40px;
    background-color: #eee;
    display: flex;
    align-items: center;
    gap: 10px;

    .navbar-button {
      white-space: nowrap;
      flex: 1 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }
    .navbar-spacer-left {
      flex: 7 1;
    }
    .navbar-spacer-right {
      width: 250px;
      flex-shrink: 2;
    }
    .actions {
      margin-left: 20px;
      gap: 20px;
    }
  `,

  icon: css`
    color: #2dc4ea;
  `,

  quoteBtn: css`
    background-color: #37b34a;
    color: #fff;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 3px;

    :hover {
      cursor: pointer;
      background-color: #37c34a;
    }
  `,
  localeBtn: css`
    border: 1px solid #2dc4ea;
    color: #2dc4ea;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 3px;

    :hover {
      cursor: pointer;
      background-color: #2dc4ea;
      color: #fff;
    }
  `,
};
