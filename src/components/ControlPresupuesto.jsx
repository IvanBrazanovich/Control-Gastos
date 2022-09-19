import React, { useState, useEffect } from "react";
import { formatCurrency } from "../helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [percentage, setPercentage] = useState(0);

  //Cada vez que cambie voy a recalcular los presupuestos
  useEffect(() => {
    //Calcular gastos
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    setGastado(totalGastado);
    setDisponible(totalDisponible);

    //Calcular el porcentaje de gastado
    const per = (totalGastado * 100) / presupuesto;

    setTimeout(() => {
      setPercentage(per.toFixed(2));
    }, 500);
  }, [gastos]);

  const presupuestoFormat = formatCurrency(presupuesto);
  const gastadoFormat = formatCurrency(gastado);
  const disponibleFormat = formatCurrency(disponible);

  return (
    <>
      <div className="new-budget  bg-white container mx-auto w-3/5 rounded-lg shadow-lg p-14 grid grid-cols-2 gap-6">
        <div className="percentages w-[15rem]">
          <CircularProgressbar
            styles={buildStyles({
              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.8,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#3b82f6`,
              textColor: "#3b82f6",
              trailColor: "#d6d6d6",
            })}
            value={percentage}
            text={`${percentage}%`}
          />
        </div>
        <div className="control-presupuesto">
          <button className="bg-red-500 uppercase text-white w-full py-2 rounded-md font-black">
            Resetear app
          </button>

          <p className="my-5 text-2xl">
            <span className="text-blue-500 font-black">Presupuesto</span>: {""}
            {presupuestoFormat}
          </p>
          <p className="my-5 text-2xl">
            <span className="text-blue-500 font-black">Disponible</span>: {""}
            {disponibleFormat}
          </p>
          <p className="my-5 text-2xl">
            <span className="text-blue-500 font-black">Gastado</span>:{""}{" "}
            {gastadoFormat}
          </p>
        </div>
      </div>
    </>
  );
};

export default ControlPresupuesto;
