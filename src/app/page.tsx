// pages/index.js

import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Welcome to E-Shop</h1>
          <p>Your one-stop shop for all your needs.</p>
          <button className={styles.shopNowButton}>Shop Now</button>
        </section>

        <section id="products" className={styles.productsSection}>
          <h2>Featured Products</h2>
          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <Image src="/images/product1.jpg" alt="Product 1" width={200} height={200} />
              <h3>Product 1</h3>
              <p>$25.99</p>
              <button>Add to Cart</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/product2.jpg" alt="Product 2" width={200} height={200} />
              <h3>Product 2</h3>
              <p>$35.99</p>
              <button>Add to Cart</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/product3.jpg" alt="Product 3" width={200} height={200} />
              <h3>Product 3</h3>
              <p>$45.99</p>
              <button>Add to Cart</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/product4.jpg" alt="Product 4" width={200} height={200} />
              <h3>Product 3</h3>
              <p>$45.99</p>
              <button>Add to Cart</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/product5.jpg" alt="Product 5" width={200} height={200} />
              <h3>Product 3</h3>
              <p>$45.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>We provide high-quality products at affordable prices. Shop with confidence!</p>
        </section>
      </main>

      
    </div>
  );
}
