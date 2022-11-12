import "../App.css";
import { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ProductContext } from "../ProductContext";

const ProductList = () => {
  const { product } = useContext(ProductContext);
  const { cart, setCart } = useContext(ProductContext);

  useEffect(() => {
    setCart(
      localStorage.getItem("productItems")
        ? JSON.parse(localStorage.getItem("productItems"))
        : []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="section-container">
      <Container fluid>
        <Row xs={1} md={4} className="g-4">
          {product.map((productItem, idx) => (
            <Col align="center" key={idx}>
              <Card>
                <Card.Body>
                  <img
                    className="product-image"
                    src={productItem.image}
                    alt={productItem.name}
                  />
                  <Card.Title>{productItem.name}</Card.Title>
                  <div className="instock-container">
                    <span>
                      <Card.Text>${productItem.price}</Card.Text>
                    </span>
                    <span style={{ color: "red" }}>
                      <Card.Text>Instock: {productItem.instock}</Card.Text>
                    </span>
                  </div>
                  <Button
                    onClick={() => {
                      const exist = cart.find((x) => x.id === productItem.id);
                      if (exist) {
                        const newProductItems = cart.map((x) =>
                          x.id === productItem.id
                            ? { ...exist, quantity: exist.quantity + 1 }
                            : x
                        );
                        setCart(newProductItems);
                        localStorage.setItem(
                          "productItems",
                          JSON.stringify(newProductItems)
                        );
                      } else {
                        const newProductItems = [
                          ...cart,
                          { ...productItem, quantity: 1 },
                        ];
                        setCart(newProductItems);
                        localStorage.setItem(
                          "productItems",
                          JSON.stringify(newProductItems)
                        );
                      }
                    }}
                    className="addToCartBtn"
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
