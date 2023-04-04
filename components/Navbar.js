import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useRouter();
  return (
    <div className={styles.Navbar}>
      <img src="/logo.png" alt="logo" className={styles.logo}/>
      <div className={`${styles.navItems} ${isOpen && styles.open}`}>
        <Link className={`${styles.navLinks} ${location.pathname === '/' ? styles.active : ''}`} href="/">Home</Link>
        <Link className={`${styles.navLinks} ${location.pathname === '/about' ? styles.active : ''}`} href="/about">About</Link>
        <Link className={`${styles.navLinks} ${location.pathname === '/faculty' ? styles.active : ''}`} href="/faculty">Faculty & Research</Link>
        <Link className={`${styles.navLinks} ${location.pathname === '/contact' ? styles.active : ''}`} href="/contact">Contact</Link>
      </div>
      <div className={`${styles.navToggle} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;
