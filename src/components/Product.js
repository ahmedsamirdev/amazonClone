import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useState, useEffect } from "react";

const MAX_RATING = 5;
const MIN_RATING = 2;

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <>
      {mounted && (
        <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
          {/* <p className="absolute text-xs text-gray-400 top-2 right-2">{category}</p> */}
          <Image
            src={image}
            alt="product picture"
            width={200}
            height={200}
            objectFit="contain"
          />
          <h4 className="my-3">{title}</h4>

          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i.toString()}>
                  <StarIcon className="h-5 text-yellow-500" />
                </p>
              ))}
          </div>

          <p className="my-2 text-xs line-clamp-2">{description}</p>
          <div className="mb-5">
            <Currency quantity={price} currency="EGP" />
          </div>
          {hasPrime && (
            <div className="flex items-center -mt-5 space-x-2">
              <img className="w-12 " src="/Prime.png" alt="prime" />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )}
          <button className="mt-auto button">Add to Basket</button>
        </div>
      )}
    </>
  );
}
