import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-gray-800 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 font-semibold leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="bg-green-500 px-2 py-1 rounded text-white font-semibold flex-shrink-0 hover:bg-green-400"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
