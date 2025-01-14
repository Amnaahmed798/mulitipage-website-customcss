// src/app/about/page.tsx
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Discover who we are and why we excel at what we do.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality products and an exceptional online shopping
            experience, meeting every customer&apos;s needs with passion and
            integrity.
          </p>
        </div>
        <Image
          src="/images/mission.jpg"
          alt="Our Mission"
          width={250}
          height={350}
          className={styles.infoImage}
        />
      </section>

      {/* Vision Section */}
      <section className={`${styles.infoSection} ${styles.reverse}`}>
        <Image
          src="/images/vision.jpg"
          alt="Our Vision"
          width={250}
          height={350}
          className={styles.infoImage}
        />
        <div className={styles.infoContent}>
          <h2>Our Vision</h2>
          <p>
            To become the leading e-commerce platform by fostering innovation,
            delivering outstanding customer experiences, and supporting
            sustainability.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <Image
              src="/images/team1.jpg"
              alt="John Doe"
              width={150}
              height={150}
              className={styles.teamImage}
            />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/team2.jpg"
              alt="Jane Smith"
              width={150}
              height={150}
              className={styles.teamImage}
            />
            <h3>Jane Smith</h3>
            <p>Marketing Director</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/team4.jpg"
              alt="Alex Johnson"
              width={150}
              height={150}
              className={styles.teamImage}
            />
            <h3>Alex Johnson</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}
