import React from 'react'
import styles from './Products.module.css'

function Products() {
    return (
        <section id="products_main_container">
            <div className={styles.category_uri}>
                <div className={styles.category_uri__items}>
                    <div className={styles.category_uri__item}>Home</div>
                    <div className={styles.category_uri__item}>Clothing</div>
                    <div className={styles.category_uri__item}>T-Shirts</div>
                </div>
            </div>
            <div className={styles.search_bash}>
                <div className={styles.search_bash__items}>
                    <div className={styles.search_bash__item}>Shirts For Men &amp; Women</div>
                    <div className={styles.search_bash__item}>101148 items</div>
                </div>
            </div>
            <div className={styles.main_product_filter_sort}>
                <div className={styles.filter__options_container}>
                    <div className={styles.filter_button_container}>
                        <div className={styles.filter_button}></div>
                        <span className={styles.filter_option_pre_text}>Filters</span>
                        <span class="material-symbols-rounded filter_dropdown_arrow"> expand_more </span>
                    </div>
                    <div className={styles.filter_options_parent}>
                        <div className={styles.close_main_filter}></div>
                        <div className={styles.main_filter}>

                            <div className={styles.filter_card}>
                                <div className={styles.filter_title_n_search_container}>
                                    <div className={styles.filter__title}>CATEGORIES</div>
                                </div>
                                <div className={styles.filter__item}>
                                    <div className={styles.filter__item__radio}><input type="radio" id="Men" name="category"/><label
                                        for="Men">Men</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="Women" name="category"/><label
                                        for="Women">Women</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="Kids" name="category"/><label
                                        for="Kids">Kids</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="Girls" name="category"/><label
                                        for="Girls">Girls</label></div>
                                </div>
                            </div>

                            <div className={styles.filter_card}>
                                <div className={styles.filter_title_n_search_container}>
                                    <div className={styles.filter__title}>BRAND</div>
                                </div>
                                <div className={styles.filter__item}>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Nike" value="Nike"/><label
                                        for="[object Object]">Nike<span className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Puma" value="Puma"/><label
                                        for="[object Object]">Puma<span className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Adidas"
                                        value="Adidas"/><label for="[object Object]">Adidas<span
                                            className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Lee Cooper"
                                        value="Lee Cooper"/><label for="[object Object]">Lee Cooper<span
                                            className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Reebok"
                                        value="Reebok"/><label for="[object Object]">Reebok<span
                                            className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Roadster"
                                        value="Roadster"/><label for="[object Object]">Roadster<span
                                            className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Arrow"
                                        value="Arrow"/><label for="[object Object]">Arrow<span
                                            className={styles.filter__item__checkbox__count}>
                                            (100)</span></label></div>
                                    <div className={styles.filter__item__more}><button>+8 more</button></div>
                                </div>
                            </div>

                            <div className={styles.filter_card}>
                                <div className={styles.filter_title_n_search_container}>
                                    <div className={styles.filter__title}>PRICE</div>
                                </div>
                                <div className={styles.filter__item}>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="500 1000" name="price"
                                        value="500 1000"/><label for="500 1000">Rs. 500 to Rs.
                                            1000<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="1000 2000" name="price"
                                        value="1000 2000"/><label for="1000 2000">Rs. 1000 to Rs.
                                            2000<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="2000 5000" name="price"
                                        value="2000 5000"/><label for="2000 5000">Rs. 2000 to Rs.
                                            5000<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="5000 10000" name="price"
                                        value="5000 10000"/><label for="5000 10000">Rs. 5000 to Rs.
                                            10000<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="10000 20000" name="price"
                                        value="10000 20000"/><label for="10000 20000">Rs. 10000 to Rs.
                                            20000<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="20000 50000" name="price"
                                        value="20000 50000"/><label for="20000 50000">Rs. 20000 to Rs.
                                            50000<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__more}><button>+-1 more</button></div>
                                </div>
                            </div>

                            <div className={styles.filter_card}>
                                <div className={styles.filter_title_n_search_container}>
                                    <div className={styles.filter__title}>COLOR</div>
                                </div>
                                <div className={styles.filter__item}>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Black" name="color"
                                        value="Black"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'Black',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">Black<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="White" name="color"
                                        value="White"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'White',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">White<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Red" name="color"
                                        value="Red"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'red',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">Red<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Blue" name="color"
                                        value="Blue"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'blue',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">Blue<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Green" name="color"
                                        value="Green"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'green',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">Green<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Yellow" name="color"
                                        value="Yellow"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'yellow',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">Yellow<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__checkbox}><input type="checkbox" id="Pink" name="color"
                                        value="Pink"/><span
                                            style={{width:'15px', height:'15px', borderRadius:'50%', backgroundColor:'pink',display:'inline-block', border:'1px solid #eaeaea'}}></span><label
                                                for="[object Object]">Pink<span className={styles.filter__item__checkbox__count}>
                                                (100)</span></label></div>
                                    <div className={styles.filter__item__more}><button>+3 more</button></div>
                                </div>
                            </div>

                            <div className={styles.filter_card}>
                                <div className={styles.filter_title_n_search_container}>
                                    <div className={styles.filter__title}>DISCOUNT</div>
                                </div>
                                <div className={styles.filter__item}>
                                    <div className={styles.filter__item__radio}><input type="radio" id="10%" name="discount"/><label
                                        for="10%">10% and above</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="20%" name="discount"/><label
                                        for="20%">20% and above</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="30%" name="discount"/><label
                                        for="30%">30% and above</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="40%" name="discount"/><label
                                        for="40%">40% and above</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="50%" name="discount"/><label
                                        for="50%">50% and above</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="60%" name="discount"/><label
                                        for="60%">60% and above</label></div>
                                    <div className={styles.filter__item__radio}><input type="radio" id="70%" name="discount"/><label
                                        for="70%">70% and above</label></div>
                                    <div className={styles.filter__item__more}><button>+2 more</button></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.sort__options_container}>
                    <div className={styles.sort_button_container}>
                        <div className={styles.sort_button}></div>
                        <span id="selected_option_text">Sort</span>
                        <span id="selected_option_pre_text">Sort By :</span>
                        <span id="selected_option"> Recommended </span>
                        <span class="material-symbols-rounded sort_dropdown_arrow"> expand_more </span>
                    </div>
                    <div className={styles.sort_options_parent}>
                        <div className={styles.close_main_sort}></div>
                        <div className={styles.main_sort}>
                            <span>Recommended</span>
                            <span>What's New</span>
                            <span>Popularity</span>
                            <span>Better Discount</span>
                            <span>Price: High to Low</span>
                            <span>Price: Low to High</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main_products_parent}>
                <div className={styles.main_product}>

                </div>
            </div>
        </section>
    )
}

export default Products