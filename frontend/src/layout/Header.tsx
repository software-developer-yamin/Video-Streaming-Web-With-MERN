import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaHeart, FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { useRouter } from "next/router";

type Props = {};

const Header = (props: Props) => {
  const { pathname } = useRouter();
  console.log("pathname", pathname);
  return (
    <header className="bg-main shadow-md sticky top-0 z-20 text-white">
      <nav className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        <section className="col-span-1 lg:inline-flex hidden">
          <Link href={"/"} passHref legacyBehavior>
            <a className="relative h-12 w-full block">
              <Image
                src="/images/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          </Link>
        </section>
        <section className="col-span-3">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
            <button
              type="submit"
              className="bg-subMain w-12 flex-colo h-12 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type={"search"}
              placeholder="Search Movie Name from here"
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </section>
        <section className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-subMain"
                : "hover:text-subMain transitions text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/about"
                ? "text-subMain"
                : "hover:text-subMain transitions text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/about"
                ? "text-subMain"
                : "hover:text-subMain transitions text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/about"
                ? "text-subMain"
                : "hover:text-subMain transitions text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/about"
                ? "text-subMain"
                : "hover:text-subMain transitions text-white"
            }`}
          >
            <CgUser className="w-8 h-8" />
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/about"
                ? "text-subMain"
                : "hover:text-subMain transitions text-white relative"
            }`}
          >
            <FaHeart className="w-6 h-6" />
            <span className="w-5 h-5 flex-colo rounded-full text-sm bg-subMain text-white absolute -top-5 -right-1.5">
              5
            </span>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
