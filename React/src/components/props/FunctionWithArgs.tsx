interface PropType {
  // Function that receives a value
  onSelect: (value: string) => void;
}

export const FunctionWithArgs = ({ onSelect }: PropType) => {
  return <button onClick={() => onSelect("React")}>Select React</button>;
};
