import React from "react";
import { Alert, Layout } from "antd";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const AppContent: React.FC<Props> = ({ children }) => {
  return (
    <Layout className={styles.appContent}>
      <Layout.Content className={styles.container}>
        <Alert.ErrorBoundary>{children}</Alert.ErrorBoundary>
      </Layout.Content>
    </Layout>
  );
};

export default AppContent;
