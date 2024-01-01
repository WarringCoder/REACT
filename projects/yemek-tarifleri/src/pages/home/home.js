import React from "react";
import "./home.css";
import useFetch from "../../Hooks/useFetch";
import ProductCard from "../../components/ProductCard";

function Home() {
 const {data: tarifler} = useFetch("http://localhost:3000/tarifler");

  return (
    <div className="full-container">
      {tarifler &&
        tarifler.map((tarif) => <ProductCard key={tarif.id} tarif={tarif} />)}
    </div>
  );
}

export default Home;
