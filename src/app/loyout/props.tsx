import React from "react";

export type ThemeProps = {
  children?: React.ReactNode;
};

export type LayoutProps = {
  children?: React.ReactNode
  aside: React.ReactNode
  header: React.ReactNode
  footer?: React.ReactNode
};

export type SliderProps = {
  children?: React.ReactNode;
};
