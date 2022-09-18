import { useState } from "react";
import NuevoPresupuesto from "./components/NuevoPresupuesto";

function App() {
  return (
    <div className="App h-screen relative p-0.5">
      <div className="upper-layout  absolute top-0 left-0 -z-40 h-[25rem] w-full bg-blue-500"></div>
      <h1 className="text-center text-4xl text-white uppercase font-black my-10">
        Planificador de gastos
      </h1>

      <NuevoPresupuesto />
    </div>
  );
}

export default App;
