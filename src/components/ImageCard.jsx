import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-80" src={image.webformatURL} alt="..." />
      <div className="px-7 py-4">
        <div className="font-bold text-gray-700 mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-7 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-300 rounded-full px-3 py-1 mr-2 text-gray-800 text-sm font-semibold"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
