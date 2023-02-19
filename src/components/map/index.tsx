/*
 * @Author: shixiankang shixiankang@vv.cn
 * @Date: 2023-02-14 20:17:53
 * @LastEditors: shixiankang shixiankang@vv.cn
 * @LastEditTime: 2023-02-19 18:10:47
 * @FilePath: \leaflet-app\src\components\map\index.tsx
 * @Description
 */
import * as React from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import styles from "./index.module.less";
import L from "leaflet";
import { TDT_TEL_URL } from "@/utils/apis";
import { BaseLayerControl } from "@/components/base-layer-control";
import type { TWeather, LocationType } from "@/types";
import { useConfigureLeaflet } from "@/hooks/use-configure-leaflet";
import { WindLayer } from "leaflet-wind";

const timeDimensionOptions = {
  // requestTimeFromCapabilities: true,
  // updateTimeDimension: true,
};

type Props = {
  setLocationData: React.Dispatch<React.SetStateAction<TWeather | undefined>>;
  coordinates: LocationType;
  setCoordinates: React.Dispatch<React.SetStateAction<LocationType>>;
};

import { useLeafletContext } from "@react-leaflet/core";

function Square(props) {
  const context = useLeafletContext();

  React.useEffect(() => {
    run();

    async function run() {
      const container = context.layerContainer || context.map;
      // const layer = L.tileLayer(
      //   "//{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
      //   {
      //     subdomains: ["a", "b", "c", "d"],
      //   }
      // );
      // container.addLayer(layer);
      fetch(
        "https://sakitam.oss-cn-beijing.aliyuncs.com/codepen/wind-layer/json/wind.json"
      )
        .then((res) => res.json())
        .then((res) => {
          const windLayer = new WindLayer("wind", res, {
            windOptions: {
              velocityScale: 1 / 20,
              paths: 1000,
              // eslint-disable-next-line no-unused-vars
              colorScale: [
                "rgb(36,104, 180)",
                "rgb(60,157, 194)",
                "rgb(128,205,193 )",
                "rgb(151,218,168 )",
                "rgb(198,231,181)",
                "rgb(238,247,217)",
                "rgb(255,238,159)",
                "rgb(252,217,125)",
                "rgb(255,182,100)",
                "rgb(252,150,75)",
                "rgb(250,112,52)",
                "rgb(245,64,32)",
                "rgb(237,45,28)",
                "rgb(220,24,32)",
                "rgb(180,0,35)",
              ],
              lineWidth: 2,
              // colorScale: scale,
              generateParticleOption: false,
            },
            // map: map,
            // projection: 'EPSG:4326'
          });

          container.addLayer(windLayer);
        });
    }
    // container.addLayer(layer);

    // return () => {
    //   container.removeLayer(layer);
    // };
  }, []);

  return null;
}

const center = [51.505, -0.09];

export const AppMap: React.FC<Props> = ({
  setLocationData,
  coordinates,
  setCoordinates,
}) => {
  useConfigureLeaflet();
  const mapRef = React.useRef(null);
  const HandleClickMap: React.FC = () => {
    const map = useMapEvents({
      click: (e: L.LeafletMouseEvent) => {
        map.locate();
        // map.flyTo(e.latlng, map.getZoom() + 1 > 12 ? 12 : map.getZoom() + 1);
        setCoordinates({
          latitude: e.latlng?.lat,
          longitude: e.latlng?.lng,
        });
      },
    });
    return null;
  };

  return (
    <MapContainer
      className={styles["map"]}
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={3}
      maxZoom={12}
      minZoom={2}
      ref={mapRef}
      zoomControl={false}
      // @ts-ignore
      // timeDimensionControl={true}
      // timeDimensionextendedControl={true}
      // timeDimension={true}
      // timeDimensionOptions={timeDimensionOptions}
      // timeDimensionControlOptions={{
      //   speedSlider: false,
      //   backwardButton: true,
      //   forwardButton: true,
      // }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.tianditu.gov.cn/">天地图</a>'
        url={TDT_TEL_URL}
      />
      {/* <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={addressPoints}
        longitudeExtractor={(m) => m[1]}
        latitudeExtractor={(m) => m[0]}
        intensityExtractor={(m) => parseFloat(m[2])}
      /> */}

      {/* <Marker position={center}>
        <Button>Center Warsaw</Button>
      </Marker> */}
      <Square center={center} size={1000} />
      <HandleClickMap />
      <ZoomControl position="topright" />
      <BaseLayerControl />
      <Marker
        icon={L.icon({
          iconUrl: 'http://www.github.com/guiselair.png',
          iconSize: [30, 30],
        })} 
        position={[-29.6864242,-53.8143911]}
        eventHandlers={{
          click: () => console.log("CLICOU")
        }}
      >
        <Popup>Você mora aqui</Popup>
      </Marker>
    </MapContainer>
  );
};
