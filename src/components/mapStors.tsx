import { Coordinate } from 'ol/coordinate';
import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
// import MouseCoordinates from "./MouseCoordinates";

function MyMap() {
  const mapRef = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(7.5);
  const [map, setMap] = useState<Map | null>(null);
  const [mouseCoordinatesClick, setMouseCoordinatesClick] = useState<Coordinate | null>(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current || "",
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [3921798.591393487, 3733816.7176443543],
        zoom: currentZoom,
      }),
    });

    mapInstance.on("click", (event) => {
      const view = mapInstance.getView();
      const coordinate = event.coordinate;
      view.setCenter(coordinate);
      setCurrentZoom((prevZoom) => prevZoom + 0.5);
      setMouseCoordinatesClick(coordinate); 
    });

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
        <div id="map" ref={mapRef}></div>
      </div>
    </div>
  );
}

export default MyMap;
