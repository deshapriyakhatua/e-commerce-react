import React, { useEffect, useState } from 'react';
import styles from './SimpleCarousel.module.css';

function SimpleCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "https://www.ethnicset.in/cdn/shop/articles/banner2.jpg?v=1715326211&width=1500",
        "https://imgs-aashniandco.gumlet.io/pub/media/tmp/catalog/product/b/a/banner-done_1_.jpg",
        "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/305656697_192072266512607_3712933772583067543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=wf8ghDXPMrQQ7kNvgEdNJ27&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=ACfI1cWrU1J_pG0haIr_NWc&oh=00_AYANCzrDReSiEBhf_ydCg93KQu1cVUGX6QWxswuMt3mS7A&oe=672677F3",
        "https://samyakkclothing.wordpress.com/wp-content/uploads/2023/03/main-banner-lehenga01.jpg",
        "https://imgs-aashniandco.gumlet.io/media/wysiwyg/homepage_revamp/04-10-2024/Banner-2-.jpg",
        "https://fabriclore.com/cdn/shop/articles/Blog-Banner-for-regular-blog_11.jpg?v=1657273299&width=1000"
    ];

    const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []); // No dependencies needed

    return (
        <div className={styles.mainContainer}>
            <div className={styles.carousel}>
                <ul className={styles.slides}>
                    {images.map((image, index) => (
                        <li
                            key={index}
                            className={`${styles.slideContainer} ${index === currentSlide ? styles.active : ''}`}
                            style={{ opacity: index === currentSlide ? 1 : 0 }}
                        >
                            <div className={styles.slideImage}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={styles.carouselControls}>
                    <button onClick={prevSlide} className={styles.prevSlide}>&lsaquo;</button>
                    <button onClick={nextSlide} className={styles.nextSlide}>&rsaquo;</button>
                </div>
                <div className={styles.carouselDots}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`${styles.carouselDot} ${index === currentSlide ? styles.activeDot : ''}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SimpleCarousel;
