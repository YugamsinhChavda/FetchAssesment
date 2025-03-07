import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokenExpiration, setTokenExpiration] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track auth check
  const navigate = useNavigate();

  // Function to check authentication status on mount
  const checkAuthStatus = async () => {
    try {
      const storedExpiration = localStorage.getItem("tokenExpiration");
      const currentTime = Date.now();

      if (storedExpiration && currentTime < parseInt(storedExpiration)) {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          setUser(storedUser);
          setTokenExpiration(parseInt(storedExpiration));
        }
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("tokenExpiration");
      }
    } catch (error) {
      console.error("Failed to check auth status:", error);
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpiration");
    } finally {
      setIsLoading(false); // Auth check complete
    }
  };

  // Run on mount to check auth status
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (name, email) => {
    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        { name, email },
        { withCredentials: true }
      );
      
      if (response.status === 200) {
        const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hour
        console.log(expirationTime);
        setTokenExpiration(expirationTime);
        setUser({ name, email });
        localStorage.setItem("user", JSON.stringify({ name, email }));
        localStorage.setItem("tokenExpiration", expirationTime.toString());
        navigate("/"); // Explicit redirect after login
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      setTokenExpiration(null);
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpiration");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    let timer;

    if (tokenExpiration) {
      timer = setInterval(() => {
        if (Date.now() >= tokenExpiration) {
          console.log("Token expired, clearing user state...");
          clearInterval(timer);
          setUser(null);
          setTokenExpiration(null);
          localStorage.removeItem("user");
          localStorage.removeItem("tokenExpiration");
        }
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [tokenExpiration]);

  // Prevent rendering until auth status is confirmed
  if (isLoading) {
    return <div></div>; // Or a proper loading spinner
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;