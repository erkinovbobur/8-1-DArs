import React, { useContext } from "react";
import ProjectStore from "./context/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, dispatch] = useContext(ProjectStore);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Registered Users</h1>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <h2 className="text-lg font-semibold mb-2">Email: {state.email}</h2>
        <p className="text-md mb-2">Age: {state.age}</p>
        <button
          className="
            mt-6 bg-green-500 text-white font-bold py-2 px-4 rounded 
            hover:bg-green-600 hover:scale-105 active:bg-green-700 
            transition-all duration-300 ease-in-out
          "
          onClick={() => dispatch({ type: "LOGOUT" })}
        >
          Logout
        </button>
      </div>
      <Link to="/register" className="mt-4 text-red-500 hover:underline">
        Go back to Register
      </Link>
    </div>
  );
};

export default Home;
