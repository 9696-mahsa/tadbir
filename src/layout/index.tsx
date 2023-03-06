import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import styles from "./styles.module.scss";




const AppLayout: React.FC = () => {

  const content =  <Outlet /> 

  return (
    <Layout className={styles.appLayout}>
      <AppHeader />
      <Layout>
        <AppSider />
        <Layout className={styles.contentWrapper}>
          <AppContent>{content}</AppContent>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
