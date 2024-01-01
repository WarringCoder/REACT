import { useEffect, useRef ,useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import './create.css';
import {useNavigate} from 'react-router-dom';

function Create() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [malzeme, setMalzeme] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [hazirlanis, setHazirlanis] = useState("");
  const [resim, setResim] = useState("");
  const [url, setUrl] = useState("");
  const malzemeInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch("http://localhost:3000/tarifler", "POST");

  const handleAddMalzeme = (e) => 
  {
    const item = malzeme.trim();

    if (item && !malzemeler.includes(item)) {
      setMalzemeler((prevItems) => [...prevItems, item]);
    }
    setMalzeme("");
    malzemeInput.current.focus();
    malzemeInput.current.value = "";
  };

  const handdleSubmit = (e) =>
  {
    e.preventDefault();
    postData({ baslik, aciklama, malzemeler, hazirlanis, resim, url });
  } 

  useEffect(() =>
  {
    if(data)
    {
      navigate("/")
    }
  }, [data,navigate])
  return (
    <div className="CreateContainer">
      <form onSubmit={handdleSubmit}>
        <h2>Yeni Tarif Ekle</h2>
        <div>
          <label htmlFor="baslik">Başlık: {baslik}</label>
          <input
            type="text"
            id="baslik"
            name="baslik"
            onChange={(e) => setBaslik(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="aciklama">Açıklama:</label>
          <input
            type="text"
            id="aciklama"
            name="aciklama"
            onChange={(e) => setAciklama(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="malzemeler">
            Malzemeler:{" "}
            <ul>
              {malzemeler.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </label>
          <div>
            <input
              type="text"
              ref={malzemeInput}
              name="malzeme"
              onChange={(e) => setMalzeme(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleAddMalzeme}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="hazirlanis">Hazırlanışı:</label>
          <textarea
            id="hazirlanis"
            name="hazirlanis"
            onChange={(e) => setHazirlanis(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="resim">Resim:</label>
          <input
            type="text"
            id="resim"
            name="resim"
            onChange={(e) => setResim(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            name="url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}

export default Create