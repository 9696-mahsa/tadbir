import React from "react";
import Main from "../pages";
import _404 from "../pages/404";
import ProductsPage from "../pages/Products";
import UserPage from "../pages/User";
import VerificationPage from "../pages/Verification";


interface RouteDetail {
  name?: string;
  Component: React.ComponentType;
  path: string;
  isProtected?: boolean;
}

export type RouteNames = "404" | "main" | "PRODUCTS" | "USERS" | "VERIFICATION";

export const ROUTES: Record<RouteNames, RouteDetail> = {

  main: { Component: Main, path: "/" },

  "404": { Component: _404, path: "*" },

  PRODUCTS: {
    name: "products",
    Component: ProductsPage,
    path: "products",
    isProtected: true,
  },

  USERS: {
    name: "users",
    Component: UserPage,
    path: "users",
    isProtected: true,
  },
  
  VERIFICATION: {
    name: "verification",
    Component: VerificationPage,
    path: "verification",
    isProtected: true,
  },
};


