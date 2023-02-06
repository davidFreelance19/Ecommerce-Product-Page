import iconDelete from "/images/icon-delete.svg";
const Carrito = ({ producto, setCantidadFinal, cantidadFinal }) => {
  const { nombreProducto, precio, imgProduct } = producto;
  return (
    <blockquote className="h-[230px] w-[350px] absolute top-[85%] right-[5%] bg-white shadow-xl rounded-lg">
      <div className="border-b border-solid border-b-gray-300 h-[20%] flex items-center">
        <p className="font-bold px-5">Cart</p>
      </div>
      {cantidadFinal === 0 ? (
        <div className="h-[80%] flex items-center justify-center">
          <p className="font-bold">Your cart is empty</p>
        </div>
      ) : (
        <div className="p-5">
          <div className="h-[40%] flex gap-3 items-center">
            <img
              src={imgProduct}
              width="55px"
              height="55px"
              className="rounded-lg"
            />
            <blockquote>
              <p style={{ color: "hsl(219, 9%, 45%)" }}>{nombreProducto}</p>
              <p>
                ${precio}.00 x {cantidadFinal}{" "}
                <span className="font-bold">
                  ${Number(precio * cantidadFinal)}.00
                </span>
              </p>
            </blockquote>
            <img
              src={iconDelete}
              className="w-[15px] h-[20px] ml-2 hover:cursor-pointer"
              alt="icon-delete"
              onClick={() => setCantidadFinal(0)}
            />
          </div>
          <button
            type="button"
            className="mt-6 h-[50%] w-full bg-orange-500 text-white font-bold py-4 rounded-lg"
          >
            Checkout
          </button>
        </div>
      )}
    </blockquote>
  );
};

export default Carrito;
