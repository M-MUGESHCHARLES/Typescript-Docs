interface PropType {
  // Only these exact string values are allowed
  variant: "primary" | "secondary" | "danger";
}

export const Variant = ({ variant }: PropType) => {
  return <p>Variant: {variant}</p>;
};
