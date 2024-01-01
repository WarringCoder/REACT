import React from "react";
import "./home.css";
import useFetch from "../../Hooks/useFetch";
import ProductCard from "../../components/ProductCard";

function Home() {
 const {data: tarifler, isLoading, error} = useFetch("http://localhost:3000/tarifler");

  return (
    <div className="full-container">
      {isLoading && <div className="alert alert-warning w-100">Yükleniyor...</div>}
      { error && <div className='alert alert-danger'>{ error }</div>}
      {tarifler &&
        tarifler.map((tarif) => <ProductCard key={tarif.id} tarif={tarif} />)}
    </div>
  );
}

export default Home;
