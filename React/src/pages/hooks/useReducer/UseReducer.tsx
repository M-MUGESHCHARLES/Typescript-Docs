
import { Divider, Heading } from "../../../components";
import { UseReducerEx1, UseReducerEx2 } from "../../../components/useReducer";

export default function UseReducer() {
  return (
    <>
      <Heading title="UseReducer Example" />

        {/* Example 1 */}
      <UseReducerEx1 />

        <Divider />

        {/* Example 2 */}
        <UseReducerEx2 />
    </>
  );
}
