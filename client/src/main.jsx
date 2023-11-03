import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <MainLayout>
      <App />
    </MainLayout>
  </CartProvider>
);
