/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaEnvelope } from "react-icons/fa";
import { quickLinks, services } from "utils/mockData";

const FooterLinks = () => {
  return (
    <div css={styles.FooterLinks}>
      <div css={styles.linksContainer}>
        <table className="no-border-table">
          <tbody>
            <tr className="header-row">
              <td className="header">
                <span>QUICK LINKS</span>
              </td>
              <td className="header">
                <span>OUR SERVICES</span>
              </td>
            </tr>
            <tr>
              <td css={styles.listTd}>
                <ul css={styles.list}>
                  {quickLinks.map((link, i) => (
                    <li key={i} css={styles.listItem}>
                      {link}
                    </li>
                  ))}
                </ul>
              </td>
              <td css={styles.listTd}>
                <ul css={styles.list}>
                  {services.slice(0, 6).map((service, i) => (
                    <li key={i} css={styles.listItem}>
                      {service}
                    </li>
                  ))}
                </ul>
                <ul css={styles.list}>
                  {services.slice(6).map((service, i) => (
                    <li key={i} css={styles.listItem}>
                      {service}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div css={styles.contactContainer}>
        <span className="header">VISIBLE ONE SINGAPORE</span>
        <span className="phone">+65 6248 0838</span>
        <span className="email">
          <FaEnvelope size={16} css={styles.icon} />
          info@visibleone.com
        </span>
        <span className="address">
          24 Sin Ming Lane Midview City #07-93,
          <br />
          Singapore 573970
        </span>
        <span className="hours">Office Hour: Mon-Fri (9am-6pm)</span>
        <div className="buttonsContainer">
          <button className="primaryBtn">Contact Us</button>
          <button className="secondaryBtn">Contact HK Office</button>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
const styles = {
  FooterLinks: css`
    padding: 50px 0 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    gap: 200px;
    color: #ccc;
    font-size: 15px;

    .header {
      margin: 0;
      padding: 0;
      padding-right: 100px;
    }
  `,
  linksContainer: css`
    flex: 2 1;

    .no-border-table {
      border-collapse: collapse;
      width: 100%;
      height: 100%;

      .header-row {
        font-size: 24px;
      }
    }

    .no-border-table td {
      border: none;
    }
  `,
  listTd: css`
    padding: 0;
    vertical-align: top;

    :nth-of-type(1) {
      li:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    :nth-of-type(2) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
  `,
  list: css`
    line-height: 40px;
  `,
  contactContainer: css`
    flex: 1 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    font-weight: bold;

    span {
      margin: 0;
      padding: 0;
    }

    .header {
      font-size: 24px;
      font-weight: normal;
    }
    .phone {
      font-size: 20px;
    }
    .email {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .buttonsContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .primaryBtn,
      .secondaryBtn {
        border: 0;
        padding: 15px 20px;
        font-size: 16px;
        border-radius: 3px;

        :hover {
          cursor: pointer;
        }
      }

      .primaryBtn {
        background-color: #26a9e0;
        color: #fff;
      }

      .secondaryBtn {
        background-color: transparent;
        color: #26a9e0;
      }
    }
  `,
};
