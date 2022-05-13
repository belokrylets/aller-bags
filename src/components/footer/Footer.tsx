import React from 'react';
import './footer.css'
import { Container } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer>
            <Container fluid='xxl'>
                <div className='footeClass'>
                    <div className='rights' >
                        <h4>
                            Сергей Белокрылец
                        </h4>
                        <p>
                            (с) 2022. Все права защищены.
                        </p>
                    </div>
                </div>
            </Container>

        </footer>
    );
}

export default Footer;