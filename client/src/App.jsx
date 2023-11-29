import { Route, Routes } from "react-router-dom";
// Style
import "./App.css";
//Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UserPage from "./pages/admin/UserPage";
import CategoryPage from "./pages/admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/admin/Products/CreateProductPage";
import ProductPage from "./pages/admin/Products/ProductPage";
import UpdateProductPage from "./pages/admin/Products/UpdateProductPage";
import CouponPage from "./pages/admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/admin/Coupons/CreateCoupon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
      <Route path="/blogdetails/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
      </Route>
    </Routes>
  );
};

export default App;
