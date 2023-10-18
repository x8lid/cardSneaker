import { useState } from "react";
import img from "./assets/card.jpg";
function Card() {
  const [info, setInfo] = useState(false);
  const [open, setOpen] = useState(false);

  const infoOpen = () => {
    setInfo(true);
  };

  const infoClose = () => {
    setInfo(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="Cart">
      <div className="mainBlock">
        <img src={img} alt="" />
      </div>
      <div className="secBlock">
        <div className="upLine">
          <div className="namePrice">
            <div className="nameSnek">Nike Sneaker</div>
            <div className="price">$ 120</div>
          </div>
          <div className="btnDiv">
            <button className="btnDetal" onClick={infoOpen}>
              Детали
            </button>
            {info && (
              <div className="divInfo">
                <div className="divBtnInfo">
                  <button className="btnInfo" onClick={infoClose}>
                    X
                  </button>
                </div>
                <div className="textInfo">
                  <p className="info_p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr></hr>
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button onClick={handleOpen} className="btnBasket" disabled={open}>
          {open === true ? "Уже в корзине" : "Добавить в корзину"}
        </button>
        {open && (
          <button className="deletBtn" onClick={handleClose}>
            Удалить из корзины
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
