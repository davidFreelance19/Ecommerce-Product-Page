import { useState } from "react";
import Header from "./components/Header";
import InfoProduct from "./components/InfoProduct";
import imgProduct1 from "/images/image-product-1-thumbnail.jpg";
import imgProduct2 from "/images/image-product-2-thumbnail.jpg";
import imgProduct3 from "/images/image-product-3-thumbnail.jpg";
import imgProduct4 from "/images/image-product-4-thumbnail.jpg";
function App() {
  const [imgActive, setImgActive] = useState(
    "/images/image-product-1-thumbnail.jpg"
  );
  const [cantidad, setCantidad] = useState(0);
  const [cantidadFinal, setCantidadFinal] = useState(0);
  const imgSm = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
  const producto = {
    empresa: "sneaker company",
    nombreProducto: "Fall limited edition sneakers",
    infoProducto:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everythind the weather can offer.",
    precio: "125",
    cantidadFinal: cantidadFinal,
    imgProduct: imgProduct1,
  };
  return (
    <>
      <Header producto={producto} setCantidadFinal={setCantidadFinal} />
      <main className="container h-[88vh] grid items-center grid-cols-2 mx-auto">
        <section className="w-[445px] h-[570px] mx-auto grid gap-8">
          <div>
            <img
              src={imgActive.slice(0, 23) + ".jpg"}
              alt="img-hero"
              className="rounded-2xl"
            />
          </div>
          <div className="w-full h-[100px] grid grid-cols-4 gap-8">
            {imgSm.map((imagen) => (
              <img
                src={imagen}
                className={`${
                  imgActive === imagen ? "border-orange-400 border-2" : ""
                } rounded-2xl hover:cursor-pointer`}
                alt="img-sm"
                key={imagen}
                onClick={() => setImgActive(imagen)}
              />
            ))}
          </div>
        </section>
        <InfoProduct
          producto={producto}
          cantidad={cantidad}
          setCantidad={setCantidad}
          setCantidadFinal={setCantidadFinal}
          cantidadFinal={cantidadFinal}
        />
      </main>
    </>
  );
}

export default App;
