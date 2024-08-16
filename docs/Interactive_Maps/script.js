class Marker {
  constructor(name, type, x, z) {
    this.name = name;
    this.type = type;
    this.x = x;
    this.z = z;
  }
}

function setCookie(name, value, days = 400) {
  let expires = "";
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  expires = ` expires=${date.toUTCString()};`;
  document.cookie = `${name}=${value};${expires}`;
}

function deleteCookie(name) {
  setCookie(name, 0, -1);
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function createMap(name, imgURL, mapWidth, mapHeight, leftX, bottomZ, leftPad, bottomPad, rightPad, topPad, minZoom, maxZoom, markers=[]) {
  div = document.getElementById("map");

  // create map
  let map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: minZoom,
    maxZoom: maxZoom,
  });
  let img = L.imageOverlay(imgURL, [[0, 0], [mapHeight, mapWidth]]).addTo(map);
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
    let pos = [-markers[i].z + bottomZ + 0.5, markers[i].x - leftX + 0.5]
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
    m.on("mouseover", (e) => {
      m.bindPopup(`<h3>${markers[i].name}</h3>\n<p>${markers[i].x}, ${markers[i].z}</p>\n<p>Click to Mark as Complete</p>`).openPopup();
    });
    m.on("mouseout", (e) => {
      m.closePopup();
    });

    // get complete cookie
    let completeCookie = `${name}-marker-${markers[i].name.replace(' ', '-').toLowerCase()}-complete`
    let complete = getCookie(completeCookie) != null;
    if (complete) {
      setCookie(completeCookie, 0); // refresh cookie cooldown
    }

    // complete functionality
    let updateOpacity = () => {
      m.setOpacity(complete ? 0.5 : 1.0);
    }
    updateOpacity();
    m.on("click", (e) => {
      complete = !complete;
      if (complete) {
        setCookie(completeCookie, 0);
      } else {
        deleteCookie(completeCookie);
      }
      updateOpacity();
    });
  }
}