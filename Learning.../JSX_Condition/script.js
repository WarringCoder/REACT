var root = ReactDOM.createRoot(document.getElementById("example"));
var features = [
  {
    temperature: 80,
    planet: "Jüpiter",
    fuel: 5,
  },
  {
    temperature: 4,
    planet: "Mars",
    fuel: 60,
  },
  {
    temperature: -200,
    planet: "Üranüs",
    fuel: 50,
  },
  {
    temperature: -700,
    planet: "Neptün",
    fuel: 1,
  },
  {
    temperature: 700,
    planet: "Plüton",
    fuel: 90,
  },
  {
    temperature: 10,
    planet: "Satürn",
    fuel: 46,
  },
];

var control = "Sıcaklık Kontrol Ediliyor...";
function temperature_control(temperature) {
  if (temperature > 55) {
    var text =
      "Sıcaklık " + temperature + " derece. İniş yapmanız çok tehlikeli";
    return text;
  } else if (temperature < -60) {
    var text =
      "Sıcaklık " + temperature + " derece. İniş yapmanız çok tehlikeli";
    return text;
  } else {
    var text =
      "Sıcaklık " + temperature + " derece. Hava mükemmel iniş yapabilirsiniz!";
    return text;
  }
}

function fuel_control(fuel) {
  if (fuel < 6) {
    var text2 =
      "FAKAT Yakıtınız bitmek üzere. Mecburi iniş için rota ayarlanıyor!";
    return text2;
  } else {
    var text2 = "Yakıtınız yeterli seviyede";
    return text2;
  }
}

var selectedProducts = [];

function addProduct(event, planet) {
  console.log(event.target, planet);
  if (!selectedProducts.includes(planet)) {
    selectedProducts.push(planet);
  }
  renderApp();
}

function renderApp() {
  var template = (
    <div id="container">
      <h3 id="head">Başarılı İniş: {selectedProducts.length}</h3>
      {features.map((planets, index) => (
        <div id="flex">
          <h3>{features[index].planet}</h3>
          <h5>{features[index].temperature} derece</h5>
          <h5>%{features[index].fuel} yakıt</h5>
          <p>{control}</p>
          <p>{temperature_control(features[index].temperature)}</p>
          <p>{fuel_control(features[index].fuel)}</p>
          <button
            type="button"
            id={index}
            onClick={(event) => addProduct(event, planets.planet)}
          >
            GEZEGENE KON
          </button>
        </div>
      ))}
    </div>
  );
  root.render(template);
}
renderApp();
