interface PropType {
  title?: string;
}

export const OptionalDefault = ({ title = "Default title" }: PropType) => {
  return <h2>{title}</h2>;
};
