import React from "react";
import { Result } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const Main: React.FC = () => {
  return (
    <Result
      icon={<EllipsisOutlined />}
      title="welcome ;)"
    />
  );
};

export default Main;
