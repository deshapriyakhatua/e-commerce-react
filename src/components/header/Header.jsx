import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { RiMenu2Fill } from 'react-icons/ri'
import { IoCloseSharp, IoSearch } from 'react-icons/io5'
import { FaShopware } from 'react-icons/fa'
import { GrFavorite } from 'react-icons/gr'
import { PiShoppingCart } from 'react-icons/pi'
import { VscAccount } from 'react-icons/vsc'

function Header() {

    const dropdownData = [
        {
            title: 'Home Appliances',
            groups: [
                {
                    groupTitle: 'Home Appliances',
                    items: [
                        { name: 'Washing Machines & Dryers', link: '/e-commerce-frontend/products/products.html?category=t-shirt' },
                        { name: 'Air Conditioner', link: '#' },
                        { name: 'Fans & Air Coolers', link: '#' },
                        { name: 'Refrigerators & freezers', link: '#' },
                        { name: 'Others', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Phones & Wearables',
                    items: [
                        { name: 'Mobile Phones', link: '#' },
                        { name: 'HeadPhones & EarPhones', link: '#' },
                        { name: 'Mobile Accessories', link: '#' },
                        { name: 'Smart Watch', link: '#' },
                        { name: 'Others', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Computers & Tablets',
                    items: [
                        { name: 'Laptop', link: '#' },
                        { name: 'Desktop', link: '#' },
                        { name: 'Tablets & eReaders', link: '#' },
                        { name: 'Printers', link: '#' },
                        { name: 'Others', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Grooming & Personal Care',
                    items: [
                        { name: 'Trimmers', link: '#' },
                        { name: 'Hair Dryers', link: '#' },
                        { name: 'Hair Straighteners', link: '#' },
                        { name: 'Grooming Accessories', link: '#' },
                        { name: 'Others', link: '#' }
                    ]
                }
            ]
        },
        {
            title: 'Gaming',
            groups: [
                {
                    groupTitle: 'Gaming Accessories',
                    items: [
                        { name: 'Gaming Mice', link: '#' },
                        { name: 'Gaming Keyboards', link: '#' },
                        { name: 'Gaming Mouse Pads', link: '#' },
                        { name: 'Gaming Headsets', link: '#' },
                        { name: 'Others', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Gaming Software',
                    items: [
                        { name: 'PC Games', link: '#' },
                        { name: 'PlayStation Games', link: '#' },
                        { name: 'Xbox Games', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Others',
                    items: [
                        { name: 'Gaming Controllers', link: '#' },
                        { name: 'Gaming Console', link: '#' },
                        { name: 'Controller Screen', link: '#' }
                    ]
                }
            ]
        },
        {
            title: 'Accessories',
            groups: [
                {
                    groupTitle: 'Car Accessories',
                    items: [
                        { name: 'Car Mobile Holder', link: '#' },
                        { name: 'Car Charger', link: '#' },
                        { name: 'Car Washers', link: '#' },
                        { name: 'Tyre Inflators', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Camera Accessories',
                    items: [
                        { name: 'Tripods, Mounts & Monopods', link: '#' },
                        { name: 'Batteries & Chargers', link: '#' },
                        { name: 'Memory Card', link: '#' },
                        { name: 'Filters', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Travel Accessories',
                    items: [
                        { name: 'Travel Bags', link: '#' },
                        { name: 'Neck Pillow', link: '#' },
                        { name: 'Binoculars & telescopes', link: '#' },
                        { name: 'Travel Securities', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Wearable Accessories',
                    items: [
                        { name: 'Cases & Protectors', link: '#' },
                        { name: 'Chargers & Adapters', link: '#' },
                        { name: 'Others', link: '#' }
                    ]
                }
            ]
        },
        {
            title: 'Company',
            groups: [
                {
                    groupTitle: 'About us',
                    items: [
                        { name: 'About us', link: '#' },
                        { name: 'Support', link: '#' },
                        { name: 'Contact us', link: '#' }
                    ]
                },
                {
                    groupTitle: 'Safety and quality',
                    items: [
                        { name: 'Cookie settings', link: '#' },
                        { name: 'Privacy Policy', link: '#' }
                    ]
                }
            ]
        }
    ];
    const [menuOpened, setMenuOpened] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleMenuButton = () => {
        setMenuOpened(!menuOpened);
    };

    const toggleDropdown = (index) => {
        setActiveDropdown((prev) => (prev === index ? null : index));
    };

    useEffect(() => {

        // Handle window resize to remove inline styles for larger screens
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {

        const toggleMenuButton = document.getElementById(styles.navbar_toggle);
        const menu = document.getElementById(styles.navbar_menu);
        const searchButton = document.querySelector(`.${styles.show_search_dropdown_button}`);
        const searchDropdown = document.querySelector(`.${styles.navbar_search_dropdown}`);
        const closeSearchDropdown = document.querySelector(`.${styles.close_search_dropdown}`);
        const accountButton = document.querySelector(`.${styles.show_account_dropdown_button}`);
        const accountDropdown = document.querySelector(`.${styles.navbar_account_dropdown}`);
        const closeAccountDropdown = document.querySelector(`.${styles.close_account_dropdown}`);

        // Toggle Search Dropdown
        searchButton.addEventListener('click', () => {
            searchDropdown.classList.add(styles.active);
        });

        closeSearchDropdown.addEventListener('click', () => {
            searchDropdown.classList.remove(styles.active);
        });

        // Toggle Account Dropdown
        accountButton.addEventListener('click', () => {
            accountDropdown.classList.add(styles.active);
        });

        closeAccountDropdown.addEventListener('click', () => {
            accountDropdown.classList.remove(styles.active);
        });

        return () => {
            toggleMenuButton.removeEventListener('click', null);
            searchButton.removeEventListener('click', null);
            closeSearchDropdown.removeEventListener('click', null);
            accountButton.removeEventListener('click', null);
            closeAccountDropdown.removeEventListener('click', null);
        };

    }, []);

    useEffect(() => {
        console.log(screenWidth)
        const dropdownItems = document.querySelectorAll(`.${styles.dropdown__item}`);
        if (screenWidth > 1200) {
            dropdownItems.forEach((item) => {
                const dropdownContainer = item.querySelector(`.${styles.dropdown__container}`);
                dropdownContainer.removeAttribute('style');
            });
        }
    }, [screenWidth])

    return (
        <header className={styles.header_main}>
            <nav className={styles.navbar_main}>

                <div className={styles.navbar_data}>
                    <div id={styles.navbar_toggle} className={`${menuOpened && styles.show_icon}`} onClick={toggleMenuButton}>
                        <RiMenu2Fill className={styles.navbar_toggle_menu} />
                        <IoCloseSharp className={styles.navbar_toggle_close} />
                    </div>
                    <a href="/e-commerce-frontend/home/home.html" className={styles.navbar_logo}>
                        <FaShopware /> E-MART
                    </a>
                </div>

                <div className={`${styles.navbar_menu} ${menuOpened && styles.show_menu}`} id={styles.navbar_menu}>
                    <ul className={styles.navbar_list}>
                        {dropdownData.map((category, index) => (
                            <li className={`${styles.dropdown__item} ${activeDropdown === index ? styles.show_dropdown : ''}`} key={index}>
                                <div className={`${styles.nav__link} ${styles.dropdown__button}`} onClick={() => toggleDropdown(index)}>
                                    {category.title}
                                </div>

                                <div className={styles.dropdown__container} style={{ height: activeDropdown === index ? 'auto' : '0' }}>
                                    <div className={styles.dropdown__content}>
                                        {category.groups.map((group, i) => (
                                            <div className={styles.dropdown__group} key={i}>
                                                <span className={styles.dropdown__title}>{group.groupTitle}</span>
                                                <ul className={styles.dropdown__list}>
                                                    {group.items.map((item, j) => (
                                                        <li key={j}>
                                                            <a href={item.link} className={styles.dropdown__link}>
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <section id={styles.navbar_profile}>
                    <div id={styles.navbar_profile_search} className={styles.navbar_profile_child}>
                        <div id={styles.navbar_search_icon} className={styles.navbar_profile_child_title}>
                            <div className={styles.show_search_dropdown_button}></div>
                            <IoSearch className={styles.navbar_profile_icons} />
                        </div>
                        <div className={styles.navbar_search_dropdown}>
                            <div className={styles.close_search_dropdown}></div>
                            <div className={styles.main_nav_search_container}>
                                <div id={styles.search_bar_input_container}>
                                    <input type="text" id={styles.search_bar_input} placeholder="Search for products, brands and more" />
                                    <IoSearch id={styles.navbar_search_dropdown_icon} />
                                </div>
                                <div id={styles.search_suggetion}>
                                    <span className={styles.nav_search_suggessions}>jeans</span>
                                    <span className={styles.nav_search_suggessions}>suits</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navbar_profile_child}>
                        <div className={styles.navbar_profile_child_title}>
                            <a className={styles.show_wishlist_dropdown_button} href="/e-commerce-frontend/wishlist/wishlist.html"></a>
                            <GrFavorite className={styles.navbar_profile_icons} />
                        </div>
                    </div>
                    <div className={styles.navbar_profile_child}>
                        <div className={styles.navbar_profile_child_title}>
                            <a className={styles.show_cart_dropdown_button} href="/e-commerce-frontend/cart/cart.html"></a>
                            <PiShoppingCart className={styles.navbar_profile_icons} />
                        </div>
                    </div>
                    <div id={styles.navbar_profile_account} className={styles.navbar_profile_child}>
                        <div id={styles.navbar_account_icon} className={styles.navbar_profile_child_title}>
                            <div className={styles.show_account_dropdown_button}></div>
                            <VscAccount className={styles.navbar_profile_icons} />
                        </div>
                        <div className={styles.navbar_account_dropdown}>
                            <div className={styles.close_account_dropdown}></div>
                            <div className={styles.main_nav_account_container}>
                                <a href="/e-commerce-frontend/signin/signin.html" id={styles.navbar_account_dropdown_login} className={styles.dropList}>LOGIN/SIGNUP</a>
                                <a href="#" className={styles.dropList} id={styles.navbar_account_dropdown_account}></a>
                                <a href="#" className={styles.dropList}>Orders</a>
                                <a href="#" className={styles.dropList}>Coupons</a>
                                <a href="#" className={styles.dropList}>Saved Address</a>
                                <a href="/e-commerce-frontend/admin/home/home.html" className={styles.dropList}>Admin</a>
                            </div>
                        </div>
                    </div>
                </section>

            </nav>
        </header>
    )
}

export default Header