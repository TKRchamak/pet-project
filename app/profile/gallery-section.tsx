import React from "react";
import Image from "next/image";
import data from "@/lib/data.json";
import { Separator } from "@/components/ui/separator";
import { pacifico } from "@/components/ui/fonts";

const Gallery = () => {
  return (
    <main className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Separator decorative className="w-1/3 border-2" />
        <p className={`text-lg ${pacifico.className}`}>Gallery</p>
        <Separator decorative className="w-1/3 border-2" />
      </div>

      <div className="grid grid-cols-4 gap-2 justify-items-center h-[600px] overflow-y-auto">
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
    </main>
  );
};

export default Gallery;
