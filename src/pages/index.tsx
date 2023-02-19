/*
 * @Author: shixiankang shixiankang@vv.cn
 * @Date: 2023-02-14 20:10:10
 * @LastEditors: shixiankang shixiankang@vv.cn
 * @LastEditTime: 2023-02-15 20:37:20
 * @FilePath: \leaflat-app\src\pages\index.tsx
 * @Description:
 */
import * as React from "react";
import { AppMap } from "@/components/map";
import { AppMenu } from "@/components/menu";
import { AppFooter } from "@/components/footer";
import { map, apis } from "@/constants";
import { Button } from "antd";

export default function Home() {
  const [locationData, setLocationData] = React.useState();
  const [open, setOpen] = React.useState(false);

  const setCoordinates = () => {
    setOpen(true);
  };

  return (
    <>
      <AppMap
        coordinates={map.defaultLocation}
        zoom={map.zoom}
        setLocationData={setLocationData}
        setCoordinates={setCoordinates}
      />
      <AppMenu />
      <AppFooter open={open} onClose={() => setOpen(false)} />
    </>
  );
}
