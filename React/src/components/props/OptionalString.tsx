interface PropType {
  title?: string;
}

export const OptionalString = ({ title }: PropType) => {
  return <h2>{title && title}</h2>;
};
