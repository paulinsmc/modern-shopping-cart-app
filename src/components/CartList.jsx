import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, setCart } = useContext(ProductContext);

  const onAddCart = (cartData) => {
    const exist = cart.find((x) => x.id === cartData.id);
    if (exist) {
      const newCartItems = cart.map((x) =>
        x.id === cartData.id
          ? {
              ...exist,
              quantity:
                exist.quantity < exist.instock
                  ? exist.quantity + 1
                  : exist.quantity,
            }
          : x
      );
      setCart(newCartItems);
      localStorage.setItem("productItems", JSON.stringify(newCartItems));
    }
  };
  const onRemoveCart = (cartData) => {
    const exist = cart.find((x) => x.id === cartData.id);
    if (exist.quantity === 1) {
      const newCartItems = cart.filter((x) => x.id !== cartData.id);
      setCart(newCartItems);
      localStorage.setItem("productItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cart.map((x) =>
        x.id === cartData.id ? { ...exist, quantity: exist.quantity - 1 } : x
      );
      setCart(newCartItems);
      localStorage.setItem("productItems", JSON.stringify(newCartItems));
    }
  };
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {cart.map((cartItem, idx) => (
          <Col align="center" key={idx}>
            <Card>
              <Card.Body>
                <img
                  className="cart-image"
                  src={cartItem.image}
                  alt={cartItem.name}
                />
                <Card.Title>{cartItem.name}</Card.Title>
                <Card.Text>
                  ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </Card.Text>
                <div className="cart-button-container">
                  <Button
                    onClick={() => onRemoveCart(cartItem)}
                    variant="danger"
                    className="mx-1"
                  >
                    -
                  </Button>
                  <Card.Text>{cartItem.quantity}</Card.Text>
                  <Button
                    onClick={() => onAddCart(cartItem)}
                    variant="info"
                    className="mx-1"
                  >
                    +
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {cart.length > 0 && (
        <div className="purchase-container">
          <Button className="purchase-btn">
            <Link to="/success">Purchase Product</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CartList;
