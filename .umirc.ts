import { defineConfig } from "umi";

export default defineConfig({
  title: "中国天气",
  routes: [{ path: "/", component: "index" }],
  npmClient: "yarn",
  plugins: ["@umijs/plugins/dist/antd"],
  antd: {},
});
