function shuffledArray(n) {
  let arr = Array.from({ length: n }, (_, i) => i); // Create array [0, 1, ..., n-1]

  // Fisher-Yates Shuffle
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }

  return arr;
}

function scoring(min, max, value) {
  const score = Math.floor(((max - value + min) * 1000) / max) / 10;
  return score;
}

function getStateFromCoordinates(lat, lng) {
  let foundState = null;
  const point = turf.point([lng, lat]); // Longitude first!

  geojsonData.features.forEach((feature) => {
    let polygon = null;

    if (feature.geometry.type === "Polygon") {
      // Ensure the first and last coordinates match
      feature.geometry.coordinates.forEach((ring) => {
        if (
          ring.length < 4 ||
          ring[0][0] !== ring[ring.length - 1][0] ||
          ring[0][1] !== ring[ring.length - 1][1]
        ) {
          ring.push(ring[0]); // Close the ring if needed
        }
      });

      polygon = turf.polygon(feature.geometry.coordinates);
    } else if (feature.geometry.type === "MultiPolygon") {
      // Ensure closure for MultiPolygon
      feature.geometry.coordinates.forEach((polygonRings) => {
        polygonRings.forEach((ring) => {
          if (
            ring.length < 4 ||
            ring[0][0] !== ring[ring.length - 1][0] ||
            ring[0][1] !== ring[ring.length - 1][1]
          ) {
            ring.push(ring[0]); // Close the ring
          }
        });
      });

      polygon = turf.multiPolygon(feature.geometry.coordinates);
    }

    // Check if the point is inside the state boundary
    if (polygon && turf.booleanPointInPolygon(point, polygon)) {
      foundState = feature.properties.ST_NM;
    }
  });

  return foundState;
}

// Calculate distance using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

function bindId(id, func) {
  document.getElementById(id).addEventListener("click", func);
}

function coloredIcon(
  fillcolor = "red",
  color = "black",
  opacity = 1,
  radius = 7
) {
  return {
    color: color, // Border color
    fillColor: fillcolor, // Fill color
    fillOpacity: opacity, // Fill opacity
    radius: radius, // Radius of the circle marker
  };
}

function customIcon(source) {
  return {
    iconUrl: source, // Replace with the path to your icon image
    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -36], // point from which the popup should open relative to the iconAnchor
  };
}
function bindhoverEffectMsg(pin, msg) {
  pin.on("mouseover", function (e) {
    this.bindPopup(msg).openPopup();
  });
  pin.on("mouseout", function (e) {
    this.closePopup();
  });
}
