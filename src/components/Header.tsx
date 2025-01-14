"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react"; // Importing useState for managing mobile menu state
import styles from "./Header.module.css"; // Custom CSS

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <header className={styles.stickyHeader}>
      {/* Promo Bar */}
      <div className={styles.promoBar}>
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery OFF-50%!{" "}
          <Link className={styles.shopLink} href="/home">
            Shop Now
          </Link>
        </div>
        <select className={styles.languageSelect}>
          <option value="english">English</option>
        </select>
      </div>

      {/* Main Header */}
      <div className={styles.headerMain}>
        {/* Logo */}
        <div className={styles.logo}>Exclusive</div>

        {/* Desktop Navigation */}
        <nav
          className={`${styles.navLinks} ${styles.desktopNav} ${
            isMobileMenuOpen ? styles.showMobileNav : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar & Icons */}
        <div className={styles.searchCart}>
          <div className={styles.searchWrapper}>
            <Input
              type="text"
              placeholder="What are you looking for?"
              className={styles.searchInput}
            />
            <CiSearch className={styles.searchIcon} />
          </div>
          <div className={styles.icons}>
            <CiHeart className={styles.icon} />
            <IoCartOutline className={styles.icon} />
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={styles.hamburgerMenu}
          onClick={toggleMobileMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
