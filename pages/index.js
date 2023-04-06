import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
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
        <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
        <Header />
        <Footer />
    </>
  )
}
