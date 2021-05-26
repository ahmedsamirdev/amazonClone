import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {selectItems} from "../slices/basketSlice"

export default function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src={`/logo.png`}
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}

        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className=" link">
            <p>{session ? `Hello, ${session.user.name} ` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className=" link">
            <p className="font-extrabold md:text-sm">Returns </p>
            <p>& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center link"
          >
            <span className="absolute top-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full -right-1 md:-right-2">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-8 md:h-10" />
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}
