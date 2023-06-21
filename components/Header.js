import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/header.module.css'
import { useSession } from 'next-auth/react'

function Header() {
  const {data:session,status}=useSession()
  const Login_=()=>{
    if(status==='authenticated'){
    return <h1 >{session.user.name} </h1>
    }
  }

  return (
    <>

      <div className={styles.header}>
        <div className={styles.overlay}></div>
        
        <video src="https://thumbsnap.com/i/YbyDXmo8.mp4" autoPlay loop muted className={styles.bgVideo}/>
        <Navbar/>
        <div className={styles.content}>
            
        <Login_></Login_>
        <h1>This is NITH </h1>
            <p>A leading centre of computer science research and education in India.</p>
        </div>
      </div>
    </>
  )
}

export default Header
