import React from 'react'
import styles from './ContactUs.module.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import mapImg from '../../assets/images/address-map.png'

function ContactUs() {

    return (
        <div className={styles.mainPage}>
            <div className={styles.mainContainer}>

                <div className={styles.firstContainer}>
                    <div className={styles.imageContainer}>
                        <img src={mapImg} alt='' />
                    </div>
                </div>

                <div className={styles.secondContainer}>

                    <div className={styles.contactDetails}>
                        <div className={styles.phone}>
                            <h2>Phone</h2>
                            <p>Mobile 1: (+01)-212-33-6789</p>
                            <p>Mobile 2: (+01)-212-66-8888</p>
                            <p>Hotline: 1900 888 888</p>
                        </div>
                        <div className={styles.email}>
                            <h2>Email</h2>
                            <p>contact@sample.com</p>
                            <p>support@sample.com</p>
                        </div>
                        <div className={styles.address}>
                            <h2>Address</h2>
                            <p>6th Forrest Ray,</p>
                            <p>Manhattan NYC 10001, USA</p>
                        </div>
                        <div className={styles.social}>
                            <h2>Social</h2>
                            <div>
                                <FaFacebookF />
                                <FaXTwitter />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className={styles.dropUsLine}>

                        <h2>Drop Us A Line</h2>

                        <p>If you have any questions, please fell free to get in touch with us.
                        We will reply to you as soon as possible. Thank you!</p>
                        
                        <div className={styles.inputsContainer}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="fullname">Your Name</label>
                                <input type="text" id='fullname' />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="email">Your Phone or Email</label>
                                <input type="text" id='email' />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="message">Your Message</label>
                            <textarea name="" id="message"></textarea>
                        </div>
                        <button>submit</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactUs