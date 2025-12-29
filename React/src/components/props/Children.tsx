import React from "react";

interface PropType {
  children: React.ReactNode;
}

export const Children = ({ children }: PropType) => {
  return <div>{children}</div>;
};
