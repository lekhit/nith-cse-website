import Loader from '@/components/Loader';
import '@/styles/globals.css'
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return <>
    {loading ? <Loader/> :
      <Component {...pageProps} />
    }
  </>
}
