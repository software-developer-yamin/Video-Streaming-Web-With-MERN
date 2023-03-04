import Link from "next/link";
import React from "react";
import Image from "next/legacy/image";

type Props = {};

const linksData = [
  {
    title: "Company",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
      {
        name: "Movies",
        link: "/movies",
      },
    ],
  },
  {
    title: "Top Categories",
    links: [
      {
        name: "Action",
        link: "#",
      },
      {
        name: "Comedy",
        link: "#",
      },
      {
        name: "Drama",
        link: "/contact",
      },
      {
        name: "Romantic",
        link: "#",
      },
    ],
  },
  {
    title: "My Account",
    links: [
      {
        name: "Dashboard",
        link: "/dashboard",
      },
      {
        name: "My Favorites",
        link: "/favorite",
      },
      {
        name: "Profile",
        link: "/profile",
      },
      {
        name: "Change Password",
        link: "/password",
      },
    ],
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="bg-dry py-4 text-white border-t-2 border-black">
      <section className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 sm:gap-9 gap-5 lg:gap-11 xl:gap-7 py-10 justify-between">
          {linksData.map(({ title, links }, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-20"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {links.map(({ link, name }, index) => (
                  <li key={index} className="flex items-center">
                    <Link
                      href={link}
                      className="text-border inline-block w-full hover:text-subMain"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link href={"/"} passHref legacyBehavior>
              <a className="relative w-2/4 h-12 inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
            <p className="leading-7 text-sm text-border mt-3 break-words">
              <span>
                Araihazar, Narayanganj, <br /> Dhaka, Bangladesh
              </span>
              <br />
              <span>Tell: +8801880279877</span>
              <br />
              <span>Email: web.developer.yamin@gmail.com</span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
