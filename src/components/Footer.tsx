import React from "react";
import { ImQrcode } from "react-icons/im";
import styles from "./Footer.module.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.section}>
            <h2 className={styles.heading}>Exclusive</h2>
            <nav>
              <ul className={styles.list}>
                <li><a>Subscribe</a></li>
                <li><a>Get 10% off your first order</a></li>
                <li>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className={styles.input}
                  />
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Support</h2>
            <nav>
              <ul className={styles.list}>
                <li><a>111 Bijoy Sarani, Dhaka, Bangladesh</a></li>
                <li><a>exclusive@gmail.com</a></li>
                <li><a>+88015-88888-9999</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Account</h2>
            <nav>
              <ul className={styles.list}>
                <li><a>My Account</a></li>
                <li><a>Login/Register</a></li>
                <li><a>Cart</a></li>
                <li><a>Wishlist</a></li>
                <li><a>Shop</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Quick Links</h2>
            <nav>
              <ul className={styles.list}>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms of Use</a></li>
                <li><a>FAQ</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Download App</h2>
            <nav>
              <ul className={styles.list}>
                <li><a>Save $3 with App New User Only</a></li>
                <li>
                  <ImQrcode className={styles.qrcode} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>Copyright Rimel 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
