// import * as React from 'react';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import {fromLonLat} from 'ol/proj';
// import Feature from 'ol/Feature';
// import Point from 'ol/geom/Point';
// import VectorSource from 'ol/source/Vector';
// import VectorLayer from 'ol/layer/Vector';
// import Icon from 'ol/style/Icon';
// import Style from 'ol/style/Style';

// const center = fromLonLat([-122.4194, 37.7749]);

// const iconFeature = new Feature({
//   geometry: new Point(center),
// });

// const iconStyle = new Style({
//   image: new Icon({
//     anchor: [0.5, 1],
//     src: '/path/to/icon.png' 
//   })
// });

// iconFeature.setStyle(iconStyle);

// const vectorSource = new VectorSource({
//   features: [iconFeature]
// });

// const vectorLayer = new VectorLayer({
//   source: vectorSource
// });

// const App = () => {

//   const map = new Map({
//     target: null,
//     layers: [
//       new TileLayer({
//         source: new OSM()
//       }),
//       vectorLayer
//     ],
//     view: new View({
//       center: center,
//       zoom: 10
//     })
//   });

//   return <div id="map" style={{height: '100vh'}}></div>
// }

// export default App;