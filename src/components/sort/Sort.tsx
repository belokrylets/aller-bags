import './sort.css'
import down from '../../media/images/down.svg'

const Sort = () => {
    return (
        <div className="sort">
        Сортировать:
        <div className="sortPrice">
            По цене
            <img src={down} alt="" />
        </div>
        <div className="sortName">
            По названию
            <img src={down} alt="" />
        </div>
    </div>
    );
}

export default Sort;