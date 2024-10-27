import React from 'react'
import styles from './Home2.module.css'
import image1 from '../../../assets/images/transparent-bg-shirt1.png'
import image2 from '../../../assets/images/transparent-bg-shirt.png'
import image3 from '../../../assets/images/transparent-bg-shirt2.png'


function Home2() {

    const contents = [
        { src: image1, title: 'Mini Bagpack', desc: 'Enjoy 50% off' },
        { src: image2, title: 'Large Bagpack', desc: 'Enjoy 50% off' },
        { src: image3, title: 'Small Bagpack', desc: 'Enjoy 50% off' },
    ]

    return (
        <section className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {contents && contents.map((elem) => (
                    <div className={styles.childDiv}>
                        <div className={styles.contentParent}>
                            <p className={styles.title}>{elem.title}</p>
                            <p className={styles.desc}>{elem.desc}</p>
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

export default Home2