import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import './navbars.css'
import logo from '../../media/images/logo.png'
import { Link } from 'react-router-dom';


const Navbars = () => {
    return (
        <div className="navbars">
            <Navbar bg="light" expand="lg">
                <Container fluid='xxl'>
                    <Navbar.Brand>
                        <Link to='/' >
                            <img
                                src={logo}
                                width="150"
                                height="70"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' to='catalog'>Каталог</Link>
                            <Link className='nav-link' to='action1'>Оплата и сроки изготовления</Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Поиск по каталогу..."
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <div className="ms-3">
                            <a className='phone' href='tel:+79213995539'>+7 (921) 399 55 39</a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbars;