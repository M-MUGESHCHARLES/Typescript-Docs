interface PropType {
  title: string;
}

export const String = ({ title }: PropType) => {
  return <h2>{title}</h2>;
};
