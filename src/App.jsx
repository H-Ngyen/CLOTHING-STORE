import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import SearchProductPage from './components/SearchProductsPage'
import AddProductPage from './components/AddProductPage'
import UpdateProductPage from "./components/UpdateProductPage"
import DeleteProductPage from "./components/DeleteProductPage"
import FilterProductPage from './components/FilterProductPage'
import Navbar from './components/Navbar'
import ListProductPage from "./components/ListProductPage"
import ProductDetailPage from './components/ProductDetailPage'
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ <h1 style={{textAlign:"center"}}>Welcome to Clothing Store</h1> }></Route>
          <Route path='/list-products' element={<ListProductPage />}></Route>
          <Route path='/detail-product/:id' element={<ProductDetailPage />}></Route>
          <Route path='/search-products' element={<SearchProductPage />}></Route>
          <Route path='/add-products' element={<AddProductPage />}></Route>
          <Route path='/update-products' element={<UpdateProductPage />}></Route>
          <Route path='/filter-products' element={<FilterProductPage />}></Route>
          <Route path='/delete-products' element={<DeleteProductPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App