var informations = {
  team: "GALATASARAY",
  teknik_direktör: "Okan Buruk",
  Yıldız_Oyuncu: "Icardi",
  Stad: "Rams Park",
  Kapasite: 52000,
};

var name = "ULTRASLAN";

function taraftargrubu(name) {
  return name + " topluluğu";
}
var template = (
  <div>
    <h1>{informations.team}</h1>
    <ul>
      <li>{informations.teknik_direktör}</li>
      <li>{informations.Yıldız_Oyuncu}</li>
      <li>{informations.Stad}</li>
      <li>{informations.Kapasite}</li>
      <li>{taraftargrubu(name)}</li>
    </ul>
  </div>
);
var team = ReactDOM.createRoot(document.getElementById("team"));
team.render(template);
