import  { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import { Coordinate } from "ol/coordinate";


const center: Coordinate = fromLonLat([3921798.591393487, 3733816.7176443543]);

const iconFeature = new Feature({
  geometry: new Point(center),
});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1],
    src: "../icon.svg",
  }),
});

iconFeature.setStyle(iconStyle);

const vectorSource = new VectorSource({
  features: [iconFeature],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

function MyMap(): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(7.5);
  const [map, setMap] = useState<Map | null>(null);
  const [mouseCoordinatesClick, setMouseCoordinatesClick] = useState<Coordinate | null>(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current!,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: [3921798.591393487, 3733816.7176443543],
        zoom: currentZoom,
      }),
    });

    // mapInstance.on("click", (event) => {
    //   const view = mapInstance.getView();
    //   const coordinate = event.coordinate as Coordinate;
    //   view.setCenter(coordinate);
    //   setCurrentZoom((prevZoom) => prevZoom + 0.5);
    //   setMouseCoordinatesClick(coordinate);
    // });

    setMap(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.dispose();
      }
    };
  }, [currentZoom]);

  return (
    <div className="MyMap">
      <div className="map-container">
        <div className="mouse-coordinates">
          <div>
            Mouse Coordinates click is:
            {mouseCoordinatesClick ? mouseCoordinatesClick.join(", ") : ""}
          </div>
        </div>
        <div id="map" ref={mapRef} style={{ width: '100%', height: '800px' }}></div>
      </div>
    </div>
  );
}

export default MyMap;
