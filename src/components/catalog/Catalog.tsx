import { Container } from "react-bootstrap";
import './catalog.css'
import Price from "../filterCategories/price/Price";
import Color from "../filterCategories/color/Color";
import Gender from "../filterCategories/gender/Gender";
import Sort from "../sort/Sort";
import MyBreadcrump from "../myBreadcrump/MyBreadcrump";
import Categories from "../categories/Categories";
import CardProduct from "../CardProduct/CardProduct";

const Catalog = () => {
    return (
        <Container fluid='xxl'>
            <div className="catalog">
                <MyBreadcrump href="catalog" name="Каталог" />
                <div className="d-flex mt-3">
                    <div className="categories col-2">
                        <Categories />
                    </div>
                    <div className="products col-10">
                        <div className="filters">
                            <Price />
                            <Color />
                            <Gender />
                        </div>
                        <Sort />
                        <div className="cards">
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
}

export default Catalog;