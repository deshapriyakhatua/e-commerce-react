import React from 'react'
import styles from './SingleBanner.module.css'
import image1 from '../../../assets/images/transparent-bg-shirt1.png'
import image2 from '../../../assets/images/transparent-bg-shirt.png'


function SingleBanner() {

    const contents = [
        { src: image1, title: '10% OFF Discount Coupons', desc: 'Subscribe us to get 10% OFF on all the purchases' },
    ]

    return (
        <section className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {contents && contents.map((elem, indx) => (
                    <div className={styles.childDiv} key={indx}>
                        <p className={styles.largeText}>10% OFF</p>
                        <div className={styles.contentParent}>
                            <p className={styles.title}>{elem.title}</p>
                            <p className={styles.desc}>{elem.desc}</p>
                        </div>
                        <div className={styles.btnContainer}>
                            <button className={styles.button}>Subscribe Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SingleBanner