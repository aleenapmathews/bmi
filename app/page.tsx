"use client";
import { useState } from "react";
import style from "./page.module.css";
import GaugeComponent from "react-gauge-component";

export default function Page2() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setbmi] = useState(0);

  function heightHandler(event: any) {
    const a = event.target.value;
    if (!isNaN(a)) {
      setHeight(event.target.value);
    }
  }

  function weightHandler(event: any) {
    const b = event.target.value;
    if (!isNaN(b)) {
      setWeight(event.target.value);
    }
  }

  function clearHandler() {
    setHeight("");
    setWeight("");
    setbmi(0);
  }

  function calculateBMI() {
    const h = parseInt(height);
    const w = parseInt(weight);
    const ans = (w / (h * h)) * 10000;
    setbmi(ans);
  }
  return (
    <div className={style["main"]}>
      <div className={style["home"]}>
        <h1 className={style["heading"]}>BMI CALCULATOR</h1>
        <div className={style["htgap"]}>
          <label className={style["height"]}>Height</label>

          <input
            type="text"
            placeholder="cm"
            value={height}
            onChange={heightHandler}
            className={style["box"]}
          />
        </div>
        <div className={style["wtgap"]}>
          <label className={style["weight"]}>Weight</label>

          <input
            type="text"
            placeholder="kg"
            value={weight}
            onChange={weightHandler}
            className={style["box"]}
          />
        </div>

        <div className={style["btn-grp"]}>
          <button onClick={calculateBMI} className={style["calculate"]}>
            CHECK
          </button>
          <button onClick={clearHandler} className={style["clear"]}>
            CLEAR
          </button>
        </div>
        <h2 className={style["ans"]}>
          {bmi}kg/cm<sup>2</sup>
        </h2>
      </div>
      <div className={style["guage"]}>
        <GaugeComponent 
        
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            // gradient: true,
            subArcs: [
              {
                limit: 16,
                color: "rgb(188, 32, 32)",
                showTick: true,
                tooltip: {
                  text: "Severe Thinness",
                },
                onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                onMouseMove: () =>
                  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
                onMouseLeave: () =>
                  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
              },
              {
                limit: 17,
                color: "rgb(211, 136, 136)",
                showTick: true,
                tooltip: {
                  text: "Moderate Thinness	",
                },
              },
              {
                limit: 18.5,
                color: "rgb(255, 228, 0)",
                showTick: true,
                tooltip: {
                  text: "Mild Thinness",
                },
              },
              {
                limit: 25,
                color: "rgb(0, 129, 55)",
                showTick: true,
                tooltip: {
                  text: "Normal",
                },
              },
              {
                limit:30,
                color: "rgb(255, 228, 0)",
                tooltip: {
                  text: "Overweight",
                },
              },
              {
                limit:35,
                color: "rgb(211, 136, 136)",
                tooltip: {
                  text: "Obese Class I",
                },
              },
              {
                limit:49,
                color: "rgb(188, 32, 32)",
                tooltip: {
                  text: "Obese Class II",
                },
              },
              {
                
                color: "rgb(138, 1, 1)",
                tooltip: {
                  text: "Obese Class III",
                },
              },
            ],
          }}
          pointer={{
            color: "rgb(255, 255, 255)",
            length: 0.8,
            width: 15,
            elastic: true,
          }}
          labels={{
            valueLabel: { formatTextValue: (bmi) => bmi + "  bmi" },
            tickLabels: {
              type: "outer",
             
              ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
            },
          }}
          value={bmi}
          minValue={0}
          maxValue={50}
        />
      </div>
    </div>
  );
}
