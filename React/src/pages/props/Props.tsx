import { Divider, Heading } from "../../components";
import {
  Array,
  Boolean,
  Children,
  Enum,
  Function,
  FunctionWithArgs,
  Generic,
  Number,
  Object,
  OptionalDefault,
  OptionalString,
  ReactNode,
  SelectiveUnion,
  String,
  Union,
} from "../../components/props";
import { Status } from "../../constants/status";

export const Props = () => {
  const User = {
    name: "Alice",
    age: 30,
    message: <p> Welcome to the Props example! </p>,
    orderList: ["Item 1", "Item 2", "Item 3", 5],
    isLoggedIn: true,
  };

  // This function matches the required signature:
  // (value: string) => void
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
    alert(`You selected: ${value}`);
  };

  return (
    <div className="flex flex-col gap-5">
      <Heading title="Props Example" />

      {/* Example 1 / 2 usage */}

      {/* <PropsExample1
        name="Alice"
        age={30}
        message="Welcome to the Props example!"
        orderList={["Item 1", "Item 2", "Item 3", 6]}
        isLoggedIn={true}
      /> */}

      {/* Example 3 usage */}

      {/* <PropsExample1 User={User} /> */}

      <String title="This is a string prop example." />

      <Divider/>

      <Number count={10} />

      <Divider/>

      <Boolean isActive={true} />

      <Divider/>

      <Array items={["Apple", "Banana", "Orange"]} />

      <Divider/>

      <Object user={{ name: "User name", age: 54 }} />

      <Divider/>

      <ReactNode
        content={
          <span>
            Hello <strong>ReactNode</strong> 🚀
          </span>
        }
      />

      <Divider/>

      <Children>
        <button>Click Me</button>
      </Children>

      <Divider/>

      <OptionalString />
      <OptionalString title="Optional title" />

      <Divider/>

      <OptionalDefault />

      <Divider/>

      <Function label="Click me" onClick={() => alert("Button clicked")} />

        <Divider/>

      <FunctionWithArgs onSelect={handleSelect} />

      <Divider/>

      <Union id={123} />
      <Union id="ABC123" />

      <Divider/>

      <SelectiveUnion variant="primary" />

      <Divider/>

      <Enum status={Status.Active} />

      <Divider/>

      <Generic items={["Apple", "Banana"]} renderItem={(item) => item} />

      <Generic
        items={[
          { id: 1, name: "Laptop" },
          { id: 2, name: "Phone" },
        ]}
        renderItem={(item) => item.name}
      />

    </div>
  );
};
