import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../router";
import styles from "../styles/AppSider.module.css";


const items = Object.values(ROUTES)
  .filter(({ name }) => name)
  .map((item, index) => {
    return {
      key: index,
      label: <Link to={item.path}>{item.name}</Link>,
    };
  });


const AppSider: React.FC= () => {

  return (
    <Layout.Sider className={styles.container}>
      <div className={styles.logo} />
      <Menu
        mode="inline"
        style={{ width: 256 }}
        items={items}
        theme="dark"
      />
    </Layout.Sider>
  );
};

export default AppSider;
