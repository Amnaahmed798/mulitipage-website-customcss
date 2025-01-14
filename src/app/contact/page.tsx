// src/app/contact/page.tsx

import styles from './Contact.module.css'; // Correctly import CSS module

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>We&apos;re here to assist you with any queries you may have.</p>
      </div>
      
      <div className={styles.contactContent}>
        <div className={styles.contactForm}>
          <h2>Get in Touch</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows={4} required className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
        
        <div className={styles.contactInfo}>
          <h2>Our Location</h2>
          <p>1234 E-Commerce St, Business City, 12345</p>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </div>
    </div>
  );
}
