interface PropType {
  items: string[];
}

export const Array = ({ items }: PropType) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
