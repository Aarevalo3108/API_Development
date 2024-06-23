import { useState, useEffect } from "react";
import Base from "../BaseItems/Base";
import getData from "../BaseItems/getData";
import Initial from "../../../../constants/InitialFormData";
import ButtonsPanel from "../BaseItems/ButtonsPanel";
import PanelID from "../BaseItems/PanelID";
import NextPrev from "../BaseItems/NextPrev";
import SearchPanel from "../BaseItems/SearchPanel";
import DataEmployee from "./DataEmployee";
import CreationPanel from "../BaseItems/CreationPanel";

const Employees = () => {
  const Criteria = "employees";
  const [employees, setEmployees] = useState({});
  const [options, setOptions] = useState({});
  const [id, setId] = useState(0);
  const [panel, setPanel] = useState(0);
  const [update, setUpdate] = useState(false);
  const [erase, setErase] = useState(false);
  const [search, setSearch] = useState(false);
  const [pages, setPages] = useState(0);
  const [formData, setFormData] = useState(Initial.employee);

  useEffect(() => {
    getData(pages, options, update, formData, setFormData, setPages, setPanel, setEmployees, id, Criteria);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, options]);

  return (
    <>
      <Base title="Empleados" content="Aqui puedes hacer distintas operaciones con los empleados. Incluyendo: Buscar, Crear, Modificar y Eliminar."/>
      <h2 className="text-2xl tracking-wide font-bold text-center">Botones operacionales.</h2>
        <ButtonsPanel setOptions={setOptions} setPages={setPages} setPanel={setPanel} setUpdate={setUpdate} setErase={setErase} setSearch={setSearch} search={search} />
        <p className="text-center p-4 m-4 gap-6 shadow-lg rounded-lg">Para ver los resultados, presione uno de los botones.</p>
      <div className="flex flex-col p-4 m-4 gap-6 shadow-lg rounded-lg min-h-64">
        <h3 className="text-2xl tracking-wide font-bold text-center">Resultados: {employees.totalDocs && employees.totalDocs || 0}</h3>
          {!options.choice && <NextPrev item={employees} pages={pages} setPages={setPages}/>}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {!employees.docs && <p className="text-center sm:col-span-2 lg:col-span-3 xl:col-span-4">No hay resultados, prueba a presionar uno de los botones.</p>}

          {employees.docs && employees.docs.map((employee) => (
            <DataEmployee key={employee._id} {...employee} img={Math.floor(Math.random() * 53) + 1} />
          ))}
          {search &&
            <SearchPanel setOptions={setOptions} setSearch={setSearch} Criteria={Criteria} />
          }
          {panel == 1 &&
            <PanelID setId={setId} Criteria={Criteria} setPanel={setPanel} setOptions={setOptions} update={update} erase={erase} />
          }
          {panel == 2 &&
            <CreationPanel formData={formData} setFormData={setFormData} setOptions={setOptions} setPanel={setPanel} update={update} setUpdate={setUpdate} />
          }

        </div>
          {!options.choice && <NextPrev item={employees} pages={pages} setPages={setPages}/>}
      </div>
    </>
  );
};

export default Employees;