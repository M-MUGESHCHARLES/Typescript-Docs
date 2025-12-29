interface PropType {
  count: number;
}

export const Number = ({ count }: PropType) => {
  return <p>Count: {count}</p>;
};
