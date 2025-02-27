import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* <style>{`
                nav {
                    background-color: #333;
                    padding: 1rem;
                    display: flex;
                    justify-content: center
                }
                
                nav ul {
                    list-style: none;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                }
                
                nav ul li a {
                    text-decoration: none;
                    color: #fff;
                    font-weight: bold;
                    transition: color 0.3s ease;
                }
                
                nav ul li a:hover {
                    color: #ff9900;
                }
            `}</style> */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list-products">List products</Link></li>
                    <li><Link to="/add-products">Add products</Link></li>
                    <li><Link to="/search-products">Search products</Link></li>
                    <li><Link to="/filter-products">Filter product categories</Link></li>
                    <li><Link to="/update-products">Update products</Link></li>
                    <li><Link to="/delete-products">Delete products</Link></li>
                </ul>
            </nav>
        </>
    );
}
