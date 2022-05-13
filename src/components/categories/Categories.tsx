import './categories.css'
import cn from 'classnames'

const categories = [
    { name: 'classic', value: 'Классические сумки' },
    { name: 'notebook', value: 'Сумки для ноутбуков' },
    { name: 'sport', value: 'Спортивные сумки' },
    { name: 'wallets', value: 'Кошельки' },
    { name: 'sets', value: 'Наборы' },
];

const Categories = () => {
    
    return (
        <ul>
            {categories.map(({ name, value }) => (
                <li key={name} className={cn(name === 'classic' ? 'currentCategories' : 'outherCategories')}>{value}</li>
            ))}
        </ul>
    );
}

export default Categories;