import Loader from '@/components/Loader';
import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import { SessionProvider } from "next-auth/react"


export default function App({session, Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return <>
    {loading ? <Loader /> :
 (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
    }
  </>
}
