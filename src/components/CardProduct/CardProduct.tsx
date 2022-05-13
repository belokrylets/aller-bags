import './cardProduct.css';
import bag from '../../media/images/bag.jpg'

const CardProduct = () => {
    return (
        <div className='cardProduct '>
            <img className='mt-3' src={bag} alt='фото товара' />
            <div className="productDiscreption">
                <div >
                    <p className="producName">Сумка классическая</p>
                    <p  className="priceBag">10 000 рублей</p>
                </div>
                <button>Подробнее</button>
            </div>
        </div>
    );
}

export default CardProduct;