import React from 'react'
import styles from './Checkout.module.css'

function Checkout() {

    const products = [
        {
            imgSrc: '',
            title: 'Latest Colored shirt',
            price: 500,
            qnty: 2
        },
        {
            imgSrc: '',
            title: 'Latest Colored shirt',
            price: 500,
            qnty: 2
        },
        {
            imgSrc: '',
            title: 'Latest Colored shirt',
            price: 500,
            qnty: 2
        },
    ]
    return (
        <section className={styles.mainContainer}>

            <div className={styles.container}>

                <div className={styles.firstContainer}>

                    <div className={styles.address}>
                        <h1>Address</h1>
                        <div className={styles.inputsContainer}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="firstName">First Name</label>
                                <input id='firstName' placeholder='First Name' />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="lastName">Last Name</label>
                                <input id='lastName' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="address">Address</label>
                            <input id='address' placeholder='Address' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="additional">Additional Details</label>
                            <input id='additional' placeholder='Apartment, suite, etc. (optional)' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="pincode">Pincode</label>
                            <input id='pincode' placeholder='Pincode' />
                        </div>
                        <div className={styles.inputsContainer}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="city">City</label>
                                <input id='city' placeholder='City' />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="state">State</label>
                                <input id='state' placeholder='State' />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="country">Country</label>
                                <input id='country' placeholder='Country' />
                            </div>
                        </div>
                        <div className={styles.checkboxContainer}>
                            <input id='saveAddress' type='checkbox' />
                            <label htmlFor="saveAddress">Save Address</label>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <h1>Contact</h1>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Phone</label>
                            <input id='phone' placeholder='Phone' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <input id='email' placeholder='Email' />
                        </div>
                    </div>

                    <div className={styles.payment}>
                        <h1>Payment</h1>
                        <div className={styles.checkboxContainer}>
                            <input id='cashOnDelivery' type='checkbox' />
                            <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                        </div>
                        <button>Pay Now</button>
                    </div>

                </div>

                <div className={styles.secondContainer}>

                    <div className={styles.products}>
                        {products && products.map((elem, indx) => (
                            <div className={styles.product} key={indx}>
                                <div className={styles.imgContainer}>
                                    <img src={elem.imgSrc} alt="" />
                                    <span className={styles.productQnty}>{elem.qnty}</span>
                                </div>
                                <p className={styles.productName}>{elem.title}</p>
                                <p className={styles.productPrice}>{elem.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.priceContainer}>
                        <div className={styles.subtotal}>
                            <p>Subtotal</p>
                            <p>255</p>
                        </div>
                        <div className={styles.shipping}>
                            <p>Shipping</p>
                            <p>55</p>
                        </div>
                        <div className={styles.total}>
                            <p>Total</p>
                            <p>310</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Checkout