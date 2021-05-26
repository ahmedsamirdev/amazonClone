import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
export default function CheckOutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    //Push item to redux
    dispatch(addToBasket());
  };

  const removeItemFromBasket = () => {
    //Remove item from basket
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className=" grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="font-bold">
          <Currency quantity={price} currency="EGP" />
        </p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img className="w-12 " src="/prime.png" alt="prime" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className=" button">
          Add Again
        </button>
        <button onClick={removeItemFromBasket} className=" button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}
