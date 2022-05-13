import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './mainPage.css'
const MainPage = () => {

const navigate = useNavigate();

const handleButton = () => {
    navigate('catalog')
}

    return (
        <div className="mainPage">
            <Container fluid='xxl'>
                <div className='header'>
                    <h3>Сумки ручной работы</h3>
                    <button onClick={handleButton}>Смотреть все</button>
                </div>
            </Container>
        </div>
    );
}

export default MainPage;