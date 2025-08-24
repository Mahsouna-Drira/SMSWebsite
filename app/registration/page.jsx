'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import styles from './registration.module.css';
import Header from '../components/Header';

export default function Registration() {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Lead'n'Lead | Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <iframe
            data-tally-src="https://tally.so/r/wQZ9Mg"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Lead'n'Lead Registration"
            className={styles.tallyForm}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}