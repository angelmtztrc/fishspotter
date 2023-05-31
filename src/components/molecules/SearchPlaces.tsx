import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchPlaces = () => {
  return (
    <div>
      <div className="w-full bg-dark-900 rounded-xl flex items-center px-4 py-3 space-x-2">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-200" />
        <input
          type="text"
          placeholder="Enter a keyword to find nearby places..."
          className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-900"
        />
      </div>
    </div>
  );
};

export default SearchPlaces;
