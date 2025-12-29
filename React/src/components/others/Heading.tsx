import { useNavigate } from "react-router-dom";

export const Heading = (props: { title: string, btn?: boolean }) => {
  const navigate = useNavigate();
  const {btn = true } = props;

  return (
    <div className="mb-5 bg-gray-500 p-6 flex justify-between items-center">
      <h1 className="text-white text-2xl">{props.title}</h1>
      {btn &&<button className="text-base text-gray-100" onClick={() => navigate(-1)}>Back</button>}
    </div>
  );
}
