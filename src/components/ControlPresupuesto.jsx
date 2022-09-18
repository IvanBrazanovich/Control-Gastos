import React from "react";

const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <>
      <div className="new-budget  bg-white container mx-auto w-3/5 rounded-lg shadow-lg p-14 grid grid-cols-2 gap-6">
        <div className="percentages"></div>
        <div className="control-presupuesto">
          <button className="bg-red-500 uppercase text-white w-full py-2 rounded-md font-black">
            Resetear app
          </button>

          <p className="my-5 text-2xl">
            <span className="text-blue-500 font-black">Presupuesto</span>: ${" "}
            {presupuesto}
          </p>
          <p className="my-5 text-2xl">
            <span className="text-blue-500 font-black">Disponible</span>: $200
          </p>
          <p className="my-5 text-2xl">
            <span className="text-blue-500 font-black">Gastado</span>: $200
          </p>
        </div>
      </div>
    </>
  );
};

export default ControlPresupuesto;
