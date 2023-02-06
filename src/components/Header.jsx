import { useState } from "react";
import Carrito from "./Carrito";
import logo from "/images/logo.svg";
import car from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
const Header = ({ producto, setCantidadFinal }) => {
  const [carrito, setCarrito] = useState(false);
  const {cantidadFinal} = producto;
  return (
    <header className="container relative mx-auto h-[12vh] flex items-center justify-between border-b border-solid border-b-gray-300 px-16">
      {carrito ? (
        <Carrito
          producto={producto}
          setCantidadFinal={setCantidadFinal}
          cantidadFinal={cantidadFinal}
        />
      ) : (
        <></>
      )}
      <nav className="flex items-center gap-14">
        <img src={logo} alt="icon-logo" />
        <ul className="flex gap-8">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>Contact</li>
        </ul>
      </nav>
      <blockquote className="w-[130px] flex items-center justify-between">
        <div
          className="relative h-[38px] w-[28px] flex items-center hover:cursor-pointer"
          onClick={() => (carrito ? setCarrito(false) : setCarrito(true))}
        >
          <img alt="icon" src={car} />
          {cantidadFinal > 0 && (
            <div className="absolute w-[20px] h-[12px] text-[9px] top-0 right-0 rounded-lg bg-orange-500 text-center font-bold text-white flex items-center justify-center">
              {cantidadFinal}
            </div>
          )}
        </div>
        <img alt="icon" src={avatar} width="50px" height="50px" />
      </blockquote>
    </header>
  );
};

export default Header;
