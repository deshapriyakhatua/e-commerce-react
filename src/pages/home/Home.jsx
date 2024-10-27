import React from 'react'
import styles from './Home.module.css'
import Home2 from '../../components/home/home2/Home2'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Home2 />
    </div>
  )
}

export default Home