/**
    Accepts JSX
    Accepts text
    Accepts icons, elements, fragments
 */

import React from "react";

interface PropType {
  content: React.ReactNode;
}

export const ReactNode = ({ content }: PropType) => {
  return <div>{content}</div>;
};
