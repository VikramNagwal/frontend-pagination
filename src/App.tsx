import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

interface CardProps {
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  description?: string;
}

const MAX_PAGINATION_NUMBER = 10;

function App() {
  const [products, setProducts] = useState<CardProps[]>([]);
  const [page, setPage] = useState<number>(0);

  const startTab = page * MAX_PAGINATION_NUMBER;
  const endTab = MAX_PAGINATION_NUMBER * (page + 1);

  const total_tabs = Math.floor(products.length / MAX_PAGINATION_NUMBER);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=0", {
        method: "GET",
      });
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      // do something
      console.error("cannot retrive data at the moment ", error);
    }
  };

  const handlePagination = (i: number) => {
    setPage(i);
  };

  const handlePrev = () => {
    if (page === 0 || page < 0) return;
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (page === total_tabs - 1) return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {products.length > 0
          ? products
              .slice(startTab, endTab)
              .map((items, i) => (
                <Card
                  key={i}
                  title={items.title}
                  thumbnail={items.thumbnail}
                  price={items.price}
                  rating={items.rating}
                  description={items.description}
                />
              ))
          : "no data found"}
      </div>
      <Pagination
        total_tabs={total_tabs}
        page={page}
        handlePagination={handlePagination}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}

export default App;
