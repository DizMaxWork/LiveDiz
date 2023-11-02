import React from "react";

export interface MainContent {
  children?: React.ReactNode;
}

export default function MainContent({ children }: MainContent) {
  return <main>{children}</main>;
}
