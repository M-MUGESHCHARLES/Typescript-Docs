import type { Status } from "../../constants/status";


interface PropType {
  status: Status;
}

export const Enum = ({ status }: PropType) => {
  return <p>Status: {status}</p>;
};
