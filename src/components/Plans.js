import { useState } from "react";

const planList = [
  {
    name: "Start",
    price: 500,
    benefits: ["5 manutenções mensais", "App SEO", "1 sistema operacional"],
  },
  {
    name: "Ultra",
    price: 1500,
    benefits: [
      "20 manutenções mensais",
      "App SEO",
      "4 sistemas operacionais",
      "24h de atendimento",
    ],
  },
  {
    name: "Mega",
    price: 1000,
    benefits: ["10 manutenções mensais", "App SEO", "2 sistemas operacionais"],
  },
];

export function Plans() {
  return (
    <div className="plans">
      <h3>Planos</h3>
      <div className="plans-list">
        {planList.map((plan) => (
          <PlanInfo info={plan} />
        ))}
      </div>
    </div>
  );
}

function PlanInfo({ info }) {
  const color =
    info.name === "Start"
      ? "#56ccf2"
      : info.name === "Ultra"
      ? "#b04cd9"
      : "#e33b3b";

  const [bgColor, setBgColor] = useState("none");
  const [textColor, setTextColor] = useState(color);

  return (
    <div className="plan-info">
      <h4 style={{ color: `${color}` }}>{info.name}</h4>
      <hr />

      <div
        className="benefits"
        style={{ height: `{${info.name === "Ultra" ? "540px" : "auto"}}` }}
      >
        <h4
          style={{
            color: `${color}`,
          }}
        >
          R${info.price}
        </h4>
        {info.benefits.map((benefit) => (
          <p>{benefit}</p>
        ))}
        <button
          style={{
            color: `${textColor}`,
            border: `1px solid ${color}`,
            background: bgColor,
            transition: "color 1s, background 1s, transform 1s",
          }}
          onMouseEnter={() => {
            setBgColor(color);
            setTextColor("#fff");
          }}
          onMouseOut={() => {
            setBgColor("none");
            setTextColor(color);
          }}
        >
          {" "}
          Assinar plano
        </button>
      </div>
    </div>
  );
}
