import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch, CiUser, CiMenuFries } from "react-icons/ci";
import { FaShopware } from 'react-icons/fa'
import { PiHeartStraightLight, PiHandbagLight, PiUserCircleLight, PiUserLight  } from 'react-icons/pi'

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
    const [isSearchbarOpened, setIsSearchbarOpened] = useState(false);
    const [isAccountOpened, setIsAccountOpened] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleMenuButton = () => {
        setMenuOpened(!menuOpened);
    };

    const toggleMenuOptionsDropdown = (index) => {
        setActiveDropdown((prev) => (prev === index ? null : index));
    };

    const toggleSearchbarDropdown = (bool) => {
        setIsSearchbarOpened(bool);
    }
    const toggleAccountDropdown = (bool) => {
        setIsAccountOpened(bool);
    }

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

        const accountButton = document.querySelector(`.${styles.show_account_dropdown_button}`);
        const accountDropdown = document.querySelector(`.${styles.navbar_account_dropdown}`);
        const closeAccountDropdown = document.querySelector(`.${styles.close_account_dropdown}`);

    

        // Toggle Account Dropdown
        accountButton.addEventListener('click', () => {
            accountDropdown.classList.add(styles.active);
        });

        closeAccountDropdown.addEventListener('click', () => {
            accountDropdown.classList.remove(styles.active);
        });

        return () => {
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
                        <CiMenuFries  className={styles.navbar_toggle_menu} />
                        <AiOutlineClose className={styles.navbar_toggle_close} />
                    </div>
                    <a href="/e-commerce-frontend/home/home.html" className={styles.navbar_logo}>
                        <FaShopware /> E-MART
                    </a>
                </div>

                <div className={`${styles.navbar_menu} ${menuOpened && styles.show_menu}`} id={styles.navbar_menu}>
                    <ul className={styles.navbar_list}>
                        {dropdownData.map((category, index) => (
                            <li className={`${styles.dropdown__item} ${activeDropdown === index ? styles.show_dropdown : ''}`} key={index}>
                                <div className={`${styles.nav__link} ${styles.dropdown__button}`} onClick={() => toggleMenuOptionsDropdown(index)}>
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
                            <div className={styles.show_search_dropdown_button} onClick={() => { toggleSearchbarDropdown(true) }}></div>
                            <CiSearch className={styles.navbar_profile_icons} />
                        </div>
                        <div className={`${styles.navbar_search_dropdown} ${isSearchbarOpened && styles.visible_dropdown}`}>
                            <div className={styles.close_search_dropdown} onClick={() => { toggleSearchbarDropdown(false); }}></div>
                            <div className={styles.main_nav_search_container}>
                                <div id={styles.search_bar_input_container}>
                                    <input type="text" id={styles.search_bar_input} placeholder="Search for products, brands and more" />
                                    <CiSearch id={styles.navbar_search_dropdown_icon} />
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
                            <PiHeartStraightLight  className={styles.navbar_profile_icons} />
                        </div>
                    </div>
                    <div className={styles.navbar_profile_child}>
                        <div className={styles.navbar_profile_child_title}>
                            <a className={styles.show_cart_dropdown_button} href="/e-commerce-frontend/cart/cart.html"></a>
                            <PiHandbagLight className={styles.navbar_profile_icons} />
                        </div>
                    </div>
                    <div id={styles.navbar_profile_account} className={styles.navbar_profile_child}>
                        <div id={styles.navbar_account_icon} className={styles.navbar_profile_child_title}>
                            <div className={styles.show_account_dropdown_button} onClick={() => { toggleAccountDropdown(true); }}></div>
                            <CiUser className={styles.navbar_profile_icons} size={24} style={{fontWeight: 'bolder'}}/>
                        </div>
                        <div className={`${styles.navbar_account_dropdown} ${isAccountOpened && styles.visible_dropdown}`}>
                            <div className={styles.close_account_dropdown} onClick={() => { toggleAccountDropdown(false); }}></div>
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