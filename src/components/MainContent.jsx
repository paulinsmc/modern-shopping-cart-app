import "../App.css";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const MainContent = () => {
  return (
    <Container>
      <main className="main-content mt-3">
        <h2 className="m-4" align="center">
          Product List
        </h2>
        <hr />
        <ProductList />
        <Footer />
      </main>
    </Container>
  );
};

export default MainContent;
