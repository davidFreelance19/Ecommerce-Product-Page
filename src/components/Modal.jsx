import iconClose from "/public/images/icon-close.svg";
import iconLeft from "/public/images/icon-previous.svg";
import iconRight from "/public/images/icon-next.svg";
const Modal = ({ setModal, imgActive, imgSm, setImgActive }) => {
  return (
    <section
      className="absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center"
      style={{ backgroundColor: "#0009" }}
    >
      <blockquote className="h-[80%] w-[550px] modal">
        <div className="h-[8%] flex justify-end items-center">
          <img
            alt="icon-close"
            src={iconClose}
            className="z-20 hover:cursor-pointer"
            width="20px"
            onClick={() => setModal(false)}
          />
        </div>
        <section className="h-[92%]">
          <div className="h-[70%] w-full flex justify-center items-center relative">
            <img
              src={iconLeft}
              className="py-4 px-5 bg-white rounded-full absolute left-[0%] hover:cursor-pointer"
              alt="icon-previous"
              onClick={() =>
                imgSm.indexOf(imgActive) - 1 < 0
                  ? setImgActive(imgSm[3])
                  : setImgActive(imgSm[imgSm.indexOf(imgActive) - 1])
              }
            />
            <img
              src={imgActive.slice(0, 23) + ".jpg"}
              alt="img-hero"
              className="rounded-2xl hover:cursor-pointer h-[100%]"
              onClick={() => setModal(true)}
            />
            <img
              src={iconRight}
              className="py-4 px-5 bg-white rounded-full absolute right-[0%] hover:cursor-pointer"
              alt="icon-next"
              onClick={() =>
                imgSm.indexOf(imgActive) + 1 > 3
                  ? setImgActive(imgSm[0])
                  : setImgActive(imgSm[imgSm.indexOf(imgActive) + 1])
              }
            />
          </div>
          <div className="w-[80%] px-12 h-[30%] grid grid-cols-4 gap-4 mx-auto mt-8">
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
      </blockquote>
    </section>
  );
};

export default Modal;
