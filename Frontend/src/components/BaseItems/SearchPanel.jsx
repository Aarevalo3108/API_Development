import PropTypes from 'prop-types';
import Button from "./Button";
import { useState, useEffect } from "react";
import namesTranstale from './namesTranstale';

const SearchPanel = ({setOptions, setSearch, Criteria}) => {
  let Keys = [];
  if(Criteria === "departments") {
    Keys = ["name", "description"];
  }
  else{
    Keys = ["name", "lastname", "office", "email", "number", "salary", "street", "city", "country", "postalCode", "INdate", "OUTdate"];
  }
  const [filter, setFilter] = useState({});
  const [filterKeys, setFilterKeys] = useState([]);
  const [filterPanel, setFilterPanel] = useState(false);

  useEffect(() => {
    if(filterKeys.length > 0) {
      setOptions({choice: 5, filters: Object.entries(filter).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&")});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="flex flex-col items-center gap-2 fixed top-8 sm:right-8 lg:top-16 place-content-end z-50 bg-white rounded-lg p-4 w-64 opacity-70 focus:opacity-100 hover:opacity-100 transition ease-in-out duration-300">
      <div className='flex flex-col items-center gap-2'>
        <h4 className="text-center text-lg font-bold">Parametros de busqueda</h4>
        <Button className="w-fit bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded" onClick={() => setFilterPanel(!filterPanel)}>{filterPanel ? "Ocultar filtros" : "Mostrar filtros"}</Button>
        {filterPanel && (
        <div className='flex flex-col items-center gap-2'>
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="filter" className="text-lg font-bold">Filtro por</label>
              <select
                name="filter"
                id="filter"
                className="w-full h-10 bg-slate-100 rounded-lg p-2"
                onChange={(e) => e.target.value && !filterKeys.includes(e.target.value) && setFilterKeys([...filterKeys, e.target.value])}
              >
                <option value="">Seleccionar</option>
                {Keys.map((key, index) => (
                  <option key={index} value={key}>
                    {namesTranstale(key)}
                  </option>
                ))}
              </select>
            </div>
          {filterKeys.map((key, index) => (
            <div key={index} className="flex gap-4 items-center">
              <label htmlFor={key} className="text-lg font-bold">{namesTranstale(key)}:</label>
              <input
                type="text"
                name={key}
                id={key}
                className="w-full h-8 border-b-4 border-gray-300 rounded  focus:outline-none focus:border-blue-500"
                onChange={(e) => setFilter({ ...filter, [key]: e.target.value })}
              />
              <Button
                className="w-4 h-6 px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-full flex justify-center items-center"
                onClick={() => setFilterKeys(filterKeys.filter((k) => k != key))}
              >
                X
              </Button>
            </div>
          ))}
        </div>
        )}
      </div>
      {filterPanel &&
      <div className='flex gap-4'>
        <Button className="w-24 h-8 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => {setFilterKeys([]); setFilter({});}}>Limpiar</Button>
        <Button className="w-24 h-8 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setSearch(false)}>Cancelar</Button>
      </div>
      }

    </div>
  )
  
}

SearchPanel.propTypes = {
  setOptions: PropTypes.func,
  setSearch: PropTypes.func,
  Criteria: PropTypes.string
}


export default SearchPanel