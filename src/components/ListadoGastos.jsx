import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="mx-auto container w-3/5  my-14">
      {gastos.length > 0 ? (
        <div className="  ">
          {gastos.map((gasto) => {
            return <Gasto key={gasto.id} gasto={gasto} />;
          })}
        </div>
      ) : (
        <div className="text-4xl font-black text-gray-500">
          <p> No hay gastos aún</p>
        </div>
      )}
    </div>
  );
};

export default ListadoGastos;
