import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

export default function HomePage() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}
