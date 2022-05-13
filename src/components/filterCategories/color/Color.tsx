import { Accordion, Form } from "react-bootstrap";
import './color.css'

const color = [
    {name: 'black', value: 'Черный'},
    {name: 'brown', value: 'Коричневый'},
    {name: 'blue', value: 'Синий'},
    {name: 'gray', value: 'Серый'},
]

const Color = () => {
    return (
        <div className="color">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Цвет</Accordion.Header>
                    <Accordion.Body>
                        {color.map(({name, value}) =>(
                        <Form.Check key={name} name={name} type="checkbox" label={value} />
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Color;