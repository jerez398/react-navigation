import { Table } from "react-bootstrap";
interface Product {
    name: string,
    type: string,
    price: number
};

const PRODUCTS: Product[] = [{
    name: 'Apple',
    type: "Fruit",
    price: 2.50,
},
{
    name: 'Pinapple',
    type: "Fruit",
    price: 3.25
},
{
    name: 'Cucumber',
    type: 'Vegetable',
    price: .50
}
];
export default function Products() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {PRODUCTS.map(({ name, price, type }, idx) => (
                    <tr key={name + price + type}>
                        <td>{idx + 1}</td>
                        <td>{name}</td>
                        <td>{type}</td>
                        <td>{price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>);
}