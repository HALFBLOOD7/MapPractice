//collect data
let currentDataSource = 0;
let data = [biosphereReserves, indianCities, nationalParks];
let locations = data[currentDataSource];
//variables defined
let icons_loc = [
  "data/icons/biosphere3.png",
  "data/icons/city3.png",
  "data/icons/nature.png",
];
let randomLocations = shuffledArray(locations.length);
let state_accuracy = 0;
let distance_accuracy = 0;
let exerciseOn = false;
let currentLocation;
let currentLocationIndex = -1;
let userPin;
let pins = [];

let map = L.map("map").setView([20, 77], 5); // Set to India

// Define base layers
const terrainLayer = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution: "© OpenStreetMap contributors, © CartoDB",
  }
).addTo(map);

const satelliteLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }
);

// Store the current active layer
let currentLayer = terrainLayer;

// Function to switch the map view
function switchView() {
  if (map.hasLayer(currentLayer)) {
    map.removeLayer(currentLayer);
    currentLayer =
      currentLayer === terrainLayer ? satelliteLayer : terrainLayer;
    map.addLayer(currentLayer);
  }
}

// Bind the "V" key to switch view
document.addEventListener("keydown", (event) => {
  if (event.key === "v" || event.key === "V") {
    // Check for 'v' key
    switchView();
  }
});

L.geoJSON(geojsonData, {
  style: function (feature) {
    return {
      color: "black", // Border color
      weight: 2.5, // Border width
      fillColor: "rgba(89, 89, 218, 0.02)", // Fill color (use rgba for transparency)
      fillOpacity: 0.5, // Opacity of the fill (0 to 1)
      fill: true, // Enable filling the area
    };
  },
}).addTo(map);

function getNextLocation() {
  currentLocationIndex += 1;
  if (locations.length == currentLocationIndex) {
    return false;
  }
  currentLocation = locations[randomLocations[currentLocationIndex]];
  document.getElementById("current-location").textContent =
    currentLocationIndex +
    1 +
    "/ " +
    locations.length +
    " : " +
    currentLocation.name;
  return true;
}

function removeAllPins() {
  for (let i = 0; i < pins.length; i++) {
    map.removeLayer(pins[i]); // Remove each marker from the map
  }
  pins = []; // Clear the markers array
}

// Handle map clicks to drop pin
map.on("click", (event) => {
  const { lat, lng } = event.latlng;

  if (exerciseOn) {
    // Calculate distance and give feedback
    const distance = calculateDistance(
      currentLocation.lat,
      currentLocation.lng,
      lat,
      lng
    );

    // check state
    if (
      getStateFromCoordinates(currentLocation.lat, currentLocation.lng) ==
      getStateFromCoordinates(lat, lng)
    ) {
      distance_accuracy += scoring(0, 50, distance); //Math.floor(((50 - distance) * 2) / locations.length);
      state_accuracy += 1;
      if (distance < 50) {
        userPin = L.circleMarker([lat, lng], coloredIcon("green")).addTo(map);
        bindhoverEffectMsg(userPin, `Very Good at ${currentLocation.name}`);
      } else {
        userPin = L.circleMarker([lat, lng], coloredIcon("blue")).addTo(map);
        bindhoverEffectMsg(
          userPin,
          `Too far (${Math.floor(distance * 10) / 10}) but  correct State ${
            currentLocation.name
          }`
        );
      }
    } else {
      if (distance < 50) {
        userPin = L.circleMarker([lat, lng], coloredIcon("yellow")).addTo(map);
        bindhoverEffectMsg(
          userPin,
          `Almost there just cross over for ${currentLocation.name}`
        );
      } else {
        userPin = L.circleMarker([lat, lng], coloredIcon("red")).addTo(map);
        bindhoverEffectMsg(
          userPin,
          `Too far away from ${currentLocation.name}`
        );
      }
    }
    pins.push(userPin);
    if (!getNextLocation()) {
      endExercise();
    }
  }
});

const startExercise = () => {
  console.log("exercise started");
  console.log(currentDataSource);
  //remove all pins
  removeAllPins();
  randomLocations = shuffledArray(locations.length);

  state_accuracy = 0;
  distance_accuracy = 0;
  exerciseOn = true;
  currentLocationIndex = -1;
  currentLocation = locations[randomLocations[currentLocationIndex]];
  getNextLocation();
  document.getElementById("game-on").style.display = "block";
  document.getElementById("pre-game").style.display = "none";
  document.getElementById("post-game").style.display = "none";
};
const endExercise = () => {
  console.log(state_accuracy, distance_accuracy);
  console.log("exercise started");
  exerciseOn = false;
  currentLocationIndex = -1;
  document.getElementById("game-on").style.display = "none";
  document.getElementById("pre-game").style.display = "none";
  document.getElementById("post-game").style.display = "block";
  //display feedback
  document.getElementById(
    "distance-accuracy-display"
  ).textContent = `Distance accuracy score = ${distance_accuracy}`;
  document.getElementById(
    "state-accuracy-display"
  ).textContent = `State accuracy score = ${state_accuracy}`;
  state_accuracy = 0;
  distance_accuracy = 0;
};
const toMenu = () => {
  document.getElementById("game-on").style.display = "none";
  document.getElementById("pre-game").style.display = "block";
  document.getElementById("post-game").style.display = "none";
  populatePins();
};

bindId("start-exercise", startExercise);
bindId("restart", startExercise);
bindId("toMenu", toMenu);
bindId("giveup", toMenu);

function populatePins() {
  removeAllPins();
  for (let i = 0; i < locations.length; i++) {
    const p = L.marker([locations[i].lat, locations[i].lng], {
      icon: L.icon(customIcon(icons_loc[currentDataSource])),
    }).addTo(map);
    bindhoverEffectMsg(p, locations[i].name);
    pins.push(p);
  }
}

function updateDataSource() {
  const dataSource = document.getElementById("data-source").value;
  switch (dataSource) {
    case "biosphere":
      currentDataSource = 0;
      break;
    case "indian_cities":
      currentDataSource = 1;
      break;
    case "national_parks":
      currentDataSource = 2;
      break;
    default:
      currentDataSource = 0;
      break;
  }
  locations = data[currentDataSource];
  populatePins();
}

populatePins();
