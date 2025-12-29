interface PropType {
  // id can be number OR string
  id: number | string;
}

export const Union = ({ id }: PropType) => {
  return <p>ID: {id}</p>;
};
