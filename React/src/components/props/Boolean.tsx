interface PropType {
  isActive: boolean;
}

export const Boolean = ({ isActive }: PropType) => {
  return <p>Status: {isActive ? "Active" : "Inactive"}</p>;
};
