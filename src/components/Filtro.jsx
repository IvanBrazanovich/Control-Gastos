import React from "react";

const Filtro = ({ setFilter }) => {
  return (
    <div className="filtro">
      <form
        action=""
        className="bg-white container mx-auto my-5 w-3/5 rounded-lg shadow-lg p-14 grid grid-cols-4 items-center gap-6"
      >
        <label htmlFor="filtro" className="text-2xl text-gray-500 font-black">
          Filtrar Gastos
        </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-100 text-center  col-span-3 py-3 rounded-md"
          name="filtro"
          id="filtro"
        >
          <option value="">--Todas las categorías--</option>
          <option value="casa">Casa</option>
          <option value="comida">Comida</option>
          <option value="gastos">Gastos</option>
          <option value="salud">Salud</option>
          <option value="ocio">Ocio</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="ahorro">Ahorro</option>
        </select>
      </form>
    </div>
  );
};

export default Filtro;
