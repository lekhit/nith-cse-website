import Loader from '@/components/Loader';
import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return <>
    {loading ? <Loader /> :
      <Component {...pageProps} />
    }
  </>
}
