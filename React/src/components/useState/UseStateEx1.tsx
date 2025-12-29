import React, { useState } from "react";

/**
 *  Simple useState
 */

export default function UseStateEx1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
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

      {isLoggedIn ? <p>You are logged in.</p> : <p>You are logged out.</p>}
    </div>
  );
}
