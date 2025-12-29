interface User {
  name: string;
  age: number;
}

interface PropType {
  user: User;
}

export const Object = ({ user }: PropType) => {
  return (
    <p>
      {user.name} - {user.age} years old
    </p>
  );
};
