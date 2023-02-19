/*
 * @Author: shixiankang shixiankang@vv.cn
 * @Date: 2023-02-14 20:17:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-18 23:20:07
 * @FilePath: /leaflat-app/src/components/map/index.tsx
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
import { Trackplayback } from "@/components/trackplayback";
import type { TWeather, LocationType } from "@/types";
import { icons } from "@/constants";

const timeDimensionOptions = {
  // requestTimeFromCapabilities: true,
  // updateTimeDimension: true,
};

type Props = {
  setLocationData: React.Dispatch<React.SetStateAction<TWeather | undefined>>;
  coordinates: LocationType;
  setCoordinates: React.Dispatch<React.SetStateAction<LocationType>>;
};

export const AppMap: React.FC<Props> = ({
  setLocationData,
  coordinates,
  setCoordinates,
}) => {
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
      zoom={1.5}
      maxZoom={12}
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
      <HandleClickMap />
      <ZoomControl position="topright" />
      <BaseLayerControl />
      <Trackplayback dataSource={[]} />
    </MapContainer>
  );
};
