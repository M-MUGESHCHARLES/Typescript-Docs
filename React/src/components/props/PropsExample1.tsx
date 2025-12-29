/** 
  
  ->  we can use interface or type alias to define the props type

  -> What React.ReactNode Can Be ?
      React.ReactNode =
        | string          // "Hello"
        | number          // 123
        | boolean         // true / false
        | JSX.Element     // <div />
        | null
        | undefined
        | ReactNode[]     // array of nodes

  -> isLoggedIn ?: boolean  // means optional prop

**/

// interface PropsType {
//   name: string;
//   age: number | string;
//   message: string | React.ReactNode;
//   orderList: (string | number)[];
// isLoggedIn?: boolean;
// };

type PropsType = {
  name: string;
  age: number | string;
  message: string | React.ReactNode;
  orderList: (string | number)[];
  isLoggedIn?: boolean;
};

type UserType = {
  User: PropsType;
};

// example 1

// export const PropsExample1 = ({ name, age, message, orderList, isLoggedIn }: PropsType) => {
//   return (
//     <>
//       <h1> Hello {name}!</h1>
// {
//   isLoggedIn ? (
//     <p>You are logged in.</p>
//   ) : (
//     <p>Please log in to see your details.</p>
//   )
// }
//       <h2> You are {age} years old.</h2>
//       <p> {message} </p>
//       <h3> Your order list: </h3>
//       <ul>
//         {orderList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// example 2

// export const PropsExample1 = (props: PropsType) => {
//   return (
//     <>
//       <h1> Hello {props.name}!</h1>
//       {props.isLoggedIn ? <p>You are logged in.</p> : <p>Please log in to see your details.</p>}
//       <h2> You are {props.age} years old.</h2>
//       <p> {props.message} </p>
//       <h3> Your order list: </h3>
//       <ul>
//         {props.orderList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// example 3

export const PropsExample1 = ({ User }: UserType) => {
  return (
    <>
      <h1>Hello {User.name}!</h1>
      {User.isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <p>Please log in to see your details.</p>
      )}
      <h2>You are {User.age} years old.</h2>
      <p>{User.message}</p>

      <h3>Your order list:</h3>
      <ul>
        {User.orderList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

/**
What React.ReactNode Can Be ?
React.ReactNode =
  | string          // "Hello"
  | number          // 123
  | boolean         // true / false
  | JSX.Element     // <div />
  | null
  | undefined
  | ReactNode[]     // array of nodes
 */
