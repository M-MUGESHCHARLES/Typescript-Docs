import React from "react";

type ComponentTypeProps = {
  displayString: boolean;
  component: React.ComponentType;
};

export default function ComponentType({
  displayString,
  component,
}: ComponentTypeProps) {
  if (displayString) {
    const Component = component;
    return <Component />;
  } else {
    return <div>ComponentType example rendering else statements</div>;
  }
}
