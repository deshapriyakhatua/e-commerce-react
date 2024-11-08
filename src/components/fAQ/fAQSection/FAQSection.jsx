import React, { useState } from 'react'
import styles from './FAQSection.module.css'
import { IoIosArrowDown } from 'react-icons/io'

function FAQSection({ data }) {

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className={styles.mainSection}>
      <h1>{data.heading}</h1>
      <p>{data.shortText}</p>
      <div>
        {data.faqs && data.faqs.map((elem, indx) => (
          <div>
            <div onClick={() => { setSelectedQuestion(elem.q); }}>
            <h2>{elem.q}</h2>
            <IoIosArrowDown className={selectedQuestion === elem.q && styles.rotateIcon}/>
            </div>
            {selectedQuestion && selectedQuestion === elem.q && (
              <p>{elem.a}</p>
            )}
          </div>

        ))}
      </div>
    </div>
  )
}

export default FAQSection