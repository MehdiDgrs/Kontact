import NavLink from "./components/nav-link";
import "tailwindcss/tailwind.css";
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Kontact </title>
      </head>
      <body className=" bg-slate-700  text-white font-serif ">
        <header>
          <nav className="py-4 border-b-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/combattants">Combattants</NavLink>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
