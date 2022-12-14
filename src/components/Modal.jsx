import React, { useEffect, useState } from "react";
import { generateId } from "../helpers";
import Message from "./Message";
import cerrarIcon from "../img/cerrar.svg";

const Modal = ({ gastos, setGastos, setModal, setEditando, editando }) => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [errorGasto, setErrorGasto] = useState(false);

  useEffect(() => {
    if (Object.keys(editando).length > 0) {
      setCantidad(editando.cantidad);
      setNombre(editando.nombre);
      setCategoria(editando.categoria);
    }
  }, [editando]);

  //Funciones
  const handleNuevoGasto = (e) => {
    e.preventDefault();

    if ([nombre.trim(), categoria.trim()].includes("") || cantidad < 0) {
      setErrorGasto(true);
      setTimeout(() => {
        setErrorGasto(false);
      }, 2000);
      return;
    }

    //Create Object
    const gastoObj = {
      nombre,
      categoria,
      cantidad,
      fecha: new Date(),
    };

    //Editing Mode
    if (editando.id) {
      gastoObj.id = editando.id;
      const newArr = gastos.map((gasto) =>
        gasto.id == editando.id ? gastoObj : gasto
      );
      setGastos(newArr);
    } else {
      //Crear un id para el gasto
      const id = generateId();
      gastoObj.id = id;
      //Añadir al array de gastos
      setGastos([...gastos, gastoObj]);
    }

    //Close Modal and set editing mode to false
    setModal(false);
    setEditando({});

    //Volver los state a lo normal
    setCantidad("");
    setNombre("");
    setCategoria("");
  };

  return (
    <div className="modal  fixed top-0 left-0 h-screen w-screen z-10 bg-black/90 text-white overflow- ">
      <img
        src={cerrarIcon}
        className="h-8 w-8  fixed top-8 right-8 cursor-pointer"
        onClick={() => {
          setModal(false);
          setCantidad("");
          setNombre("");
          setCategoria("");
        }}
        alt=""
      />
      <form action="submit" className="container mx-auto w-96 mt-20">
        {errorGasto && <Message message="Todos los campos son obligatorios" />}
        <h2 className="uppercase text-center text-4xl  border-b-2 border-blue-600 p-3 my-5">
          Nuevo gasto
        </h2>

        <label className="my-4 block text-3xl " htmlFor="nombre">
          Nombre Gasto
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Añade el nombre del gasto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="rounded-md my-5 block container py-2 text-slate-700 px-4"
        />

        <label className="my-4 block text-3xl " htmlFor="cantidad">
          Cantidad
        </label>
        <input
          id="cantidad"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          placeholder="Añade la cantidad. Ej: 300"
          className="rounded-md my-5 block container py-2 text-slate-700 px-4"
        />

        <label className="my-4 block text-3xl " htmlFor="categoria">
          Categoría
        </label>
        <select
          className="rounded-md my-5 block container py-2 text-slate-700 px-4"
          name="categoria"
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">--Seleccione--</option>
          <option value="casa">Casa</option>
          <option value="comida">Comida</option>
          <option value="gastos">Gastos</option>
          <option value="salud">Salud</option>
          <option value="ocio">Ocio</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="ahorro">Ahorro</option>
        </select>

        <button
          className="container bg-blue-600  uppercase  py-2 font-black"
          onClick={handleNuevoGasto}
        >
          {" "}
          Añadir gasto
        </button>
      </form>
    </div>
  );
};

export default Modal;
