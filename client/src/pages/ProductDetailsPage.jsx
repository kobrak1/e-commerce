import { useEffect, useState } from "react";
import ProductDetails from "../components/ProducDetails/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${productId}`);
        if (!response.ok) {
          throw new Error("Data fetch error");
        }

        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Data error:", error);
      }
    };
    fetchSingleProduct();
  }, [apiUrl, productId]);

  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} />
  ) : (
    <p>Product uploading...</p>
  );
};

export default ProductDetailsPage;
