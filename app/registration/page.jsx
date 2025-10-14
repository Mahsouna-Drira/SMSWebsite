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
    
    // Define the function to load embeds
    const loadEmbeds = function() {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    // Set up script loading
    if (typeof Tally !== 'undefined') {
      loadEmbeds();
    } else if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]') == null) {
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up script on component unmount
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sfax Motivational Seminar | Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <iframe
            data-tally-src="https://tally.so/r/nG2r9e?transparentBackground=1" 
            loading="lazy"
            width="100%"
            height="980"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Sfax Motivational Seminar"
            className={styles.tallyForm}
          ></iframe>
        </div>
      </div>
    </>
  );
}