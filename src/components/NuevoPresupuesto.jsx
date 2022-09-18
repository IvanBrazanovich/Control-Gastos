import React, { useState } from "react";
import Message from "./Message";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  // States
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (presupuesto < 0) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="new-budget  bg-white container mx-auto w-3/5 rounded-lg shadow-lg p-1"
      >
        <h2 className="text-center text-3xl mb-5 mt-[5rem] text-blue-500">
          Definir Presupuesto
        </h2>
        <input
          className="container w-3/4 mx-auto block bg-slate-100 text-center py-3 text-2xl focus:outline-none"
          type="number"
          value={presupuesto}
          onChange={(e) => setPresupuesto(Number(e.target.value))}
        />

        <input
          type="submit"
          className="container w-3/4 mx-auto block  text-white bg-blue-600  my-10 text-center py-2 uppercase font-black cursor-pointer text-xl focus:outline-none"
          value="Añadir"
        />
        {error && <Message message="No es un presupuesto válido " />}
      </form>
    </>
  );
};

export default NuevoPresupuesto;
