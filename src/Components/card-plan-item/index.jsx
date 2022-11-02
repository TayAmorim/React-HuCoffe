import "./style.css";
import Check from "../../assets/check.svg";

export function CardPlanItem(props) {
  return (
    <div className="card-plan-item">
      <img src={Check} alt="" />
      <p>{props.children}</p>
    </div>
  );
}
