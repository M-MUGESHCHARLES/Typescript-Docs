// T means "generic type" (decided when component is used)
interface PropType<T> {
  items: T[];
  title: React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
}

export const Generic = <T,>({ items, title, renderItem }: PropType<T>) => {
  return (
    <>
      <h3 className="text-xl font-bold">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{title}{index}{renderItem(item)}</li>
        ))}
      </ul>
    </>
  );
};
