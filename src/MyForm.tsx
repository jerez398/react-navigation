import { Button, Form, InputGroup } from "react-bootstrap";

export default function MyForm() {
    return (
        <Form
            className="w-50 mx-auto"
            onSubmit={(e) => e.preventDefault()}
        >
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control placeholder="Enter name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product Type</Form.Label>
                <Form.Select aria-label="Default">
                    <option>Default</option>
                    <option value="1"> Fruit</option>
                    <option value="2">Vegetable</option>
                </Form.Select>
            </Form.Group>
            <Form.Label>Product Cost</Form.Label>
            <InputGroup
                className="mb-3"
            >
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder="Enter Cost" type="number" />
            </InputGroup>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
    );
}