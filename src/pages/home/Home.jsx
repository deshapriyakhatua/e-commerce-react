import React from 'react'
import styles from './Home.module.css'
import BannerCards from '../../components/home/bannerCards/BannerCards'
import BannerTag from '../../components/home/bannerTag/BannerTag'
import SingleBanner from '../../components/home/singleBanner/SingleBanner'
import SingleBannerProduct from '../../components/home/singleBannerProduct/SingleBannerProduct'
import StyledBanner from '../../components/home/styledBanner/StyledBanner'
import CarouselTextImage from '../../components/home/carouselTextImage/CarouselTextImage'
import ProductsSection from '../../components/home/productsSection/ProductsSection'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <CarouselTextImage />
      <BannerCards />
      <SingleBannerProduct />
      <ProductsSection />
      <StyledBanner />
      <SingleBanner />
      <BannerTag />
    </div>
  )
}

export default Home