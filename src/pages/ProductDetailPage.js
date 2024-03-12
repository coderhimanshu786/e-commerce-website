import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../pages/ProductDetailPage";

export default function HomePage() {
  return (
    <div>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
    </div>
  );
}
