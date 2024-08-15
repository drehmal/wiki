function createMap(imgURL, mapWidth, mapHeight, leftX, bottomZ, leftPad, bottomPad, rightPad, topPad, minZoom, maxZoom) {
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
    pos = event.latlng;
    let x = Math.floor(pos.lng) + leftX
    let z = - Math.floor(pos.lat) + bottomZ
    tooltip.textContent = `${x}, ${z}`;
  });
}