import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import styles from "./styles.module.scss";


const AppHeader: React.FC = () => {
  return (
    <Layout.Header className={styles.appHeader}>
      <Row
        justify={"space-between"}
        align={"middle"}
        style={{ height: "100%" }}
      >
        <Col className={styles.container}>
          <Typography.Text className={styles.title}>
            {"Header :)"}
          </Typography.Text>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default AppHeader;
