// T means "generic type" (decided when component is used)
interface PropType<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const Generic = <T,>({ items, renderItem }: PropType<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
