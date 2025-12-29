import React, { useState } from 'react'

/**
 * UseState future value
 */

type UserType = {
    name: string;
    email: string;
}

export default function UseStateEx2() {
  const [user, setUser] = useState<UserType | null>(null);
  
    const handleLogin = () => {
      setUser({ name: "John", email: "john@example.com" });
    };
    const handleLogout = () => {
      setUser(null);
    };
  
    return (
      <div>
        <div className="flex flex-row gap-5">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-1 px-3 rounded"
          >
            login
          </button>

          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white py-1 px-3 rounded"
          >
            logout
          </button>
        </div>

        <br />

        <p> User Name : {user?.name}</p>
        <p> User Email : {user?.email}</p>
      </div>
    );
}
