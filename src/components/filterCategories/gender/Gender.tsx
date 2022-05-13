import { Accordion, Form } from "react-bootstrap";
import './gender.css'

const gender = [
    {name: 'male', value: 'Мужчина'},
    {name: 'female', value: 'Женщина'},
    {name: 'unisex', value: 'Унисекс'},
]

const Gender = () => {
    return (
        <div className="gender">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Пол</Accordion.Header>
                    <Accordion.Body>
                        {gender.map(({name, value}) =>(
                        <Form.Check key={name} name={name} type="checkbox" label={value} />
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Gender;