import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navigation";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

// Sample dog images for variety
const dogImages = [
  {
    src: "https://hips.hearstapps.com/clv.h-cdn.co/assets/16/18/gettyimages-529202089.jpg?crop=0.6668237511781339xw:1xh;center,top&resize=980:*",
    alt: "German Shepherd",
  },
  {
    src: "https://burst.shopifycdn.com/photos/bernese-mountain-dog-wears-glasses.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    alt: "Bernese Mountain Dog",
  },
  {
    src: "https://thekindpet.com/cdn/shop/articles/The_Best_Safe_Dog_Chews_for_Aggressive_Chewers_1200x1200_crop_center.png?v=1739398372",
    alt: "Chewy",
  },
  {
    src: "https://www.care.com/c/wp-content/uploads/sites/2/2022/07/rottweiler.jpg",
    alt: "Rottweiler", // Corrected typo from "Wottweiler"
  },
  {
    src: "https://assets.orvis.com/is/image/orvisprd/AdobeStock_67705847",
    alt: "Dalmatian",
  },
  {
    src: "https://media.istockphoto.com/id/1137958074/photo/siberian-husky-9-months-old-sitting-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=9WMnw4DUheHgkilJcs03FfBf2c9fRIXRl4UToN8dxE4=",
    alt: "Husky",
  },
];

const Homepage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBrowseDogs = () => navigate("/search");
  const handleViewFavorites = () => navigate("/favorites");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section
          className="relative overflow-hidden bg-white pt-20 sm:pt-24"
          aria-labelledby="hero-heading"
        >
          <div className="pt-10 pb-10 sm:pt-16 sm:pb-16 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Text Section */}
              <div className="max-w-full sm:max-w-lg mx-auto sm:mx-0 text-center sm:text-left lg:max-w-lg">
                <h1
                  id="hero-heading"
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl"
                >
                  Find Your Perfect{" "}
                  <span className="text-[#f8a619]">Furry Friend</span>
                </h1>
                <p className="mt-3 text-base text-gray-700 sm:mt-4 sm:text-xl lg:text-xl">
                  Discover your new best friend with FetchMatch. Easily connect
                  with shelter dogs ready for a forever home and start your
                  adoption journey today!
                </p>
              </div>

              {/* Image Grid and Button Section */}
              <div className="mt-6 sm:mt-8 lg:mt-10">
                {/* Decorative Image Grid */}
                <div
                  aria-hidden="true"
                  className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8 lg:gap-8">
                    {dogImages.slice(0, 6).map((image, index) => (
                      <div
                        key={index}
                        className="h-40 w-full sm:h-72 sm:w-full lg:h-64 lg:w-44 overflow-hidden rounded-lg"
                      >
                        <img
                          alt={image.alt}
                          src={image.src}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-start relative z-10">
                  <button
                    onClick={handleBrowseDogs}
                    className="inline-block rounded-md bg-[#f8a619] px-4 py-1 text-xs font-medium text-white hover:bg-[#e69500] sm:px-6 sm:py-2 sm:text-sm lg:px-8 lg:py-3 lg:text-base transition-colors"
                    aria-label="Browse available dogs"
                  >
                    🔍 Browse Dogs
                  </button>
                  <button
                    onClick={handleViewFavorites}
                    className="inline-block rounded-md border border-indigo-600 bg-white px-4 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-50 sm:px-6 sm:py-2 sm:text-sm lg:px-8 lg:py-3 lg:text-base transition-colors"
                    aria-label="View your favorite dogs"
                  >
                    ❤️ View Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Uncomment if intended */}
        {/* <Stats /> */}
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;