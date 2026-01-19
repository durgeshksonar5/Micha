import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      {query ? (
        <p className="text-gray-600">Showing results for: "{query}"</p>
      ) : (
        <p className="text-gray-600">Please enter a search term.</p>
      )}
    </div>
  );
};

export default Search;
