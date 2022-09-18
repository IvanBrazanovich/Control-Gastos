import React from "react";

const NuevoPresupuesto = () => {
  return (
    <>
      <form className="new-budget h-80 bg-white container mx-auto w-3/5 rounded-lg shadow-lg p-1">
        <h2 className="text-center text-3xl mb-5 mt-[5rem] text-blue-500">
          Definir Presupuesto
        </h2>
        <input
          className="container w-3/4 mx-auto block bg-slate-100 text-center py-3 text-2xl focus:outline-none"
          type="number"
          value="0"
        />

        <input
          type="submit"
          className="container w-3/4 mx-auto block  text-white bg-blue-600  mt-5 text-center py-2 uppercase font-black cursor-pointer text-xl focus:outline-none"
          value="Añadir"
        />
      </form>
    </>
  );
};

export default NuevoPresupuesto;
