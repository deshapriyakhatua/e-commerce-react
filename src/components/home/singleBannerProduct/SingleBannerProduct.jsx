//transparent-bg-shirt-jeans.png
import React from 'react'
import styles from './SingleBannerProduct.module.css'
import image1 from '../../../assets/images/transparent-bg-shirt-jeans.png'


function SingleBannerProduct() {

    const contents = [
        { src: image1, title: 'Fresh Summer Outfits', desc: 'Add to cart everything you Love !' },
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

export default SingleBannerProduct