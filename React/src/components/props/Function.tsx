// Function prop type
// onClick is a function that takes no arguments and returns nothing (void)
interface PropType {
  label: string;
  onClick: () => void;
}

export const Function = ({ label, onClick }: PropType) => {
  return <button onClick={onClick}>{label}</button>;
};
