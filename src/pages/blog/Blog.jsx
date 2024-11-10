import React, { useEffect } from 'react'
import styles from './Blog.module.css'
import BlogSectionLeft from '../../components/blog/blogSectionLeft/BlogSectionLeft'
import BlogSectionRight from '../../components/blog/blogSectionRight/BlogSectionRight'

function Blog() {

  return (
    <div className={styles.mainBlogBody}>

      <div className={styles.sectionContainer}>
        <BlogSectionLeft />
        <BlogSectionRight />
      </div>
      
    </div>
  )
}

export default Blog