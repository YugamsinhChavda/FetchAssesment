import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Load favorites from LocalStorage (if available)
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Load matched dogs from LocalStorage (if available)
  const [matches, setMatches] = useState(() => {
    const storedMatches = localStorage.getItem("matches");
    return storedMatches ? JSON.parse(storedMatches) : [];
  });

  // Save Favorites & Matches to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("matches", JSON.stringify(matches));
  }, [matches]);

  // Function to add a dog to favorites (only if not already there)
  const addToFavorites = (dog) => {
    setFavorites((prev) => {
      if (!prev.find((fav) => fav.id === dog.id)) {
        return [...prev, dog];
      }
      return prev;
    });
  };

  // Function to remove a dog from favorites
  const removeFromFavorites = (dogId) => {
    setFavorites((prev) => prev.filter((dog) => dog.id !== dogId));
  };

  // Function to move a matched dog from favorites to matches
  const addToMatches = (dogId) => {
    const matchedDog = favorites.find((dog) => dog.id === dogId);
    if (matchedDog) {
      setMatches((prev) => [...prev, matchedDog]);
      removeFromFavorites(dogId); // Remove from favorites once matched
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        matches,
        addToMatches,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;