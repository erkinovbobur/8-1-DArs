import { useContext, useState } from "react";
import ProjectStore from "./context/store";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [state, dispatch] = useContext(ProjectStore);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      dispatch({ type: "REGISTER", payload: { email, password, age } });
      setLoading(false);
      toast.success("Registration successful!");

      setEmail('');
      setPassword('');
      setAge('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-500">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-envelope text-red-500"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-10 pr-4 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200 placeholder-gray-500 transition-shadow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-lock text-red-500"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 pl-10 pr-4 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200 placeholder-gray-500 transition-shadow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-calendar-alt text-red-500"></i>
            </span>
            <input
              type="number"
              placeholder="Age"
              className="w-full py-3 pl-10 pr-4 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200 placeholder-gray-500 transition-shadow"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-center text-white bg-red-600 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
          <p className="text-center text-sm mt-4 text-gray-300">
            Already a member?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
