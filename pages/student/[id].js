import Head from 'next/head'
import Navbar from '../../components/Navbar'
import { Image } from 'antd';
import styles from '../../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { useState, useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import Jump from 'react-reveal/Jump';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import Link from 'next/link';


function IdPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    async function fetchData() {
        const { id } = router.query;
        const response = await fetch(`/api/${id}`);

        response.ok;     // => false
        response.status; // => 404
        const text = await response.json();
        setLoading(false)
        return text;
    }
    
    useEffect((() => {
        const get_data = async () => {
            const data2 = await fetchData()
            if (data2) {
                setData(data2);
            }
        }
        get_data();

    }), [loading])

    const scrollStyle = {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
    }
    const { data: session, status, update } = useSession()

    const EditFunction = () => {
        let s = "Edit";
        if (status === 'unauthenticated') {
            s = 'Sign in'
        }
        if (status === 'authenticated') {
            const { id } = router.query
            if (session.user.email.toLowerCase() === id.toLowerCase())
                return <Button href="/form" target = '_blank' type="default" shape="round" icon={<EditOutlined />} size='large' style={{ position: 'absolute', right: '6%', bottom: '2%' }}> {s}</Button>
        }
    }

    const Check_loading = () => {
        if (!loading && data) {
            return <>
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

                <section className='facultyDetails'>
                    <div className={styles.studentHeader} style={{ background: "url(http://drive.google.com/uc?export=view&id=1yJWRJd8_o7W1rvhJ2wu1vPGAnhKGZt40) center center", backgroundSize: "100%", backgroundPositionY: '15%' }}>
                        <div className={styles.overlay} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
                        <Navbar />
                        <div className={styles.studentImage}><Image width={400} src={data.img} /></div>
                        <div className={styles.headerText}>
                            <h1>{data.name}</h1>
                            <p>{data.rollno}</p>
                            <Jump>
                                <div className={styles.icons}>
                                    <a href={data.github} target="_blank" className="fab"><FaIcons.FaGithub />
                                    </a>
                                    <a href={data.linkedin} target="_blank" className="fab"><FaIcons.FaLinkedin />
                                    </a>
                                </div>
                            </Jump>
                            <EditFunction />

                        </div>
                    </div>
                    <div className={styles.allDetails}>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>About</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <p>{data.about}</p>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1 style={{ marginLeft: '-1%' }}>Academic Details</h1>
                                <div style={{ marginLeft: '-46%' }}></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>Semester:</p><span>{data.semester}</span></div>
                                <div><p>CGPA:</p><span>{data.cgpa}</span></div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Contact</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>Email:</p><span>{data.email}</span></div>
                                <div><p>Phone:</p><span>{data.phone}</span></div>
                                <div><p>Website:</p><a href={data.website} target = "_blank" style={{ color: "#9e4646" }}>Personal Website</a></div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Education</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>10th:</p><span>{data.education_10}</span></div>
                                <div><p>12th:</p><span>{data.education_12}</span></div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Address</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <p>{data.address}</p>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Skills</h1>
                                <div></div>
                            </div>
                            <div className={`${styles.data} ${styles.skills}`}>
                                <div><p>{data.skill1}</p></div>
                                <div><p>{data.skill2}</p></div>
                                <div><p>{data.skill3}</p></div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        }
        else {
            return <div>loading</div>
        }

    }


    return (
        <Check_loading />

    )
}

export default IdPage
