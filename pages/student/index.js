import Head from 'next/head'
import Navbar from '../../components/Navbar'
import styles from '../../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import UserCard from '@/components/usercard'
import { studentData } from "../../assets/studentData"
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function student() {
    const scrollStyle = {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
    }
    return (
        <>
            <Head>
                <title>NITH CSE</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <CustomCursor
                targets={['#home', '#about', '#faculty', '#student']}
                customClass='custom-cursor'
                dimensions={100}
                fill='skyblue'
                smoothness={{
                    movement: 0.3,
                    scale: 0.1,
                    opacity: 0.2,
                }}
                opacity={0.5}
                targetOpacity={0.5}
                targetScale={3}
                strokeColor={'#000'}
                strokeWidth={0}
            />
            <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
            <div className={styles.faculty}>
                <Navbar />
                <div className={styles.wideImage} style={{ background: "url(/studentbg1.jpg) center center", backgroundSize: "100%" }}>
                    <div className={styles.overlay}></div>
                    <h1>Students</h1>
                    <p>The curiosity and tenacity that drives our faculty’s research and creativity make their classrooms exciting places to be.</p>
                </div>
                <section className={styles.messageSection}>
                    <div className={styles.heading}>
                        <h1>Message from the Dean</h1>
                        <div></div>
                    </div>
                    <div className={styles.message}>

                        <p><img src="https://www.iima.ac.in/themes/iima/images/qoute-1.svg" alt="comma" />NITH's faculty come from diverse backgrounds and each individual is a sought-after specialist in his or her own area of expertise. Their personal experience as entrepreneurs, policy makers, researchers, theoreticians and consultants enlivens their teaching and gives it immediacy and relevance. Both as educators and researchers, they are continually learning. They are well aware that knowledge alone changes nothing; the power to affect and shape the future lies with the observing, reasoning, creative, curious mind.</p>
                        <p>IIMA faculty make a lasting impact on students because they challenge, inspire and truly care what happens to their students. Employing the very highest standards of teaching and mentoring, they mould students into innovators, entrepreneurs and leaders.</p>
                        <p>They are directly involved in every aspect of the Institute: teaching, governance and research and also work continuously with their industry peers.</p>
                        <p>Additionally, some experience in roles outside the academic world means that they have a realistic appreciation of the nitty-gritty of finance, markets, production, strategy and much more from the practice world. From their active involvement, comes the precious cross-fertilization of ideas and ensures that IIMA academic programmes are not just up to date but oriented to the future.<img className={styles.img2} src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg" alt="comma" /></p>

                        <div>
                            <h4>Ram Naresh Sharma</h4>
                            <p>Dean (Faculty)</p>
                        </div>
                    </div>
                </section>
                <section className={styles.facultySection}>
                    <div className={styles.heading}>
                        <h1>Our Students</h1>
                        <div></div>
                    </div>
                    <div className={styles.cards}>
                        {studentData.map(user => {
                            return <UserCard key={user.id} user={user} />
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default student
