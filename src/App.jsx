import { useState, useEffect } from "react";
import NuevoPresupuesto from "./components/NuevoPresupuesto";
import ControlPresupuesto from "./components/ControlPresupuesto";
import nuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  //States
  const [presupuesto, setPresupuesto] = useState("");
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [editando, setEditando] = useState({});

  const [modal, setModal] = useState(false);

  //Funciones
  const handleDelete = (id) => {
    const newArr = gastos.filter((gasto) => gasto.id !== id);
    setGastos(newArr);
  };

  const handleEdit = (gasto) => {
    setEditando(gasto);
    setModal(true);
  };
  return (
    <div className="App h-screen relative p-0.5">
      <div className="upper-layout  absolute top-0 left-0 -z-40 h-[25rem] w-full bg-blue-500"></div>
      <h1 className="text-center text-4xl text-white uppercase font-black my-10">
        Planificador de gastos
      </h1>

      {presupuesto ? (
        <>
          <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} />

          {/* MODAL */}
          <div
            className="add-gasto fixed w-12 h-12 right-10 bottom-10 cursor-pointer"
            onClick={() => setModal(true)}
          >
            <img src={nuevoGasto} alt="" />
          </div>

          {modal && (
            <Modal
              editando={editando}
              setEditando={setEditando}
              gastos={gastos}
              setGastos={setGastos}
              setModal={setModal}
            />
          )}

          <ListadoGastos
            gastos={gastos}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      ) : (
        <>
          <NuevoPresupuesto
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
          />
        </>
      )}
    </div>
  );
}

export default App;
