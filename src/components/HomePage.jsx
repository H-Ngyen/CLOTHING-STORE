import  ItemProduct  from "./ItemProduct"
import "../css/App.css"
import { clothes } from '../Clothes'

export default function HomePage() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Our Products</h1>
            <div className="products-container">
                {clothes.slice(0, 20).map((item, index) => (
                    <ItemProduct key={index} {...item} />
                ))}
            </div>
        </>
    )
}