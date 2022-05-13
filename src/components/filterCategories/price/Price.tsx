import { Accordion } from "react-bootstrap";
import './price.css'

const Price = () => {
    return (
        <div className="price">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Цена</Accordion.Header>
                    <Accordion.Body>
                        <div className="priceInput">
                            <input type="number" placeholder="от" />
                            <input type="number" placeholder="до" />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Price;