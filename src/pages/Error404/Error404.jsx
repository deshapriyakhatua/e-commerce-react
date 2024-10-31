import React from 'react'
import styles from './Error404.module.css'
import { PiSmileySad } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

function Error404() {

  const navigate = useNavigate();

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainContainer}>
        <PiSmileySad size={150}/>
        <h1>Oops! That page can’t be found.</h1>
        <p>Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.</p>
        <button onClick={() => { navigate('/'); }}>Go To Home</button>
      </div>
    </div>
  )
}

export default Error404