
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
        <table style={{
            border: "solid white 1px", borderRadius: "0.25rem", width: "fit-content",
            margin: "0 auto"
        }}>
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
        </table>);
}