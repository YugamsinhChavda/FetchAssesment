import { useNavigate } from "react-router-dom";

const DogCard = ({ dogs }) => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dogs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-[#2f0c38] font-semibold">
              No dogs found.
            </p>
            <p className="text-gray-600 mt-2">
              Try changing your filters to find some adorable pups!
            </p>
          </div>
        ) : (
          dogs.map((dog) => (
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
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#2f0c38]">
                  {dog.name}
                </h3>
                <p className="text-sm text-gray-600">Breed: {dog.breed}</p>
                <p className="text-sm text-gray-600">Age: {dog.age}</p>
                <button
                  onClick={() => navigate(`/details/${dog.id}`)}
                  className="mt-4 rounded-md border-2 border-[#f8a619] bg-[#2f0c38] px-6 py-2 text-sm font-medium text-white hover:bg-[#f8a619] hover:text-[#2f0c38] transition-colors"
                >
                  📖 Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DogCard;