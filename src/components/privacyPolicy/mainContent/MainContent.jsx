import React from 'react'
import styles from './MainContent.module.css'

function MainContent() {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.mainHeading}>Privacy Policy</h1>
                <div className={styles.content}>

                    <h3>The Company Private Limited Policy</h3>

                    <p style={{textAlign: "justify"}}>The Company Private Limited and each of their respective subsidiary, parent and affiliated companies is deemed to operate this Website (“we” or “us”) recognizes that you care how information about you is used and shared. We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information and the choices you have about the way your information is collected and used.&nbsp; Please read this Privacy Policy carefully.&nbsp; Your use of the Website indicates that you have read and accepted our privacy practices, as outlined in this Privacy Policy.</p>

                    <p style={{textAlign: "justify"}}>Please be advised that the practices described in this Privacy Policy apply to information gathered by us or our subsidiaries, affiliates or agents: (i) through this Website, (ii) where applicable, through our Customer Service Department in connection with this Website, (iii) through information provided to us in our free standing retail stores, and (iv) through information provided to us in conjunction with marketing promotions and sweepstakes.</p>

                    <p style={{textAlign: "justify"}}>We are not responsible for the content or privacy practices on any websites</p>

                    <p style={{textAlign: "justify"}}>We reserve the right, in our sole discretion, to modify, update, add to, discontinue, remove or otherwise change any portion of this Privacy Policy, in whole or in part, at any time. When we amend this Privacy Policy, we will revise the “last updated” date located at the top of this Privacy Policy.</p>

                    <p style={{textAlign: "justify"}}>If you provide information to us or access or use the Website in any way after this Privacy Policy has been changed, you will be deemed to have unconditionally consented and agreed to such changes.&nbsp; The most current version of this Privacy Policy will be available on the Website and will supersede all previous versions of this Privacy Policy.</p>

                    <p style={{textAlign: "justify"}}>If you have any questions regarding this Privacy Policy, you should contact our Customer Service Department by email at <a href="mailto:marketing@company.com">marketing@company.com</a></p>

                </div>
            </div>
        </section>
    )
}

export default MainContent