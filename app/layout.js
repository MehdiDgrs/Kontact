import NavLink from "./nav-link.js";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../fonts/DIN2014-Regular.woff" });
import "./styles.css";

import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${myFont.className} m-0 p_0 box-border text-[#585b63]`}>
        <div className="uppercase text-xl ">
          <nav className="w-full bg-white px-10 flex py-10  justify-between border-b-2 border-gray-200 ">
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
          {children}
        </div>
      </body>
    </html>
  );
}
