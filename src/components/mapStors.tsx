import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { Coordinate } from "ol/coordinate";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import markerIcon from "../pngegg.png"; // כתובת התמונה שלך

function MapStors(): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(7.5);
  const [map, setMap] = useState<Map | null>(null);
  const [mouseCoordinatesClick, setMouseCoordinatesClick] = useState<Coordinate | null>(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current!,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [3921798.591393487, 3733816.7176443543],
        zoom: currentZoom,
      }),
    });

    mapInstance.on("click", (event) => {
      const view = mapInstance.getView();
      const coordinate = event.coordinate as Coordinate;
      view.setCenter(coordinate);
      setCurrentZoom((prevZoom) => prevZoom + 0.5);
      setMouseCoordinatesClick(coordinate);

      const marker = new Feature({
        geometry: new Point(coordinate),
      });

      const markerStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: markerIcon,
        }),
      });

      marker.setStyle(markerStyle);

      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker],
        }),
      });

      mapInstance.addLayer(markerLayer);
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
        <div id="map" ref={mapRef} style={{ width: "100%", height: "87vh" }}></div>
      </div>
    </div>
  );
}

export default MapStors;
