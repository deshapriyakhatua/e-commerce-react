import React from 'react'
import styles from './AboutUs.module.css'
import AboutUsSection1 from '../../components/aboutUs/aboutUsSection1/AboutUsSection1'

function AboutUs() {
  return (
    <div className={styles.mainPage}>
        <AboutUsSection1 />
    </div>
  )
}

export default AboutUs