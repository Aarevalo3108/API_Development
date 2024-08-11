

import { useState, useEffect } from "react";
import Base from "../BaseItems/Base";
import getData from "../BaseItems/getData";
import Initial from "../../../constants/InitialFormData";
import SearchPanel from "../BaseItems/SearchPanel";
import PanelID from "../BaseItems/PanelID";
import NextPrev from "../BaseItems/NextPrev";
import ButtonsPanel from "../BaseItems/ButtonsPanel";
import CreationPanel from "../BaseItems/CreationPanel";
import DataDepartment from "./DataDepartment";

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
        <h2 className="text-2xl tracking-wide font-bold text-center">Botones operacionales.</h2>
        <ButtonsPanel setOptions={setOptions} setPages={setPages} setPanel={setPanel} setUpdate={setUpdate} setErase={setErase} setSearch={setSearch} search={search} />
        <p className="text-center p-4 m-4 gap-6 shadow-lg rounded-lg">Para ver los resultados, presione uno de los botones.</p>
      <div className="flex flex-col p-4 m-4 gap-6 shadow-lg rounded-lg min-h-64">
        <h3 className="text-2xl tracking-wide font-bold text-center">Resultados: {departments.totalDocs && departments.totalDocs || 0}</h3>
          {!options.choice && <NextPrev item={departments} pages={pages} setPages={setPages}/>}
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {!departments.docs && <p className="text-center sm:col-span-2 lg:col-span-3 xl:col-span-4">No hay resultados, prueba a presionar uno de los botones.</p>}

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
            <CreationPanel formData={formData} setFormData={setFormData} setOptions={setOptions} setPanel={setPanel} update={update} setUpdate={setUpdate} Criteria={Criteria} />
          }

        </div>
          {!options.choice && <NextPrev item={departments} pages={pages} setPages={setPages}/>}
      </div>
    </>
  );
};

export default Departments;