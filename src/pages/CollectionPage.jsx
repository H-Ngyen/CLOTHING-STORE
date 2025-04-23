import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { getProductApi } from '../api/ProductApi';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/uploads/`;

export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductApi = async () => {
      try {
        const productList = await getProductApi();
        setProducts(productList);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    fetchProductApi();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === '' || product.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price-low') {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (sortBy === 'price-high') {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      return 0;
    });

  return (
    <div>
      {/* Collection Content */}
      <Container className="tw-py-8">
        <Row>
          {/* Filter Button (Mobile) */}
          <Col xs={12} className="tw-mb-4 tw-block md:tw-hidden">
            <Button
              variant="outline-primary"
              className="tw-w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'} <i className="bi bi-filter"></i>
            </Button>
          </Col>

          {/* Sidebar Filters */}
          <Col md={3} className={`${showFilters ? 'tw-block' : 'tw-hidden'} md:tw-block tw-mb-4`}>
            <Card className="tw-shadow-sm">
              <Card.Header className="tw-bg-gray-100 tw-font-bold">Filters</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="tw-mb-4">
                    <Form.Label className="tw-font-semibold">Search</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="tw-mb-4">
                    <Form.Label className="tw-font-semibold">Category</Form.Label>
                    <Form.Select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      <option value="Hoodies">Hoodies</option>
                      <option value="Pants">Pants</option>
                      <option value="Shirts">Shirts</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="tw-mb-4">
                    <Form.Label className="tw-font-semibold">Sort By</Form.Label>
                    <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      <option value="name">Name (A-Z)</option>
                      <option value="price-low">Price (Low to High)</option>
                      <option value="price-high">Price (High to Low)</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Products Grid */}
          <Col md={9}>
            <div className="tw-mb-4 tw-flex tw-justify-between tw-items-center">
              <p className="tw-mb-0">Showing {filteredProducts.length} products</p>
              <div className="tw-hidden md:tw-block">
                <Form.Select
                  className="tw-w-auto"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Sort by: Name (A-Z)</option>
                  <option value="price-low">Sort by: Price (Low to High)</option>
                  <option value="price-high">Sort by: Price (High to Low)</option>
                </Form.Select>
              </div>
            </div>

            <Row>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col key={product.id} sm={6} lg={4} className="tw-mb-4">
                    <Card
                      className="tw-h-full tw-shadow-sm tw-transition-all tw-duration-300 hover:tw-shadow-lg"
                      onClick={() => navigate(`/product-detail/${product.id}`, { state: { product } })}
                      style={{ cursor: 'pointer' }}
                    >
                      <Card.Img
                        variant="top"
                        src={`${IMG_BASE_URL}/${product.image}`}
                        className="tw-h-full tw-object-contain"
                      />
                      <Card.Body>
                        <Card.Title className="tw-font-bold">{product.name}</Card.Title>
                        <Card.Text className="tw-text-gray-600 tw-mb-1">{product.category}</Card.Text>
                        <Card.Text className="tw-font-semibold tw-text-lg tw-mb-2">${product.price}</Card.Text>
                        <Card.Text className="tw-text-sm tw-text-gray-600 tw-mb-3 tw-line-clamp-2">
                          {product.description}
                        </Card.Text>
                        <div className="tw-text-sm tw-text-gray-600 tw-mb-3">
                          <i className="bi bi-star-fill tw-text-warning tw-mr-1"></i>
                          {`Review: ${product.review || 'No reviews'}`}
                        </div>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col xs={12} className="tw-text-center tw-py-16">
                  <h3 className="tw-text-gray-500">No products match your criteria</h3>
                  <Button
                    variant="outline-primary"
                    className="tw-mt-4"
                    onClick={() => {
                      setSearchTerm('');
                      setFilterCategory('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </Col>
              )}
            </Row>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="tw-mt-6 tw-flex tw-justify-center">
                <Pagination />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  );
};