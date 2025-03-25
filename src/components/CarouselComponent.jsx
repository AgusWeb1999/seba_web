import React from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselComponent() {
  return (
    <div className="w-full h-screen">
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        <img
          src="src/images/contruction1.jpg"
          alt="Image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="src/images/contruction2.jpg"
          alt="Image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="src/images/contruction3.jpg"
          alt="Image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}