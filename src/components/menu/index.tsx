/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-18 18:40:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-18 20:16:25
 * @FilePath: /leaflat-app/src/components/menu/index.tsx
 * @Description:
 */
import * as React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./index.module.less";

const items: MenuProps["items"] = [
  {
    label: "风",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "温度",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "湿度",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
];

export const AppMenu: React.FC = () => {
  const [current, setCurrent] = React.useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className={styles["root"]}>
      <ul className={styles["list"]}>
        {items.map((item) => {
          if (!item) {
            return null;
          }
          return (
            <li key={item.key}>
              <span className={styles["icon"]}>{item.icon}</span>
              <span className={styles["name"]}>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
