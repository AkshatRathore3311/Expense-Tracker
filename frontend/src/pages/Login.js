import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Save JWT Token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      // Navigate to Dashboard
      navigate("/dashboard");

    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message || "Invalid Credentials"
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-red-300 p-10 rounded shadow-md w-96">

        <h1 className="text-3xl font-bold mb-5">
          Login
        </h1> 

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full p-2 rounded"
        >
          Login
        </button>
         <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-700 font-semibold hover:underline"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;