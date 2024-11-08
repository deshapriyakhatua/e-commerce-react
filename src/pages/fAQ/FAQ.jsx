import React from 'react'
import styles from './FAQ.module.css'
import FAQSection from '../../components/fAQ/fAQSection/FAQSection'

function FAQ() {
  const data = [
    {
      heading: 'Orders',
      shortText: 'Below are some of are common questions about orders',
      faqs: [
        {
          q: 'How do I make a purchase ?',
          a: `This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.`
        },
        {
          q: 'How do I know if my order is confirmed ?',
          a: `This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.`
        },
        {
          q: 'Can I change my shipping address after my order is placed ?',
          a: `This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.`
        }
      ]
    },
    {
      heading: 'Shipping & Returns',
      shortText: 'Below are some of are common questions about Shipping & Returns',
      faqs: [
        {
          q: 'How do I make a purchase ?',
          a: `This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.`
        },
        {
          q: 'How do I know if my order is confirmed ?',
          a: `This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.`
        },
        {
          q: 'Can I change my shipping address after my order is placed ?',
          a: `This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.`
        }
      ]
    },
  ]
  return (
    <div className={styles.mainPage}>
        <div className={styles.mainContainer}>
          {data && data.map((elem, indx) => (
            <FAQSection key={indx} data={elem}/>
          ))}
        </div>
    </div>
  )
}

export default FAQ