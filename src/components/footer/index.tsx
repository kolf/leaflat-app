/*
 * @Author: shixiankang shixiankang@vv.cn
 * @Date: 2023-02-15 20:27:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-18 20:45:23
 * @FilePath: /leaflat-app/src/components/footer/index.tsx
 * @Description:
 */
import * as React from "react";
import { Drawer, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./index.module.less";
interface Props {
  open: boolean;
  onClose: any;
}

interface DataType {
  key: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    width: 120,
    fixed: "left",
    render(text) {
      return <div className={styles['right']}>{text}</div>;
    },
  },
  {
    title: "周六 18",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "周日 19",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "周一 20",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "周二 21",
    key: "action",
  },
  {
    title: "周三 22",
    key: "tags1",
    dataIndex: "tags1",
  },
  {
    title: "周四 23",
    key: "action1",
  },
  {
    title: "周四 24",
    key: "action2",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "温度",
  },
  {
    key: "2",
    name: "湿度",
  },
  {
    key: "3",
    name: "气压",
  },
  {
    key: "4",
    name: "风向",
  },
];

export const AppFooter: React.FC<Props> = (props) => {
  const { open, onClose } = props;

  return (
    <Drawer
      title="关于地点"
      placement="bottom"
      className={styles["root"]}
      contentWrapperStyle={{ height: 280 }}
      open={open}
      mask={false}
      onClose={onClose}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className={styles['table']}
        bordered
        size="small"
      />
    </Drawer>
  );
};
