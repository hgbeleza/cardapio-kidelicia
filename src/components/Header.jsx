import { Menu, Sandwich, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false);

  const toggleNav = () => {
    SetMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems = [
    { href: "#hamburguers", label: "Hamburguers" },
    { href: "#batataFritas", label: "Batatas fritas" },
    { href: "#bebidas", label: "Bebidas" },
    { href: "#sobre", label: "Sobre" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Sandwich className="text-red-400"></Sandwich>
            <span className="text-xl tracking-tighter">Ki-Delicia</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="https://w.app/f7EqWd"
              className="bg-gradient-to-r from-red-600 to-red-900 py-2 px-3 rounded-md"
            >
              Atendimento pelo Whatsapp
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="" onClick={toggleNav}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 border-b border-neutral-700/80 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
                <a
                href="https://w.app/f7EqWd" 
                target="_blank"
                className="bg-gradient-to-r from-red-600 to-red-900 py-2 px-3 rounded-md"
                >
                Atendimento pelo Whatsapp
                </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
