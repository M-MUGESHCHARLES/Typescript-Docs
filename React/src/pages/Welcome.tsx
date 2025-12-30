import { Link } from "react-router-dom";
import { Heading } from "../components";

export const Welcome = () => {
  return (
    <>
      {/* Welcome message */}
      <Heading title="Hello world!" btn={false} />

      {/* Navigation links */}
      <div className="flex flex-col flex-wrap gap-4">
        <Link to="/props">
          <p className="no-underline hover:underline text-blue-800">
            - props Example
          </p>
        </Link>

        <Link to="/hooks/usestate">
          <p className="no-underline hover:underline text-blue-800">
            - useState Example
          </p>
        </Link>

        <Link to="/hooks/usereducer">
          <p className="no-underline hover:underline text-blue-800">
            - useReducer Example
          </p>
        </Link>
      </div>
    </>
  );
};
