/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-18 21:29:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-18 21:44:22
 * @FilePath: /leaflat-app/src/components/base-layer-control/index.tsx
 * @Description:
 */
import L from "leaflet";
import { useMap } from "react-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import { useEffect } from "react";
import "leaflet-timedimension";
import "leaflet/dist/leaflet.css";
import "leaflet-timedimension/dist/leaflet.timedimension.control.min.css";

export const BaseLayerControl = (props: any) => {
  const context = useLeafletContext();
  const baselayers = {
    OpenStreetMap: L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
      }
    ),
    "Sentinel 2": L.tileLayer(
      "https://s2maps-tiles.eu/wmts?layer=s2cloudless-2021_3857&style=default&tilematrixset=GoogleMapsCompatible&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}"
    ),
    Gebco: L.tileLayer.wms(
      "https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?",
      {
        layers: "GEBCO_LATEST",
        format: "image/png",
      }
    ),
  };

  useEffect(() => {
    // @ts-ignore
    const layercontrols = L.control.layers(baselayers, {});
    layercontrols.addTo(context.map);
    return () => {
      layercontrols && layercontrols.remove();
    };
  }, []);

  return null;
};
