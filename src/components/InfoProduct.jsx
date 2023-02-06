import car from "/images/icon-carWhite.svg";
import menos from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";
const InfoProduct = ({
  producto,
  cantidad,
  setCantidad,
  setCantidadFinal,
  cantidadFinal,
}) => {
  const { empresa, nombreProducto, infoProducto, precio } = producto;
  return (
    <div className="grid gap-7 w-[70%] mt-[-5rem]">
      <h2
        className="uppercase font-bold text-sm"
        style={{ color: "hsl(26, 100%, 55%)" }}
      >
        {empresa}
      </h2>
      <h1 className="capitalize font-bold text-4xl">{nombreProducto}</h1>
      <p>{infoProducto}</p>
      <blockquote className="grid grid-cols-2 w-[40%] items-center gap-x-4 gap gap-y-2">
        <p className="font-bold text-2xl">${precio}.00</p>
        <p
          className="py-1 w-[60%] text-center rounded-lg font-bold"
          style={{
            color: "hsl(26, 100%, 55%)",
            backgroundColor: "hsl(25, 100%, 94%)",
          }}
        >
          50%
        </p>
        <p
          style={{
            textDecoration: "line-through",
            color: "hsl(220, 14%, 75%)",
          }}
          className="text-sm font-bold"
        >
          $250.00
        </p>
      </blockquote>
      <blockquote className="flex gap-6">
        <div
          className="w-[35%] py-3 rounded-lg flex items-center px-4"
          style={{ backgroundColor: "hsl(223, 64%, 98%)" }}
        >
          <img
            src={menos}
            className="w-[15%] hover:cursor-pointer"
            alt="icon-menos"
            onClick={() =>
              cantidad <= 0 ? setCantidad(0) : setCantidad(--cantidad)
            }
          />
          <p className="w-[70%] flex justify-center font-bold text-lg">
            {cantidad}
          </p>
          <img
            src={plus}
            className="w-[15%] hover:cursor-pointer"
            alt="icon-plus"
            onClick={() => setCantidad(++cantidad)}
          />
        </div>
        <button
          className="flex items-center gap-4 justify-center shadow-lg w-[55%] py-3 font-bold text-white rounded-lg"
          style={{ backgroundColor: "hsl(26, 100%, 55%)" }}
          onClick={() =>
            setCantidadFinal(cantidad + cantidadFinal) & setCantidad(0)
          }
        >
          <img src={car} alt="icon-car" />
          Add to cart
        </button>
      </blockquote>
    </div>
  );
};

export default InfoProduct;
