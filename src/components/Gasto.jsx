import React from "react";
import iconoCasa from "../img/icono_casa.svg";
import iconoComida from "../img/icono_comida.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoSuscripciones from "../img/icono_suscripciones.svg";
import iconoAhorro from "../img/icono_ahorro.svg";
import { formatCurrency } from "../helpers";

const Gasto = ({ gasto }) => {
  const { cantidad, nombre, categoria, fecha } = gasto;

  //Transform date data
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const diccionarioIcon = {
    casa: iconoCasa,
    comida: iconoComida,
    gastos: iconoGastos,
    ocio: iconoOcio,
    salud: iconoSalud,
    suscripciones: iconoSuscripciones,
    ahorro: iconoAhorro,
  };

  return (
    <div className="gasto rounded-xl bg-white p-10 flex shadow-lg my-5 items-center justify-between">
      <div className="wrapper mx-5 flex">
        <img src={diccionarioIcon[categoria]} alt="" className="h-28 w-28" />
        <div className="px-5">
          <p className=" font-bold text-gray-400 uppercase ">{categoria}</p>
          <p className=" my-2 name text-2xl text-gray-500 font-black">
            {nombre}
          </p>
          <p className="text-lg text-gray-500">
            <span className="font-black">Agregado el:</span>{" "}
            {fecha.toLocaleDateString("es-MX", options)}
          </p>
        </div>
      </div>
      <p className="text-2xl font-black">{formatCurrency(cantidad)}</p>
    </div>
  );
};

export default Gasto;
