import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import { ROUTES } from "./constant";


export const RouterSwitch: React.FC = () => {
  
  return (
    <Routes>
        <Route path={"/"} element={<AppLayout />}>
          {Object.entries(ROUTES).map(([key, { path, Component }]) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Route>
    </Routes>
  );
};
