import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/header.module.css'

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.overlay}></div>
        <video src="/bg1.mp4" autoPlay loop muted className={styles.bgVideo}/>
        <Navbar/>
        <div className={styles.content}>
            <h1>This is NITH</h1>
            <p>We continue to be recognized as a leading global management institution, expanding the frontiers of management research, leadership, and education.</p>
        </div>
      </div>
    </>
  )
}

export default Header
