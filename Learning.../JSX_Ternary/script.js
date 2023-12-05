var renkler = ["Sarı", "Kırmızı", "Yeşil", "Kahverengi", "Mavi"];

var html = (
  <div>
    <h1>{renkler[0]}</h1>
    <span>{renkler[0] == "Sarı" ? "Güzel Renk" : "Bu renk kötü"}</span>
    <h2>{renkler[1]}</h2>
    <span>{renkler[1] == "Kırmızı" ? "Güzel Renk" : "Bu renk kötü"}</span>
    <h3>{renkler[2]}</h3>
    <span>{renkler[2] == "Yeşil" ? "Güzel Renk" : "Bu renk kötü"}</span>
    <h4>{renkler[3]}</h4>
    <span>{renkler[3] == "Kahverengi" ? "Kötü renk" : ""}</span>
    <h5>{renkler[4]}</h5>
    <span>{renkler[4] == "Mavi" ? "Kötü renk" : ""}</span>
  </div>
);
var root = ReactDOM.createRoot(document.getElementById("JSX_ternary"));
root.render(html);
