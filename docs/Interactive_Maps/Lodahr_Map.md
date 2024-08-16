<head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
  <link rel="stylesheet" href="../style.css">
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <script src="../script.js"></script>
</head>
<div id="map" style="height:600px">
  <script>
    markers = [
      new Marker("Lo'Dahr", "tower", 60, -718)
    ]
    createMap("lodahr", "../maps/lodahr_1to1.png", 5120, 5632, -2560, 2559, 0, 0, 0, 0, -3, 10, markers);
  </script>
</div>
1:1 Resolution
