/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ShopifyBadge from "assets/ShopifyPartners.png";
import PaypalBadge from "assets/Paypal.png";
import AdWordsBadge from "assets/AdWords.png";
import AnalyticsBadge from "assets/AnalyticsCertified.png";
import StreetTrustBadge from "assets/StreetTrust.png";

const FooterBlade = () => {
  return (
    <div css={styles.FooterBlade}>
      <div css={styles.badgeContainer}>
        <img src={ShopifyBadge} alt="shopify partners" css={styles.badge} />
        <img src={PaypalBadge} alt="paypal" css={styles.badge} />
        <img
          src={AdWordsBadge}
          alt="google adwords certified"
          css={styles.badge}
        />
        <img
          src={AnalyticsBadge}
          alt="google analytics certified"
          css={styles.badge}
        />
        <img
          src={StreetTrustBadge}
          alt="google streetview trusted"
          css={styles.badge}
        />
      </div>
      <div css={styles.newsletterContainer}>
        <label htmlFor="inputField" className="label">
          Subscribe to our news, tips and guidelines
        </label>
        <div className="inputWrapper">
          <input
            type="text"
            id="inputField"
            placeholder="123@test.com"
            className="inputField"
          />
          <button className="submitBtn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default FooterBlade;
const styles = {
  FooterBlade: css`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 20px 0;
    flex-wrap: wrap;
  `,
  badgeContainer: css`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: stretch;
    gap: 20px;
    flex-wrap: wrap;
  `,
  badge: css`
    height: 100%;
    width: 135px;
    object-fit: contain;
  `,
  newsletterContainer: css`
    display: flex;
    flex-direction: column;
    color: #ccc;
    gap: 10px;
    .label {
      font-size: 14px;
      font-weight: bold;
    }
    .inputWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }
    .inputField {
      padding: 14px 20px;
      background-color: transparent;
      color: #ccc;
      width: 400px;
      max-width: 400px;
      border: 1px solid #ccc;
      outline: 0;
    }
    .submitBtn {
      border: 0;
      padding: 15px 20px;
      font-size: 16px;
      border-radius: 3px;
      background-color: #26a9e0;
      color: #fff;

      :hover {
        cursor: pointer;
      }
    }
  `,
};
