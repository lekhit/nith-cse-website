import Head from 'next/head'
import Navbar from '../../components/Navbar'
import styles from '../../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import UserCard from '@/components/usercard'
import { studentData } from "../../assets/studentData"
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import StudentGrid from '@/components/StudentGrid';

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
                targets={['#home', '#about', '#faculty', '#student', '#moreDetails']}
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
                <div className={styles.wideImage} style={{ background: "url(https://thumbsnap.com/i/pBwA4XRi.jpg?wi) center center", backgroundSize: "100%" , height:'100vh'}}>
                    <div className={styles.overlay}></div>
                    <h1>Students</h1>
                    <p>The curiosity and tenacity that drives our faculty’s research and creativity make their classrooms exciting places to be.</p>
                </div>
               
                <StudentGrid/>

                <section className={styles.facultySection} style={{top:'203vh'}}>
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
