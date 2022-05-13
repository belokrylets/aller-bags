import { Breadcrumb } from 'react-bootstrap';
import './myBreadcrump.css';
import { Link } from 'react-router-dom';


interface MyBreadcrumpProps{
    href: string;
    name: string;
}
const MyBreadcrump = ({href, name}: MyBreadcrumpProps) => {
    return (
        <div className="headerCatalog">
        <Breadcrumb className='pt-1'>
             <Breadcrumb.Item>
             <Link className='breadcrumb-item' to='/'>Главная</Link>
             </Breadcrumb.Item>
            <Breadcrumb.Item active href="catalog">
                Каталог
            </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Каталог</h2>
    </div>
    );
}

export default MyBreadcrump;