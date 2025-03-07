import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect if already logged in
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      await login(name, email);
      navigate("/"); // Redirect after successful login
    } catch (err) {
      setError("Login failed. Please check your name or email and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2f0c38] relative overflow-hidden">
      {/* Dog Background Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://burst.shopifycdn.com/photos/bernese-mountain-dog-wears-glasses.jpg?width=1000&format=pjpg&exif=0&iptc=0')`, // Bernese Mountain Dog with glasses
        }}
        aria-hidden="true"
      ></div>

      {/* Login Card with Fade-In Animation */}
      <div className="relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg z-10 border-4 border-[#f8a619] animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#2f0c38] flex items-center justify-center gap-2">
          <span>Welcome to FetchMatch!</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#f8a619"
            className="inline-block"
          >
            <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Log in to find your paw-fect companion!
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4 text-center animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border-2 border-[#f8a619] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8a619] bg-[#fff5e6] text-[#2f0c38] placeholder-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#f8a619]">
              Name
            </span>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border-2 border-[#f8a619] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8a619] bg-[#fff5e6] text-[#2f0c38] placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#f8a619]">
              Email
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f8a619] text-white p-3 rounded-lg font-semibold hover:bg-[#e69500] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M20 4h-3.17l-2.54-2.54c-.39-.39-1.02-.39-1.41 0L10.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 13H9v-2h6v2zm-2-4H9v-2h4v2zm0-4H9V7h4v2z" />
            </svg>
          </button>
        </form>

        {/* Animated Paw Decorations */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#f8a619] rounded-full flex items-center justify-center opacity-80 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          </svg>
        </div>
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#f8a619] rounded-full flex items-center justify-center opacity-80 animate-bounce-delayed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          </svg>
        </div>
      </div>

      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceDelayed {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-bounce {
          animation: bounceDelayed 1.5s infinite;
        }
        .animate-bounce-delayed {
          animation: bounceDelayed 1.5s infinite 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Login;