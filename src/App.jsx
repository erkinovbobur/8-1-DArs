import Home from "./Home";
import Register from "./Register";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <nav className="mb-6 flex justify-center space-x-6 flex-wrap">
        <Link
          to="/"
          className={`
            px-4 py-2 rounded text-white font-semibold transition duration-300
            ${location.pathname === "/" ? "bg-red-500" : "bg-blue-500"}
            hover:bg-red-600 active:bg-red-700
          `}
        >
          Users
        </Link>
        <Link
          to="/register"
          className={`
            px-4 py-2 rounded text-white font-semibold transition duration-300
            ${location.pathname === "/register" ? "bg-red-500" : "bg-green-500"}
            hover:bg-red-600 active:bg-red-700
          `}
        >
          Sign In
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
