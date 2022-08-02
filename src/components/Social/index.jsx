import React from 'react'
import styles from './Social.module.css'
import SocialElement from './SocialElement'

export default function Social() {
  return (
    <div>
      <div className={styles.footerHeader}>
        <h3 className={styles.redText}>
          Keep in touch
        </h3>
        <h1 className={styles.boldText}>
          Connect with us
        </h1>
        <ul className={styles.footerSocial}>
          <SocialElement/>
        </ul>
      </div>
    </div>
  )
}