import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DogCard from "./DogCard";
import Navbar from "./Navigation";
import Footer from "./Footer";
import FavoritesContext from "../context/FavoritesContext";

const Search = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breedFilter, setBreedFilter] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [locations, setLocations] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [uniqueCities, setUniqueCities] = useState([]);
  const [cityFilter, setCityFilter] = useState("");
  const [page, setPage] = useState(0);
  const [totalDogs, setTotalDogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { matches } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const dogsPerPage = 12; // Match Favorites.jsx

  useEffect(() => {
    fetchBreeds();
    fetchCities();
    fetchLocations(cityFilter);
  }, [cityFilter]);

  useEffect(() => {
    fetchDogs();
  }, [breedFilter, minAge, maxAge, locationFilter, sortOrder, page]);

  const getUniqueCities = (locationsArray) => {
    const cities = locationsArray.map((location) => location.city);
    return [...new Set(cities)].sort();
  };

  const fetchBreeds = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://frontend-take-home-service.fetch.com/dogs/breeds",
        { withCredentials: true }
      );
      if (!response.data || response.data.length === 0) {
        throw new Error("No breeds returned from the API.");
      }
      setBreeds(response.data);
    } catch (error) {
      console.error("Error fetching breeds:", error);
      setError("Failed to load breeds. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCities = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/locations/search",
        { size: 1000 },
        { withCredentials: true }
      );
      if (!response.data?.results) {
        throw new Error("No cities returned from the API.");
      }
      const uniqueCitiesList = getUniqueCities(response.data.results);
      setUniqueCities(uniqueCitiesList);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setError("Failed to load cities. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchLocations = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const payload = { size: 1000 }; // Set size to 1000 by default
      if (city) {
        payload.city = city; // Add city filter if provided
      }
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/locations/search",
        payload,
        { withCredentials: true }
      );
      if (!response.data?.results) {
        throw new Error("No locations returned from the API.");
      }
      setLocations(response.data.results);
      setLocationFilter(""); // Reset zip code filter when city changes
    } catch (error) {
      console.error("Error fetching locations:", error);
      setError("Failed to load locations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDogs = async () => {
    setLoading(true);
    setError(null);
    try {
      let queryParams = new URLSearchParams();
      if (breedFilter) queryParams.append("breeds", breedFilter);
      if (minAge) queryParams.append("ageMin", minAge);
      if (maxAge) queryParams.append("ageMax", maxAge);
      if (locationFilter) queryParams.append("zipCodes", locationFilter);
      queryParams.append("size", dogsPerPage);
      queryParams.append("from", page * dogsPerPage);
      queryParams.append("sort", `breed:${sortOrder}`);

      const apiUrl = `https://frontend-take-home-service.fetch.com/dogs/search?${queryParams.toString()}`;
      const searchResponse = await axios.get(apiUrl, { withCredentials: true });

      if (searchResponse.status !== 200) {
        throw new Error("Search API returned a non-200 status.");
      }
      if (!searchResponse.data?.resultIds) {
        throw new Error("No dog IDs returned from the search API.");
      }

      setTotalDogs(searchResponse.data.total);
      const dogIds = searchResponse.data.resultIds;

      const detailsResponse = await axios.post(
        "https://frontend-take-home-service.fetch.com/dogs",
        dogIds,
        { withCredentials: true }
      );
      if (!detailsResponse.data || detailsResponse.data.length === 0) {
        throw new Error("No dogs present in the particular location.");
      }

      const matchedIds = matches.map((match) => match.id);
      const filteredDogs = detailsResponse.data.filter(
        (dog) => !matchedIds.includes(dog.id)
      );
      setDogs(filteredDogs);
    } catch (error) {
      console.error("Error fetching dogs:", error);
      setError(error.message || "Failed to load dogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      {/* Header Section */}
      <header className="text-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#6b2a74] text-white relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <span>Find Your Perfect Dog</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="#f8a619"
          >
            <path d="M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          </svg>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Search for your new best friend!
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
        {loading ? (
          <div className="text-center py-12">
            <svg
              className="animate-spin h-12 w-12 text-[#f8a619] mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
              ></path>
            </svg>
            <p className="mt-4 text-[#2f0c38] text-lg">Loading...</p>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-6 text-center text-red-600 bg-red-100 p-4 rounded-lg max-w-md mx-auto">
                {error}
              </div>
            )}

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 bg-gray-100 p-4 rounded-xl shadow-md">
              <select
                className="p-2 border rounded-lg w-48 text-gray-700"
                value={breedFilter}
                onChange={(e) => setBreedFilter(e.target.value)}
              >
                <option value="">All Breeds</option>
                {breeds.map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Min Age"
                className="p-2 border rounded-lg w-24 text-gray-700"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
              />

              <input
                type="number"
                placeholder="Max Age"
                className="p-2 border rounded-lg w-24 text-gray-700"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
              />

              <select
                className="p-2 border rounded-lg w-48 text-gray-700"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
              >
                <option value="">All Cities</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <select
                className="p-2 border rounded-lg w-48 text-gray-700"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc.zip_code}>
                    {loc.city}, {loc.state} ({loc.zip_code})
                  </option>
                ))}
              </select>

              <select
                className="p-2 border rounded-lg w-36 text-gray-700"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
              </select>

              <button
                onClick={fetchDogs}
                className="rounded-md border-2 border-[#f8a619] bg-[#2f0c38] px-6 py-2 text-sm font-medium text-white hover:bg-[#f8a619] hover:text-[#2f0c38] transition-colors"
              >
                🔍 Search
              </button>
            </div>

            <DogCard dogs={dogs} />

            {/* Pagination */}
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
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Search;