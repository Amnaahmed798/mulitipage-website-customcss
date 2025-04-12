// src/app/about/page.tsx
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our Story</h1>
          <p className={styles.subtitle}>
            We're on a mission to redefine online shopping with premium products, exceptional service, and a seamless experience that puts you first.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h2>Our Mission</h2>
          <p>
            At Exclusive, we're committed to elevating your everyday shopping experience through innovation, quality, and personalization. We meticulously curate premium products that combine functionality, style, and sustainability, ensuring that each purchase you make not only meets but exceeds your expectations.
          </p>
          <p>
            With a customer-first approach, we strive to make every interaction with our platform enjoyable, intuitive, and rewarding. Our dedicated team works tirelessly to ensure that we deliver not just products, but experiences that resonate with your lifestyle and values.
          </p>
        </div>
        <Image
          src="/images/mission.jpg"
          alt="Our Mission"
          width={400}
          height={550}
          className={styles.infoImage}
        />
      </section>

      {/* Vision Section */}
      <section className={`${styles.infoSection} ${styles.reverse}`}>
        <Image
          src="/images/vision.jpg"
          alt="Our Vision"
          width={400}
          height={550}
          className={styles.infoImage}
        />
        <div className={styles.infoContent}>
          <h2>Our Vision</h2>
          <p>
            We envision a future where online shopping transcends mere transactions, becoming a seamless extension of your lifestyle. Our goal is to pioneer a new standard of e-commerce that harmonizes technology, sustainability, and human connection.
          </p>
          <p>
            By fostering meaningful relationships with our customers, partners, and communities, we aim to build an ecosystem that celebrates individuality while promoting conscious consumption. Through continuous innovation and dedication to excellence, we aspire to be the trusted destination for discerning shoppers worldwide.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h2>Our Values</h2>
          <p>
            <strong>Quality Without Compromise</strong> — We believe that exceptional products build exceptional experiences. Every item in our collection is vetted for quality, sustainability, and ethical production standards.
          </p>
          <p>
            <strong>Customer Obsession</strong> — Your satisfaction drives everything we do. We listen, learn, and evolve based on your feedback, ensuring that your needs are not just met, but anticipated.
          </p>
          <p>
            <strong>Innovation & Adaptability</strong> — In a rapidly changing world, we embrace change and continuously seek better ways to serve you. We're committed to leveraging technology to create more intuitive, personalized shopping experiences.
          </p>
        </div>
        <Image
          src="/images/signin.png"
          alt="Our Values"
          width={400}
          height={550}
          className={styles.infoImage}
        />
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>The Minds Behind Exclusive</h2>
        <p className={styles.teamIntro}>
          Our diverse team of innovators, creatives, and experts works collaboratively to transform your shopping experience.
        </p>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <Image
              src="/images/team1.jpg"
              alt="John Doe"
              width={180}
              height={180}
              className={styles.teamImage}
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/team2.jpg"
              alt="Jane Smith"
              width={180}
              height={180}
              className={styles.teamImage}
            />
            <h3>Jane Smith</h3>
            <p>Creative Director</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/team4.jpg"
              alt="Alex Johnson"
              width={180}
              height={180}
              className={styles.teamImage}
            />
            <h3>Alex Johnson</h3>
            <p>Head of Product Innovation</p>
          </div>
        </div>
      </section>
    </div>
  );
}
