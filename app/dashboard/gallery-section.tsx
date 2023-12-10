import React from "react";
import Image from "next/image";
import data from "../lib/data.json";

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 gap-2 justify-items-center">
      {data?.images?.map((imageData, index) => (
        <Image
          key={index}
          src={imageData.src}
          width={imageData.width}
          height={imageData.height}
          alt={imageData.alt}
          className="rounded-md"
        />
      ))}
    </div>
  );
};

export default Gallery;
