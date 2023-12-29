import React from "react";
import './ProductCard.css'
function ProductCard({tarif})
 {
    return (
        <div className="card-container">
          <div>
            <img src={`img/${tarif.resim}`} alt="Sorry..." />
            <p>{tarif.baslik}</p>
          </div>
          <div>
            <p>{tarif.aciklama}</p>
          </div>
          <div>
              <a href={tarif.url}>Tarifi İncele</a>
          </div>
        </div>
    );
}

export default ProductCard;
