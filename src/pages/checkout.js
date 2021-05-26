import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from "next-auth/client";
import { selectTotal } from "../slices/basketSlice";

export default function checkout() {
  const [session] = useSession();
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/prime-banner.png"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl border-b">
              {items.length === 0 ? "Your Basket is empty." : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="EGP" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt- ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
