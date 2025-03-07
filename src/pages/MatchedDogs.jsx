import { useContext, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Navbar from "./Navigation";
import Footer from "./Footer";

const MatchedDogs = () => {
  const { matches } = useContext(FavoritesContext);
  const [page, setPage] = useState(0);
  const dogsPerPage = 12; // Match Favorites.jsx (12 items per page)
  const totalDogs = matches.length;

  // Pagination logic
  const startIndex = page * dogsPerPage;
  const endIndex = Math.min(startIndex + dogsPerPage, totalDogs);
  const currentDogs = matches.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      {/* Header Section */}
      <header className="text-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#6b2a74] text-white relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <span>Your Matched Dogs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="#f8a619"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Meet the pups you’ve been matched with!
        </p>
        <div
          className="absolute inset-0 opacity-10 bg-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%23f8a619"><path d="M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg>')`,
          }}
          aria-hidden="true"
        ></div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex-grow bg-white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {matches.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-[#2f0c38] font-semibold">
                No dogs matched yet.
              </p>
              <p className="text-gray-600 mt-2">
                Find your match on the Favorites page!
              </p>
            </div>
          ) : (
            currentDogs.map((dog) => (
              <div
                key={dog.id}
                className="group bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="relative">
                  <img
                    alt={dog.name}
                    src={dog.img}
                    className="w-full h-56 object-cover rounded-md bg-gray-200 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-[#f8a619] text-white text-xs font-bold px-2 py-1 rounded-full">
                    Matched
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-[#2f0c38]">
                    <a href={`/details/${dog.id}`} className="hover:underline">
                      {dog.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Breed: {dog.breed}</p>
                  <p className="text-sm text-gray-600">Age: {dog.age}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {totalDogs > 0 && (
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="rounded-md border-2 border-[#f8a619] bg-white px-6 py-2 text-sm font-medium text-[#2f0c38] hover:bg-[#f8a619] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#2f0c38]"
            >
              ◀️ Previous
            </button>
            <button
              onClick={() =>
                setPage((prev) =>
                  (prev + 1) * dogsPerPage < totalDogs ? prev + 1 : prev
                )
              }
              disabled={(page + 1) * dogsPerPage >= totalDogs}
              className="rounded-md bg-[#f8a619] px-6 py-2 text-sm font-medium text-white hover:bg-[#e69500] transition-colors disabled:opacity-50"
            >
              Next ▶️
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MatchedDogs;