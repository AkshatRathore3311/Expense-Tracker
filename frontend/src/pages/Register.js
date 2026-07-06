import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Validation
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(
  "http://localhost:5000/api/auth/register",
  {
    name,
    email,
    password,
  }
);

      alert("Registration Successful");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");

      // Redirect to Login page
      navigate("/login");
    } catch (error) {
      console.log(error.response);
      console.log(error.response?.data);

      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-5">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleRegister}
          className="bg-black text-white w-full p-2 rounded hover:bg-gray-800"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;