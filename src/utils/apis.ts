/*
 * @Author: shixiankang shixiankang@vv.cn
 * @Date: 2023-02-14 21:08:26
 * @LastEditors: shixiankang shixiankang@vv.cn
 * @LastEditTime: 2023-02-19 18:03:58
 * @FilePath: \leaflet-app\src\utils\apis.ts
 * @Description:
 */
const TOKEN = `7adb38f6d774414fb1022b540e8e29fe`;

const TDT_TEL_URL =
  "http://t1.tianditu.com/ter_w/wmts?layer=ter&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=" +
  TOKEN;

const MAP_BOX_URL =
  "https://api.mapbox.com/styles/v1/takahashilau/ck2wy3s9c13bb1cpg90q7aorw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFrYWhhc2hpbGF1IiwiYSI6ImNrd3VvbGI4NDFxZG8yeHA0NGRhNXU3c2UifQ.fUxw0BfxbEA_RA69A6cCPQ";

const OPEN_STREET_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export { TDT_TEL_URL, MAP_BOX_URL, OPEN_STREET_URL };
