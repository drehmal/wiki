class Marker {
  constructor(name, type, x, z) {
    this.name = name;
    this.type = type;
    this.x = x;
    this.z = z;
  }
}

let markerMap = {};

// NOTE: does not actually use cookies (uses localStorage)

function markerCompletedKey(markerId) {
  return `marker-${markerId}-completed`;
}

function getMarkerCompleted(markerId) {
  return localStorage.getItem(markerCompletedKey(markerId)) != null;
}

function setMarkerCompleted(markerId, value) {
  let key = markerCompletedKey(markerId);
  let m = markerMap[markerId];
  if (value) {
    localStorage.setItem(key, 1);
    m.setOpacity(0.5);
  } else {
    localStorage.removeItem(key);
    m.setOpacity(1.0);
  }
}

function handleMarkerCompletedCheckboxClick(checkbox) {
  let markerId = checkbox.id.replace(/^marker-/, "").replace(/-checkbox$/, "");
  setMarkerCompleted(markerId, checkbox.checked);
}

function createMap(name, imgURL, mapWidth, mapHeight, leftX, bottomZ, leftPad, bottomPad, rightPad, topPad, minZoom, maxZoom, markers=[]) {
  div = document.getElementById("map");

  // create map
  let map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: minZoom,
    maxZoom: maxZoom,
  });
  L.imageOverlay(imgURL, [[0, 0], [mapHeight, mapWidth]]).addTo(map);
  map.setMaxBounds([[bottomPad, leftPad], [mapHeight - topPad, mapWidth - rightPad]]);
  map.setView([(bottomPad + mapHeight - topPad) * 0.5, (leftPad + mapWidth - rightPad) * 0.5], minZoom);

  // create tooltip
  let tooltip = document.createElement("div");
  tooltip.id = "tooltip";
  div.appendChild(tooltip);
  map.on("mousemove", (event) => {
    let pos = event.latlng;
    let x = Math.floor(pos.lng) + leftX
    let z = - Math.floor(pos.lat) + bottomZ
    tooltip.textContent = `${x}, ${z}`;
  });

  // add markers
  for (let i = 0; i < markers.length; i++) {
    // add marker
    let pos = [-markers[i].z + bottomZ + 0.5, markers[i].x - leftX + 0.5]
    let markerId = markers[i].name.replaceAll(' ', '-').replaceAll('.', '').toLowerCase();
    let iconWidth = 13;
    let iconHeight = 32;
    let icon = L.icon({
      iconUrl: "../icons/tower-icon.png",
      iconSize: [iconWidth, iconHeight],
      iconAnchor: [iconWidth * 0.5, iconHeight],
      popupAnchor: [0, -iconHeight],
      className: "marker-icon"
    });
    let m = L.marker(pos, { icon: icon }).addTo(map);
    markerMap[markerId] = m;
    setMarkerCompleted(markerId, getMarkerCompleted(markerId)); // refresh cookie

    // add popup
    let popupContent = `<h3>${markers[i].name}</h3>\n<p>${markers[i].x}, ${markers[i].z}</p>\n<input type="checkbox" id="marker-${markerId}-checkbox" onclick="handleMarkerCompletedCheckboxClick(this)">Completed</input>`;
    popup = m.bindPopup(popupContent, { autoClose: false, closeOnClick: true });
    m.on('popupopen', ()=> {
      let checkbox = document.getElementById(`marker-${markerId}-checkbox`);
      checkbox.checked = getMarkerCompleted(markerId);
    });
  }
}