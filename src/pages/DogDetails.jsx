'use client';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesContext from '../context/FavoritesContext';
import Navbar from './Navigation';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { addToFavorites } = useContext(FavoritesContext);

  // Fetch dog details
  useEffect(() => {
    const fetchDogDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(
          "https://frontend-take-home-service.fetch.com/dogs",
          [id],
          { withCredentials: true }
        );
        if (!response.data || response.data.length === 0) {
          throw new Error("No dog data returned from the API.");
        }
        setDog(response.data[0]);
      } catch (error) {
        console.error("Error fetching dog details:", error);
        setError(error.response?.data?.message || "Failed to load dog details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDogDetails();
  }, [id]);

  // Handle adding to favorites
  const handleAddToFavorites = async () => {
    try {
      // Assuming addToFavorites is synchronous and doesn't throw errors
      addToFavorites(dog);
      setSuccessMessage(`${dog.name} has been added to your favorites! Redirecting to favorites...`);
      setTimeout(() => {
        navigate('/favorites');
      }, 2000); // Redirect after 2 seconds to allow the user to see the message
    } catch (error) {
      console.error("Error adding to favorites:", error);
      setError("Failed to add dog to favorites. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <svg
            className="animate-spin h-12 w-12 text-[#f8a619]"
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
          <p className="ml-4 text-[#2f0c38] text-lg">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-center text-red-600 bg-red-100 p-4 rounded-lg max-w-md">
            {error}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />

      {/* Header Section */}
      <header className="text-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#6b2a74] text-white relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <span>{dog.name}</span>
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
          Get to know your potential pup!
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
        {successMessage && (
          <div className="mb-6 text-center text-green-600 bg-green-100 p-4 rounded-lg max-w-md mx-auto">
            {successMessage}
          </div>
        )}
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
          {/* Image Section */}
          <div className="lg:col-span-1 lg:row-span-2">
            <img
              alt={dog.name}
              src={dog.img}
              className="w-full h-96 object-cover rounded-xl shadow-md border border-gray-200"
              loading="lazy"
            />
            <button
              onClick={handleAddToFavorites}
              className="mt-6 w-full rounded-md border-2 border-[#f8a619] bg-[#2f0c38] px-6 py-3 text-base font-medium text-white hover:bg-[#f8a619] hover:text-[#2f0c38] transition-colors"
            >
              Add to Favorites
            </button>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2 lg:pl-8 mt-8 lg:mt-0">
            <div className="space-y-6">
              <p className="text-lg text-[#2f0c38] font-semibold">
                Breed: {dog.breed}
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-medium text-[#2f0c38]">Details</h3>
              <ul role="list" className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Age: {dog.age}</li>
                <li>Zip Code: {dog.zip_code}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}