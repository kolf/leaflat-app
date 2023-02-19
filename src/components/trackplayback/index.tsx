/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-18 23:06:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-18 23:27:15
 * @FilePath: /leaflat-app/src/components/trackplayback/index.tsx
 * @Description: 
 */
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";
import "leaflet-plugin-trackplayback";
import { useMap } from 'react-leaflet/hooks'
import test from '@/assets/json/test.json'

export const Trackplayback = createControlComponent((props) => {
  const map = useMap();
  return new L.TrackPlayBack(test, map);
});
