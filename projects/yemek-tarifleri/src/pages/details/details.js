import React from "react";
import { useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./Details.css";

function Details() {
  const {id} = useParams();
  const url = "http://localhost:3000/tarifler/" + id;
  const {data: tarif, isLoading, error} = useFetch(url);

  return (
    
    <div className="container row mt-3">
      {isLoading && <div className="alert alert-warning w-100">Yükleniyor...</div>}
      { error && <div className='alert alert-danger'>{ error }</div>}
      {tarif && (
        <>
          <div className="col-4">
            <img
              src={`/img/${tarif.resim}`}
              alt={tarif.baslik}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-8">
            <h5>{tarif.baslik}</h5>
            <p>{tarif.aciklama}</p>
            <ul>
              {tarif.malzemeler.map((malzeme) => (
                <li>{malzeme}</li>
              ))}
            </ul>
          </div>
          <div className="col-12 mt-3">
            <p>{tarif.hazirlanisi}</p>
            <a href={tarif.url} >
              Tarifi İncele
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Details