import React from "react";
import iconoCasa from "../img/icono_casa.svg";
import iconoComida from "../img/icono_comida.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoSuscripciones from "../img/icono_suscripciones.svg";
import iconoAhorro from "../img/icono_ahorro.svg";
import { formatCurrency } from "../helpers";

const Gasto = ({ gasto, handleDelete, handleEdit }) => {
  const { cantidad, nombre, categoria, fecha: newFecha, id } = gasto;
  let fecha;
  if (typeof newFecha !== "object") {
    fecha = new Date(Date.parse(newFecha));
  } else {
    fecha = newFecha;
  }

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
          <p className=" font-bold text-gray-400 uppercase">{categoria}</p>
          <p className="text-2xl font-black text-gray-600 my-2">
            {formatCurrency(cantidad)}
          </p>
          <p className=" my-2 name text-2xl text-gray-500 font-black">
            {nombre}
          </p>
          <p className="text-lg text-gray-500">
            <span className="font-black">Agregado el:</span>{" "}
            {fecha.toLocaleDateString("es-MX", options)}
          </p>
        </div>
      </div>

      <div className="wrapper flex flex-col gap-6 ">
        <svg
          onClick={() => handleDelete(id)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-red-500 cursor-pointer "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>

        <svg
          onClick={() => handleEdit(gasto)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-indigo-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>
    </div>
  );
};

export default Gasto;
