<head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
  <link rel="stylesheet" href="../style.css">
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <script src="../script.js"></script>
</head>
<div id="map" style="height:600px">
  <script>
    markers = [
      new Marker("Akhlo'Rohma", "tower", 1898, -1280),
      new Marker("Anyr'Nogur", "tower", -3351, 2234),
      new Marker("Av'Sal", "tower", -256, 1646),
      new Marker("The Black Jungle", "tower", 4428, 3274),
      new Marker("Capital Valley", "tower", 557, 1177),
      new Marker("The Carmine", "tower", -2562, 4839),
      new Marker("Casai", "tower", -2777, -1323),
      new Marker("The Island of Dawn", "tower", -1007, -4037),
      new Marker("The Island of Dusk", "tower", -2099, -3814),
      new Marker("Mt. Ebonfire", "tower", -2847, 211),
      new Marker("The Ebony Veldt", "tower", -2158, 1124),
      new Marker("Faehrcycle", "tower", 2595, -3331),
      new Marker("The Frozen Bite", "tower", 5461, -3027),
      new Marker("Grand Pike Canyon", "tower", 3855, -675),
      new Marker("Gulf of Drehmal", "tower", 460, -392),
      new Marker("North Heartwood", "tower", 1706, 2371),
      new Marker("Hellcrags", "tower", -4269, 6025),
      new Marker("Highfall Tundra", "tower", 5423, -1390),
      new Marker("Lorahn'Kahl", "tower", -1022, 4875),
      new Marker("South Heartwood", "tower", 1884, 3732),
      new Marker("Merijool", "tower", -1302, -944),
      new Marker("Nimahj Swamp", "tower", -2245, 2008),
      new Marker("North Tharxax", "tower", -1357, 1773),
      new Marker("Palisades Hearth", "tower", -156, 2548),
      new Marker("Purity Peaks", "tower", 2040, 607),
      new Marker("Sahd", "tower", 5014, 5627),
      new Marker("South Tharxax", "tower", -2454, 3659),
      new Marker("Spearhead Forest", "tower", 4125, 1195),
      new Marker("Veruhkt Plateau", "tower", 3953, -1884),
      new Marker("Mt. Yavhlix", "tower", 26907, -72)
    ];
    createMap("drehmal", "../maps/drehmal_1to2.png", 13824, 14734, -6144, 8191, 512, 512, 512, 1422, -5, 10, markers);
  </script>
</div>
1:2 Resolution
