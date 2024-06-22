import PropTypes from 'prop-types';
import Button from "./Button";

const PanelID = ({setId, Criteria, setPanel, setOptions, update, erase}) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg p-4 grid grid-cols-2 gap-4 w-64 opacity-70 focus:opacity-100 hover:opacity-100 transition ease-in-out duration-300">
    <h3 className="text-xl text-center tracking-wide font-bold col-span-2">Ingrese ID del {Criteria === 'employees' ? 'empleado' : 'departamento'}</h3>
    <input type="text" className="col-span-2 w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500 rounded p-2 mb-4" onChange={(e) => setId(e.target.value)} />
    <Button className="w-24 bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPanel(0)}>
      Cancelar
    </Button>
    {!update &&
    <Button className="w-24 bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => {erase ? setOptions({choice : 3}) : setOptions({choice : 1});setPanel(0);}}>
      Aceptar
    </Button>
    }
    {update &&
    <Button className="w-24 bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setOptions({choice : 1});setPanel(0);}}>
      Buscar
    </Button>}
  </div>
  )
}

PanelID.propTypes = {
  setId: PropTypes.func,
  Criteria: PropTypes.string,
  setPanel: PropTypes.func,
  setOptions: PropTypes.func,
  update: PropTypes.bool,
  erase: PropTypes.bool
}


export default PanelID