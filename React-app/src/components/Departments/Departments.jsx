

import { useState, useEffect } from "react";
import Base from "../BaseItems/Base";
import getData from "../BaseItems/getData";
import Initial from "../../constants/InitialFormData";
import SearchPanel from "../BaseItems/SearchPanel";
import PanelID from "../BaseItems/PanelID";
import NextPrev from "../BaseItems/NextPrev";
import Button from "../BaseItems/Button";
import DataDepartment from "./DataDepartment";
import CreationPanelDepartment from "./CreationPanelDepartment";

const Departments = () => {
  const Criteria = "departments";
  const [departments, setDepartments] = useState({});
  const [options, setOptions] = useState({});
  const [id, setId] = useState(0);
  const [panel, setPanel] = useState(0);
  const [update, setUpdate] = useState(false);
  const [erase, setErase] = useState(false);
  const [search, setSearch] = useState(false);
  const [pages, setPages] = useState(0);
  const [formData, setFormData] = useState(Initial.department);
  useEffect(() => {
    getData(pages, options, update, formData, setFormData, setPages, setPanel, setDepartments, id, Criteria);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, options]);
  return (
    <>
      <Base title="Departamentos" content="Aqui puedes hacer distintas operaciones con los departamentos. Incluyendo: Buscar, Crear, Modificar y Eliminar."></Base>
      <div className="flex flex-col justify-center p-4 m-4 gap-6 shadow-lg rounded-lg">
        <h2 className="text-2xl tracking-wide font-bold text-center">Botones operacionales.</h2>
        <div className="grid grid-cols-2 gap-4 p-4">
          <Button onClick={() => {setOptions({choice : 0});setPages(1)}} className="bg-orange-500 hover:bg-orange-600">Ver Todos</Button>
          <Button onClick={() => {setPanel(1);setUpdate(false);setErase(false)}} className="bg-lime-500 hover:bg-lime-600">Busqueda por ID</Button>
          <Button onClick={() => {setPanel(2);}} className="bg-emerald-500 hover:bg-emerald-600">Crear</Button>
          <Button onClick={() => {setPanel(1);setErase(true);setUpdate(false)}} className="bg-cyan-500 hover:bg-cyan-600">Eliminar</Button>
          <Button onClick={() => {setPanel(1);setUpdate(true);setErase(false)}} className="bg-blue-500 hover:bg-blue-600">Actualizar</Button>
          <Button onClick={() => setSearch(true)} className="bg-green-500 hover:bg-green-600">Buscar</Button>
        </div>
        <p>Para ver los resultados, presione uno de los botones.</p>
      </div>
      <div className="flex flex-col p-4 m-4 gap-6 shadow-lg rounded-lg min-h-64">
        <h3 className="text-2xl tracking-wide font-bold text-center">Resultados: {departments.totalDocs && departments.totalDocs || 0}</h3>
        <div className="grid grid-cols-1 gap-6">
          {!departments.docs && <p>No hay resultados, prueba a presionar uno de los botones.</p>}
          {!options.choice && <NextPrev item={departments} pages={pages} setPages={setPages}/>}

          {departments.docs && departments.docs.map((employee) => (
            <DataDepartment key={employee._id} {...employee} img={Math.floor(Math.random() * 50) + 1} />
          ))}
          {search &&
            <SearchPanel setOptions={setOptions} setSearch={setSearch} Criteria={Criteria} />
          }
          {panel == 1 &&
            <PanelID Criteria={Criteria} setId={setId} setPanel={setPanel} setOptions={setOptions} update={update} erase={erase} />
          }
          {panel == 2 &&
            <CreationPanelDepartment formData={formData} setFormData={setFormData} setOptions={setOptions} setPanel={setPanel} update={update} setUpdate={setUpdate} />
          }

          {!options.choice && <NextPrev item={departments} pages={pages} setPages={setPages}/>}
        </div>
      </div>
    </>
  );
};

export default Departments;