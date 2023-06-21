import React from 'react';
import styles from '../styles/footer.module.css';
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <img src="https://thumbsnap.com/i/CZmvhUcX.png" alt="logo" style={{ height: '10em' }} />
                    <h1 className={styles.heading}>Department of Computer Science and Engineering</h1>
                    <p>National Institute Of Technology Hamirpur</p>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.content}>
                        <h1>Policies</h1>
                        <div className={styles.line}></div>
                        <div className={styles.links}><a href='https://nith.ac.in/uploads/topics/studentdisplinerule16438814532264.pdf'>NITH Act and Rules</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/cpda-rules-and-formats'>CPDA Rules</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/rules-for-conducting-workshops-conferences'>Rules for conducting workshops</a></div>
                    </div>
                    <div className={styles.content}>
                        <h1>Useful Links</h1>
                        <div className={styles.line}></div>
                        <div className={styles.links}><a href='https://nith.ac.in/results'>Results</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/bachelor-course-structure-syllabus'>Syllabus</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/academic-notices'>Academic Notices</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/department/7'>Research Publications</a></div>
                    </div>
                    <div className={styles.content}>
                        <h1>Get In Touch</h1>
                        <div className={styles.line}></div>
                        <div className={styles.links}><a href='https://alumni.nith.ac.in/members.dz'>Alumni</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/contact-us'>Contact us</a></div>
                        <div className={styles.links}><a href='https://nith.ac.in/connectivity'>Location</a></div>
                    </div>
                </div>
                <div className={styles.icons} style={{ fontSize: '25px' }}>
                    <a href='https://www.facebook.com/Official.NITHamirpur' target='_blank'><SlSocialFacebook /></a>
                    <a href='#' target='_blank'><SlSocialInstagram /></a>
                    <a href='https://twitter.com/nithamirpurhp' target='_blank'><SlSocialTwitter /></a>
                    <a href='https://www.linkedin.com/m/in/nithamirpur-hamirpur-4688551b9' target='_blank'><SlSocialLinkedin /></a>
                    <a href='#' target='_blank'><SlSocialYoutube /></a>
                </div>
                <p className={styles.copyright}>© 2023 All Rights Reserved .National Institute of Technology Hamirpur</p>
            </footer>
        </>
    )
}

export default Footer
