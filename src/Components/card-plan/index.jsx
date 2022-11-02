import "./style.css";
import { CardPlanItem } from "../card-plan-item";
import { useState } from "react";

export function CardPlan(props) {
  const [type, setType] = useState(true);
  const [typeBtn, setTypeBtn] = useState(true);
  function handleClick() {
    setType(!type);
  }
  function handleClickBtn() {
    setTypeBtn(!typeBtn);
  }
  return (
    <div className="card-plan">
      <div>
        <h3
          className={`${props.popular ? "card-popular" : ""} && ${
            !props.popular ? "container-card" : ""
          }`}
        >
          {props.name}
        </h3>
        <div className="card-price">
          <p>R$ {props.price}</p>
          <p>/mês</p>
        </div>
        <div className="card-info">
          <p>{props.description}</p>
          {props.benefits.map((item) => (
            <CardPlanItem>{item}</CardPlanItem>
          ))}
        </div>
      </div>
      <div className="card-type">
        <h3>Selecione o tipo:</h3>
        <div className="type-text">
          <button className={`${type ? "" : "on"}`} onClick={handleClick}>
            Grãos
          </button>
          <button className={`${typeBtn ? "" : "on"}`} onClick={handleClickBtn}>
            {" "}
            Moído
          </button>
        </div>
        <button className="btn-sign">assinar</button>
      </div>
    </div>
  );
}
