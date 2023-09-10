import ProductDetail from "../features/product-list/components/ProductDetail";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

const ProductDetailPage = () => {
  return (
    <div>
        <NavBar>
         <ProductDetail>
         </ProductDetail>
        </NavBar>
      <Footer></Footer>
    </div>
  )
}

export default ProductDetailPage ;
