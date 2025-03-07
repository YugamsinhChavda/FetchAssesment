import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Search from "./pages/Search";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";
import DogDetails from "./pages/DogDetails";
import Favorites from "./pages/Favorites";
import MatchedDogs from "./pages/MatchedDogs";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<DogDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/matched" element={<MatchedDogs />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
