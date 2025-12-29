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
            - Props Example
          </p>
        </Link>

        <Link to="/usestate">
          <p className="no-underline hover:underline text-blue-800">
            - UseState Example
          </p>
        </Link>
      </div>
    </>
  );
};
