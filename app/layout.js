import NavLink from "./nav-link.js";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../fonts/DIN2014-Regular.woff" });

import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${myFont.className} text-[#585b63]`}>
        <div className="uppercase text-xl border-b-2 border-gray-200">
          <nav className="w-full bg-white px-10 flex py-10  justify-between  ">
            <h1 className=" text-red-600 uppercase bold text-xl justify-start   ">
              Kontact
            </h1>
            <div className=" mx-12 flex justify-around">
              <NavLink href="/">Evenements</NavLink>
              <NavLink href="/">resultats</NavLink>

              <NavLink href="/">breaking</NavLink>
            </div>
            <NavLink href="/">Contact</NavLink>
          </nav>
        </div>

        <div className="w-3/5 mx-aut my-5">{children}</div>
      </body>
    </html>
  );
}
