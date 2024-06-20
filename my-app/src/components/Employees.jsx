import { useState, useEffect } from "react";
import Base from "./Base";
import DataEmployee from "./DataEmployee";
import Button from "./Button";
import axios from "axios";
import BaseURL from "../constants/Api";

axios.defaults.baseURL = BaseURL;

const Employees = () => {
  const [employees, setEmployees] = useState({});
  const [options, setOptions] = useState({});
  const [pages, setPages] = useState(1);
  const getEmployees = (pages, options) => {
    if(options.choice === 0) {
      axios.get(`/employees?page=${pages}`).then((res) => {
        setEmployees(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
    if(options.choice === 1 && options.id) {
      axios.get(`/employees/${options.id}`).then((res) => {
        setEmployees(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  useEffect(() => {
    getEmployees(pages, options);
  }, [pages,options])
  return (
    <>
      <Base title="Empleados" content="Aqui puedes hacer distintas operaciones con los empleados. Incluyendo: Buscar, Crear, Modificar y Eliminar."/>
      <div className="flex flex-col justify-center p-4 m-4 gap-6 shadow-lg rounded-lg">
        <h2 className="text-2xl tracking-wide font-bold">Botones operacionales.</h2>
        <div className="grid grid-cols-2 gap-4 p-4">
          <Button onClick={() => setOptions({choice : 0})} className="bg-orange-500 hover:bg-orange-600">Ver Todos</Button>
          <Button onClick={() => setOptions({panel : true})} className="bg-lime-500 hover:bg-lime-600">Busqueda por ID</Button>
          <Button onClick={() => alert('Boton 3')} className="bg-emerald-500 hover:bg-emerald-600">Crear</Button>
          <Button onClick={() => alert('Boton 4')} className="bg-cyan-500 hover:bg-cyan-600">Eliminar</Button>
          <Button onClick={() => alert('Boton 5')} className="bg-blue-500 hover:bg-blue-600">Actualizar</Button>
          <Button onClick={() => alert('Boton 6')} className="bg-green-500 hover:bg-green-600">Buscar</Button>
        </div>
        <p>Para ver los resultados, presione uno de los botones.</p>
      </div>
      <div className="flex flex-col p-4 m-4 gap-6 shadow-lg rounded-lg min-h-64">
        <h3 className="text-2xl tracking-wide font-bold">Resultados: {employees.totalDocs && employees.totalDocs || 0}</h3>
        <div id="results" className="grid grid-cols-1 gap-6">
          {employees && employees.length === 0 && <p>No hay resultados, prueba a presionar uno de los botones.</p>}
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {employees.totalPages && <><p className="text-center"><span className="font-bold">Total Paginas:</span> {employees.totalPages}</p><p className="text-center"><span className="font-bold">Pagina:</span> {pages}</p></>}
            {employees.docs && pages == 1 && <Button className="w-24 bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages + 1)}} disabled={true}>Anterior</Button>}
            {pages > 1 && <Button className="w-24 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages - 1)}}>Anterior</Button>}
            {pages < employees.totalPages && <Button className="w-24 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages + 1)}}>Siguiente</Button>}
            {pages == employees.totalPages && <Button className="w-24 bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages - 1)}} disabled={true}>Siguiente</Button>}
          </div>
          {employees.docs && employees.docs.map((employee) => (
            <DataEmployee key={employee._id} {...employee} img={Math.floor(Math.random() * 53) + 1} />
          ))}
          {options.panel &&
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg p-4 grid grid-cols-2 gap-4">
              <h3 className="text-xl text-center tracking-wide font-bold col-span-2">Ingrese ID.</h3>
              <input type="text" className="col-span-2 w-full border border-gray-300 rounded p-2" onChange={(e) => setOptions({id : e.target.value, panel : true})} />
              <Button className="w-24 bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOptions({panel: false})}>
                Cancelar
              </Button>
              <Button className="w-24 bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOptions({choice : 1, id : options.id})}>
                Aceptar
              </Button>
            </div>}
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {employees.docs && pages == 1 && <Button className="w-24 bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages + 1)}} disabled={true}>Anterior</Button>}
            {pages > 1 && <Button className="w-24 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages - 1)}}>Anterior</Button>}
            {pages < employees.totalPages && <Button className="w-24 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages + 1)}}>Siguiente</Button>}
            {pages == employees.totalPages && <Button className="w-24 bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages - 1)}} disabled={true}>Siguiente</Button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;