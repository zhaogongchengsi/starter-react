import React from "react";

export interface PageMetaProps {
  children: React.ReactNode;
  name?: string
}

const PageMeta: React.FC<PageMetaProps> = ({ children, name }) => {
  return <>{children}</>;
};

export default PageMeta;
