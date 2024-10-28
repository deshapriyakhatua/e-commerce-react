import React from 'react'
import styles from './BannerTag.module.css'
import image1 from '../../../assets/images/transparent-bg-shirt1.png'
import image2 from '../../../assets/images/transparent-bg-shirt.png'


function BannerTag() {

    const contents = [
        { src: image1, title: 'Mini Bagpack', desc: 'Enjoy 50% off' },
        { src: image2, title: 'Large Bagpack', desc: 'Enjoy 50% off' },
    ]

    return (
        <section className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {contents && contents.map((elem, indx) => (
                    <div className={styles.childDiv} key={indx}>
                        <div className={styles.contentParent}>
                            <p className={styles.title}>{elem.title}</p>
                            <p className={styles.desc}>{elem.desc}</p>
                            <button className={styles.button}>Shop Now</button>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={elem.src} className={styles.img} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BannerTag