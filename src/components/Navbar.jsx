import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <style>{`
                nav {
                    background-color: #333;
                    padding: 1rem;
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
            `}</style>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-products">Create</Link></li>
                    <li><Link to="/search-products">Search</Link></li>
                    <li><Link to="/search-category">Search Catagory</Link></li>
                    <li><Link to="/update-products">Update</Link></li>
                    <li><Link to="/delete-products">Delete</Link></li>
                </ul>
            </nav>
        </>
    );
}
